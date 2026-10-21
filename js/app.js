/**
 * CEFR B1-B2 English Exam Preparation Web App
 * Main Controller & State Management
 */

(function () {
  'use strict';

  // ================= State Management =================
  const state = {
    activeTab: 'dashboard',
    theme: localStorage.getItem('cefr_theme') || 'light',
    
    // Vocab State
    vocab: {
      search: '',
      unitFilter: 'all',
      posFilter: 'all',
      typeFilter: 'all', // all, reading, saved, unlearned
      sort: 'az',
      viewMode: 'cards', // 'cards' | 'flashcards'
      flashcardIndex: 0,
      flashcardFlipped: false,
      learnedSet: new Set(JSON.parse(localStorage.getItem('cefr_learned_vocab') || '[]')),
      savedSet: new Set(JSON.parse(localStorage.getItem('cefr_saved_vocab') || '[]'))
    },

    // Grammar State
    grammar: {
      openTopics: new Set(['g-001']),
      quizAnswers: {} // { qId: selectedOptionIndex }
    },

    // Reading State
    reading: {
      activePassageId: 'read-u4',
      showThai: false,
      selectedWord: null,
      openAnalysis: new Set(['mainIdea', 'keyDetails'])
    },

    // Cheat Sheet State
    cheatSheet: {
      activeSection: 'vocab', // 'vocab' | 'grammar' | 'reading'
      search: ''
    },

    // Exam State
    exam: {
      mode: 'practice', // 'practice' | 'exam'
      activeUnitFilter: 'all', // 'all' | 4 | 5 | 6
      activeTopicId: 'all', // 'all' or specific topic ID like 'u4-vocab-benefits'
      currentIndex: 0,
      userAnswers: {}, // { questionId: selectedOptionIndex }
      flaggedSet: new Set(),
      isSubmitted: false,
      timerSeconds: 0,
      timerRunning: false,
      timerInterval: null,
      filterSection: 'all', // 'all' | 'wrong'
      history: JSON.parse(localStorage.getItem('cefr_exam_history') || '[]')
    }
  };

  // ================= Utility Functions =================
  function showToast(message, icon = '✓') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color: var(--brand-primary); font-weight: 800;">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  function formatMarkdown(text) {
    if (typeof text !== 'string') return text;
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  }

  function saveStorage() {
    localStorage.setItem('cefr_learned_vocab', JSON.stringify(Array.from(state.vocab.learnedSet)));
    localStorage.setItem('cefr_saved_vocab', JSON.stringify(Array.from(state.vocab.savedSet)));
    localStorage.setItem('cefr_exam_history', JSON.stringify(state.exam.history));
  }

  // ================= Theme Initialization =================
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    localStorage.setItem('cefr_theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` 
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  // ================= Navigation Tabs =================
  function switchTab(tabId) {
    state.activeTab = tabId;
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    const targetPane = document.getElementById(`tab-${tabId}`);
    if (targetPane) targetPane.classList.add('active');

    // Desktop nav
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Mobile nav
    document.querySelectorAll('.mobile-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render corresponding views
    try {
      if (tabId === 'dashboard') renderDashboard();
      if (tabId === 'vocab') renderVocabExplorer();
      if (tabId === 'grammar') renderGrammarGuide();
      if (tabId === 'reading') renderReadingPractice();
      if (tabId === 'cheatsheet') renderCheatSheet();
      if (tabId === 'exam') renderExam();
      if (tabId === 'progress') renderProgressReview();
    } catch (err) {
      console.error(`Error rendering tab ${tabId}:`, err);
    }
  }

  // ================= 1. DASHBOARD VIEW =================
  function renderDashboard() {
    const totalVocab = VOCAB_DATA.length;
    const learnedCount = state.vocab.learnedSet.size;
    const vocabPercent = Math.round((learnedCount / totalVocab) * 100);

    const totalGrammar = GRAMMAR_DATA.length;
    const totalReading = READING_DATA.length;
    const totalQuestions = EXAM_DATA.length;

    // Latest exam stats
    let latestExamText = "ยังไม่ได้ทำข้อสอบ";
    let latestExamScore = 0;
    if (state.exam.history.length > 0) {
      const latest = state.exam.history[state.exam.history.length - 1];
      latestExamScore = Math.round((latest.score / latest.total) * 100);
      latestExamText = `ล่าสุด: ${latest.score}/${latest.total} (${latestExamScore}%)`;
    }

    const container = document.getElementById('tab-dashboard');
    if (!container) return;

    container.innerHTML = `
      <div class="page-hero">
        <div class="hero-content">
          <h2>CEFR B1–B2 Exam Preparation</h2>
          <p>พื้นที่เตรียมสอบภาษาอังกฤษระดับกลาง B1–B2 ครอบคลุมคลังคำศัพท์ ไวยากรณ์ และเทคนิคการอ่าน จากบทเรียน Unit 4, 5 และ 6 อย่างครบถ้วน แม่นยำ และพร้อมสอบจริง</p>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" id="btnContinueLearning">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Continue Learning
          </button>
        </div>
      </div>

      <!-- Real Count Statistics Cards -->
      <div class="stats-grid">
        <div class="stat-card stat-vocab" onclick="window.app.switchTab('vocab')">
          <div class="stat-icon">📚</div>
          <div class="stat-info" style="width: 100%;">
            <h3>Vocabulary</h3>
            <div class="stat-number">${totalVocab} <span style="font-size: 1rem; font-weight: 500; color: var(--text-muted);">คำ</span></div>
            <div class="stat-subtext">เรียนรู้แล้ว ${learnedCount}/${totalVocab} คำ (${vocabPercent}%)</div>
            <div class="stat-progress-bar">
              <div class="stat-progress-fill fill-vocab" style="width: ${vocabPercent}%"></div>
            </div>
          </div>
        </div>

        <div class="stat-card stat-grammar" onclick="window.app.switchTab('grammar')">
          <div class="stat-icon">⚖️</div>
          <div class="stat-info" style="width: 100%;">
            <h3>Grammar Guide</h3>
            <div class="stat-number">${totalGrammar} <span style="font-size: 1rem; font-weight: 500; color: var(--text-muted);">หัวข้อ</span></div>
            <div class="stat-subtext">กฎ โครงสร้าง ตัวอย่าง และ Mini Quiz</div>
            <div class="stat-progress-bar">
              <div class="stat-progress-fill fill-grammar" style="width: 100%"></div>
            </div>
          </div>
        </div>

        <div class="stat-card stat-reading" onclick="window.app.switchTab('reading')">
          <div class="stat-icon">📖</div>
          <div class="stat-info" style="width: 100%;">
            <h3>Reading Passages</h3>
            <div class="stat-number">${totalReading} <span style="font-size: 1rem; font-weight: 500; color: var(--text-muted);">บทอ่าน</span></div>
            <div class="stat-subtext">บทอ่านฉบับเต็ม พร้อมคำศัพท์และวิเคราะห์</div>
            <div class="stat-progress-bar">
              <div class="stat-progress-fill fill-reading" style="width: 100%"></div>
            </div>
          </div>
        </div>

        <div class="stat-card stat-exam" onclick="window.app.switchTab('exam')">
          <div class="stat-icon">🎯</div>
          <div class="stat-info" style="width: 100%;">
            <h3>Practice Exam</h3>
            <div class="stat-number">${totalQuestions} <span style="font-size: 1rem; font-weight: 500; color: var(--text-muted);">ข้อสอบ</span></div>
            <div class="stat-subtext">${latestExamText}</div>
            <div class="stat-progress-bar">
              <div class="stat-progress-fill fill-exam" style="width: ${latestExamScore}%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Modules & Quick Review Panel -->
      <div class="dashboard-grid">
        <div>
          <h3 style="margin-bottom: 1rem; font-size: 1.3rem;">หมวดเนื้อหาการเตรียมตัว (Study Modules)</h3>
          <div class="module-cards-grid">
            <div class="module-card" onclick="window.app.switchTab('vocab')">
              <div>
                <div class="module-header">
                  <div class="module-icon-box" style="background: var(--vocab-bg); color: var(--vocab-accent);">🔤</div>
                  <span class="badge badge-vocab">Unit 4, 5, 6</span>
                </div>
                <h4>Vocabulary Explorer</h4>
                <p>รวบรวมคำศัพท์จากบทเรียนและบทอ่าน พร้อมความหมาย บริบทตัวอย่าง คำพ้อง-ตรงข้าม และระบบ Flashcards</p>
              </div>
              <div class="module-footer">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--vocab-accent);">เปิดทบทวนคำศัพท์ →</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${totalVocab} คำ</span>
              </div>
            </div>

            <div class="module-card" onclick="window.app.switchTab('grammar')">
              <div>
                <div class="module-header">
                  <div class="module-icon-box" style="background: var(--grammar-bg); color: var(--grammar-accent);">📐</div>
                  <span class="badge badge-grammar">5 หัวข้อสำคัญ</span>
                </div>
                <h4>Grammar Guide</h4>
                <p>สรุป Phrasal Verbs, Future Forms, So vs Such, Discourse Markers และ Reported Speech พร้อมตารางเปรียบเทียบ</p>
              </div>
              <div class="module-footer">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--grammar-accent);">อ่านสรุปไวยากรณ์ →</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">พร้อม Mini Quiz</span>
              </div>
            </div>

            <div class="module-card" onclick="window.app.switchTab('reading')">
              <div>
                <div class="module-header">
                  <div class="module-icon-box" style="background: var(--reading-bg); color: var(--reading-accent);">📑</div>
                  <span class="badge badge-reading">3 บทอ่านจริง</span>
                </div>
                <h4>Reading Practice</h4>
                <p>บทอ่าน Job Satisfaction, Dealing with Nervousness, และ Cross-Cultural Business พร้อมกดดูคำศัพท์และวิเคราะห์ข้อสอบ</p>
              </div>
              <div class="module-footer">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--reading-accent);">ฝึกทำ Reading →</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">เทคนิคการหาคำตอบ</span>
              </div>
            </div>

            <div class="module-card" onclick="window.app.switchTab('exam')">
              <div>
                <div class="module-header">
                  <div class="module-icon-box" style="background: var(--exam-bg); color: var(--exam-accent);">⚡</div>
                  <span class="badge badge-exam">17 หัวข้อ / 98 ข้อ</span>
                </div>
                <h4>Practice Exam Center</h4>
                <p>ครบทุก Exercise (Ex 1–11) จาก Unit 4, 5, 6 เลือกฝึกเจาะจงรายหัวข้อ (เช่น Phrasal Verbs, So/Such, Reported Speech) หรือสอบรวมทุกบท</p>
              </div>
              <div class="module-footer">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--exam-accent);">เลือกฝึกทำรายหัวข้อ →</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">มีโหมด Practice & Exam</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Review Panel -->
        <div class="quick-review-panel">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4 style="font-size: 1.15rem;">⚡ Quick Review</h4>
            <button class="btn btn-sm btn-outline" onclick="window.app.switchTab('cheatsheet')">ดูทั้งหมด</button>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">คีย์เวิร์ดที่มักออกสอบบ่อยที่สุด</p>
          <div class="quick-review-list">
            <div class="quick-review-item" onclick="window.app.openQuickReview('look forward to')">
              <span class="quick-review-keyword">look forward to + V-ing</span>
              <span class="quick-review-desc">Non-separable ห้ามแยก และต้องตามด้วย Gerund เสมอ</span>
            </div>
            <div class="quick-review-item" onclick="window.app.openQuickReview('call it off')">
              <span class="quick-review-keyword">call off (Separable)</span>
              <span class="quick-review-desc">ถ้ากรรมเป็น Pronoun (it/them) ต้องอยู่คั่นกลาง: called it off</span>
            </div>
            <div class="quick-review-item" onclick="window.app.openQuickReview('such vs so')">
              <span class="quick-review-keyword">so fast vs. such an idea</span>
              <span class="quick-review-desc">so + adj/adv หรือ many/much | such a/an + adj + noun</span>
            </div>
            <div class="quick-review-item" onclick="window.app.openQuickReview('reported questions')">
              <span class="quick-review-keyword">Reported: asked whether she could</span>
              <span class="quick-review-desc">ใช้ if/whether + ประธาน + กริยา (ห้ามสลับกริยาช่วยขึ้นหน้า)</span>
            </div>
            <div class="quick-review-item" onclick="window.app.openQuickReview('discourse markers')">
              <span class="quick-review-keyword">Therefore, vs. However,</span>
              <span class="quick-review-desc">Therefore บอกผลลัพธ์ (Result) | However บอกความขัดแย้ง (Contrast)</span>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btnContinueLearning').onclick = () => {
      // Pick next logical step: if unlearned vocab exists, go to vocab; else exam
      if (learnedCount < totalVocab) {
        switchTab('vocab');
      } else {
        switchTab('exam');
      }
    };
  }

  // ================= 2. VOCABULARY EXPLORER =================
  function getFilteredVocab() {
    return VOCAB_DATA.filter(item => {
      // Search
      if (state.vocab.search) {
        const q = state.vocab.search.toLowerCase();
        const matchWord = item.word.toLowerCase().includes(q);
        const matchThai = item.thaiMeaning.toLowerCase().includes(q);
        const matchDef = item.definition && item.definition.toLowerCase().includes(q);
        const matchClue = item.keywordClue && item.keywordClue.toLowerCase().includes(q);
        if (!matchWord && !matchThai && !matchDef && !matchClue) return false;
      }
      // Unit filter
      if (state.vocab.unitFilter !== 'all' && item.unit !== parseInt(state.vocab.unitFilter)) {
        return false;
      }
      // POS filter
      if (state.vocab.posFilter !== 'all') {
        if (!item.pos.toLowerCase().includes(state.vocab.posFilter.toLowerCase())) {
          return false;
        }
      }
      // Type / Category filter
      if (state.vocab.typeFilter === 'reading' && !item.isReading) return false;
      if (state.vocab.typeFilter === 'saved' && !state.vocab.savedSet.has(item.id)) return false;
      if (state.vocab.typeFilter === 'unlearned' && state.vocab.learnedSet.has(item.id)) return false;

      return true;
    }).sort((a, b) => {
      if (state.vocab.sort === 'az') return a.word.localeCompare(b.word);
      if (state.vocab.sort === 'za') return b.word.localeCompare(a.word);
      if (state.vocab.sort === 'unit') return a.unit - b.unit;
      return 0;
    });
  }

  function renderVocabExplorer() {
    const container = document.getElementById('tab-vocab');
    if (!container) return;

    const filteredWords = getFilteredVocab();
    const isFlashcard = state.vocab.viewMode === 'flashcards';

    container.innerHTML = `
      <div class="page-hero" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.05) 100%);">
        <div class="hero-content">
          <h2>Vocabulary Explorer</h2>
          <p>ค้นหา กรอง และจดจำคำศัพท์สำคัญทั้งจากเนื้อหาหลักและบทอ่านใน Unit 4, 5 และ 6 พร้อมระบบ Flashcards และการทำเครื่องหมายคำที่ต้องทบทวน</p>
        </div>
        <div class="mode-toggle-group">
          <button class="mode-btn ${!isFlashcard ? 'active' : ''}" id="btnViewCards">
            🗂️ การ์ดคำศัพท์ (${filteredWords.length})
          </button>
          <button class="mode-btn ${isFlashcard ? 'active' : ''}" id="btnViewFlashcards">
            🃏 Flashcards
          </button>
        </div>
      </div>

      <!-- Controls & Filters -->
      <div class="vocab-controls">
        <div class="search-bar-wrap">
          <svg class="search-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="search-input" id="vocabSearchInput" placeholder="ค้นหาคำศัพท์ คำแปลภาษาไทย หรือ Keyword บริบท..." value="${state.vocab.search}">
        </div>

        <div class="filter-bar">
          <div class="filter-chips">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); align-self: center; margin-right: 0.25rem;">Unit:</span>
            <button class="filter-chip ${state.vocab.unitFilter === 'all' ? 'active' : ''}" data-unit="all">ทั้งหมด</button>
            <button class="filter-chip ${state.vocab.unitFilter === '4' ? 'active' : ''}" data-unit="4">Unit 4: Workplace</button>
            <button class="filter-chip ${state.vocab.unitFilter === '5' ? 'active' : ''}" data-unit="5">Unit 5: Presentation</button>
            <button class="filter-chip ${state.vocab.unitFilter === '6' ? 'active' : ''}" data-unit="6">Unit 6: Multicultural</button>
          </div>

          <div class="filter-chips">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); align-self: center; margin-right: 0.25rem;">หมวด:</span>
            <button class="filter-chip ${state.vocab.typeFilter === 'all' ? 'active' : ''}" data-type="all">ทั้งหมด</button>
            <button class="filter-chip ${state.vocab.typeFilter === 'reading' ? 'active' : ''}" data-type="reading">📖 จากบทอ่าน Reading</button>
            <button class="filter-chip ${state.vocab.typeFilter === 'saved' ? 'active' : ''}" data-type="saved">⭐ บันทึกไว้ (${state.vocab.savedSet.size})</button>
            <button class="filter-chip ${state.vocab.typeFilter === 'unlearned' ? 'active' : ''}" data-type="unlearned">⏳ ยังไม่จำ</button>
          </div>
        </div>
      </div>

      <!-- Content Area: Flashcard Mode vs Card Grid Mode -->
      <div id="vocabContentArea"></div>
    `;

    // Hook search & filter events
    const searchInput = document.getElementById('vocabSearchInput');
    searchInput.oninput = (e) => {
      state.vocab.search = e.target.value;
      renderVocabContent();
    };

    container.querySelectorAll('.filter-chip[data-unit]').forEach(chip => {
      chip.onclick = () => {
        state.vocab.unitFilter = chip.dataset.unit;
        renderVocabExplorer();
      };
    });

    container.querySelectorAll('.filter-chip[data-type]').forEach(chip => {
      chip.onclick = () => {
        state.vocab.typeFilter = chip.dataset.type;
        renderVocabExplorer();
      };
    });

    document.getElementById('btnViewCards').onclick = () => {
      state.vocab.viewMode = 'cards';
      renderVocabExplorer();
    };
    document.getElementById('btnViewFlashcards').onclick = () => {
      state.vocab.viewMode = 'flashcards';
      state.vocab.flashcardIndex = 0;
      state.vocab.flashcardFlipped = false;
      renderVocabExplorer();
    };

    renderVocabContent();
  }

  function renderVocabContent() {
    const area = document.getElementById('vocabContentArea');
    if (!area) return;

    const filteredWords = getFilteredVocab();
    if (filteredWords.length === 0) {
      area.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3>ไม่พบคำศัพท์ที่ตรงกับเงื่อนไขการค้นหา</h3>
          <p style="margin-top: 0.5rem; font-size: 0.9rem;">ลองเปลี่ยนคำค้นหาหรือปลดการกรอง</p>
        </div>
      `;
      return;
    }

    if (state.vocab.viewMode === 'flashcards') {
      renderFlashcardView(area, filteredWords);
    } else {
      renderCardGridView(area, filteredWords);
    }
  }

  function renderFlashcardView(area, words) {
    if (state.vocab.flashcardIndex >= words.length) {
      state.vocab.flashcardIndex = 0;
    }
    const current = words[state.vocab.flashcardIndex];
    const isLearned = state.vocab.learnedSet.has(current.id);
    const isSaved = state.vocab.savedSet.has(current.id);

    area.innerHTML = `
      <div class="flashcard-container">
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">คำที่ ${state.vocab.flashcardIndex + 1} จาก ${words.length}</span>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-sm ${isSaved ? 'btn-primary' : 'btn-outline'}" id="fcBtnSave">
              ${isSaved ? '★ บันทึกแล้ว' : '☆ บันทึกทบทวน'}
            </button>
            <button class="btn btn-sm ${isLearned ? 'btn-success' : 'btn-outline'}" id="fcBtnLearn">
              ${isLearned ? '✓ จำได้แล้ว' : 'Mark as Learned'}
            </button>
          </div>
        </div>

        <div class="flashcard ${state.vocab.flashcardFlipped ? 'flipped' : ''}" id="flashcardElement">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <span class="badge badge-unit">Unit ${current.unit}</span>
                <span class="badge ${current.isReading ? 'badge-reading' : 'badge-vocab'}">${current.sourceTopic}</span>
              </div>
              <div class="flashcard-word">${current.word}</div>
              <div class="flashcard-pos">${current.pos}</div>
            </div>
            <div>
              <div class="flashcard-clue">💡 Context Clue: ${current.keywordClue}</div>
              <div style="text-align: center; margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-muted);">
                (คลิกการ์ดเพื่อพลิกดูคำแปลและประโยคตัวอย่าง)
              </div>
            </div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-weight: 700; font-size: 1.1rem; color: var(--vocab-accent);">${current.word}</span>
                <span class="badge badge-unit">${current.pos}</span>
              </div>
              <div class="flashcard-meaning">${current.thaiMeaning}</div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">${current.definition}</p>
              
              <div class="flashcard-example">
                <div style="font-weight: 600; color: var(--text-main); margin-bottom: 0.25rem;">${current.exampleSentence}</div>
                <div style="color: var(--text-muted); font-size: 0.85rem;">${current.exampleThai}</div>
              </div>
            </div>

            <div>
              ${current.synonyms.length > 0 ? `
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem;">
                  <strong style="color: var(--text-main);">Synonyms:</strong> ${current.synonyms.join(', ')}
                </div>
              ` : ''}
              <div style="text-align: center; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
                (คลิกเพื่อพลิกกลับ)
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flashcard-actions">
          <button class="btn btn-outline" id="fcPrev">← คำก่อนหน้า</button>
          <button class="btn btn-outline" id="fcFlip">🔄 พลิกการ์ด</button>
          <button class="btn btn-primary" id="fcNext">คำถัดไป →</button>
        </div>
      </div>
    `;

    const card = document.getElementById('flashcardElement');
    card.onclick = () => {
      state.vocab.flashcardFlipped = !state.vocab.flashcardFlipped;
      card.classList.toggle('flipped', state.vocab.flashcardFlipped);
    };

    document.getElementById('fcFlip').onclick = () => {
      state.vocab.flashcardFlipped = !state.vocab.flashcardFlipped;
      card.classList.toggle('flipped', state.vocab.flashcardFlipped);
    };

    document.getElementById('fcPrev').onclick = () => {
      if (state.vocab.flashcardIndex > 0) {
        state.vocab.flashcardIndex--;
        state.vocab.flashcardFlipped = false;
        renderFlashcardView(area, words);
      }
    };

    document.getElementById('fcNext').onclick = () => {
      if (state.vocab.flashcardIndex < words.length - 1) {
        state.vocab.flashcardIndex++;
        state.vocab.flashcardFlipped = false;
        renderFlashcardView(area, words);
      }
    };

    document.getElementById('fcBtnSave').onclick = () => {
      toggleSaveVocab(current.id);
      renderFlashcardView(area, words);
    };

    document.getElementById('fcBtnLearn').onclick = () => {
      toggleLearnVocab(current.id);
      renderFlashcardView(area, words);
    };
  }

  function renderCardGridView(area, words) {
    area.innerHTML = `
      <div class="vocab-grid">
        ${words.map(item => {
          const isLearned = state.vocab.learnedSet.has(item.id);
          const isSaved = state.vocab.savedSet.has(item.id);
          return `
            <div class="vocab-card" id="card-${item.id}">
              <div>
                <div class="vocab-card-header">
                  <div>
                    <div class="vocab-word-title">${item.word}</div>
                    <div class="vocab-pos-tag">${item.pos}</div>
                  </div>
                  <div style="display: flex; gap: 0.35rem; align-items: center;">
                    <span class="badge ${item.isReading ? 'badge-reading' : 'badge-vocab'}" style="font-size: 0.65rem;">
                      ${item.isReading ? 'Reading' : 'Unit ' + item.unit}
                    </span>
                  </div>
                </div>

                <div class="vocab-thai">${item.thaiMeaning}</div>
                <div class="vocab-def">${item.definition}</div>

                <div class="vocab-example-box">
                  <div class="vocab-example-en">"${item.exampleSentence}"</div>
                  <div class="vocab-example-th">${item.exampleThai}</div>
                </div>

                ${item.keywordClue ? `
                  <div style="font-size: 0.75rem; color: var(--vocab-accent); font-weight: 600; margin-bottom: 0.5rem;">
                    💡 Clue: ${item.keywordClue}
                  </div>
                ` : ''}

                ${item.synonyms && item.synonyms.length > 0 ? `
                  <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    <strong>Synonyms:</strong> ${item.synonyms.join(', ')}
                  </div>
                ` : ''}
              </div>

              <div class="vocab-meta-row">
                <span style="color: var(--text-muted); font-size: 0.75rem;">${item.sourceTopic}</span>
                <div class="vocab-card-btns">
                  <button class="icon-btn ${isSaved ? 'active-star' : ''}" onclick="window.app.toggleSaveVocab('${item.id}')" title="บันทึกทบทวน">
                    ★
                  </button>
                  <button class="icon-btn ${isLearned ? 'active-check' : ''}" onclick="window.app.toggleLearnVocab('${item.id}')" title="ทำเครื่องหมายว่าจำได้แล้ว">
                    ✓
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function toggleSaveVocab(id) {
    if (state.vocab.savedSet.has(id)) {
      state.vocab.savedSet.delete(id);
      showToast('นำออกจากรายการบันทึกแล้ว');
    } else {
      state.vocab.savedSet.add(id);
      showToast('บันทึกคำศัพท์เพื่อทบทวนแล้ว ⭐');
    }
    saveStorage();
    renderVocabContent();
  }

  function toggleLearnVocab(id) {
    if (state.vocab.learnedSet.has(id)) {
      state.vocab.learnedSet.delete(id);
      showToast('ทำเครื่องหมายยังไม่จำ');
    } else {
      state.vocab.learnedSet.add(id);
      showToast('บันทึกว่าจำได้แล้ว! 🎉');
    }
    saveStorage();
    renderVocabContent();
  }

  // ================= 3. GRAMMAR GUIDE =================
  function renderGrammarGuide() {
    const container = document.getElementById('tab-grammar');
    if (!container) return;

    container.innerHTML = `
      <div class="page-hero" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.05) 100%);">
        <div class="hero-content">
          <h2>Grammar Guide</h2>
          <p>สรุปกฎไวยากรณ์สำคัญ โครงสร้างประโยค ข้อควรระวังในข้อสอบ และตารางเปรียบเทียบคำที่สับสนบ่อย พร้อม Mini Quiz ฝึกฝนรายหัวข้อ</p>
        </div>
      </div>

      <div class="grammar-container">
        ${GRAMMAR_DATA.map((item, idx) => {
          const isOpen = state.grammar.openTopics.has(item.id);
          return `
            <div class="grammar-topic-card" id="grammar-card-${item.id}">
              <div class="grammar-header" onclick="window.app.toggleGrammarTopic('${item.id}')">
                <div class="grammar-title-group">
                  <div class="grammar-number">${idx + 1}</div>
                  <div>
                    <h3 style="font-size: 1.15rem; margin-bottom: 0.15rem;">${item.title}</h3>
                    <div style="font-size: 0.85rem; color: var(--text-muted);">${item.thaiTitle}</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span class="badge badge-unit">Unit ${item.unit}</span>
                  <span style="font-size: 1.2rem; color: var(--text-muted); transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0)'}; transition: transform 0.2s;">▾</span>
                </div>
              </div>

              <div class="grammar-body ${isOpen ? 'open' : ''}">
                <div style="margin-top: 1.25rem;">
                  <p style="font-size: 0.95rem; color: var(--text-main); font-weight: 500;">${item.summary}</p>
                </div>

                <!-- Rule Box -->
                <div class="grammar-rule-box">
                  <div style="font-weight: 700; color: var(--grammar-accent); margin-bottom: 0.35rem;">📘 Grammar Rule:</div>
                  <div style="font-size: 0.9rem; color: var(--text-main);">${item.rule}</div>
                </div>

                <!-- Sentence Structures -->
                <div style="margin: 1rem 0;">
                  <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem;">⚙️ Sentence Structure:</h4>
                  <ul class="grammar-structure-list">
                    ${item.structure.map(s => `<li>${s}</li>`).join('')}
                  </ul>
                </div>

                <!-- Comparison Table -->
                ${item.comparisonTable ? `
                  <div style="margin: 1.25rem 0;">
                    <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem;">📊 ตารางเปรียบเทียบที่มักออกสอบ (Comparison Matrix):</h4>
                    <div class="table-responsive">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            ${item.comparisonTable.headers.map(h => `<th>${h}</th>`).join('')}
                          </tr>
                        </thead>
                        <tbody>
                          ${item.comparisonTable.rows.map(row => `
                            <tr>
                              ${row.map(cell => `<td>${formatMarkdown(cell)}</td>`).join('')}
                            </tr>
                          `).join('')}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ` : ''}

                <!-- Examples with Thai translation -->
                <div style="margin: 1.25rem 0;">
                  <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem;">💡 Example Sentences (ตัวอย่างประโยค):</h4>
                  <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                    ${item.examples.map(ex => `
                      <div style="padding: 0.75rem 1rem; background: var(--bg-tertiary); border-radius: 8px; font-size: 0.9rem;">
                        <div style="color: var(--text-main); font-weight: 600; margin-bottom: 0.25rem;">${ex.en}</div>
                        <div style="color: var(--text-muted); font-size: 0.85rem;">${ex.th}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Common Mistakes & Exam Tips -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.25rem 0;">
                  <div style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 10px; padding: 1rem;">
                    <h5 style="color: var(--danger); font-size: 0.85rem; margin-bottom: 0.5rem;">⚠️ ข้อผิดพลาดยอดฮิต (Common Mistakes)</h5>
                    <ul style="padding-left: 1.2rem; font-size: 0.8rem; color: var(--text-main); line-height: 1.6;">
                      ${item.commonMistakes.map(m => `<li>${m}</li>`).join('')}
                    </ul>
                  </div>

                  <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 10px; padding: 1rem;">
                    <h5 style="color: var(--vocab-accent); font-size: 0.85rem; margin-bottom: 0.5rem;">🎯 เคล็ดลับทำข้อสอบ (Exam Tips)</h5>
                    <ul style="padding-left: 1.2rem; font-size: 0.8rem; color: var(--text-main); line-height: 1.6;">
                      ${item.examTips.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <!-- Mini Quiz -->
                <div class="mini-quiz-box">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                    <h4 style="font-size: 0.95rem; color: var(--grammar-accent);">🧪 Mini Quiz ทดสอบความเข้าใจ</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${item.miniQuiz.length} คำถาม</span>
                  </div>

                  ${item.miniQuiz.map((quiz, qIdx) => {
                    const quizKey = `${item.id}-q${qIdx}`;
                    const answeredOpt = state.grammar.quizAnswers[quizKey];
                    const isAnswered = answeredOpt !== undefined;
                    return `
                      <div style="margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: ${qIdx < item.miniQuiz.length - 1 ? '1px dashed var(--border-subtle)' : 'none'};">
                        <div class="mini-quiz-q">${qIdx + 1}. ${quiz.question}</div>
                        <div class="mini-quiz-options">
                          ${quiz.options.map((opt, optIdx) => {
                            let optClass = '';
                            if (isAnswered) {
                              if (optIdx === quiz.answer) optClass = 'correct';
                              else if (optIdx === answeredOpt) optClass = 'incorrect';
                            }
                            return `
                              <button class="mini-quiz-opt ${optClass}" onclick="window.app.answerMiniQuiz('${quizKey}', ${optIdx}, ${quiz.answer})" ${isAnswered ? 'disabled' : ''}>
                                ${String.fromCharCode(65 + optIdx)}) ${opt}
                              </button>
                            `;
                          }).join('')}
                        </div>
                        ${isAnswered ? `
                          <div class="mini-quiz-feedback" style="display: block; background: ${answeredOpt === quiz.answer ? 'var(--vocab-bg)' : 'var(--exam-bg)'}; color: ${answeredOpt === quiz.answer ? 'var(--vocab-accent)' : 'var(--danger)'};">
                            <strong>${answeredOpt === quiz.answer ? '✓ ถูกต้อง!' : '✗ ยังไม่ถูกต้อง'}</strong> ${quiz.explanation}
                          </div>
                        ` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Practice Button Linking to Exam Topic -->
                <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px dashed var(--border-subtle); display: flex; justify-content: flex-end;">
                  <button class="btn btn-sm btn-primary" onclick="window.app.startTopicExam('${
                    item.id === 'g-001' ? 'u4-phrasal-verbs' :
                    item.id === 'g-002' ? 'u4-future-forms' :
                    item.id === 'g-003' ? 'u5-so-such' :
                    item.id === 'g-004' ? 'u5-discourse-markers' :
                    'u6-reported-speech'
                  }')">
                    🚀 ฝึกทำข้อสอบหัวข้อนี้แบบเต็ม (Practice Topic Exam) →
                  </button>
                </div>

              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function toggleGrammarTopic(id) {
    if (state.grammar.openTopics.has(id)) {
      state.grammar.openTopics.delete(id);
    } else {
      state.grammar.openTopics.add(id);
    }
    renderGrammarGuide();
  }

  function answerMiniQuiz(quizKey, chosenOpt, correctOpt) {
    state.grammar.quizAnswers[quizKey] = chosenOpt;
    if (chosenOpt === correctOpt) {
      showToast('ตอบถูก! เยี่ยมมาก 🎉');
    } else {
      showToast('ลองอ่านคำอธิบายด้านล่างนะ 💡');
    }
    renderGrammarGuide();
  }

  // ================= 4. READING PRACTICE =================
  function renderReadingPractice() {
    const container = document.getElementById('tab-reading');
    if (!container) return;

    const currentPassage = READING_DATA.find(p => p.id === state.reading.activePassageId) || READING_DATA[0];

    container.innerHTML = `
      <div class="page-hero" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(234, 88, 12, 0.05) 100%);">
        <div class="hero-content">
          <h2>Reading Practice</h2>
          <p>บทอ่านภาษาอังกฤษระดับ B1–B2 จากตำราต้นฉบับ พร้อมระบบ Highlight คำศัพท์สำคัญ คลิกเพื่อเปิดดูความหมาย และจับคู่คำถามกับหลักฐานในเนื้อเรื่อง</p>
        </div>
      </div>

      <!-- Passage Switcher Tabs -->
      <div class="passage-selector-tabs">
        ${READING_DATA.map(p => `
          <button class="passage-tab-btn ${p.id === currentPassage.id ? 'active' : ''}" onclick="window.app.switchPassage('${p.id}')">
            Unit ${p.unit}: ${p.title}
          </button>
        `).join('')}
      </div>

      <div class="reading-layout">
        <!-- Main Reading Passage Card -->
        <div class="reading-main-card">
          <div class="passage-header">
            <span class="badge badge-reading" style="margin-bottom: 0.5rem;">Unit ${currentPassage.unit} Reading</span>
            <h2 class="passage-title">${currentPassage.title}</h2>
            <div class="passage-thai-title">${currentPassage.thaiTitle}</div>
            
            <div class="passage-meta-bar">
              <span>Source: ${currentPassage.sourceText}</span>
              <div class="reading-tools-bar">
                <button class="btn btn-sm ${state.reading.showThai ? 'btn-primary' : 'btn-outline'}" id="btnToggleThaiSummary">
                  🇹🇭 ${state.reading.showThai ? 'ซ่อนสรุปไทย' : 'แสดงสรุปภาษาไทย'}
                </button>
              </div>
            </div>
          </div>

          <!-- Passage Text with Clickable Vocabulary -->
          <div class="passage-text-body">
            ${currentPassage.paragraphs.map(para => {
              // Highlight important vocabulary in paragraph
              let formattedText = para.text;
              currentPassage.importantVocab.forEach(v => {
                const regex = new RegExp(`\\b(${v.word})\\b`, 'gi');
                formattedText = formattedText.replace(regex, `<span class="clickable-vocab" onclick="window.app.openVocabPopover('${v.word}', '${v.pos}', '${v.meaning}', '${v.clue}')">$1</span>`);
              });

              return `
                <div class="passage-para">
                  ${para.heading ? `<h4 class="para-heading">${para.heading}</h4>` : ''}
                  <p>${formattedText}</p>
                  ${state.reading.showThai && para.thaiSummary ? `
                    <div class="para-thai-summary">
                      <strong>สรุปใจความ:</strong> ${para.thaiSummary}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Right Sidebar: In-depth Analysis & Exercises -->
        <div class="reading-sidebar">
          <!-- Main Idea & Purpose -->
          <div class="analysis-accordion-item">
            <div class="analysis-accordion-hdr" onclick="window.app.toggleAnalysisSection('mainIdea')">
              <span>🎯 Main Idea & Purpose</span>
              <span>▾</span>
            </div>
            <div class="analysis-accordion-body ${state.reading.openAnalysis.has('mainIdea') ? 'open' : ''}">
              <div style="margin-bottom: 0.75rem;">
                <strong style="color: var(--text-main);">Main Idea (EN):</strong><br>
                ${currentPassage.mainIdea}
              </div>
              <div style="margin-bottom: 0.75rem;">
                <strong style="color: var(--reading-accent);">ใจความสำคัญ (TH):</strong><br>
                ${currentPassage.mainIdeaThai}
              </div>
              <div>
                <strong style="color: var(--text-main);">Author's Purpose:</strong><br>
                ${currentPassage.authorsPurpose}
              </div>
            </div>
          </div>

          <!-- Reference Words Analysis -->
          <div class="analysis-accordion-item">
            <div class="analysis-accordion-hdr" onclick="window.app.toggleAnalysisSection('refWords')">
              <span>🔗 Reference Words (คำอ้างอิง)</span>
              <span>▾</span>
            </div>
            <div class="analysis-accordion-body ${state.reading.openAnalysis.has('refWords') ? 'open' : ''}">
              ${currentPassage.referenceWords.map(ref => `
                <div style="margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px dashed var(--border-subtle);">
                  <div style="font-weight: 700; color: var(--brand-primary);">${ref.pronoun} (${ref.location})</div>
                  <div style="color: var(--text-main); font-size: 0.8rem; margin: 0.2rem 0;">"${ref.sentence}"</div>
                  <div style="color: var(--vocab-accent); font-weight: 600;">➔ แทนคำว่า: ${ref.refersTo}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${ref.explanation}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Direct Facts vs Inferences -->
          <div class="analysis-accordion-item">
            <div class="analysis-accordion-hdr" onclick="window.app.toggleAnalysisSection('factsInference')">
              <span>⚖️ Fact vs. Inference</span>
              <span>▾</span>
            </div>
            <div class="analysis-accordion-body ${state.reading.openAnalysis.has('factsInference') ? 'open' : ''}">
              ${currentPassage.factsVsInferences.map(item => `
                <div style="margin-bottom: 0.75rem; padding: 0.6rem; border-radius: 8px; background: var(--bg-tertiary);">
                  <span class="badge ${item.type === 'Direct Fact' ? 'badge-vocab' : 'badge-reading'}" style="margin-bottom: 0.3rem;">
                    ${item.type}
                  </span>
                  <div style="font-size: 0.8rem; color: var(--text-main); font-weight: 500;">${item.statement}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
                    ${item.sourceLocation ? 'ตำแหน่ง: ' + item.sourceLocation : 'เหตุผลอนุมาน: ' + item.reasoning}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Questions & Evidence Sentence Matching -->
          <div class="analysis-accordion-item">
            <div class="analysis-accordion-hdr" onclick="window.app.toggleAnalysisSection('questions')">
              <span>📝 Comprehension & Evidence (${currentPassage.questions.length})</span>
              <span>▾</span>
            </div>
            <div class="analysis-accordion-body ${state.reading.openAnalysis.has('questions') ? 'open' : ''}">
              ${currentPassage.questions.map((q, idx) => `
                <div style="margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px dashed var(--border-subtle);">
                  <div style="font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">${idx + 1}. ${q.question}</div>
                  <div style="background: var(--bg-tertiary); padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; margin-bottom: 0.35rem;">
                    <strong style="color: var(--vocab-accent);">✓ เฉลย:</strong> ${q.options[q.answer]}
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">
                    <strong>🔍 หลักฐานในบทอ่าน:</strong> "${q.evidence}"
                  </div>
                  <div style="font-size: 0.75rem; color: var(--reading-accent); margin-top: 0.25rem;">
                    <strong>อธิบาย:</strong> ${q.explanationThai}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Popover Modal for Clicked Word -->
      <div class="modal-backdrop" id="vocabPopoverBackdrop" onclick="window.app.closeVocabPopover()"></div>
      <div class="vocab-popover-modal" id="vocabPopoverModal">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <h3 id="popoverWord" style="color: var(--brand-primary); font-size: 1.5rem;">Word</h3>
            <span id="popoverPos" style="font-style: italic; color: var(--text-muted); font-size: 0.85rem;">pos</span>
          </div>
          <button class="btn btn-sm btn-outline" onclick="window.app.closeVocabPopover()">✕</button>
        </div>
        <div id="popoverMeaning" style="font-size: 1.2rem; font-weight: 700; color: var(--vocab-accent); margin-bottom: 0.75rem;">ความหมายภาษาไทย</div>
        <div id="popoverClue" style="font-size: 0.85rem; color: var(--text-muted); background: var(--bg-tertiary); padding: 0.6rem; border-radius: 8px;">
          บริบทการใช้
        </div>
      </div>
    `;

    document.getElementById('btnToggleThaiSummary').onclick = () => {
      state.reading.showThai = !state.reading.showThai;
      renderReadingPractice();
    };
  }

  function switchPassage(id) {
    state.reading.activePassageId = id;
    renderReadingPractice();
  }

  function toggleAnalysisSection(key) {
    if (state.reading.openAnalysis.has(key)) {
      state.reading.openAnalysis.delete(key);
    } else {
      state.reading.openAnalysis.add(key);
    }
    renderReadingPractice();
  }

  function openVocabPopover(word, pos, meaning, clue) {
    document.getElementById('popoverWord').textContent = word;
    document.getElementById('popoverPos').textContent = pos;
    document.getElementById('popoverMeaning').textContent = meaning;
    document.getElementById('popoverClue').textContent = clue ? `💡 Context Clue: ${clue}` : '';
    document.getElementById('vocabPopoverBackdrop').classList.add('open');
    document.getElementById('vocabPopoverModal').classList.add('open');
  }

  function closeVocabPopover() {
    const backdrop = document.getElementById('vocabPopoverBackdrop');
    const modal = document.getElementById('vocabPopoverModal');
    if (backdrop) backdrop.classList.remove('open');
    if (modal) modal.classList.remove('open');
  }

  // ================= 5. KEYWORD CHEAT SHEET =================
  function renderCheatSheet() {
    const container = document.getElementById('tab-cheatsheet');
    if (!container) return;

    const sec = state.cheatSheet.activeSection;
    const q = state.cheatSheet.search.toLowerCase();

    let items = [];
    if (sec === 'vocab') {
      items = CHEATSHEET_DATA.vocabClues.filter(item => 
        !q || item.keyword.toLowerCase().includes(q) || item.explanation.toLowerCase().includes(q)
      );
    } else if (sec === 'grammar') {
      items = CHEATSHEET_DATA.grammarSignals.filter(item => 
        !q || item.keyword.toLowerCase().includes(q) || item.topic.toLowerCase().includes(q)
      );
    } else if (sec === 'reading') {
      items = CHEATSHEET_DATA.readingKeywords.filter(item => 
        !q || item.keyword.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.strategy.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <div class="page-hero">
        <div class="hero-content">
          <h2>Keyword Cheat Sheet</h2>
          <p>คู่มือทบทวนสรุปย่อแบบเร่งด่วนสำหรับเปิดอ่านก่อนสอบ รวบรวมคำเชื่อม สัญญาณไวยากรณ์ และรูปแบบคีย์เวิร์ดของคำถาม Reading พร้อมคำเตือนข้อผิดพลาด</p>
        </div>
      </div>

      <div class="vocab-controls" style="margin-bottom: 1.5rem;">
        <div class="search-bar-wrap">
          <svg class="search-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="search-input" id="csSearchInput" placeholder="ค้นหาคีย์เวิร์ด หรือหัวข้อที่ต้องการทบทวน..." value="${state.cheatSheet.search}">
        </div>

        <div class="cheatsheet-tabs">
          <button class="cs-tab-btn ${sec === 'vocab' ? 'active' : ''}" onclick="window.app.switchCsSection('vocab')">
            🔤 Vocabulary Clues (${CHEATSHEET_DATA.vocabClues.length})
          </button>
          <button class="cs-tab-btn ${sec === 'grammar' ? 'active' : ''}" onclick="window.app.switchCsSection('grammar')">
            ⚡ Grammar Signal Words (${CHEATSHEET_DATA.grammarSignals.length})
          </button>
          <button class="cs-tab-btn ${sec === 'reading' ? 'active' : ''}" onclick="window.app.switchCsSection('reading')">
            📖 Reading Question Keywords (${CHEATSHEET_DATA.readingKeywords.length})
          </button>
        </div>
      </div>

      <div class="cheatsheet-grid">
        ${items.map(item => {
          if (sec === 'vocab') {
            return `
              <div class="cs-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span class="badge badge-vocab">${item.category}</span>
                  <span class="badge badge-unit">Unit ${item.unit}</span>
                </div>
                <div class="cs-keyword-title">${item.keyword}</div>
                <div style="font-size: 0.85rem; color: var(--text-main); font-weight: 500;">${item.explanation}</div>
                <div class="cs-pattern-box">Pattern: ${item.pattern}</div>
                <div class="cs-watchout-box">⚠️ ${item.watchOut}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: 0.25rem;">
                  "${item.example}"
                </div>
              </div>
            `;
          } else if (sec === 'grammar') {
            return `
              <div class="cs-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span class="badge badge-grammar">${item.topic}</span>
                </div>
                <div class="cs-keyword-title">${item.keyword}</div>
                <div class="cs-pattern-box">${item.pattern}</div>
                <div class="cs-watchout-box">⚠️ ${item.watchOut}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: 0.25rem;">
                  "${item.example}"
                </div>
              </div>
            `;
          } else {
            return `
              <div class="cs-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span class="badge badge-reading">${item.category}</span>
                </div>
                <div class="cs-keyword-title">${item.keyword}</div>
                <div style="font-size: 0.8rem; color: var(--brand-primary); font-weight: 600;">
                  รูปแบบคำถาม: ${item.questionPattern}
                </div>
                <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.5;">
                  <strong>กลยุทธ์การหาคำตอบ:</strong> ${item.strategy}
                </div>
                <div class="cs-watchout-box">
                  <strong>กับดักข้อสอบ:</strong> ${item.trapWarning}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
                  ${item.exampleQuestion}
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>
    `;

    document.getElementById('csSearchInput').oninput = (e) => {
      state.cheatSheet.search = e.target.value;
      renderCheatSheet();
    };
  }

  function switchCsSection(sec) {
    state.cheatSheet.activeSection = sec;
    renderCheatSheet();
  }

  function openQuickReview(keyword) {
    state.cheatSheet.search = keyword;
    switchTab('cheatsheet');
  }

  // ================= 6. PRACTICE EXAM =================
  function formatTimer(sec) {
    const s = sec || 0;
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const remaining = (s % 60).toString().padStart(2, '0');
    return `${m}:${remaining}`;
  }

  function startExamTimer() {
    if (state.exam.timerRunning) return;
    state.exam.timerRunning = true;
    state.exam.timerInterval = setInterval(() => {
      state.exam.timerSeconds++;
      const timerDisplay = document.getElementById('examTimerDisplay');
      if (timerDisplay) {
        timerDisplay.textContent = formatTimer(state.exam.timerSeconds);
      }
    }, 1000);
  }

  function stopExamTimer() {
    state.exam.timerRunning = false;
    clearInterval(state.exam.timerInterval);
  }

  function getExamQuestions() {
    let list = (typeof EXAM_DATA !== 'undefined' && Array.isArray(EXAM_DATA)) ? EXAM_DATA : [];

    // Filter by topic if a specific topic is selected
    if (state.exam.activeTopicId && state.exam.activeTopicId !== 'all') {
      list = list.filter(q => q.topicId === state.exam.activeTopicId);
    } else if (state.exam.activeUnitFilter && state.exam.activeUnitFilter !== 'all') {
      list = list.filter(q => q.unit === Number(state.exam.activeUnitFilter));
    }

    // Filter by wrong answers if requested
    if (state.exam.filterSection === 'wrong') {
      list = list.filter(q => {
        const ans = state.exam.userAnswers[q.id];
        return ans !== undefined && ans !== q.correctAnswer;
      });
    }

    return list;
  }

  function selectExamUnit(unit) {
    state.exam.activeUnitFilter = unit;
    const topics = (typeof EXAM_TOPICS !== 'undefined' && Array.isArray(EXAM_TOPICS)) ? EXAM_TOPICS : [];
    if (unit !== 'all') {
      const topicObj = topics.find(t => t.id === state.exam.activeTopicId);
      if (!topicObj || topicObj.unit !== Number(unit)) {
        state.exam.activeTopicId = 'all';
      }
    }
    state.exam.currentIndex = 0;
    renderExam();
  }

  function selectExamTopic(topicId) {
    state.exam.activeTopicId = topicId;
    const topics = (typeof EXAM_TOPICS !== 'undefined' && Array.isArray(EXAM_TOPICS)) ? EXAM_TOPICS : [];
    const topicObj = topics.find(t => t.id === topicId);
    if (topicObj && topicObj.unit !== 'all') {
      state.exam.activeUnitFilter = topicObj.unit;
    }
    state.exam.currentIndex = 0;
    state.exam.filterSection = 'all';
    renderExam();
    const title = topicObj ? topicObj.titleEn : 'ข้อสอบทั้งหมด';
    showToast(`เลือกหัวข้อ: ${title}`);
  }

  function startTopicExam(topicId) {
    switchTab('exam');
    selectExamTopic(topicId);
  }

  function resetExamFilters() {
    state.exam.activeTopicId = 'all';
    state.exam.activeUnitFilter = 'all';
    state.exam.filterSection = 'all';
    state.exam.currentIndex = 0;
    renderExam();
  }

  function renderExam() {
    const container = document.getElementById('tab-exam');
    if (!container) return;

    try {
      const topics = (typeof EXAM_TOPICS !== 'undefined' && Array.isArray(EXAM_TOPICS)) ? EXAM_TOPICS : [];
      const questions = getExamQuestions();
      const totalQ = questions.length;

      if (topics.length === 0 || (typeof EXAM_DATA === 'undefined')) {
        container.innerHTML = `
          <div class="card" style="text-align: center; padding: 2.5rem 1.5rem; margin: 2rem auto; max-width: 600px; background: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-medium);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔄</div>
            <h3 style="margin-bottom: 0.5rem; color: var(--text-main);">กำลังโหลดข้อมูลข้อสอบชุดล่าสุด...</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">
              หากหน้าจอนี้ไม่เปลี่ยน กรุณากดปุ่มโหลดใหม่ด้านล่างเพื่ออัปเดตไฟล์ให้เป็นเวอร์ชันปัจจุบัน
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <button class="btn btn-primary" onclick="window.location.reload(true)">
                🔄 รีเฟรชโหลดใหม่ (Reload)
              </button>
            </div>
          </div>
        `;
        return;
      }

      if (state.exam.currentIndex >= totalQ) {
        state.exam.currentIndex = Math.max(0, totalQ - 1);
      }
      const currentQ = questions[state.exam.currentIndex];
      
      // Count answered questions in current scope
      const answeredInScope = questions.filter(q => state.exam.userAnswers[q.id] !== undefined).length;
      const isSubmitted = state.exam.isSubmitted;
      const isPracticeMode = state.exam.mode === 'practice';

      // Active Topic Metadata
      const activeTopicObj = topics.find(t => t.id === state.exam.activeTopicId) || topics[0] || {
        id: 'all',
        titleEn: 'All Units Cumulative Exam',
        titleTh: 'รวมทุกบท ทุกหัวข้อ (Comprehensive Mock Exam)',
        icon: '🌟',
        unit: 'all',
        exerciseRef: 'Unit 4–6 Ex 1–11'
      };

      // Filter topics for the cards grid based on activeUnitFilter
      const visibleTopics = topics.filter(t => {
        if (t.id === 'all') return true;
        if (state.exam.activeUnitFilter === 'all') return true;
        return t.unit === Number(state.exam.activeUnitFilter);
      });

    // Generate topic cards HTML
    const topicCardsHtml = visibleTopics.map(topic => {
      const isCur = state.exam.activeTopicId === topic.id;
      const topicQuestions = topic.id === 'all' 
        ? EXAM_DATA 
        : EXAM_DATA.filter(q => q.topicId === topic.id);
      const qCount = topicQuestions.length;
      const ansCount = topicQuestions.filter(q => state.exam.userAnswers[q.id] !== undefined).length;

      return `
        <div class="exam-topic-card ${isCur ? 'active' : ''}" onclick="window.app.selectExamTopic('${topic.id}')">
          <div class="topic-card-header">
            <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
              <span class="topic-card-icon">${topic.icon}</span>
              <div>
                <div class="topic-card-title-en">${topic.titleEn}</div>
                <div class="topic-card-title-th">${topic.titleTh}</div>
              </div>
            </div>
          </div>
          <div class="topic-card-footer">
            <span class="topic-exercise-tag">${topic.exerciseRef || 'Exercises'}</span>
            <span class="topic-count-pill">${ansCount}/${qCount} ข้อ</span>
          </div>
        </div>
      `;
    }).join('');

    let mainExamContent = '';
    if (totalQ === 0) {
      mainExamContent = `
        <div class="card" style="text-align: center; padding: 3rem 1.5rem; background: var(--bg-secondary); border-radius: 16px;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
          <h3 style="margin-bottom: 0.5rem;">ไม่มีข้อสอบที่ตรงกับเงื่อนไขในขณะนี้</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
            ${state.exam.filterSection === 'wrong' 
              ? 'ยินดีด้วย! คุณยังไม่มีข้อที่ตอบผิดในหัวข้อนี้ หรือทำถูกต้องทั้งหมดแล้ว' 
              : 'กรุณาเลือกหัวข้ออื่นจากเมนูด้านบน'}
          </p>
          <button class="btn btn-primary" onclick="window.app.resetExamFilters()">
            แสดงข้อสอบทั้งหมด
          </button>
        </div>
      `;
    } else {
      const currentSelected = state.exam.userAnswers[currentQ.id];
      const isCurrentAnswered = currentSelected !== undefined;
      const isFlagged = state.exam.flaggedSet.has(currentQ.id);

      mainExamContent = `
        <div class="exam-layout">
          <!-- Question Presentation Card -->
          <div class="exam-question-card">
            <div class="q-header-meta">
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge ${
                  currentQ.section === 'vocab' ? 'badge-vocab' : currentQ.section === 'grammar' ? 'badge-grammar' : 'badge-reading'
                }">
                  ${currentQ.section.toUpperCase()}
                </span>
                <span class="badge badge-unit">Unit ${currentQ.unit}</span>
                <span class="topic-exercise-tag">${currentQ.exerciseRef || ''}</span>
              </div>
              
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="btn btn-sm ${isFlagged ? 'btn-primary' : 'btn-outline'}" id="btnFlagQuestion">
                  ${isFlagged ? '🚩 Flagged' : '🏳️ Flag'}
                </button>
                <div class="q-number-pill">ข้อที่ ${state.exam.currentIndex + 1} / ${totalQ}</div>
              </div>
            </div>

            <!-- If Reading passage question, show passage excerpt/title -->
            ${currentQ.passageTitle ? `
              <div class="passage-context-box">
                <div style="font-weight: 700; color: var(--reading-accent); margin-bottom: 0.25rem;">
                  📖 ${currentQ.passageTitle}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  (อ่านคำถามและเลือกคำตอบที่ถูกต้องที่สุดตามหลักฐานในบทอ่าน)
                </div>
              </div>
            ` : ''}

            <div class="q-text" style="white-space: pre-line;">${currentQ.question}</div>

            <!-- 4 Options A-D -->
            <div class="exam-options-list">
              ${currentQ.options.map((opt, optIdx) => {
                const letter = String.fromCharCode(65 + optIdx);
                let optClass = '';
                if (currentSelected === optIdx) optClass += ' selected';

                if (isSubmitted || (isPracticeMode && isCurrentAnswered)) {
                  if (optIdx === currentQ.correctAnswer) {
                    optClass += ' opt-correct';
                  } else if (currentSelected === optIdx) {
                    optClass += ' opt-wrong';
                  }
                }

                return `
                  <div class="exam-option-item ${optClass}" onclick="window.app.selectExamOption('${currentQ.id}', ${optIdx})">
                    <div class="opt-letter">${letter}</div>
                    <div style="font-size: 0.95rem; font-weight: 500;">${opt}</div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Explanation Box -->
            <div class="explanation-reveal-box ${isSubmitted || (isPracticeMode && isCurrentAnswered) ? 'open' : ''}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: var(--brand-primary); font-size: 0.95rem;">💡 เฉลยและคำอธิบาย:</strong>
                <span class="badge ${currentSelected === currentQ.correctAnswer ? 'badge-vocab' : 'badge-exam'}">
                  ${currentSelected === currentQ.correctAnswer ? 'ถูกต้อง (+1)' : 'ยังไม่ถูกต้อง'}
                </span>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.5;">
                ${currentQ.explanationThai}
              </p>
              ${currentQ.signalKeywords ? `
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  <strong>คำใบ้ / คีย์เวิร์ด:</strong> ${currentQ.signalKeywords}
                </div>
              ` : ''}
              ${currentQ.evidenceSentence ? `
                <div style="font-size: 0.8rem; color: var(--reading-accent); margin-top: 0.25rem;">
                  <strong>หลักฐานในบทความ:</strong> "${currentQ.evidenceSentence}"
                </div>
              ` : ''}
            </div>

            <!-- Next / Prev Nav Buttons -->
            <div class="q-nav-buttons">
              <button class="btn btn-outline" id="btnExamPrev" ${state.exam.currentIndex === 0 ? 'disabled' : ''}>
                ← ข้อก่อนหน้า
              </button>
              <div style="display: flex; gap: 0.5rem;">
                ${!isSubmitted ? `
                  <button class="btn btn-primary" id="btnExamSubmitModal" style="background: var(--exam-accent);">
                    ส่งข้อสอบ (Submit)
                  </button>
                ` : `
                  <button class="btn btn-outline" onclick="window.app.retakeExam()">
                    🔄 ทำข้อสอบใหม่
                  </button>
                `}
                <button class="btn btn-primary" id="btnExamNext" ${state.exam.currentIndex === totalQ - 1 ? 'disabled' : ''}>
                  ข้อถัดไป →
                </button>
              </div>
            </div>
          </div>

          <!-- Right Side: Question Navigator Grid -->
          <div class="exam-nav-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4 style="font-size: 1rem;">Question Navigator</h4>
              <span style="font-size: 0.75rem; color: var(--text-muted);">${answeredInScope}/${totalQ} ข้อ</span>
            </div>

            <div class="nav-grid-40">
              ${questions.map((q, idx) => {
                const isAns = state.exam.userAnswers[q.id] !== undefined;
                const isCur = idx === state.exam.currentIndex;
                const isFlg = state.exam.flaggedSet.has(q.id);

                let dotClass = '';
                if (isCur) dotClass += ' current';
                if (isFlg) dotClass += ' flagged';
                if (isSubmitted) {
                  const userChoice = state.exam.userAnswers[q.id];
                  if (userChoice === q.correctAnswer) dotClass += ' graded-correct';
                  else dotClass += ' graded-wrong';
                } else if (isAns) {
                  dotClass += ' answered';
                }

                return `
                  <div class="q-nav-dot ${dotClass}" onclick="window.app.jumpToQuestion(${idx})">
                    ${idx + 1}
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Legend -->
            <div class="exam-nav-legend">
              <div class="legend-item"><div class="legend-dot" style="background: var(--brand-primary);"></div> ตอบแล้ว</div>
              <div class="legend-item"><div class="legend-dot" style="background: var(--bg-tertiary); border: 1px solid var(--border-medium);"></div> ยังไม่ตอบ</div>
              <div class="legend-item"><div class="legend-dot" style="background: #f59e0b;"></div> ติดธงไว้</div>
              ${isSubmitted ? `
                <div class="legend-item"><div class="legend-dot" style="background: var(--vocab-accent);"></div> ถูก</div>
                <div class="legend-item"><div class="legend-dot" style="background: var(--danger);"></div> ผิด</div>
              ` : ''}
            </div>

            <!-- Submit Button in Navigator -->
            ${!isSubmitted ? `
              <button class="btn btn-primary" id="btnExamSubmitNav" style="width: 100%; background: var(--exam-accent);">
                ส่งข้อสอบและตรวจผล
              </button>
            ` : `
              <button class="btn btn-outline" id="btnFilterWrongOnly" style="width: 100%;">
                ${state.exam.filterSection === 'wrong' ? 'แสดงทุกข้อ' : 'ฝึกเฉพาะข้อที่ตอบผิด 🎯'}
              </button>
            `}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <!-- Topic Hub / Exam Center -->
      <div class="exam-topics-container">
        <div class="exam-topics-header">
          <div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>🎯</span><span>Exam Center: เลือกฝึกสอบแยกตามหัวข้อและบทเรียน</span>
            </h3>
            <p style="font-size: 0.82rem; color: var(--text-muted);">
              รวบรวมแบบฝึกหัดจริงครบทุก Exercise (Ex 1–11) จาก Unit 4, Unit 5, Unit 6 พร้อมเฉลยละเอียดและหลักฐานอ้างอิง
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-sm ${state.exam.activeTopicId === 'all' ? 'btn-primary' : 'btn-outline'}" onclick="window.app.selectExamTopic('all')">
              🌟 รวมทุกบท (${EXAM_DATA.length} ข้อ)
            </button>
          </div>
        </div>

        <!-- Unit Filter Tabs -->
        <div class="exam-unit-tabs">
          <button class="exam-unit-tab-btn ${state.exam.activeUnitFilter === 'all' ? 'active' : ''}" onclick="window.app.selectExamUnit('all')">
            🌟 ทุกบท (All Units)
          </button>
          <button class="exam-unit-tab-btn ${state.exam.activeUnitFilter === 4 ? 'active' : ''}" onclick="window.app.selectExamUnit(4)">
            🏢 Unit 4: Workplace (6 หัวข้อ)
          </button>
          <button class="exam-unit-tab-btn ${state.exam.activeUnitFilter === 5 ? 'active' : ''}" onclick="window.app.selectExamUnit(5)">
            🎤 Unit 5: Presentations (6 หัวข้อ)
          </button>
          <button class="exam-unit-tab-btn ${state.exam.activeUnitFilter === 6 ? 'active' : ''}" onclick="window.app.selectExamUnit(6)">
            🌐 Unit 6: Multicultural (5 หัวข้อ)
          </button>
        </div>

        <!-- Topic Cards Grid -->
        <div class="exam-topic-cards-grid">
          ${topicCardsHtml}
        </div>
      </div>

      <!-- Active Topic Banner -->
      <div class="active-topic-banner">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem; flex-wrap: wrap;">
            <span style="font-size: 1.25rem;">${activeTopicObj.icon}</span>
            <strong style="color: var(--text-main); font-size: 1.05rem;">${activeTopicObj.titleEn}</strong>
            <span class="topic-exercise-tag">${activeTopicObj.exerciseRef}</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">${activeTopicObj.titleTh}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          ${state.exam.activeTopicId !== 'all' ? `
            <button class="btn btn-sm btn-outline" onclick="window.app.selectExamTopic('all')">
              🌟 ทำข้อสอบรวมทุกบท
            </button>
          ` : `
            <span class="topic-count-pill" style="font-size: 0.8rem; padding: 0.3rem 0.75rem;">
              รวม ${totalQ} ข้อ
            </span>
          `}
        </div>
      </div>

      <!-- Exam Status Bar -->
      <div class="exam-status-bar">
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <span class="exam-mode-badge ${state.exam.mode === 'exam' ? 'mode-exam' : 'mode-practice'}">
            ${state.exam.mode === 'exam' ? '📝 Exam Mode' : '🧪 Practice Mode'}
          </span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">
            ตอบแล้ว ${answeredInScope}/${totalQ} ข้อ ${state.exam.filterSection === 'wrong' ? '(เฉพาะข้อที่ตอบผิด)' : ''}
          </span>
        </div>

        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <div class="timer-box">
            ⏱️ <span id="examTimerDisplay">${formatTimer(state.exam.timerSeconds)}</span>
          </div>
          <button class="btn btn-sm btn-outline" id="btnToggleExamMode">
            สลับเป็น ${state.exam.mode === 'exam' ? 'Practice Mode' : 'Exam Mode'}
          </button>
          <button class="btn btn-sm btn-outline" onclick="window.app.retakeExam()">
            🔄 รีเซ็ตทำใหม่
          </button>
        </div>
      </div>

      <!-- Main Exam Content Area -->
      ${mainExamContent}

      <!-- Submit Confirmation Modal -->
      <div class="modal-backdrop" id="submitModalBackdrop"></div>
      <div class="vocab-popover-modal" id="submitConfirmModal" style="text-align: center;">
        <h3 style="margin-bottom: 0.5rem; font-size: 1.3rem;">ยืนยันการส่งข้อสอบ?</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">
          คุณตอบข้อสอบไปแล้ว <strong>${answeredInScope}</strong> จากทั้งหมด <strong>${totalQ}</strong> ข้อ
          ${answeredInScope < totalQ ? '<br><span style="color: var(--danger);">ยังมีข้อที่ยังไม่ได้ตอบ!</span>' : ''}
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center;">
          <button class="btn btn-outline" onclick="window.app.closeSubmitModal()">กลับไปทำต่อ</button>
          <button class="btn btn-primary" style="background: var(--exam-accent);" onclick="window.app.confirmSubmitExam()">ยืนยันส่งข้อสอบ</button>
        </div>
      </div>

      <!-- Score Result Modal -->
      <div class="modal-backdrop" id="scoreModalBackdrop"></div>
      <div class="score-result-modal vocab-popover-modal" id="scoreResultModal">
        <h2 style="font-size: 1.4rem; margin-bottom: 0.25rem;" id="scoreModalTitle">ผลการทดสอบ CEFR B1–B2</h2>
        <div id="scoreModalFeedback"></div>

        <div class="score-badge-circle">
          <div class="score-number" id="resultScoreNum">0</div>
          <div class="score-sub" id="resultScoreTotal">/ 0</div>
        </div>

        <div class="section-scores-row" id="sectionScoresRow"></div>

        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-outline" onclick="window.app.closeScoreModal()">ดูเฉลยทีละข้อ</button>
          <button class="btn btn-primary" onclick="window.app.retryWrongAnswers()">ฝึกเฉพาะข้อที่ตอบผิด 🎯</button>
        </div>
      </div>
    `;

    // Start timer if not running and not submitted
    if (!state.exam.timerRunning && !isSubmitted) {
      startExamTimer();
    }

    // Hook buttons if questions exist
    if (totalQ > 0) {
      const prevBtn = document.getElementById('btnExamPrev');
      if (prevBtn) {
        prevBtn.onclick = () => {
          if (state.exam.currentIndex > 0) {
            state.exam.currentIndex--;
            renderExam();
          }
        };
      }
      const nextBtn = document.getElementById('btnExamNext');
      if (nextBtn) {
        nextBtn.onclick = () => {
          if (state.exam.currentIndex < totalQ - 1) {
            state.exam.currentIndex++;
            renderExam();
          }
        };
      }
      const flagBtn = document.getElementById('btnFlagQuestion');
      if (flagBtn) {
        flagBtn.onclick = () => {
          if (state.exam.flaggedSet.has(currentQ.id)) {
            state.exam.flaggedSet.delete(currentQ.id);
          } else {
            state.exam.flaggedSet.add(currentQ.id);
          }
          renderExam();
        };
      }
    }

    const toggleModeBtn = document.getElementById('btnToggleExamMode');
    if (toggleModeBtn) {
      toggleModeBtn.onclick = () => {
        state.exam.mode = state.exam.mode === 'exam' ? 'practice' : 'exam';
        showToast(`สลับโหมดเป็น ${state.exam.mode === 'exam' ? 'Exam Mode' : 'Practice Mode'}`);
        renderExam();
      };
    }

    const submitBtn = document.getElementById('btnExamSubmitModal');
    if (submitBtn) {
      submitBtn.onclick = () => openSubmitModal();
    }
    const submitNavBtn = document.getElementById('btnExamSubmitNav');
    if (submitNavBtn) {
      submitNavBtn.onclick = () => openSubmitModal();
    }

    const filterWrongBtn = document.getElementById('btnFilterWrongOnly');
    if (filterWrongBtn) {
      filterWrongBtn.onclick = () => {
        state.exam.filterSection = state.exam.filterSection === 'wrong' ? 'all' : 'wrong';
        state.exam.currentIndex = 0;
        renderExam();
      };
    }
  } catch (err) {
    console.error('renderExam error:', err);
    container.innerHTML = `
      <div class="card" style="text-align: center; padding: 2.5rem 1.5rem; margin: 2rem auto; max-width: 600px; background: var(--bg-secondary); border-radius: 16px; border: 1px solid var(--border-medium);">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚠️</div>
        <h3 style="margin-bottom: 0.5rem; color: var(--text-main);">เกิดข้อผิดพลาดในการโหลดข้อสอบ</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1.25rem;">${err.message || err}</p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="window.location.reload(true)">
            🔄 รีเฟรชหน้าเว็บ (Reload)
          </button>
          <button class="btn btn-outline" onclick="try { localStorage.clear(); } catch(e){} window.location.reload(true);">
            🧹 รีเซ็ตข้อมูลและโหลดใหม่
          </button>
        </div>
      </div>
    `;
  }
}

  function selectExamOption(qId, optIdx) {
    if (state.exam.isSubmitted) return; // locked after submission

    state.exam.userAnswers[qId] = optIdx;
    renderExam();
  }

  function jumpToQuestion(idx) {
    state.exam.currentIndex = idx;
    renderExam();
  }

  function openSubmitModal() {
    document.getElementById('submitModalBackdrop').classList.add('open');
    document.getElementById('submitConfirmModal').classList.add('open');
  }

  function closeSubmitModal() {
    document.getElementById('submitModalBackdrop').classList.remove('open');
    document.getElementById('submitConfirmModal').classList.remove('open');
  }

  function confirmSubmitExam() {
    closeSubmitModal();
    stopExamTimer();
    state.exam.isSubmitted = true;

    const currentQuestions = getExamQuestions();
    const activeTopic = EXAM_TOPICS.find(t => t.id === state.exam.activeTopicId) || EXAM_TOPICS[0];

    // Calculate score for active questions
    let totalScore = 0;
    let vocabScore = 0;
    let grammarScore = 0;
    let readingScore = 0;
    let cultureScore = 0;
    let listeningScore = 0;

    let vocabTotal = 0;
    let grammarTotal = 0;
    let readingTotal = 0;
    let cultureTotal = 0;
    let listeningTotal = 0;

    currentQuestions.forEach(q => {
      const userChoice = state.exam.userAnswers[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      if (isCorrect) totalScore++;

      if (q.section === 'vocab') { vocabTotal++; if (isCorrect) vocabScore++; }
      else if (q.section === 'grammar') { grammarTotal++; if (isCorrect) grammarScore++; }
      else if (q.section === 'reading') { readingTotal++; if (isCorrect) readingScore++; }
      else if (q.section === 'culture') { cultureTotal++; if (isCorrect) cultureScore++; }
      else if (q.section === 'listening') { listeningTotal++; if (isCorrect) listeningScore++; }
    });

    const percent = Math.round((totalScore / (currentQuestions.length || 1)) * 100);
    let cefrEvaluation = 'CEFR B1 (Good Effort - ควรทบทวนจุดที่ผิด)';
    if (percent >= 80) cefrEvaluation = 'CEFR B2 (Advanced Mastery - ยอดเยี่ยมมาก!)';
    else if (percent >= 60) cefrEvaluation = 'CEFR B1+ (Competent - ผ่านเกณฑ์มาตรฐาน)';

    // Save exam record
    state.exam.history.push({
      date: new Date().toLocaleDateString('th-TH'),
      time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
      topicTitle: activeTopic.titleEn,
      score: totalScore,
      total: currentQuestions.length,
      percent,
      secondsSpent: state.exam.timerSeconds
    });
    saveStorage();

    // Show score modal
    document.getElementById('resultScoreNum').textContent = totalScore;
    document.getElementById('resultScoreTotal').textContent = `/ ${currentQuestions.length}`;
    
    const breakdownContainer = document.getElementById('sectionScoresRow');
    if (breakdownContainer) {
      breakdownContainer.innerHTML = `
        ${vocabTotal > 0 ? `
          <div class="section-score-box">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Vocabulary</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: var(--vocab-accent);">${vocabScore}/${vocabTotal}</div>
          </div>
        ` : ''}
        ${grammarTotal > 0 ? `
          <div class="section-score-box">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Grammar</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: var(--grammar-accent);">${grammarScore}/${grammarTotal}</div>
          </div>
        ` : ''}
        ${readingTotal > 0 ? `
          <div class="section-score-box">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Reading</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: var(--reading-accent);">${readingScore}/${readingTotal}</div>
          </div>
        ` : ''}
        ${cultureTotal > 0 ? `
          <div class="section-score-box">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Culture Focus</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: #10b981;">${cultureScore}/${cultureTotal}</div>
          </div>
        ` : ''}
        ${listeningTotal > 0 ? `
          <div class="section-score-box">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Listening & Speaking</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: #ec4899;">${listeningScore}/${listeningTotal}</div>
          </div>
        ` : ''}
      `;
    }

    const modalTitle = document.getElementById('scoreModalTitle');
    if (modalTitle) {
      modalTitle.textContent = `ผลการทดสอบ: ${activeTopic.titleEn}`;
    }

    const modalFeedback = document.getElementById('scoreModalFeedback');
    if (modalFeedback) {
      modalFeedback.innerHTML = `
        <div style="margin-top: 0.5rem; font-size: 0.95rem; font-weight: 700; color: var(--brand-primary);">${cefrEvaluation}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">ความถูกต้อง ${percent}% (ใช้เวลา ${formatTimer(state.exam.timerSeconds)})</div>
      `;
    }

    document.getElementById('scoreModalBackdrop').classList.add('open');
    document.getElementById('scoreResultModal').classList.add('open');
  }

  function closeScoreModal() {
    document.getElementById('scoreModalBackdrop').classList.remove('open');
    document.getElementById('scoreResultModal').classList.remove('open');
    renderExam();
  }

  function retryWrongAnswers() {
    closeScoreModal();
    state.exam.filterSection = 'wrong';
    state.exam.currentIndex = 0;
    renderExam();
  }

  function retakeExam() {
    state.exam.isSubmitted = false;
    state.exam.userAnswers = {};
    state.exam.flaggedSet.clear();
    state.exam.currentIndex = 0;
    state.exam.timerSeconds = 0;
    state.exam.filterSection = 'all';
    startExamTimer();
    renderExam();
    showToast('รีเซ็ตข้อสอบแล้ว เริ่มทำใหม่ได้เลย!');
  }

  // ================= 7. PROGRESS & REVIEW =================
  function renderProgressReview() {
    const container = document.getElementById('tab-progress');
    if (!container) return;

    const totalVocab = VOCAB_DATA.length;
    const learnedCount = state.vocab.learnedSet.size;
    const savedCount = state.vocab.savedSet.size;
    const unlearnedCount = totalVocab - learnedCount;

    // Calculate wrong topics from latest test
    let wrongTopics = [];
    if (state.exam.history.length > 0) {
      EXAM_DATA.forEach(q => {
        const ans = state.exam.userAnswers[q.id];
        if (ans !== undefined && ans !== q.correctAnswer) {
          wrongTopics.push({
            qNum: q.questionNumber,
            section: q.section,
            unit: q.unit,
            question: q.question
          });
        }
      });
    }

    // Saved words list
    const savedWords = VOCAB_DATA.filter(w => state.vocab.savedSet.has(w.id));

    container.innerHTML = `
      <div class="page-hero" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%);">
        <div class="hero-content">
          <h2>Progress & Review</h2>
          <p>ติดตามความคืบหน้าการเรียนรู้ คะแนนแบบทดสอบย้อนหลัง คำศัพท์ที่บันทึกไว้สำหรับทบทวน และการระบุจุดอ่อนที่ต้องเสริมความแม่นยำ</p>
        </div>
      </div>

      <div class="progress-grid">
        <!-- Vocabulary Mastery Card -->
        <div class="card">
          <h3 style="font-size: 1.15rem; margin-bottom: 1rem;">📊 สถานะการจำคำศัพท์ (Vocabulary Mastery)</h3>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.85rem;">
            <span>เรียนรู้แล้ว (${learnedCount}/${totalVocab})</span>
            <span style="font-weight: 700; color: var(--vocab-accent);">${Math.round((learnedCount / totalVocab) * 100)}%</span>
          </div>
          <div class="stat-progress-bar" style="margin-bottom: 1.25rem;">
            <div class="stat-progress-fill fill-vocab" style="width: ${Math.round((learnedCount / totalVocab) * 100)}%"></div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; text-align: center;">
            <div style="background: var(--bg-tertiary); padding: 0.85rem; border-radius: 10px;">
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--vocab-accent);">${learnedCount}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">จำได้แล้ว</div>
            </div>
            <div style="background: var(--bg-tertiary); padding: 0.85rem; border-radius: 10px;">
              <div style="font-size: 1.4rem; font-weight: 800; color: #f59e0b;">${savedCount}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">บันทึกทบทวน</div>
            </div>
            <div style="background: var(--bg-tertiary); padding: 0.85rem; border-radius: 10px;">
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-muted);">${unlearnedCount}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">ต้องเรียนเพิ่ม</div>
            </div>
          </div>
        </div>

        <!-- Exam History Card -->
        <div class="card">
          <h3 style="font-size: 1.15rem; margin-bottom: 1rem;">🎯 ประวัติคะแนนสอบล่าสุด (Exam Performance)</h3>
          ${state.exam.history.length === 0 ? `
            <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
              <p>ยังไม่มีประวัติการส่งข้อสอบ</p>
              <button class="btn btn-sm btn-primary" style="margin-top: 0.75rem;" onclick="window.app.switchTab('exam')">
                เริ่มทำข้อสอบจำลอง
              </button>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${state.exam.history.slice(-3).reverse().map((h, i) => `
                <div style="padding: 0.75rem 1rem; background: var(--bg-tertiary); border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="font-weight: 700; font-size: 0.95rem;">คะแนน ${h.score}/${h.total} (${Math.round((h.score / h.total) * 100)}%)</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${h.date} ${h.time} | เวลาที่ใช้: ${Math.floor(h.secondsSpent / 60)}m ${h.secondsSpent % 60}s</div>
                  </div>
                  <div style="display: flex; gap: 0.4rem; font-size: 0.75rem;">
                    <span class="badge badge-vocab">V: ${h.vocabScore}/15</span>
                    <span class="badge badge-grammar">G: ${h.grammarScore}/15</span>
                    <span class="badge badge-reading">R: ${h.readingScore}/10</span>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>

      <!-- Frequent Mistakes / Weak Topics -->
      ${wrongTopics.length > 0 ? `
        <div class="card" style="margin-bottom: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="font-size: 1.15rem; color: var(--danger);">⚠️ หัวข้อที่ทำผิดในการสอบล่าสุด (${wrongTopics.length} ข้อ)</h3>
            <button class="btn btn-sm btn-danger" onclick="window.app.retryWrongAnswersFromProgress()">
              ทำแบบทดสอบเฉพาะข้อที่ผิด
            </button>
          </div>
          <div class="weakness-card-list">
            ${wrongTopics.map(w => `
              <div class="weakness-item">
                <div>
                  <div style="font-weight: 600; font-size: 0.9rem;">ข้อ ${w.qNum}: ${w.question}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Section: ${w.section.toUpperCase()} | Unit ${w.unit}
                  </div>
                </div>
                <button class="btn btn-sm btn-outline" onclick="window.app.reviewSpecificQuestion(${w.qNum - 1})">
                  ดูข้อนี้ →
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Saved Vocabulary List -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h3 style="font-size: 1.15rem;">⭐ คำศัพท์ที่บันทึกไว้สำหรับทบทวน (${savedWords.length})</h3>
          <button class="btn btn-sm btn-outline" onclick="window.app.reviewSavedAsFlashcards()">
            ฝึกด้วย Flashcards
          </button>
        </div>

        ${savedWords.length === 0 ? `
          <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">
            ยังไม่มีคำศัพท์ที่บันทึกไว้ สามารถกดปุ่ม ★ ที่การ์ดคำศัพท์เพื่อบันทึกมาไว้หน้านี้
          </div>
        ` : `
          <div class="saved-vocab-list">
            ${savedWords.map(w => `
              <div style="padding: 0.85rem; background: var(--bg-tertiary); border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 700; color: var(--brand-primary);">${w.word}</div>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">${w.thaiMeaning}</div>
                </div>
                <button class="icon-btn active-star" onclick="window.app.toggleSaveVocab('${w.id}'); window.app.renderProgressReview();">
                  ★
                </button>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  function reviewSavedAsFlashcards() {
    state.vocab.typeFilter = 'saved';
    state.vocab.viewMode = 'flashcards';
    switchTab('vocab');
  }

  function retryWrongAnswersFromProgress() {
    state.exam.filterSection = 'wrong';
    state.exam.currentIndex = 0;
    switchTab('exam');
  }

  function reviewSpecificQuestion(idx) {
    state.exam.currentIndex = idx;
    switchTab('exam');
  }

  // ================= Global App Interface =================
  window.app = {
    state,
    switchTab,
    applyTheme,
    toggleSaveVocab,
    toggleLearnVocab,
    toggleGrammarTopic,
    answerMiniQuiz,
    switchPassage,
    toggleAnalysisSection,
    openVocabPopover,
    closeVocabPopover,
    switchCsSection,
    openQuickReview,
    selectExamOption,
    selectExamUnit,
    selectExamTopic,
    startTopicExam,
    resetExamFilters,
    jumpToQuestion,
    openSubmitModal,
    closeSubmitModal,
    confirmSubmitExam,
    closeScoreModal,
    retryWrongAnswers,
    retakeExam,
    renderProgressReview,
    reviewSavedAsFlashcards,
    retryWrongAnswersFromProgress,
    reviewSpecificQuestion
  };

  // ================= App Initialization =================
  document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    applyTheme(state.theme);

    // Header buttons
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.onclick = () => {
        applyTheme(state.theme === 'light' ? 'dark' : 'light');
      };
    }

    // Nav tabs click
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.onclick = () => switchTab(btn.dataset.tab);
    });

    document.querySelectorAll('.mobile-nav-item').forEach(btn => {
      btn.onclick = () => switchTab(btn.dataset.tab);
    });

    // Logo click to go to dashboard
    const logoGroup = document.querySelector('.logo-group');
    if (logoGroup) {
      logoGroup.onclick = () => switchTab('dashboard');
    }

    // Initial render
    switchTab('dashboard');
  });

})();
