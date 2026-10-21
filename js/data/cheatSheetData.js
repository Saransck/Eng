// Cheat Sheet Dataset for Quick Pre-Exam Revision
// Categorized into Vocabulary Clues, Grammar Signal Words, and Reading Question Keywords

const CHEATSHEET_DATA = {
  // ================= 1. VOCABULARY CLUES =================
  vocabClues: [
    {
      category: "Collocations",
      keyword: "take the minutes",
      explanation: "จดบันทึกรายงานการประชุมอย่างเป็นทางการ (ใช้กริยา take คู่กับ minutes)",
      pattern: "take + the minutes (of the meeting)",
      watchOut: "ห้ามใช้ write the minutes หรือ make the minutes ในข้อสอบมาตรฐาน",
      example: "Could you take the minutes of today's executive board meeting?",
      unit: 4
    },
    {
      category: "Collocations",
      keyword: "make travel arrangements",
      explanation: "จัดการเตรียมการเดินทาง (ใช้กริยา make คู่กับ arrangements)",
      pattern: "make + travel / meeting + arrangements",
      watchOut: "ห้ามใช้ do travel arrangements ❌",
      example: "My secretary makes all flight and hotel arrangements for my overseas trips.",
      unit: 4
    },
    {
      category: "Collocations",
      keyword: "put on the agenda",
      explanation: "บรรจุเข้าสู่วาระการประชุม",
      pattern: "put [an issue] on the agenda",
      watchOut: "ระวังบุพบท 'on' the agenda (ไม่ใช่ in the agenda)",
      example: "The new safety protocol must be put on the agenda for Monday's meeting.",
      unit: 4
    },
    {
      category: "Collocations",
      keyword: "maintain eye contact",
      explanation: "สบสายตากับผู้ฟังอย่างสม่ำเสมอเพื่อแสดงความมั่นใจ",
      pattern: "maintain / make + eye contact (with the audience)",
      watchOut: "อย่าใช้ look eyes หรือ keep looking",
      example: "Maintaining steady eye contact with your listeners projects confidence.",
      unit: 5
    },
    {
      category: "Collocations",
      keyword: "build rapport",
      explanation: "สร้างสัมพันธภาพอันดีและความไว้วางใจกับผู้ฟังหรือคู่ค้า",
      pattern: "build / establish + rapport (with someone)",
      watchOut: "ออกเสียงว่า /ræˈpɔːr/ ไม่ออกเสียงตัว t ท้ายคำ",
      example: "A skilled speaker uses conversational stories to build rapport with listeners.",
      unit: 5
    },
    {
      category: "Collocations",
      keyword: "saving face",
      explanation: "การรักษาหน้า / การปกป้องศักดิ์ศรีและเกียรติในสังคม",
      pattern: "the concept of saving face / save face",
      watchOut: "ตรงข้ามกับ 'losing face' (การเสียหน้า)",
      example: "In high-context Asian societies, saving face prevents interpersonal confrontation.",
      unit: 6
    },
    {
      category: "Synonyms & Antonyms",
      keyword: "engaged vs. passive",
      explanation: "engaged = มีส่วนร่วม ทุ่มเท (involved), ตรงข้ามกับ passive (เฉื่อยชา ไม่กระตือรือร้น)",
      pattern: "feel engaged in [work/activities]",
      watchOut: "ในข้อสอบ reading ข้อ 'engaged' สามารถแทนด้วย 'involved' ได้",
      example: "Only 34% of employees feel engaged in their workplace.",
      unit: 4
    },
    {
      category: "Synonyms & Antonyms",
      keyword: "severity vs. hardness",
      explanation: "severity = ความรุนแรง ร้ายแรง สามารถแทนด้วย hardness หรือ seriousness",
      pattern: "understand the severity of [the problem]",
      watchOut: "ตรงข้ามกับ gentleness, mildness หรือ tolerance",
      example: "Employers often underestimate the severity of workplace turnover costs.",
      unit: 4
    },
    {
      category: "Synonyms & Antonyms",
      keyword: "concise vs. verbose",
      explanation: "concise = สั้นกระชับได้ใจความ (succinct / brief), ตรงข้ามกับ verbose / wordy (เยิ่นเย้อ)",
      pattern: "be concise / concise explanation",
      watchOut: "เน้น expressing ideas clearly without unnecessary words",
      example: "Your executive summary should be concise and limited to one page.",
      unit: 5
    },
    {
      category: "Synonyms & Antonyms",
      keyword: "high-context vs. low-context",
      explanation: "เปรียบเทียบคู่ตรงข้ามทางวัฒนธรรม: Indirect vs Direct, Spoken vs Written, Harmony vs Criticism",
      pattern: "High context: indirect, feelings, team, harmony | Low context: direct, facts, individual, task-centered",
      watchOut: "มักออกจับคู่คำตรงข้ามในข้อสอบ Unit 6",
      example: "Low-context business cultures value direct emails over ambiguous verbal hints.",
      unit: 6
    },
    {
      category: "Prefixes & Suffixes",
      keyword: "un- / dis- / in- (Negative Prefixes)",
      explanation: "พบบ่อยในข้อสอบ B1-B2: undervalued (ไม่เห็นค่า), dissatisfaction (ความไม่พอใจ), insincere (ไม่จริงใจ)",
      pattern: "un- + valued / dis- + agreement / in- + sincere",
      watchOut: "ระวังการเปลี่ยนความหมายเป็นตรงกันข้ามทันทีเมื่อเติม prefix",
      example: "Smiling without warmth can seem completely insincere in Russian culture.",
      unit: 6
    }
  ],

  // ================= 2. GRAMMAR SIGNAL WORDS =================
  grammarSignals: [
    {
      keyword: "look forward to",
      topic: "Phrasal Verbs (Non-separable)",
      pattern: "look forward to + V-ing / Noun",
      watchOut: "ห้ามตามด้วย V.inf เด็ดขาด! ตัวอย่าง: look forward to seeing (ไม่ใช่ to see)",
      example: "We look forward to meeting the new executive team next Monday."
    },
    {
      keyword: "called off / called it off",
      topic: "Phrasal Verbs (Separable)",
      pattern: "call + off + Noun หรือ call + Pronoun (it/them) + off",
      watchOut: "ถ้ากรรมเป็น Pronoun (it, them) ห้ามเขียน 'called off it' ❌ ต้องเป็น 'called it off' ✔️",
      example: "Due to heavy snow, the organizers called off the conference."
    },
    {
      keyword: "Timetable cues (leaves at, starts at)",
      topic: "Future Forms (Present Simple)",
      pattern: "Subject + V1 (s/es) + at [time]",
      watchOut: "ตารางเวลารถไฟ เครื่องบิน หรือกำหนดการเปิดปิด ต้องใช้ Present Simple เสมอ แม้จะเป็นวันพรุ่งนี้",
      example: "Our high-speed train leaves at 8:45 tomorrow morning."
    },
    {
      keyword: "Arrangement cues (this afternoon, meeting at)",
      topic: "Future Forms (Present Continuous)",
      pattern: "Subject + is/am/are + V-ing + (fixed time/place)",
      watchOut: "ใช้กับนัดหมายที่มีการตกลงเวลาและสถานที่กับผู้อื่นไว้แล้วในอนาคตอันใกล้",
      example: "I am having lunch with our international supplier at 12:30 today."
    },
    {
      keyword: "Spontaneous cues (Don't worry / I will help)",
      topic: "Future Forms (Future Simple 'will')",
      pattern: "Subject + will + V1",
      watchOut: "ใช้เมื่อตัดสินใจทำทันทีขณะพูด หรือเสนอตัวช่วยเหลือ ไม่ได้วางแผนไว้ล่วงหน้า",
      example: "A: The projector isn't working. B: I will call IT support immediately."
    },
    {
      keyword: "Prior intention cues (decided to, confirmed)",
      topic: "Future Forms (Be going to)",
      pattern: "Subject + is/am/are + going to + V1",
      watchOut: "ใช้เมื่อมีความตั้งใจหรือได้ตัดสินใจวางแผนไว้แล้วก่อนหน้าที่จะพูด",
      example: "They have confirmed the venue, so we are going to print the badges."
    },
    {
      keyword: "Adverbs of Certainty",
      topic: "Future Forms (Certainty Level)",
      pattern: "definitely (100%) > probably (75%) > perhaps / maybe (50%)",
      watchOut: "ในประโยคปฏิเสธ definitely/probably จะอยู่หน้า won't: 'He definitely won't come'",
      example: "The prices will definitely increase after the end of this quarter."
    },
    {
      keyword: "so + adj/adv + that",
      topic: "So vs. Such",
      pattern: "so + [adjective / adverb] + that + clause",
      watchOut: "ห้ามใช้ so นำหน้ากลุ่มคำนามเดี่ยวๆ เช่น 'so good person' ❌",
      example: "The speaker was so tired that she struggled to conclude the seminar."
    },
    {
      keyword: "so many / so much",
      topic: "So vs. Such",
      pattern: "so many + Plural Countable | so much + Uncountable",
      watchOut: "ห้ามใช้ such many หรือ such much เด็ดขาด",
      example: "There were so many attendees that the conference room overflowed."
    },
    {
      keyword: "such a/an + adj + singular noun",
      topic: "So vs. Such",
      pattern: "such a/an + [adjective] + [singular countable noun] + that",
      watchOut: "ถ้าเป็นนามเอกพจน์ต้องมี a หรือ an เสมอ",
      example: "It was such an informative workshop that all staff recommended it."
    },
    {
      keyword: "such + adj + plural / uncountable noun",
      topic: "So vs. Such",
      pattern: "such + [adjective] + [plural noun or uncountable noun]",
      watchOut: "ระวังคำนามนับไม่ได้ เช่น feedback, advice, information, work -> ห้ามใส่ a/an!",
      example: "We received such valuable feedback that we revamped the entire service."
    },
    {
      keyword: "Therefore / Consequently / As a result,",
      topic: "Discourse Markers (Showing Result)",
      pattern: "Sentence 1. Therefore / Consequently / As a result, Sentence 2.",
      watchOut: "ประโยคแรกคือสาเหตุ ประโยคหลังคือผลลัพธ์ และต้องมีเครื่องหมาย Comma (,) ตามหลัง",
      example: "Production costs decreased significantly. Consequently, profits rose."
    },
    {
      keyword: "However / On the other hand / In contrast,",
      topic: "Discourse Markers (Showing Contrast)",
      pattern: "Sentence 1. However / In contrast, Sentence 2.",
      watchOut: "ใช้เชื่อมข้อความที่มีทิศทางตรงกันข้าม หรือเปรียบเทียบข้อมูลที่แตกต่างกันอย่างสิ้นเชิง",
      example: "Domestic sales slowed down. In contrast, overseas orders doubled."
    },
    {
      keyword: "Moreover / Furthermore / In addition,",
      topic: "Discourse Markers (Adding Information)",
      pattern: "Sentence 1. Moreover / Furthermore / In addition, Sentence 2.",
      watchOut: "ใช้เสริมข้อมูลไปในทิศทางเดียวกัน (บวกเสริมบวก หรือ ลบเสริมลบ)",
      example: "The software is cost-effective. Furthermore, it requires no maintenance."
    },
    {
      keyword: "if / whether + Subject + Verb",
      topic: "Reported Speech (Yes/No Questions)",
      pattern: "asked + if / whether + Subject + Backshifted Verb",
      watchOut: "ห้ามสลับกริยาช่วยขึ้นหน้าประธาน และห้ามใส่เครื่องหมายคำถาม (?)",
      example: "The supervisor asked if she could send the report before 5 p.m."
    },
    {
      keyword: "Modal Backshift (will -> would, can -> could)",
      topic: "Reported Speech",
      pattern: "said that + would / could + V1",
      watchOut: "เมื่อกริยานำเป็นอดีต (said, told) กริยาช่วย modal ต้องถอยเป็นรูปอดีตเสมอ",
      example: "He said that he would email the updated slides to everyone."
    }
  ],

  // ================= 3. READING QUESTION KEYWORDS =================
  readingKeywords: [
    {
      keyword: "Main Idea / Mainly About",
      category: "Gist / Core Meaning",
      questionPattern: "What is the passage mainly about? / What is the primary purpose?",
      strategy: "อ่านประโยคแรกและประโยคสุดท้ายของแต่ละย่อหน้า (Skimming) เพื่อมองภาพรวม ตัดตัวเลือกที่เป็นเพียงรายละเอียดปลีกย่อย (too specific) หรือกว้างเกินไป (too broad)",
      trapWarning: "ตัวเลือกที่ยกตัวเลขหรือชื่อเฉพาะมาอ้าง มักเป็นเพียง Key Detail ไม่ใช่ Main Idea",
      exampleQuestion: "What is the main topic of the passage on job satisfaction? -> Factors affecting employee satisfaction and dissatisfaction."
    },
    {
      keyword: "According to the passage",
      category: "Direct Fact / Detail",
      questionPattern: "According to the passage, why do employees quit? / According to paragraph 2...",
      strategy: "จับ Keyword ในโจทย์ แล้วไปสแกนหาคำคำนั้นหรือคำพ้องความหมาย (Synonyms) ในเนื้อเรื่อง แล้วอ่านประโยครอบข้างอย่างละเอียด คำตอบจะระบุไว้ตรงๆ",
      trapWarning: "อย่าตอบโดยใช้ความรู้รอบตัวหรือความรู้สึกส่วนตัว ต้องตอบตามสิ่งที่ปรากฏในบทความเท่านั้น",
      exampleQuestion: "According to the passage, what percentage of workers quit due to managerial disagreements? -> 75.0%."
    },
    {
      keyword: "Infer / Imply / Suggest",
      category: "Inference / Reading Between the Lines",
      questionPattern: "What can be inferred from paragraph 4? / The author implies that...",
      strategy: "คำตอบจะไม่เขียนไว้ตรงๆ 100% แต่สามารถสรุปได้อย่างสมเหตุสมผลจากหลักฐานที่มีในบทอ่าน",
      trapWarning: "ระวังตัวเลือกที่ด่วนสรุปเกินจริง (Extreme words: always, never, completely, all)",
      exampleQuestion: "What can be inferred about Millennials in the workplace? -> They value financial advancement and change jobs more readily."
    },
    {
      keyword: "Refer to",
      category: "Reference Words",
      questionPattern: "The word 'those' in line 3 refers to \_\_\_\_\_\_\_\_\_\_.",
      strategy: "อ่านย้อนกลับไป 1-2 ประโยคก่อนหน้า ดูว่าเป็นสรรพนามแทนคำนามเอกพจน์หรือพหูพจน์ คนหรือสิ่งของ แล้วลองนำคำนามในตัวเลือกไปแทนที่แล้วดูว่าได้ความหมายสมบูรณ์หรือไม่",
      trapWarning: "อย่าดูแค่คำที่อยู่ติดกัน ให้ดูหน้าที่ทางไวยากรณ์และความหมายเชื่อมโยง",
      exampleQuestion: "In '40.0% of those 35 and older', 'those' refers to -> workers."
    },
    {
      keyword: "Closest in meaning",
      category: "Vocabulary in Context",
      questionPattern: "The word 'X' in paragraph 2 is closest in meaning to \_\_\_\_\_\_\_\_\_\_.",
      strategy: "ดูบริบทแวดล้อม (Context clues) ดูคำเชื่อมรอบข้าง หรือเครื่องหมายวรรคตอน (เช่น วงเล็บ, dash) ที่ช่วยอธิบายความหมาย แล้วลองเอาตัวเลือกไปแทนที่",
      trapWarning: "คำศัพท์ 1 คำอาจมีหลายความหมาย ต้องเลือกความหมายที่ตรงกับบริบทในประโยคนั้นๆ ไม่ใช่ความหมายทั่วไป",
      exampleQuestion: "'engaged' in the workplace is closest in meaning to -> involved."
    },
    {
      keyword: "Author's Purpose / Tone",
      category: "Author's Intent",
      questionPattern: "What is the author's primary purpose in writing this article?",
      strategy: "ดูว่าผู้เขียนต้องการ อธิบาย (explain/inform), โน้มน้าวใจ (persuade), แนะนำวิธีทำ (instruct/guide), หรือ เตือน (warn)",
      trapWarning: "สังเกตคำกริยาต้นตัวเลือก เช่น criticize vs suggest vs entertain",
      exampleQuestion: "The author's purpose in 'Dealing with nervousness' is -> To provide practical steps to manage presentation anxiety."
    },
    {
      keyword: "NOT mentioned / EXCEPT",
      category: "Negative Fact / Elimination",
      questionPattern: "All of the following are mentioned EXCEPT \_\_\_\_\_\_\_\_\_\_.",
      strategy: "ใช้วิธีตัดตัวเลือก (Elimination) หา 3 ตัวเลือกที่มีระบุในบทความ ตัวเลือกใดที่ไม่ถูกพูดถึงเลย หรือตรงข้ามกับความจริงในบทความ นั่นคือคำตอบที่ถูกต้อง",
      trapWarning: "ระวังอ่านโจทย์ไม่รอบคอบจนลืมคำว่า EXCEPT หรือ NOT แล้วเผลอไปเลือกข้อที่มีอยู่ในเนื้อเรื่อง",
      exampleQuestion: "Factors affecting satisfaction except -> unfriendly supervisor (which causes dissatisfaction)."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CHEATSHEET_DATA };
}
