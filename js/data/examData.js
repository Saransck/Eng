// Complete Multi-Topic Exam Dataset for CEFR B1-B2 English Exam Prep
// Extracted strictly from ALL exercises and exams in Units 4, 5, and 6

const EXAM_TOPICS = [
  { id: "all", unit: "all", titleEn: "Full B1-B2 Mock Exam", titleTh: "รวมทุกบท ทุกหัวข้อ (Comprehensive Mock Exam)", exerciseRef: "All Units (Ex 1–11)", icon: "🌟" },
  
  // UNIT 4 TOPICS
  { id: "u4-vocab-benefits", unit: 4, titleEn: "Workplace Vocab & Benefits", titleTh: "คำศัพท์สถานที่ทำงาน & สวัสดิการ", exerciseRef: "Unit 4, Ex 1 & 2", icon: "🏢" },
  { id: "u4-meeting-lang", unit: 4, titleEn: "Meeting Language & Phrases", titleTh: "สำนวนภาษาและวัตถุประสงค์การประชุม", exerciseRef: "Unit 4, Ex 3", icon: "💬" },
  { id: "u4-phrasal-verbs", unit: 4, titleEn: "Phrasal Verbs in Action", titleTh: "กริยาวลีแบบแยกได้ & แยกไม่ได้", exerciseRef: "Unit 4, Ex 4 & 5", icon: "🔄" },
  { id: "u4-future-forms", unit: 4, titleEn: "Future Forms & Work Plans", titleTh: "การใช้ Tense วางแผนอนาคตและนัดหมาย", exerciseRef: "Unit 4, Ex 6", icon: "⏳" },
  { id: "u4-reading", unit: 4, titleEn: "Reading: Job Satisfaction", titleTh: "บทอ่านความพึงพอใจในงานและปัจจัยความสุข", exerciseRef: "Unit 4, Ex 7 & 8", icon: "📊" },
  { id: "u4-conditions", unit: 4, titleEn: "Work Conditions & Benefits", titleTh: "เงื่อนไขการทำงานและสวัสดิการของ Alisa", exerciseRef: "Unit 4, Ex 9 & 10", icon: "💼" },

  // UNIT 5 TOPICS
  { id: "u5-signposting", unit: 5, titleEn: "Presentation Signposting", titleTh: "ถ้อยคำบอกทิศทางนำเสนอและโครงสร้าง", exerciseRef: "Unit 5, Ex 1", icon: "🗣️" },
  { id: "u5-vocab", unit: 5, titleEn: "Presentation Equipment & Advanced Vocab", titleTh: "คำศัพท์และอุปกรณ์นำเสนอระดับสูง", exerciseRef: "Unit 5, Ex 2 & 3", icon: "🎯" },
  { id: "u5-so-such", unit: 5, titleEn: "Grammar: So vs. Such", titleTh: "ไวยากรณ์ So vs. Such และ That Clauses", exerciseRef: "Unit 5, Ex 4 & 5", icon: "⚖️" },
  { id: "u5-discourse-markers", unit: 5, titleEn: "Grammar: Discourse Markers", titleTh: "คำเชื่อม Result, Contrast, Addition", exerciseRef: "Unit 5, Ex 6", icon: "🔗" },
  { id: "u5-reading", unit: 5, titleEn: "Reading: Dealing with Nervousness", titleTh: "บทอ่านการรับมือความประหม่าก่อนขึ้นพูด", exerciseRef: "Unit 5, Ex 7 & 8", icon: "🧘" },
  { id: "u5-dos-donts", unit: 5, titleEn: "Presentation Do's & Don'ts", titleTh: "ข้อควรทำและไม่ควรทำในการนำเสนอ (Nicole Shaw)", exerciseRef: "Unit 5, Ex 9 & 10", icon: "👔" },

  // UNIT 6 TOPICS
  { id: "u6-culture-context", unit: 6, titleEn: "High vs. Low Context Cultures", titleTh: "วัฒนธรรมบริบทสูง vs บริบทต่ำและลักษณะตรงข้าม", exerciseRef: "Unit 6, Ex 1, 2 & 3", icon: "🌏" },
  { id: "u6-culture-vocab", unit: 6, titleEn: "Multicultural Workplace & Passage Vocab", titleTh: "คำศัพท์วัฒนธรรมองค์กรและบทอ่าน", exerciseRef: "Unit 6, Ex 4 & 9", icon: "🤝" },
  { id: "u6-reported-speech", unit: 6, titleEn: "Grammar: Reported Speech", titleTh: "การรายงานคำพูดประโยคบอกเล่าและคำถาม", exerciseRef: "Unit 6, Ex 5 & 6", icon: "📢" },
  { id: "u6-reading", unit: 6, titleEn: "Reading: Different Cultures in Business", titleTh: "บทอ่านมารยาทข้ามวัฒนธรรมและการไม่เหมารวม", exerciseRef: "Unit 6, Ex 7 & 8", icon: "🌐" },
  { id: "u6-gift-giving", unit: 6, titleEn: "Global Gift-Giving Customs", titleTh: "ธรรมเนียมการให้ของขวัญทางธุรกิจทั่วโลก (Rob Hall)", exerciseRef: "Unit 6, Ex 10 & 11", icon: "🎁" }
];

const EXAM_DATA = [
  // =========================================================================
  // UNIT 4 - TOPIC 1: WORKPLACE VOCABULARY & BENEFITS (Ex 1 & 2)
  // =========================================================================
  {
    id: "u4-v-01",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 1 (Q2)",
    section: "vocab",
    question: "My job includes making travel \_\_\_\_\_\_\_\_\_\_ for my boss before international conferences.",
    options: ["arrangements", "interruptions", "venues", "agendas"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'make travel arrangements' หมายถึง การจัดการหรือเตรียมการเดินทาง (Unit 4, Ex 1 ข้อ 2)",
    signalKeywords: "making travel ... for boss -> arrangements"
  },
  {
    id: "u4-v-02",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 1 (Q5)",
    section: "vocab",
    question: "Could you please take the \_\_\_\_\_\_\_\_\_\_ of the executive meeting, Jane?",
    options: ["speeches", "venues", "minutes", "agendas"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: 'take the minutes' หมายถึง จดบันทึกรายงานการประชุมอย่างเป็นทางการ (Unit 4, Ex 1 ข้อ 5)",
    signalKeywords: "take the ... of the meeting -> minutes"
  },
  {
    id: "u4-v-03",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 1 (Q3)",
    section: "vocab",
    question: "Don't forget to book a suitable meeting \_\_\_\_\_\_\_\_\_\_ for next month's regional conference.",
    options: ["venue", "interruption", "mailing list", "presentation"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'venue' หมายถึง สถานที่จัดงาน/สถานที่ประชุม (book a meeting venue) (Unit 4, Ex 1 ข้อ 3)",
    signalKeywords: "book a meeting ... for conference -> venue"
  },
  {
    id: "u4-v-04",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 1 (Q1)",
    section: "vocab",
    question: "He ignored her \_\_\_\_\_\_\_\_\_\_ and carried on talking about the sales report.",
    options: ["interruption", "venue", "minutes", "pension"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'interruption' หมายถึง การพูดแทรกหรือขัดจังหวะ 'ignored her interruption' (Unit 4, Ex 1 ข้อ 1)",
    signalKeywords: "ignored her ... and carried on talking -> interruption"
  },
  {
    id: "u4-v-05",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 1 (Q8)",
    section: "vocab",
    question: "The urgent issue of employee safety at work must be put on the \_\_\_\_\_\_\_\_\_\_ again.",
    options: ["agenda", "handout", "incentive", "interruption"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'put on the agenda' หมายถึง บรรจุเข้าสู่วาระการประชุม (Unit 4, Ex 1 ข้อ 8)",
    signalKeywords: "issue must be put on the ... -> agenda"
  },
  {
    id: "u4-v-06",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 2 (Q1)",
    section: "vocab",
    question: "Which company benefit is defined as 'time off work per year with full pay'?",
    options: ["annual paid leave", "unpaid leave", "sick leave", "maternity leave"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'annual paid leave' คือ วันลาพักร้อนประจำปีที่ได้รับค่าจ้างเต็มจำนวน (Unit 4, Ex 2 ข้อ 1)",
    signalKeywords: "time off work per year with full pay -> annual paid leave"
  },
  {
    id: "u4-v-07",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 2 (Q3)",
    section: "vocab",
    question: "Which phrase means 'time off work for the father of a new baby'?",
    options: ["maternity leave", "paternity leave", "educational incentives", "pension plan"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'paternity leave' คือ วันลาหยุดงานสำหรับบิดาเพื่อดูแลบุตรแรกเกิด (Unit 4, Ex 2 ข้อ 3)",
    signalKeywords: "time off work for the father of a new baby -> paternity leave"
  },
  {
    id: "u4-v-08",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 2 (Q4)",
    section: "vocab",
    question: "A company \_\_\_\_\_\_\_\_\_\_ is defined as 'a fund for employees in their old age after retirement'.",
    options: ["pension plan", "bonus", "disability insurance", "life insurance"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'pension plan' คือ กองทุนเงินบำเหน็จบำนาญสำหรับพนักงานในวัยเกษียณ (Unit 4, Ex 2 ข้อ 4)",
    signalKeywords: "fund for employees in old age -> pension plan"
  },
  {
    id: "u4-v-09",
    unit: 4,
    topicId: "u4-vocab-benefits",
    exerciseRef: "Unit 4, Ex 2 (Q10)",
    section: "vocab",
    question: "'Educational incentives' provided by a company refer to \_\_\_\_\_\_\_\_\_\_.",
    options: [
      "income when one is unable to work due to disability",
      "a fund for training or education to advance a career path",
      "money paid for costs related to teeth and gums",
      "time off work to have a baby"
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'educational incentives' หมายถึง ทุนสนับสนุนการศึกษาหรือฝึกอบรมเพื่อความก้าวหน้าในสายอาชีพ (Unit 4, Ex 2 ข้อ 10)",
    signalKeywords: "educational incentives -> fund for training or education"
  },

  // =========================================================================
  // UNIT 4 - TOPIC 2: MEETING LANGUAGE & PHRASES (Ex 3)
  // =========================================================================
  {
    id: "u4-m-01",
    unit: 4,
    topicId: "u4-meeting-lang",
    exerciseRef: "Unit 4, Ex 3 (Q2 & 11)",
    section: "vocab",
    question: "In a business meeting, what is the purpose of saying 'Would you like to begin?' or 'Let's get started'?",
    options: ["To begin a meeting", "To interrupt politely", "To summarize points", "To check understanding"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ทั้งสองประโยคใช้สำหรับเปิดการประชุม (To begin a meeting) (Unit 4, Ex 3 ข้อ 2, 11)",
    signalKeywords: "Would you like to begin / Let's get started -> To begin a meeting"
  },
  {
    id: "u4-m-02",
    unit: 4,
    topicId: "u4-meeting-lang",
    exerciseRef: "Unit 4, Ex 3 (Q4)",
    section: "vocab",
    question: "When a participant asks 'Can I interrupt there?', what is their immediate purpose?",
    options: ["To stop an interruption", "To interrupt", "To sum up", "To ask for agreement"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ใช้สำหรับขอแทรกหรือขัดจังหวะการพูดอย่างสุภาพ (To interrupt) (Unit 4, Ex 3 ข้อ 4)",
    signalKeywords: "Can I interrupt there? -> To interrupt"
  },
  {
    id: "u4-m-03",
    unit: 4,
    topicId: "u4-meeting-lang",
    exerciseRef: "Unit 4, Ex 3 (Q5)",
    section: "vocab",
    question: "If a speaker says 'Just let me finish, please.', what purpose does it serve?",
    options: ["To begin a meeting", "To return to the main topic", "To stop an interruption", "To check understanding"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: ใช้เพื่อหยุดคนที่กำลังจะพูดแทรก โดยขอพูดให้จบก่อน (To stop an interruption) (Unit 4, Ex 3 ข้อ 5)",
    signalKeywords: "Just let me finish, please -> To stop an interruption"
  },
  {
    id: "u4-m-04",
    unit: 4,
    topicId: "u4-meeting-lang",
    exerciseRef: "Unit 4, Ex 3 (Q7)",
    section: "vocab",
    question: "What is the purpose of the phrase: 'Can we get back to the main point?'",
    options: ["To go on to another topic", "To return to the main topic", "To ask for agreement", "To sum up"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ใช้ดึงการสนทนากลับเข้าสู่ประเด็นหลัก (To return to the main topic) (Unit 4, Ex 3 ข้อ 7)",
    signalKeywords: "get back to the main point -> To return to the main topic"
  },
  {
    id: "u4-m-05",
    unit: 4,
    topicId: "u4-meeting-lang",
    exerciseRef: "Unit 4, Ex 3 (Q6 & 9)",
    section: "vocab",
    question: "The phrases 'Are you with me?' and 'Are you saying that...?' are used primarily to \_\_\_\_\_\_\_\_\_\_.",
    options: ["check understanding", "interrupt the speaker", "end the meeting", "demand agreement"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ใช้สำหรับเช็กความเข้าใจของผู้ฟัง ว่าตามทันและเข้าใจถูกต้องหรือไม่ (To check understanding) (Unit 4, Ex 3 ข้อ 6, 9)",
    signalKeywords: "Are you with me / Are you saying that -> To check understanding"
  },

  // =========================================================================
  // UNIT 4 - TOPIC 3: PHRASAL VERBS IN ACTION (Ex 4 & 5)
  // =========================================================================
  {
    id: "u4-pv-01",
    unit: 4,
    topicId: "u4-phrasal-verbs",
    exerciseRef: "Unit 4, Ex 4 (Q4)",
    section: "grammar",
    question: "The phrasal verb 'call off' means to \_\_\_\_\_\_\_\_\_\_.",
    options: ["cancel or stop doing something", "investigate the facts", "refuse an offer", "mention a subject"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'call off' แปลว่า ยกเลิก (to cancel or stop doing something) (Unit 4, Ex 4 ข้อ 4)",
    signalKeywords: "call off = to cancel"
  },
  {
    id: "u4-pv-02",
    unit: 4,
    topicId: "u4-phrasal-verbs",
    exerciseRef: "Unit 4, Ex 4 (Q2)",
    section: "grammar",
    question: "When police or auditors 'look into' a problem, they \_\_\_\_\_\_\_\_\_\_.",
    options: [
      "try to find out the truth or examine the facts",
      "cancel the investigation completely",
      "suggest a creative solution",
      "refuse to cooperate"
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'look into' แปลว่า ตรวจสอบข้อเท็จจริง (to examine the facts / find out truth) (Unit 4, Ex 4 ข้อ 2)",
    signalKeywords: "look into = examine / investigate"
  },
  {
    id: "u4-pv-03",
    unit: 4,
    topicId: "u4-phrasal-verbs",
    exerciseRef: "Unit 4, Ex 4 (Q3)",
    section: "grammar",
    question: "The research team managed to \_\_\_\_\_\_\_\_\_\_ a completely new strategy for marketing.",
    options: ["come up with", "turn down", "look after", "tell off"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'come up with' แปลว่า คิดค้นหรือเสนอไอเดีย/แผนงานใหม่ (Unit 4, Ex 4 ข้อ 3)",
    signalKeywords: "suggest or think of an idea/plan -> come up with"
  },
  {
    id: "u4-pv-04",
    unit: 4,
    topicId: "u4-phrasal-verbs",
    exerciseRef: "Unit 4, Ex 4 (Q5)",
    section: "grammar",
    question: "She had to \_\_\_\_\_\_\_\_\_\_ the promotion because it required relocating abroad.",
    options: ["turn down", "come across", "look into", "bring up"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'turn down' แปลว่า ปฏิเสธข้อเสนอ (to refuse to accept) (Unit 4, Ex 4 ข้อ 5)",
    signalKeywords: "turn down = to refuse or decline"
  },
  {
    id: "u4-pv-05",
    unit: 4,
    topicId: "u4-phrasal-verbs",
    exerciseRef: "Unit 4, Focus 1",
    section: "grammar",
    question: "Which of the following is a NON-SEPARABLE phrasal verb (cannot be separated by an object)?",
    options: ["look after", "call off", "bring up", "turn down"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'look after' เป็น Non-separable phrasal verb ห้ามนำกรรมมาคั่นตรงกลาง เช่น ห้ามพูด 'look the baby after ❌' (Unit 4, Focus 1)",
    signalKeywords: "Non-separable: look after, look into, look forward to"
  },
  {
    id: "u4-pv-06",
    unit: 4,
    topicId: "u4-phrasal-verbs",
    exerciseRef: "Unit 4, Focus 1",
    section: "grammar",
    question: "Identify the grammatically correct sentence involving a pronoun with 'call off':",
    options: [
      "The manager called off it immediately.",
      "The manager called it off immediately.",
      "The manager it called off immediately.",
      "The manager called off them immediately."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'call off' เป็น Separable phrasal verb หากกรรมเป็น Pronoun (it/them) ต้องวางคั่นกลางเสมอ: 'called it off' (Unit 4, Focus 1)",
    signalKeywords: "separable + pronoun -> verb + pronoun + particle (called it off)"
  },
  {
    id: "u4-pv-07",
    unit: 4,
    topicId: "u4-phrasal-verbs",
    exerciseRef: "Unit 4, Ex 5 (Q1)",
    section: "grammar",
    question: "We look forward to \_\_\_\_\_\_\_\_\_\_ your executive team next week.",
    options: ["meet", "meeting", "met", "have met"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: สำนวน 'look forward to' ต้องตามด้วย Gerund (V-ing) หรือคำนามเสมอ -> 'meeting' (Unit 4, Ex 5 ข้อ 1)",
    signalKeywords: "look forward to + V-ing -> meeting"
  },

  // =========================================================================
  // UNIT 4 - TOPIC 4: FUTURE FORMS & PLANS (Ex 6)
  // =========================================================================
  {
    id: "u4-ff-01",
    unit: 4,
    topicId: "u4-future-forms",
    exerciseRef: "Unit 4, Ex 6 (Q12)",
    section: "grammar",
    question: "We are leaving at 9 tomorrow because our train \_\_\_\_\_\_\_\_\_\_ at 10.30.",
    options: ["leaves", "is leaving", "will leave", "is going to leave"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ตารางเวลาการเดินทางที่กำหนดไว้แน่นอน (Timetabled schedule) ต้องใช้ Present Simple (Subject + V1) เสมอ -> 'leaves' (Unit 4, Ex 6 ข้อ 12)",
    signalKeywords: "train schedule with fixed time -> Present Simple (leaves)"
  },
  {
    id: "u4-ff-02",
    unit: 4,
    topicId: "u4-future-forms",
    exerciseRef: "Unit 4, Ex 6 (Q5)",
    section: "grammar",
    question: "I must leave now. I \_\_\_\_\_\_\_\_\_\_ a meeting with the president this afternoon.",
    options: ["am having", "will have had", "have had", "had"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: การนัดหมายล่วงหน้าที่กำหนดวันเวลาสถานที่ไว้แล้วในอนาคตอันใกล้ (Fixed arrangement) ใช้ Present Continuous -> 'am having' (Unit 4, Ex 6 ข้อ 5)",
    signalKeywords: "arrangement in near future (this afternoon) -> Present Continuous (am having)"
  },
  {
    id: "u4-ff-03",
    unit: 4,
    topicId: "u4-future-forms",
    exerciseRef: "Unit 4, Ex 6 (Q7)",
    section: "grammar",
    question: "The ink cartridge in the printer is nearly finished. I \_\_\_\_\_\_\_\_\_\_ a new one for you.",
    options: ["will get", "am getting", "am going to get", "got"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: การตัดสินใจทันทีหรือการอาสาช่วยเหลือในขณะพูด (Spontaneous decision/offer) ต้องใช้ Future Simple (will + V1) -> 'will get' (Unit 4, Ex 6 ข้อ 7)",
    signalKeywords: "spontaneous decision/offer -> will + V1 (will get)"
  },
  {
    id: "u4-ff-04",
    unit: 4,
    topicId: "u4-future-forms",
    exerciseRef: "Unit 4, Ex 6 (Q4)",
    section: "grammar",
    question: "Tommy decided that he \_\_\_\_\_\_\_\_\_\_ quit his job and start his own business.",
    options: ["is going to", "will", "would", "is"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: มีการตัดสินใจวางแผนไว้ล่วงหน้าก่อนพูด (Prior intention/decision) ใช้ 'be going to' -> 'is going to quit' (Unit 4, Ex 6 ข้อ 4)",
    signalKeywords: "decided that (prior decision) -> is going to"
  },
  {
    id: "u4-ff-05",
    unit: 4,
    topicId: "u4-future-forms",
    exerciseRef: "Unit 4, Page 50 (Remarks)",
    section: "grammar",
    question: "Which adverb indicates the STRONGEST degree of certainty?",
    options: ["definitely", "probably", "perhaps", "maybe"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'definitely' (แน่นอนที่สุด 100%) มีระดับความแน่นอนสูงกว่า probably (70-80%) และ perhaps/maybe (50%) (Unit 4, Page 50)",
    signalKeywords: "degree of certainty: definitely > probably > perhaps/maybe"
  },

  // =========================================================================
  // UNIT 4 - TOPIC 5: READING - JOB SATISFACTION (Ex 7 & 8)
  // =========================================================================
  {
    id: "u4-rd-01",
    unit: 4,
    topicId: "u4-reading",
    exerciseRef: "Unit 4, Ex 7 (Q1)",
    section: "reading",
    passageTitle: "Passage 1: Job Satisfaction",
    question: "There are several factors that affect employees' job satisfaction, EXCEPT for \_\_\_\_\_\_\_\_\_\_.",
    options: ["work benefits", "job positions", "colleagues", "unfriendly supervisor"],
    correctAnswer: 3,
    explanationThai: "คำตอบคือข้อ D: ในย่อหน้าที่ 2 ระบุว่าสวัสดิการ (benefits), ตำแหน่ง (positions), และเพื่อนร่วมงาน (coworkers) เป็นปัจจัยสร้างความพึงพอใจ แต่ 'unfriendly supervisor' เป็นสาเหตุของความไม่พึงพอใจ (Unit 4, Ex 7 ข้อ 1)",
    evidenceSentence: "Sixty percent of workers think that coworkers have the most influence... having a friendly boss (69.53%)."
  },
  {
    id: "u4-rd-02",
    unit: 4,
    topicId: "u4-reading",
    exerciseRef: "Unit 4, Ex 7 (Q2)",
    section: "reading",
    passageTitle: "Passage 1: Job Satisfaction",
    question: "In the passage, \_\_\_\_\_\_\_\_\_\_ can best be substituted for the word 'engaged'.",
    options: ["suspected", "involved", "free", "passive"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'engaged' ในบริบทความผูกพันในที่ทำงานตรงกับคำว่า 'involved' (มีส่วนร่วมและทุ่มเท) (Unit 4, Ex 7 ข้อ 2)",
    evidenceSentence: "Gallup research revealed that only 34.0% of US employees feel engaged in a workplace."
  },
  {
    id: "u4-rd-03",
    unit: 4,
    topicId: "u4-reading",
    exerciseRef: "Unit 4, Ex 7 (Q3)",
    section: "reading",
    passageTitle: "Passage 1: Job Satisfaction",
    question: "According to statistics, 75.0% of employees quit their jobs primarily due to \_\_\_\_\_\_\_\_\_\_.",
    options: ["managerial disputes", "more training opportunities", "feeling valued", "work engagement"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: พนักงานถึง 75% ลาออกเนื่องจากความขัดแย้งกับผู้บริหาร (managerial disagreements / managerial disputes) (Unit 4, Ex 7 ข้อ 3)",
    evidenceSentence: "Contrarily, the statistics show that 75.0% of employees quit their jobs due to managerial disagreements."
  },
  {
    id: "u4-rd-04",
    unit: 4,
    topicId: "u4-reading",
    exerciseRef: "Unit 4, Ex 7 (Q4)",
    section: "reading",
    passageTitle: "Passage 1: Job Satisfaction",
    question: "Forty percent of 'those' 35 and older report complete satisfaction. 'Those' refers to \_\_\_\_\_\_\_\_\_\_.",
    options: ["statistics", "priorities", "age ranges", "workers"],
    correctAnswer: 3,
    explanationThai: "คำตอบคือข้อ D: คำว่า 'those' แทนคำนาม 'workers' ที่พูดถึงในประโยคก่อนหน้า (Unit 4, Ex 7 ข้อ 4)",
    evidenceSentence: "...while 40.0% of those 35 and older report complete satisfaction with their present jobs."
  },
  {
    id: "u4-rd-05",
    unit: 4,
    topicId: "u4-reading",
    exerciseRef: "Unit 4, Ex 7 (Q5)",
    section: "reading",
    passageTitle: "Passage 1: Job Satisfaction",
    question: "In the passage, 'severity' can be replaced by the word \_\_\_\_\_\_\_\_\_\_.",
    options: ["flexibility", "hardness", "gentleness", "tolerance"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: คำว่า 'severity' (ความร้ายแรง/รุนแรงของปัญหา) ตรงกับคำว่า 'hardness' ในแบบฝึกหัด (Unit 4, Ex 7 ข้อ 5)",
    evidenceSentence: "Although job satisfaction continues to grow, employers don't care enough or fail to understand the severity of the problem."
  },
  {
    id: "u4-cd-01",
    unit: 4,
    topicId: "u4-conditions",
    exerciseRef: "Unit 4, Ex 10 (Q1)",
    section: "listening",
    question: "According to the listening passage about Alisa Boonliang, what is her profession in the electronics company?",
    options: ["Electrician", "Software Programmer", "Engineer", "Administrative Assistant"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: ในแบบฝึกหัดแก้ไขข้อผิด Alisa เป็น 'engineer' (วิศวกร) ไม่ใช่ 'electrician' (ช่างไฟฟ้า) (Unit 4, Ex 10)",
    signalKeywords: "Alisa is an engineer (corrected from electrician)"
  },
  {
    id: "u4-cd-02",
    unit: 4,
    topicId: "u4-conditions",
    exerciseRef: "Unit 4, Ex 10 (Q2 & Q3)",
    section: "listening",
    question: "How long has Alisa worked near London, and what is her husband's nationality?",
    options: [
      "Seven years; Thai husband",
      "Six years; British husband",
      "Five years; American husband",
      "Ten years; Singaporean husband"
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ในบทความที่แก้ไขแล้ว Alisa ทำงานมา 'six years' (6 ปี) และสามีของเธอเป็นคน 'British' (คนอังกฤษ) (Unit 4, Ex 10)",
    signalKeywords: "worked for six years; husband is British"
  },
  {
    id: "u4-cd-03",
    unit: 4,
    topicId: "u4-conditions",
    exerciseRef: "Unit 4, Ex 10 (Q5)",
    section: "listening",
    question: "How often does Alisa receive a company performance bonus?",
    options: ["Twice a year", "Every month", "Once a year", "Every quarter"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: Alisa ได้รับโบนัส 'once a year' (ปีละครั้ง แก้ไขจาก twice a year) (Unit 4, Ex 10)",
    signalKeywords: "gets a bonus once a year"
  },
  {
    id: "u4-cd-04",
    unit: 4,
    topicId: "u4-conditions",
    exerciseRef: "Unit 4, Ex 9 & 10 (Q8)",
    section: "listening",
    question: "Which work schedule arrangement does Alisa have so that she can organize her work to fit her family life?",
    options: ["Regular nine to five", "Flextime", "Night shift only", "Fixed rotational shifts"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: เธอมีข้อตกลงแบบ 'flextime' (เวลาทำงานยืดหยุ่น แก้ไขจาก regular nine to five) จึงจัดสรรเวลาให้ครอบครัวได้ (Unit 4, Ex 9 & 10)",
    signalKeywords: "organize work to fit family life -> flextime"
  },
  {
    id: "u4-cd-05",
    unit: 4,
    topicId: "u4-conditions",
    exerciseRef: "Unit 4, Ex 10 (Q9)",
    section: "listening",
    question: "What leave arrangement did Alisa take when her husband went abroad on business?",
    options: [
      "Two weeks of paid sick leave",
      "A month's unpaid leave",
      "Six months of study leave",
      "Early retirement leave"
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: เธอลา 'a month's unpaid leave' (ลาไม่รับค่าจ้าง 1 เดือน) เพื่อเดินทางไปต่างประเทศกับสามีที่ไปติดต่อธุรกิจ (Unit 4, Ex 10)",
    signalKeywords: "husband went abroad on business -> a month's unpaid leave"
  },
  {
    id: "u4-cd-06",
    unit: 4,
    topicId: "u4-conditions",
    exerciseRef: "Unit 4, Ex 9 & 10 (Q10)",
    section: "listening",
    question: "According to the passage, what retirement support will Alisa have when she is older?",
    options: [
      "No pension plan at all",
      "Only a private investment account",
      "Two pensions: one from the state and one from her company",
      "Only a family inheritance"
    ],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: เมื่อเกษียณเธอจะมีเงินบำนาญ 2 ทาง คือ 'one from the state and one from her company' (จากรัฐและจากบริษัท) (Unit 4, Ex 9 & 10)",
    signalKeywords: "two pensions: one from state, one from company"
  },

  // =========================================================================
  // UNIT 5 - TOPIC 1: PRESENTATION SIGNPOSTING (Ex 1)
  // =========================================================================
  {
    id: "u5-sp-01",
    unit: 5,
    topicId: "u5-signposting",
    exerciseRef: "Unit 5, Ex 1 (Q1)",
    section: "vocab",
    question: "In an introduction: 'Welcome everyone! Let me \_\_\_\_\_\_\_\_\_\_ myself. My name is Wipawee.'",
    options: ["introduce", "recap", "highlight", "interrupt"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: สำนวนการแนะนำตนเอง 'Let me introduce myself.' (Unit 5, Ex 1 ข้อ 1)",
    signalKeywords: "Let me ... myself. My name is -> introduce"
  },
  {
    id: "u5-sp-02",
    unit: 5,
    topicId: "u5-signposting",
    exerciseRef: "Unit 5, Ex 1 (Q2)",
    section: "vocab",
    question: "In an introduction: 'As you can see from the screen, our \_\_\_\_\_\_\_\_\_\_ today is How to track productivity.'",
    options: ["topic", "handout", "trend", "jargon"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: สำนวนบอกหัวข้อ 'our topic today is...' (Unit 5, Ex 1 ข้อ 2)",
    signalKeywords: "our ... today is -> topic"
  },
  {
    id: "u5-sp-03",
    unit: 5,
    topicId: "u5-signposting",
    exerciseRef: "Unit 5, Ex 1 (Q6)",
    section: "vocab",
    question: "When interacting with the audience during the main part, a presenter says: 'Are you all \_\_\_\_\_\_\_\_\_\_ me so far?'",
    options: ["following", "interrupting", "leaving", "agreeing"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: สำนวนถามผู้ฟังว่าตามเนื้อหาทันหรือไม่ 'Are you all following me so far?' (Unit 5, Ex 1 ข้อ 6)",
    signalKeywords: "Are you all ... me so far? -> following"
  },
  {
    id: "u5-sp-04",
    unit: 5,
    topicId: "u5-signposting",
    exerciseRef: "Unit 5, Ex 1 (Q7)",
    section: "vocab",
    question: "To indicate the end of a presentation, say: 'Well, this brings me to the \_\_\_\_\_\_\_\_\_\_ of my talk today.'",
    options: ["end", "outline", "background", "aim"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: สำนวนบอกช่วงท้าย 'brings me to the end of my talk today' (Unit 5, Ex 1 ข้อ 7)",
    signalKeywords: "brings me to the ... of my talk -> end"
  },
  {
    id: "u5-sp-05",
    unit: 5,
    topicId: "u5-signposting",
    exerciseRef: "Unit 5, Ex 1 (Q8)",
    section: "vocab",
    question: "When inviting questions at the end: 'If you have any questions, I'd be pleased to \_\_\_\_\_\_\_\_\_\_ them.'",
    options: ["answer", "ignore", "interrupt", "recap"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'pleased to answer them' ยินดีที่จะตอบคำถาม (Unit 5, Ex 1 ข้อ 8)",
    signalKeywords: "pleased to ... them (questions) -> answer"
  },

  // =========================================================================
  // UNIT 5 - TOPIC 2: CORE & ADVANCED PRESENTATION VOCAB (Ex 2 & 3)
  // =========================================================================
  {
    id: "u5-vc-01",
    unit: 5,
    topicId: "u5-vocab",
    exerciseRef: "Unit 5, Ex 2 (Q1)",
    section: "vocab",
    question: "'Let me start by giving you an \_\_\_\_\_\_\_\_\_\_ of today's presentation.' (A brief introductory summary)",
    options: ["outline", "anecdote", "jargon", "aim"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'outline' หมายถึง โครงร่างหรือบทสรุปเบื้องต้นของเนื้อหา (Unit 5, Ex 2 ข้อ 1)",
    signalKeywords: "brief introductory summary -> outline"
  },
  {
    id: "u5-vc-02",
    unit: 5,
    topicId: "u5-vocab",
    exerciseRef: "Unit 5, Ex 2 (Q2)",
    section: "vocab",
    question: "Printed sheets placed on seats to help participants follow the presentation are called \_\_\_\_\_\_\_\_\_\_.",
    options: ["handouts", "trends", "jargons", "outlines"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'handouts' คือ เอกสารสิ่งพิมพ์ประกอบการบรรยาย (Unit 5, Ex 2 ข้อ 2)",
    signalKeywords: "printed information on seats -> handouts"
  },
  {
    id: "u5-vc-03",
    unit: 5,
    topicId: "u5-vocab",
    exerciseRef: "Unit 5, Ex 2 (Q5)",
    section: "vocab",
    question: "The purpose of this slide is to \_\_\_\_\_\_\_\_\_\_ the importance of quick feedback. (To emphasise or make noticeable)",
    options: ["highlight", "recap", "aim", "bribe"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'highlight' แปลว่า เน้นย้ำให้เห็นเด่นชัด (emphasise) (Unit 5, Ex 2 ข้อ 5)",
    signalKeywords: "emphasise or make noticeable -> highlight"
  },
  {
    id: "u5-vc-04",
    unit: 5,
    topicId: "u5-vocab",
    exerciseRef: "Unit 5, Ex 3 (Q4)",
    section: "vocab",
    question: "Avoid using too much technical \_\_\_\_\_\_\_\_\_\_, as it might confuse non-specialist listeners.",
    options: ["jargon", "rapport", "feedback", "anecdote"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'jargon' คือ ศัพท์เทคนิคเฉพาะวงการที่คนทั่วไปไม่เข้าใจ (Unit 5, Ex 3 ข้อ 4)",
    signalKeywords: "technical language confusing listeners -> jargon"
  },
  {
    id: "u5-vc-05",
    unit: 5,
    topicId: "u5-vocab",
    exerciseRef: "Unit 5, Ex 3 (Q6)",
    section: "vocab",
    question: "A good presenter should be \_\_\_\_\_\_\_\_\_\_, expressing ideas clearly without adding unnecessary details.",
    options: ["concise", "pompous", "aggressive", "anxious"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'concise' แปลว่า สั้น กระชับ ชัดเจน ไม่เยิ่นเย้อ (Unit 5, Ex 3 ข้อ 6)",
    signalKeywords: "clearly without unnecessary details -> concise"
  },
  {
    id: "u5-vc-06",
    unit: 5,
    topicId: "u5-vocab",
    exerciseRef: "Unit 5, Ex 3 (Q8)",
    section: "vocab",
    question: "Building good \_\_\_\_\_\_\_\_\_\_ with your audience helps create a friendly and comfortable atmosphere.",
    options: ["rapport", "jargon", "anxiety", "criticism"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'rapport' (build rapport) หมายถึง การสร้างสัมพันธภาพอันดีและความไว้วางใจกับผู้ฟัง (Unit 5, Ex 3 ข้อ 8)",
    signalKeywords: "friendly and comfortable atmosphere -> rapport"
  },

  // =========================================================================
  // UNIT 5 - TOPIC 3: GRAMMAR - SO VS. SUCH (Ex 4 & 5)
  // =========================================================================
  {
    id: "u5-ss-01",
    unit: 5,
    topicId: "u5-so-such",
    exerciseRef: "Unit 5, Ex 4 (Q1)",
    section: "grammar",
    question: "The speaker was \_\_\_\_\_\_\_\_\_\_ tired that she struggled to finish the Q&A session.",
    options: ["so", "such", "such a", "so much"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: โครงสร้าง 'so + adjective + that' คำว่า 'tired' เป็น adjective ตัวเดียว จึงใช้ 'so' (Unit 5, Ex 4 ข้อ 1)",
    signalKeywords: "so + adj (tired) + that"
  },
  {
    id: "u5-ss-02",
    unit: 5,
    topicId: "u5-so-such",
    exerciseRef: "Unit 5, Ex 4 (Q2)",
    section: "grammar",
    question: "It was \_\_\_\_\_\_\_\_\_\_ slow presentation that half the audience lost interest.",
    options: ["so", "such a", "such", "so much"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: โครงสร้าง 'such a + adj + singular countable noun' คำว่า 'slow presentation' เป็นนามเอกพจน์ จึงใช้ 'such a' (Unit 5, Ex 4 ข้อ 2)",
    signalKeywords: "such a + slow (adj) + presentation (singular noun)"
  },
  {
    id: "u5-ss-03",
    unit: 5,
    topicId: "u5-so-such",
    exerciseRef: "Unit 5, Ex 4 (Q5)",
    section: "grammar",
    question: "We've had \_\_\_\_\_\_\_\_\_\_ terrible feedback that the team decided to postpone the launch.",
    options: ["such", "such a", "so", "so many"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'feedback' เป็นคำนามนับไม่ได้ (uncountable noun) ดังนั้นต้องใช้ 'such' โดยห้ามมี a/an -> 'such terrible feedback' (Unit 5, Ex 4 ข้อ 5)",
    signalKeywords: "such + adj + uncountable noun (terrible feedback)"
  },
  {
    id: "u5-ss-04",
    unit: 5,
    topicId: "u5-so-such",
    exerciseRef: "Unit 5, Ex 4 (Q7)",
    section: "grammar",
    question: "I have \_\_\_\_\_\_\_\_\_\_ much work to do before the deadline that I can't join lunch.",
    options: ["so", "such", "such a", "too"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: เมื่อใช้กับ 'much' หรือ 'many' ต้องใช้คู่กับ 'so' เสมอ ('so much work') (Unit 5, Ex 4 ข้อ 7)",
    signalKeywords: "so + much + uncountable noun (work)"
  },
  {
    id: "u5-ss-05",
    unit: 5,
    topicId: "u5-so-such",
    exerciseRef: "Unit 5, Ex 4 (Q9)",
    section: "grammar",
    question: "There were \_\_\_\_\_\_\_\_\_\_ many people at the seminar that we had to stand at the back.",
    options: ["so", "such", "such a", "very"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'many' ต้องใช้คู่กับ 'so' เสมอ ('so many people') (Unit 5, Ex 4 ข้อ 9)",
    signalKeywords: "so + many + plural countable noun (people)"
  },

  // =========================================================================
  // UNIT 5 - TOPIC 4: GRAMMAR - DISCOURSE MARKERS (Ex 6)
  // =========================================================================
  {
    id: "u5-dm-01",
    unit: 5,
    topicId: "u5-discourse-markers",
    exerciseRef: "Unit 5, Ex 6 (Q1)",
    section: "grammar",
    question: "Social media helps people stay connected. \_\_\_\_\_\_\_\_\_\_, it allows small businesses to reach more customers.",
    options: ["In contrast", "Moreover", "However", "Consequently"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ทั้งสองประโยคพูดถึงข้อดีของ social media เสริมไปในทิศทางเดียวกัน จึงต้องใช้กลุ่ม Addition ('Moreover') (Unit 5, Ex 6 ข้อ 1)",
    signalKeywords: "Adding positive information -> Moreover"
  },
  {
    id: "u5-dm-02",
    unit: 5,
    topicId: "u5-discourse-markers",
    exerciseRef: "Unit 5, Ex 6 (Q2)",
    section: "grammar",
    question: "Some users spend too much time online. \_\_\_\_\_\_\_\_\_\_, they struggle to balance study and personal life.",
    options: ["As a result", "Furthermore", "In contrast", "On the other hand"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ประโยคแรกคือสาเหตุ ประโยคหลังคือผลลัพธ์ที่ตามมา จึงต้องใช้คำเชื่อมบอกผล ('As a result') (Unit 5, Ex 6 ข้อ 2)",
    signalKeywords: "Cause -> Result -> As a result"
  },
  {
    id: "u5-dm-03",
    unit: 5,
    topicId: "u5-discourse-markers",
    exerciseRef: "Unit 5, Ex 6 (Q5)",
    section: "grammar",
    question: "Some students enjoy living in dormitories. \_\_\_\_\_\_\_\_\_\_, others prefer renting apartments near campus.",
    options: ["Consequently", "In addition", "On the other hand", "Therefore"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: เปรียบเทียบสองกลุ่มที่มีความชอบตรงข้ามกัน จึงต้องใช้กลุ่ม Contrast ('On the other hand') (Unit 5, Ex 6 ข้อ 5)",
    signalKeywords: "Opposite comparison -> On the other hand"
  },
  {
    id: "u5-dm-04",
    unit: 5,
    topicId: "u5-discourse-markers",
    exerciseRef: "Unit 5, Ex 6 (Q7)",
    section: "grammar",
    question: "We booked the hotel in advance. \_\_\_\_\_\_\_\_\_\_, we got a special discount.",
    options: ["In contrast", "Moreover", "Therefore", "However"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: การจองล่วงหน้าคือสาเหตุ และการได้ส่วนลดคือผลลัพธ์ จึงใช้ 'Therefore' (Unit 5, Ex 6 ข้อ 7)",
    signalKeywords: "Cause -> Effect -> Therefore"
  },
  {
    id: "u5-dm-05",
    unit: 5,
    topicId: "u5-discourse-markers",
    exerciseRef: "Unit 5, Ex 6 (Q8)",
    section: "grammar",
    question: "The island offers clean beaches and friendly locals. \_\_\_\_\_\_\_\_\_\_, visitors can enjoy many water sports.",
    options: ["In contrast", "Consequently", "Furthermore", "Nevertheless"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: เสริมข้อมูลจุดเด่นของเกาะไปในทางบวกเหมือนกัน จึงใช้กลุ่ม Addition ('Furthermore') (Unit 5, Ex 6 ข้อ 8)",
    signalKeywords: "Adding more positive points -> Furthermore"
  },

  // =========================================================================
  // UNIT 5 - TOPIC 5: READING - NERVOUSNESS & DO'S/DON'TS (Ex 7, 8, 9, 10)
  // =========================================================================
  {
    id: "u5-rd-01",
    unit: 5,
    topicId: "u5-reading",
    exerciseRef: "Unit 5, Ex 7 (Q1)",
    section: "reading",
    passageTitle: "Passage 2: Dealing with Nervousness",
    question: "What does the author suggest about nervousness in the opening paragraph?",
    options: [
      "It is a sign of personal dishonesty.",
      "It is a common experience for people giving presentations.",
      "It is a rare occurrence during presentations.",
      "It is a result of inadequate preparation."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: มาร์ก ทเวน และผู้เขียนระบุว่าทุกคนล้วนรู้สึกประหม่า มันจึงเป็นประสบการณ์ร่วมที่พบได้ทั่วไป (common experience) (Unit 5, Ex 7 ข้อ 1)",
    evidenceSentence: "Almost everyone feels nervous before a presentation, whether it's a big or small audience..."
  },
  {
    id: "u5-rd-02",
    unit: 5,
    topicId: "u5-reading",
    exerciseRef: "Unit 5, Ex 7 (Q2)",
    section: "reading",
    passageTitle: "Passage 2: Dealing with Nervousness",
    question: "What is a recommended way to physically relax before a presentation?",
    options: [
      "Taking a power nap",
      "Doing stretching or breathing exercises",
      "Listening to music at high volume",
      "Drinking strong coffee"
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ในบทอ่านแนะนำให้ยืดเหยียดร่างกาย (stretching) หรือฝึกการหายใจ (breathing exercises) (Unit 5, Ex 7 ข้อ 2)",
    evidenceSentence: "Try stretching or breathing exercises before you speak. For example, sit upright, breathe in slowly..."
  },
  {
    id: "u5-rd-03",
    unit: 5,
    topicId: "u5-reading",
    exerciseRef: "Unit 5, Ex 7 (Q5)",
    section: "reading",
    passageTitle: "Passage 2: Dealing with Nervousness",
    question: "How does the passage suggest using nervousness to one's advantage?",
    options: [
      "By pretending to be completely calm",
      "By avoiding eye contact with the audience",
      "By harnessing the extra energy it provides for an enthusiastic presentation",
      "By ignoring the audience entirely"
    ],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: ความประหม่าเล็กน้อยสามารถนำมาใช้เป็นพลังกระตุ้น (energy boost) ที่ทำให้การนำเสนอดูกระตือรือร้น (Unit 5, Ex 7 ข้อ 5)",
    evidenceSentence: "Remember, being a little nervous can also be helpful; it can give you the energy boost needed for an enthusiastic presentation."
  },
  {
    id: "u5-rd-04",
    unit: 5,
    topicId: "u5-reading",
    exerciseRef: "Unit 5, Ex 8 (Q3)",
    section: "reading",
    passageTitle: "Passage 2: Dealing with Nervousness",
    question: "True or False: According to the passage, doing breathing exercises and muscle relaxation is an effective way to control physical symptoms of stage fright.",
    options: [
      "True, deep breathing calms the nervous system and relaxes muscles.",
      "False, physical exercises increase heart rate and worsen panic.",
      "False, only medication can control physical nervousness.",
      "True, but only if performed while actively speaking on stage."
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A (True): การฝึกหายใจลึกๆ (deep breathing) และผ่อนคลายกล้ามเนื้อช่วยลดอาการสั่นและควบคุมระบบประสาทได้จริง (Unit 5, Ex 8 ข้อ 3)",
    evidenceSentence: "Take deep, slow breaths before going on stage; this calms your heart rate and relieves physical tension."
  },
  {
    id: "u5-rd-05",
    unit: 5,
    topicId: "u5-reading",
    exerciseRef: "Unit 5, Ex 7 (Q4)",
    section: "reading",
    passageTitle: "Passage 2: Dealing with Nervousness",
    question: "Why does the author specifically advise presenters to memorize and master their first two or three opening sentences?",
    options: [
      "Because the rest of the presentation should be completely improvised.",
      "Because overcoming initial stage fright in the first minute builds confidence for the rest of the talk.",
      "Because the audience will stop listening after the first minute.",
      "Because opening sentences must always contain jokes."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: การจำ 2-3 ประโยคแรกให้แม่นยำช่วยให้ผ่านพ้นช่วงตื่นเต้นที่สุดตอนเริ่มพูด และสร้างความมั่นใจต่อเนื่องไปตลอดการบรรยาย (Unit 5, Ex 7 ข้อ 4)",
    evidenceSentence: "Knowing your opening lines inside out gets you safely past that terrifying first minute and builds momentum."
  },
  {
    id: "u5-dd-01",
    unit: 5,
    topicId: "u5-dos-donts",
    exerciseRef: "Unit 5, Ex 9 & 10",
    section: "culture",
    question: "According to Nicole Shaw's presentation training, which of the following is considered a 'DON'T'?",
    options: [
      "Research your topic carefully",
      "Read directly from your notes",
      "Speak slowly and clearly",
      "Dress professionally"
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: การก้มหน้าก้มตาอ่านจากโพย (Read from your notes) ถือเป็นข้อห้าม (Don't) ในการนำเสนอ (Unit 5, Ex 9 ข้อ 4)",
    signalKeywords: "Read from your notes -> Don't"
  },
  {
    id: "u5-dd-02",
    unit: 5,
    topicId: "u5-dos-donts",
    exerciseRef: "Unit 5, Ex 10 (Q4)",
    section: "culture",
    question: "Why should a presenter give the audience 'signposts'?",
    options: [
      "To entertain the audience with jokes",
      "To help the audience follow the structure of the talk",
      "To prolong the presentation time",
      "To avoid answering questions"
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: การให้ signposts ช่วยให้ผู้ฟังสามารถติดตามโครงสร้างและลำดับเนื้อหาของการบรรยายได้ง่าย (Unit 5, Ex 10 ข้อ 4)",
    signalKeywords: "give signposts -> help audience follow the structure"
  },
  {
    id: "u5-dd-03",
    unit: 5,
    topicId: "u5-dos-donts",
    exerciseRef: "Unit 5, Ex 10 (Q1)",
    section: "listening",
    question: "How does Nicole Shaw begin her presentation training session?",
    options: [
      "By introducing herself and the topic of the presentation",
      "By telling a joke and demonstrating presentation software",
      "By showing an animated video to engage the audience",
      "By immediately asking the audience a series of difficult questions"
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: Nicole Shaw เริ่มต้นด้วยการแนะนำตัวเองและหัวข้อการบรรยาย (Unit 5, Ex 10 ข้อ 1)",
    signalKeywords: "start presentation -> introducing herself and the topic"
  },
  {
    id: "u5-dd-04",
    unit: 5,
    topicId: "u5-dos-donts",
    exerciseRef: "Unit 5, Ex 10 (Q2)",
    section: "listening",
    question: "Besides speaking in public, which list accurately includes the other top fears mentioned in Nicole Shaw's talk?",
    options: [
      "Snakes, spiders, small spaces, and heights",
      "Flying, swimming, open spaces, and dogs",
      "Dark rooms, cold weather, lightning, and insects",
      "Crowded buses, airplanes, dentists, and exams"
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: สิ่งที่คนกลัว 5 อันดับแรกคือ snakes (งู), spiders (แมงมุม), small spaces (ที่แคบ), heights (ความสูง) และ speaking in public (พูดในที่สาธารณะ) (Unit 5, Ex 10 ข้อ 2)",
    signalKeywords: "top fears: snakes, spiders, small spaces, heights, speaking in public"
  },
  {
    id: "u5-dd-05",
    unit: 5,
    topicId: "u5-dos-donts",
    exerciseRef: "Unit 5, Ex 10 (Q3)",
    section: "listening",
    question: "Nicole Shaw's presentation training consists of four main parts. What are they?",
    options: [
      "Planning and preparation, opening, closing, and body language",
      "Preparation, financial budget, jokes, and audience questions",
      "Software setup, lighting, closing, and handouts",
      "Introduction, market analysis, product pitch, and dismissal"
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 4 ส่วนหลักคือ Planning and preparation (การวางแผนและเตรียมตัว), opening (การเปิด), closing (การปิด), และ body language (ภาษากาย) (Unit 5, Ex 10 ข้อ 3)",
    signalKeywords: "four parts: planning/prep, opening, closing, body language"
  },
  {
    id: "u5-dd-06",
    unit: 5,
    topicId: "u5-dos-donts",
    exerciseRef: "Unit 5, Ex 10 (Q5)",
    section: "listening",
    question: "What does Nicole Shaw mean when she advises presenters to wear 'the right clothes'?",
    options: [
      "Clothes that are the most expensive and showy",
      "Clothes that follow high-fashion runway trends",
      "Clothes appropriate to the situation and company dress code",
      "Casual sportswear to make the audience feel at home"
    ],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: เสื้อผ้าที่เหมาะสมหมายถึงชุดที่เหมาะกับกาลเทศะ บริบทงาน และระเบียบการแต่งกายขององค์กร (Unit 5, Ex 10 ข้อ 5)",
    signalKeywords: "right clothes -> appropriate to situation and dress code"
  },
  {
    id: "u5-dd-07",
    unit: 5,
    topicId: "u5-dos-donts",
    exerciseRef: "Unit 5, Ex 9 (Q3 & Q8)",
    section: "listening",
    question: "According to Nicole Shaw's presentation 'Do's and Don'ts' table, which of the following is a strict 'DON'T'?",
    options: [
      "Make sure technical equipment has been checked",
      "Dress professionally and appropriately",
      "Let the audience interrupt with questions whenever they want",
      "Give your audience clear signposts throughout the talk"
    ],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: การปล่อยให้ผู้ฟังพูดแทรกถามได้ตลอดเวลา (Let the audience interrupt) ถูกระบุว่าเป็น Don't เพราะจะทำให้เสียจังหวะและคุมเวลาไม่ได้ ควรให้ถามในช่วง Q&A ตอนท้าย (Unit 5, Ex 9 ข้อ 8)",
    signalKeywords: "Let audience interrupt -> Don't"
  },

  // =========================================================================
  // UNIT 6 - TOPIC 1: HIGH VS. LOW CONTEXT CULTURES (Ex 1, 2 & 3)
  // =========================================================================
  {
    id: "u6-cc-01",
    unit: 6,
    topicId: "u6-culture-context",
    exerciseRef: "Unit 6, Ex 2",
    section: "culture",
    question: "In Edward T. Hall's cultural framework, what is the opposite characteristic of 'Indirect' communication?",
    options: ["Direct", "Written", "Individual", "Competitive"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: คู่ตรงข้ามของ Indirect (สื่อสารทางอ้อมใน High-context) คือ Direct (สื่อสารตรงไปตรงมาใน Low-context) (Unit 6, Ex 2)",
    signalKeywords: "Indirect <-> Direct"
  },
  {
    id: "u6-cc-02",
    unit: 6,
    topicId: "u6-culture-context",
    exerciseRef: "Unit 6, Ex 2",
    section: "culture",
    question: "In cultural comparison, what is the opposite of 'Cooperation' (High Context)?",
    options: ["Competition", "Written", "Direct", "Criticism"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: คู่ตรงข้ามของ Cooperation (การร่วมมือ) คือ Competition (การแข่งขัน) (Unit 6, Ex 2)",
    signalKeywords: "Cooperation <-> Competition"
  },
  {
    id: "u6-cc-03",
    unit: 6,
    topicId: "u6-culture-context",
    exerciseRef: "Unit 6, Ex 3 (Q1)",
    section: "culture",
    question: "\"We usually avoid direct questions to maintain harmony.\" Is this statement typical of High (H) or Low (L) Context culture?",
    options: ["High Context (H)", "Low Context (L)"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: การหลีกเลี่ยงคำถามตรงๆ เพื่อรักษาความสมานฉันท์ (harmony) เป็นลักษณะเด่นของ High Context Culture (H) (Unit 6, Ex 3 ข้อ 1)",
    signalKeywords: "avoid direct questions, maintain harmony -> High Context"
  },
  {
    id: "u6-cc-04",
    unit: 6,
    topicId: "u6-culture-context",
    exerciseRef: "Unit 6, Ex 3 (Q5)",
    section: "culture",
    question: "\"In business, facts are more important than feelings, and decisions are made on information.\" This represents \_\_\_\_\_\_\_\_\_\_.",
    options: ["Low Context (L)", "High Context (H)"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: การให้ความสำคัญกับข้อเท็จจริง (facts) มากกว่าความรู้สึก เป็นลักษณะของ Low Context Culture (L) (Unit 6, Ex 3 ข้อ 5)",
    signalKeywords: "facts more important than feelings -> Low Context"
  },
  {
    id: "u6-cc-05",
    unit: 6,
    topicId: "u6-culture-context",
    exerciseRef: "Unit 6, Ex 3 (Q2)",
    section: "culture",
    question: "\"Business agreements are based on mutual trust, personal relationships, and handshakes rather than long legal contracts.\" This is typical of \_\_\_\_\_\_\_\_\_\_.",
    options: ["High Context (H)", "Low Context (L)"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: การให้ความสำคัญกับความไว้วางใจส่วนบุคคลและสัมพันธภาพมากกว่าสัญญาตัวอักษร เป็นเอกลักษณ์ของ High Context Culture (Unit 6, Ex 3 ข้อ 2)",
    signalKeywords: "agreements based on trust & relationships -> High Context"
  },
  {
    id: "u6-cc-06",
    unit: 6,
    topicId: "u6-culture-context",
    exerciseRef: "Unit 6, Ex 1 & 3",
    section: "culture",
    question: "In a 'Monochronic' business culture (typical of Low Context countries), how is time viewed?",
    options: [
      "Time is flexible, and personal conversations always take priority over schedules.",
      "Time is a linear commodity to be managed strictly, segmented, and not wasted.",
      "Deadlines are considered rough guidelines that can be freely ignored.",
      "Meetings should never follow a written agenda."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ในวัฒนธรรม Monochronic (บริบทต่ำ) เวลาถูกมองเป็นสิ่งมีค่า เป็นเส้นตรง ต้องตรงต่อเวลาและบริหารตามตารางอย่างเคร่งครัด (Unit 6, Ex 1 & 3)",
    signalKeywords: "Monochronic -> linear, strictly scheduled, not wasted"
  },

  // =========================================================================
  // UNIT 6 - TOPIC 2: MULTICULTURAL WORKPLACE & PASSAGE VOCAB (Ex 4 & 9)
  // =========================================================================
  {
    id: "u6-cv-01",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q1)",
    section: "vocab",
    question: "In many cultures, understanding \_\_\_\_\_\_\_\_\_\_ is crucial because it conveys emotions and intentions without using words.",
    options: ["body language", "grammar", "slang", "written language"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'body language' (ภาษากาย) สื่อสารอารมณ์และความรู้สึกโดยไม่ใช้คำพูด (without using words) (Unit 6, Ex 4 ข้อ 1)",
    signalKeywords: "conveys emotions without words -> body language"
  },
  {
    id: "u6-cv-02",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q2)",
    section: "vocab",
    question: "When providing \_\_\_\_\_\_\_\_\_\_, it's important to be constructive and offer suggestions for improvement rather than just pointing out flaws.",
    options: ["praise", "criticism", "cooperation", "agreement"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'criticism' หมายถึง คำวิจารณ์/การติชม (providing constructive criticism = ให้คำวิจารณ์เชิงสร้างสรรค์) (Unit 6, Ex 4 ข้อ 2)",
    signalKeywords: "suggestions for improvement rather than flaws -> criticism"
  },
  {
    id: "u6-cv-03",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q3)",
    section: "vocab",
    question: "Effective \_\_\_\_\_\_\_\_\_\_ in a multicultural team involves respecting different perspectives and working together towards a common goal.",
    options: ["isolation", "competition", "cooperation", "individualism"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: 'cooperation' หมายถึง การร่วมมือร่วมใจกันทำงาน (working together towards a common goal) (Unit 6, Ex 4 ข้อ 3)",
    signalKeywords: "working together towards a common goal -> cooperation"
  },
  {
    id: "u6-cv-04",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q4)",
    section: "vocab",
    question: "In some cultures, people are very \_\_\_\_\_\_\_\_\_\_ in their communication style, meaning they say exactly what they think without trying to soften the message.",
    options: ["indirect", "ambiguous", "direct", "traditional"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: 'direct' (ตรงไปตรงมา) หมายถึงการพูดสิ่งที่คิดโดยไม่อ้อมค้อมหรือไม่ลดทอนความตรง (Unit 6, Ex 4 ข้อ 4)",
    signalKeywords: "say exactly what they think without softening -> direct"
  },
  {
    id: "u6-cv-05",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q5)",
    section: "vocab",
    question: "Celebrating \_\_\_\_\_\_\_\_\_\_ helps maintain cultural heritage and provides a sense of community identity and continuity.",
    options: ["individualism", "modernity", "tradition", "innovation"],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: 'tradition' (ประเพณี/วัฒนธรรมดั้งเดิม) ช่วยสืบสานมรดกทางวัฒนธรรมและสร้างความผูกพันในชุมชน (Unit 6, Ex 4 ข้อ 5)",
    signalKeywords: "cultural heritage and continuity -> tradition"
  },
  {
    id: "u6-cv-06",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q6)",
    section: "vocab",
    question: "It is normal to \_\_\_\_\_\_\_\_\_\_ with colleagues sometimes, but it is essential to handle disagreements constructively.",
    options: ["agree", "disagree", "ignore", "cooperate"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'disagree' (เห็นต่าง/ไม่เห็นด้วย) เป็นเรื่องปกติในการทำงาน แต่ต้องจัดการความเห็นต่างอย่างสร้างสรรค์ (Unit 6, Ex 4 ข้อ 6)",
    signalKeywords: "handle disagreements constructively -> disagree"
  },
  {
    id: "u6-cv-07",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q7)",
    section: "vocab",
    question: "In many Asian cultures, the concept of saving \_\_\_\_\_\_\_\_\_\_ is important, which means maintaining dignity and respect in social interactions.",
    options: ["money", "face", "time", "effort"],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'saving face' หมายถึง การรักษาหน้า เพื่อไม่ให้อับอายและรักษาเกียรติทางสังคม (Unit 6, Ex 4 ข้อ 7)",
    signalKeywords: "saving face = maintaining dignity and respect"
  },
  {
    id: "u6-cv-08",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 4 (Q8)",
    section: "vocab",
    question: "A \_\_\_\_\_\_\_\_\_\_ approach focuses on completing specific tasks efficiently, sometimes at the expense of interpersonal relationships.",
    options: ["task-centered", "people-centered", "tradition-centered", "harmony-centered"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'task-centered approach' คือการมุ่งเน้นความสำเร็จของงานเป็นหลักมากกว่าความสัมพันธ์ส่วนตัว (Unit 6, Ex 4 ข้อ 8)",
    signalKeywords: "focuses on completing specific tasks -> task-centered"
  },
  {
    id: "u6-cv-09",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 9 (Q1)",
    section: "vocab",
    question: "Match the definition from Unit 6: What is 'Etiquette' (n.)?",
    options: [
      "The formal rules for polite behavior in business or society",
      "To watch others carefully to learn how they behave",
      "Acting as if you are more important or better than others",
      "Expressing feelings that are not honest or genuine"
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: 'Etiquette' คือ 'The formal rules for polite behavior in business or society' (มารยาทและธรรมเนียมปฏิบัติที่สุภาพ) (Unit 6, Ex 9 ข้อ 1)",
    signalKeywords: "Etiquette -> formal rules for polite behavior"
  },
  {
    id: "u6-cv-10",
    unit: 6,
    topicId: "u6-culture-vocab",
    exerciseRef: "Unit 6, Ex 9 (Q7)",
    section: "vocab",
    question: "Match the definition from Unit 6: If someone's intention was 'misinterpreted', what does it mean?",
    options: [
      "It was copied and implemented successfully.",
      "It was understood or explained incorrectly.",
      "It was kept strictly confidential.",
      "It was rewarded with high praise."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: 'misinterpreted' แปลว่า ตีความผิดหรือเข้าใจคลาดเคลื่อน (Understood or explained incorrectly) (Unit 6, Ex 9 ข้อ 7)",
    signalKeywords: "misinterpreted -> understood incorrectly"
  },

  // =========================================================================
  // UNIT 6 - TOPIC 3: GRAMMAR - REPORTED SPEECH (Ex 5 & 6)
  // =========================================================================
  {
    id: "u6-rs-01",
    unit: 6,
    topicId: "u6-reported-speech",
    exerciseRef: "Unit 6, Ex 5 (Q1)",
    section: "grammar",
    question: "\"I am going to the meeting,\" she said to me.\nWhich is the correct reported speech form?",
    options: [
      "She said to me that she is going to the meeting.",
      "She said to me that I was going to the meeting.",
      "She said to me that she was going to the meeting.",
      "She said to me that she had gone to the meeting."
    ],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: Present Continuous (am going) ต้องถอยเป็น Past Continuous (was going) และสรรพนาม I เปลี่ยนเป็น she (Unit 6, Ex 5 ข้อ 1)",
    signalKeywords: "am going -> was going"
  },
  {
    id: "u6-rs-02",
    unit: 6,
    topicId: "u6-reported-speech",
    exerciseRef: "Unit 6, Ex 5 (Q2)",
    section: "grammar",
    question: "\"We have finished our work,\" they told us.\nWhich is the correct reported speech form?",
    options: [
      "They told us that we finished our work.",
      "They told us that they had finished their work.",
      "They told us that they have finished their work.",
      "They told us that we had finished their work."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: Present Perfect (have finished) ต้องถอยเป็น Past Perfect (had finished), We -> they, our -> their (Unit 6, Ex 5 ข้อ 2)",
    signalKeywords: "have finished -> had finished"
  },
  {
    id: "u6-rs-03",
    unit: 6,
    topicId: "u6-reported-speech",
    exerciseRef: "Unit 6, Ex 5 (Q3)",
    section: "grammar",
    question: "\"I can meet you later,\" John said to Sarah.\nWhich is the correct reported speech form?",
    options: [
      "John said to Sarah that he can meet you later.",
      "John said to Sarah that he could meet her later.",
      "John said to Sarah that I would meet her later.",
      "John said to Sarah that he meets her later."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: กริยาช่วย can ต้องถอยเป็น could, สรรพนาม I -> he, you -> her (Unit 6, Ex 5 ข้อ 3)",
    signalKeywords: "can -> could"
  },
  {
    id: "u6-rs-04",
    unit: 6,
    topicId: "u6-reported-speech",
    exerciseRef: "Unit 6, Ex 5 (Q5)",
    section: "grammar",
    question: "\"Can you send the meeting minutes by 5:00 p.m.?\" the supervisor asked the secretary.\nWhich is the correct reported question form?",
    options: [
      "The supervisor asked the secretary if could she send the meeting minutes by 5:00 p.m.",
      "The supervisor asked the secretary whether she could send the meeting minutes by 5:00 p.m.",
      "The supervisor asked the secretary if she can send the meeting minutes by 5:00 p.m.",
      "The supervisor asked the secretary whether she had sent the meeting minutes by 5:00 p.m."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ใน Reported Yes/No Question ต้องใช้ whether/if + ประธาน (she) + กริยาถอย Tense (could send) โดยไม่สลับกริยาช่วยขึ้นหน้าประธาน (Unit 6, Ex 5 ข้อ 5)",
    signalKeywords: "whether + Subject + could + V1"
  },
  {
    id: "u6-rs-05",
    unit: 6,
    topicId: "u6-reported-speech",
    exerciseRef: "Unit 6, Ex 5 (Q7)",
    section: "grammar",
    question: "\"I will help you with your project,\" she promised.\nWhich is the correct reported speech form?",
    options: [
      "She promised that she helps me with my project.",
      "She promised that she would help me with my project.",
      "She promised that I will help her with my project.",
      "She promised that she will help me with my project."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: will ต้องเปลี่ยนเป็น would, I -> she, you -> me, your -> my (Unit 6, Ex 5 ข้อ 7)",
    signalKeywords: "will -> would"
  },
  {
    id: "u6-rs-06",
    unit: 6,
    topicId: "u6-reported-speech",
    exerciseRef: "Unit 6, Ex 6",
    section: "grammar",
    question: "\"We signed the partnership contract yesterday,\" the manager announced.\nWhich is the correct reported sentence?",
    options: [
      "The manager announced that they have signed the partnership contract yesterday.",
      "The manager announced that they had signed the partnership contract the day before.",
      "The manager announced that we had signed the partnership contract tomorrow.",
      "The manager announced that they signed the partnership contract today."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: Past Simple (signed) ถอยเป็น Past Perfect (had signed), We -> they, และคำระบุเวลา yesterday เปลี่ยนเป็น the day before (Unit 6, Ex 6)",
    signalKeywords: "signed -> had signed; yesterday -> the day before"
  },

  // =========================================================================
  // UNIT 6 - TOPIC 4: READING - DIFFERENT CULTURES (Ex 7 & 8)
  // =========================================================================
  {
    id: "u6-rd-01",
    unit: 6,
    topicId: "u6-reading",
    exerciseRef: "Unit 6, Ex 7 (Q1)",
    section: "reading",
    passageTitle: "Passage 3: Working with Different Cultures in Business",
    question: "Why is it vital to understand cultural etiquette even if everyone in a meeting speaks English?",
    options: [
      "To prove superior grammatical mastery",
      "Because English grammar differs in every nation",
      "To avoid unfair judgments and protect professional relationships",
      "Because international business is abandoning English"
    ],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: ย่อหน้าที่ 1 ระบุว่าการไม่เข้าใจกติกาทางวัฒนธรรมอาจทำให้เกิดการตัดสินที่ไม่เป็นธรรมหรือทำลายความสัมพันธ์ทางธุรกิจได้ (Unit 6, Ex 7 ข้อ 1)",
    evidenceSentence: "If we do not understand cultural 'rules,' we might make unfair judgments or ruin our professional relationships."
  },
  {
    id: "u6-rd-02",
    unit: 6,
    topicId: "u6-reading",
    exerciseRef: "Unit 6, Ex 7 (Q2)",
    section: "reading",
    passageTitle: "Passage 3: Working with Different Cultures in Business",
    question: "How might a British professional feel if a partner insists on being called 'Dr.' (Doctor of Philosophy)?",
    options: [
      "They would feel deep respect for their hard work.",
      "They might think the person is being pompous and too formal.",
      "They would think the person is very capable.",
      "They would feel that the colleague is delightfully informal."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ในย่อหน้าที่ 2 คนอังกฤษชอบความไม่เป็นทางการ และอาจมองว่าการเรียกร้องให้ใช้คำนำหน้าดู 'pompous' (ทำตัวสำคัญเกินไป / โอ่อ่าเป็นทางการเกินไป) (Unit 6, Ex 7 ข้อ 2)",
    evidenceSentence: "But a British person might think using a title is too pompous (acting too important)."
  },
  {
    id: "u6-rd-03",
    unit: 6,
    topicId: "u6-reading",
    exerciseRef: "Unit 6, Ex 7 (Q5)",
    section: "reading",
    passageTitle: "Passage 3: Working with Different Cultures in Business",
    question: "What does the author mean by advising readers not to 'pigeonhole' people?",
    options: [
      "We should always classify people by their nationality.",
      "We should not judge an entire group based on one single trait.",
      "We should ignore cultural etiquette guides entirely.",
      "We should only focus on age and gender differences."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: การไม่ 'pigeonhole' หมายถึงการไม่เหมารวมตัดสินคนจากลักษณะเพียงอย่างเดียว โดยต้องมองทุกคนเป็นปัจเจกบุคคล (treat partners as individuals) (Unit 6, Ex 7 ข้อ 5)",
    evidenceSentence: "...we should not pigeonhole people (label everyone from one country as the same)... always treat your business partners as individuals."
  },
  {
    id: "u6-rd-04",
    unit: 6,
    topicId: "u6-reading",
    exerciseRef: "Unit 6, Ex 8 (Q3)",
    section: "reading",
    passageTitle: "Passage 3: Working with Different Cultures in Business",
    question: "True or False: According to the passage, is looking a superior directly in the eye considered a universal sign of respect in ALL African and South American cultures?",
    options: [
      "True, direct eye contact always demonstrates honesty and respect worldwide.",
      "False, in many African and South American cultures, looking a superior directly in the eye can be interpreted as a sign of disrespect or defiance.",
      "True, but only between people of the exact same age.",
      "False, eye contact is only practiced in North America."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B (False): ในหลายวัฒนธรรมในแอฟริกาและอเมริกาใต้ การสบตากับผู้ใหญ่หรือผู้บังคับบัญชาโดยตรงอาจถูกมองว่าเป็นการท้าทายหรือไม่เคารพ (Unit 6, Ex 8 ข้อ 3)",
    evidenceSentence: "Looking a superior directly in the eye is NOT considered respectful in all African and South American cultures."
  },
  {
    id: "u6-rd-05",
    unit: 6,
    topicId: "u6-reading",
    exerciseRef: "Unit 6, Ex 8 (Q4)",
    section: "reading",
    passageTitle: "Passage 3: Working with Different Cultures in Business",
    question: "If you are unsure of how to address or greet a foreign colleague in an international meeting, what does the text recommend you should do?",
    options: [
      "Address them immediately by their first name to break the ice.",
      "Avoid talking to them until they initiate conversation.",
      "Observe their behavior carefully or ask them politely how they prefer to be addressed.",
      "Always call everyone 'Sir' or 'Madam' regardless of their culture."
    ],
    correctAnswer: 2,
    explanationThai: "คำตอบคือข้อ C: หากไม่แน่ใจว่าจะเรียกชื่อหรือทักทายอย่างไร บทอ่านแนะนำให้ 'observe their behavior' (สังเกตพฤติกรรม) หรือ 'ask them directly' (ถามอย่างสุภาพ) (Unit 6, Ex 8 ข้อ 4)",
    evidenceSentence: "If you are unsure how to address someone, observe their behavior or ask them politely."
  },

  // =========================================================================
  // UNIT 6 - TOPIC 5: GLOBAL GIFT-GIVING CUSTOMS (Ex 10 & 11)
  // =========================================================================
  {
    id: "u6-gg-01",
    unit: 6,
    topicId: "u6-gift-giving",
    exerciseRef: "Unit 6, Ex 10 (Q2)",
    section: "culture",
    question: "According to global business gift-giving customs, is it usual to give gifts to government employees in Singapore?",
    options: [
      "Yes, it is expected and considered polite.",
      "No, it is strictly forbidden by law and might be seen as a bribe.",
      "Yes, but only if the gift is wrapped in red.",
      "Yes, but only during international conferences."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ในสิงคโปร์ การให้ของขวัญแก่เจ้าหน้าที่รัฐถือเป็นเรื่องต้องห้ามตามกฎหมาย (It is not allowed) และอาจถูกมองว่าเป็นสินบน (Unit 6, Ex 10 ข้อ 2)",
    signalKeywords: "Singapore government employees -> not allowed / bribe"
  },
  {
    id: "u6-gg-02",
    unit: 6,
    topicId: "u6-gift-giving",
    exerciseRef: "Unit 6, Ex 10 (Q8)",
    section: "culture",
    question: "When presenting a business gift in Thailand, what gesture should you offer instead of bowing?",
    options: ["Offer a 'wai'", "Shake hands firmly", "Give a warm hug", "Nod repeatedly"],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ในประเทศไทย เมื่อมอบหรือรับของขวัญ ควรแสดงความเคารพด้วยการ 'ไหว้' (wai) แทนการโค้งคำนับแบบญี่ปุ่น (Unit 6, Ex 10 ข้อ 8)",
    signalKeywords: "gift in Thailand -> offer a wai"
  },
  {
    id: "u6-gg-03",
    unit: 6,
    topicId: "u6-gift-giving",
    exerciseRef: "Unit 6, Ex 11 (Q1)",
    section: "listening",
    question: "According to Rob Hall's talk on international gift customs, in which countries might business gifts be strictly viewed or investigated as a bribe?",
    options: [
      "The United States, the UK, and Malaysia",
      "Japan and China only",
      "Thailand and Indonesia only",
      "Germany and Switzerland only"
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ในสหรัฐอเมริกา (US), สหราชอาณาจักร (UK) และมาเลเซีย ของขวัญทางธุรกิจอาจถูกมองว่าเป็นสินบน (seen as a bribe) (Unit 6, Ex 11 ข้อ 1)",
    signalKeywords: "gifts seen as bribe -> US, UK, Malaysia"
  },
  {
    id: "u6-gg-04",
    unit: 6,
    topicId: "u6-gift-giving",
    exerciseRef: "Unit 6, Ex 11 (Q2)",
    section: "listening",
    question: "In which countries is it standard business etiquette to present and accept a gift using both hands?",
    options: [
      "China and Japan",
      "Indonesia and Thailand",
      "The United States and Canada",
      "The UK and Germany"
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ในประเทศจีนและญี่ปุ่น การมอบและรับของขวัญต้องใช้ 'ทั้งสองมือ' (both hands) เพื่อแสดงความเคารพอย่างสูง (Unit 6, Ex 11 ข้อ 2)",
    signalKeywords: "present and accept with both hands -> China and Japan"
  },
  {
    id: "u6-gg-05",
    unit: 6,
    topicId: "u6-gift-giving",
    exerciseRef: "Unit 6, Ex 11 (Q3)",
    section: "listening",
    question: "In China and Japan, what polite custom should a visitor expect when offering a business gift?",
    options: [
      "The recipient will open it enthusiastically immediately.",
      "The recipient may politely refuse the gift at least once before accepting it.",
      "The recipient will examine the price tag in front of you.",
      "The recipient will demand an immediate reciprocal gift."
    ],
    correctAnswer: 1,
    explanationThai: "คำตอบคือข้อ B: ในจีนและญี่ปุ่น ผู้รับมักจะปฏิเสธอย่างสุภาพอย่างน้อยหนึ่งครั้ง (refuse at least once) ก่อนที่จะยอมรับ เพื่อแสดงความถ่อมตัว ไม่ละโมบ (Unit 6, Ex 11 ข้อ 3)",
    signalKeywords: "refuse at least once -> China and Japan"
  },
  {
    id: "u6-gg-06",
    unit: 6,
    topicId: "u6-gift-giving",
    exerciseRef: "Unit 6, Ex 11 (Q4)",
    section: "listening",
    question: "In Indonesia and China, why are gifts NOT opened immediately in front of the giver?",
    options: [
      "Because it is considered impolite, showing greed, or risking embarrassment if the gift is not ideal.",
      "Because gifts are only opened after the business contract is signed.",
      "Because the government inspects all opened gifts.",
      "Because wrapping paper must be kept intact forever."
    ],
    correctAnswer: 0,
    explanationThai: "คำตอบคือข้อ A: ในอินโดนีเซียและจีน จะไม่แกะของขวัญต่อหน้าผู้ให้ เพราะถือว่าไม่สุภาพและอาจแสดงความละโมบ โดยจะนำไปเปิดเป็นการส่วนตัวในภายหลัง (Unit 6, Ex 11 ข้อ 4)",
    signalKeywords: "not opened in front of giver -> Indonesia and China"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_TOPICS, EXAM_DATA };
}
