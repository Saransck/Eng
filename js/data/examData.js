// Practice Exam Dataset for CEFR B1-B2 Exam Preparation
// 40 Questions: 15 Vocabulary, 15 Grammar, 10 Reading (2 Passages x 5 Questions)
// All questions based strictly on Units 4, 5, and 6

const EXAM_DATA = [
  // ================= SECTION 1: VOCABULARY (15 QUESTIONS) =================
  {
    id: "v-01",
    section: "vocab",
    unit: 4,
    questionNumber: 1,
    question: "As an executive assistant, Jane's daily duties include booking flights, reserving hotel rooms, and making travel \_\_\_\_\_\_\_\_\_\_ for the corporate directors.",
    options: [
      "interruptions",
      "arrangements",
      "agendas",
      "presentations"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'arrangements' ใช้ในสำนวน 'make travel arrangements' หมายถึง การจัดการหรือเตรียมการเดินทาง (Unit 4, Ex 1)",
    signalKeywords: "booking flights, reserving hotel rooms -> make travel arrangements"
  },
  {
    id: "v-02",
    section: "vocab",
    unit: 4,
    questionNumber: 2,
    question: "Before the meeting adjourned, the committee chair asked the secretary to type up and circulate the \_\_\_\_\_\_\_\_\_\_ to all attendees.",
    options: [
      "minutes",
      "venues",
      "speeches",
      "mailing lists"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'minutes' (meeting minutes) หมายถึง รายงานการประชุมอย่างเป็นทางการที่ต้องพิมพ์และแจกจ่ายให้ผู้เข้าร่วม (Unit 4, Ex 1)",
    signalKeywords: "type up and circulate to all attendees -> minutes"
  },
  {
    id: "v-03",
    section: "vocab",
    unit: 4,
    questionNumber: 3,
    question: "The international exhibition was so popular that the organizers had to book a much larger \_\_\_\_\_\_\_\_\_\_ to accommodate all participants.",
    options: [
      "interruption",
      "agenda",
      "venue",
      "pension"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: 'venue' หมายถึง สถานที่จัดงาน/สถานที่จัดประชุม 'book a larger venue' คือจองสถานที่ที่ใหญ่ขึ้น (Unit 4, Ex 1)",
    signalKeywords: "book a much larger ... to accommodate participants -> venue"
  },
  {
    id: "v-04",
    section: "vocab",
    unit: 4,
    questionNumber: 4,
    question: "The urgent problem of employee workplace safety must be placed on the \_\_\_\_\_\_\_\_\_\_ for the upcoming board meeting.",
    options: [
      "agenda",
      "handout",
      "incentive",
      "turnover"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'agenda' หมายถึง ระเบียบวาระการประชุม วลี 'put / placed on the agenda' หมายถึง บรรจุเข้าสู่วาระการประชุม (Unit 4, Ex 1)",
    signalKeywords: "placed on the ... for upcoming board meeting -> agenda"
  },
  {
    id: "v-05",
    section: "vocab",
    unit: 4,
    questionNumber: 5,
    question: "David requested two weeks of \_\_\_\_\_\_\_\_\_\_ leave so that he could stay home and care for his wife and newborn daughter.",
    options: [
      "maternity",
      "paternity",
      "unpaid",
      "educational"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'paternity leave' หมายถึง วันลาหยุดงานสำหรับบิดาเพื่อดูแลบุตรแรกเกิด (time off work for the father of a new baby) (Unit 4, Ex 2)",
    signalKeywords: "father caring for wife and newborn daughter -> paternity leave"
  },
  {
    id: "v-06",
    section: "vocab",
    unit: 4,
    questionNumber: 6,
    question: "Because our company offers \_\_\_\_\_\_\_\_\_\_, employees can choose their arrival and departure times to suit their personal commitments.",
    options: [
      "flextime",
      "life insurance",
      "severance",
      "disability"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'flextime' หมายถึง ระบบเวลาทำงานที่ยืดหยุ่นได้ พนักงานสามารถเลือกเวลาเข้างานและเลิกงานได้ (Unit 4, Ex 9)",
    signalKeywords: "choose arrival and departure times -> flextime"
  },
  {
    id: "v-07",
    section: "vocab",
    unit: 4,
    questionNumber: 7,
    question: "Both full-time staff and retirees value the company's generous \_\_\_\_\_\_\_\_\_\_, which secures a stable income during their old age.",
    options: [
      "mailing list",
      "pension plan",
      "interruption",
      "anecdote"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'pension plan' หมายถึง กองทุนบำเหน็จบำนาญสำหรับพนักงานในยามชราหลังเกษียณอายุ (a fund for employees in their old age) (Unit 4, Ex 2)",
    signalKeywords: "stable income during their old age -> pension plan"
  },
  {
    id: "v-08",
    section: "vocab",
    unit: 5,
    questionNumber: 8,
    question: "Before concluding the talk, the presenter gave a brief \_\_\_\_\_\_\_\_\_\_ to summarize the key financial findings discussed earlier.",
    options: [
      "jargon",
      "recap",
      "anxiety",
      "rapport"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'recap' (give a recap / to recap) หมายถึง การทบทวนสรุปประเด็นสำคัญอีกครั้ง (give a summary) (Unit 5, Ex 2)",
    signalKeywords: "brief ... to summarize key findings -> recap"
  },
  {
    id: "v-09",
    section: "vocab",
    unit: 5,
    questionNumber: 9,
    question: "Presenters should utilize well-designed visual \_\_\_\_\_\_\_\_\_\_, such as infographics and flowcharts, to help the audience grasp complex data.",
    options: [
      "aids",
      "trends",
      "jargons",
      "bribes"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'visual aids' หมายถึง สื่อหรืออุปกรณ์ทัศนูปกรณ์ เช่น สไลด์ กราฟ แผนภูมิ ที่ช่วยให้ผู้ฟังเข้าใจข้อมูลได้ง่ายขึ้น (Unit 5, Ex 3)",
    signalKeywords: "visual ... such as infographics and flowcharts -> aids"
  },
  {
    id: "v-10",
    section: "vocab",
    unit: 5,
    questionNumber: 10,
    question: "It is natural for novice public speakers to experience mild \_\_\_\_\_\_\_\_\_\_ before addressing a large convention audience.",
    options: [
      "rapport",
      "anxiety",
      "conciseness",
      "etiquette"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'anxiety' หมายถึง ความวิตกกังวลหรือความประหม่าก่อนขึ้นพูด (nervousness before speaking) (Unit 5, Ex 3)",
    signalKeywords: "nervousness before addressing audience -> anxiety"
  },
  {
    id: "v-11",
    section: "vocab",
    unit: 5,
    questionNumber: 11,
    question: "To ensure clear communication with non-specialist clients, avoid using technical \_\_\_\_\_\_\_\_\_\_ that might confuse them.",
    options: [
      "handouts",
      "anecdotes",
      "jargon",
      "outlines"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: 'jargon' หมายถึง ศัพท์เทคนิคเฉพาะวงการที่คนทั่วไปไม่เข้าใจ (technical language that listeners may not understand) (Unit 5, Ex 3)",
    signalKeywords: "technical language that might confuse non-specialists -> jargon"
  },
  {
    id: "v-12",
    section: "vocab",
    unit: 5,
    questionNumber: 12,
    question: "A competent presenter creates a warm, trusting atmosphere by building strong \_\_\_\_\_\_\_\_\_\_ with the listeners from the outset.",
    options: [
      "rapport",
      "criticism",
      "dispute",
      "severity"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'rapport' (build rapport) หมายถึง การสร้างสัมพันธภาพอันดี บรรยากาศที่เป็นมิตรและไว้วางใจระหว่างผู้พูดกับผู้ฟัง (Unit 5, Ex 3)",
    signalKeywords: "warm, trusting atmosphere with listeners -> rapport"
  },
  {
    id: "v-13",
    section: "vocab",
    unit: 5,
    questionNumber: 13,
    question: "Effective business executives write \_\_\_\_\_\_\_\_\_\_ emails, stating essential facts clearly without adding unnecessary details.",
    options: [
      "pompous",
      "concise",
      "aggressive",
      "insincere"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'concise' หมายถึง สั้น กระชับ ชัดเจน โดยไม่ใช้คำฟุ่มเฟือย (expressing ideas clearly without too many words) (Unit 5, Ex 3)",
    signalKeywords: "stating essential facts without unnecessary details -> concise"
  },
  {
    id: "v-14",
    section: "vocab",
    unit: 6,
    questionNumber: 14,
    question: "In many Asian business cultures, the concept of saving \_\_\_\_\_\_\_\_\_\_ is essential to prevent public embarrassment and preserve harmony.",
    options: [
      "time",
      "face",
      "money",
      "effort"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'saving face' หมายถึง การรักษาหน้า การปกป้องศักดิ์ศรีและความเคารพในปฏิสัมพันธ์ทางสังคม ไม่ทำให้ผู้อื่นอับอาย (Unit 6, Ex 4)",
    signalKeywords: "Asian business culture, prevent embarrassment, preserve harmony -> saving face"
  },
  {
    id: "v-15",
    section: "vocab",
    unit: 6,
    questionNumber: 15,
    question: "When operating in multicultural settings, professionals must observe international \_\_\_\_\_\_\_\_\_\_ to avoid ruining working relationships.",
    options: [
      "etiquette",
      "jargon",
      "interruption",
      "paternity"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'etiquette' หมายถึง กฎระเบียบและมารยาททางสังคมหรือธรรมเนียมปฏิบัติในการทำงาน (rules for polite behavior) (Unit 6, Ex 9)",
    signalKeywords: "polite behavior in business, protect working relationships -> etiquette"
  },

  // ================= SECTION 2: GRAMMAR (15 QUESTIONS) =================
  {
    id: "g-01",
    section: "grammar",
    unit: 4,
    questionNumber: 16,
    question: "Because the keynote speaker fell ill, the conference committee decided to \_\_\_\_\_\_\_\_\_\_ the afternoon session.",
    options: [
      "call off",
      "look into",
      "come across",
      "catch on"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'call off' เป็น phrasal verb แปลว่า ยกเลิก (cancel) บริบทวิทยากรป่วย คณะกรรมการจึงต้อง 'ยกเลิก' การบรรยายช่วงบ่าย (Unit 4, Ex 4)",
    signalKeywords: "speaker fell ill -> cancel -> call off"
  },
  {
    id: "g-02",
    section: "grammar",
    unit: 4,
    questionNumber: 17,
    question: "Choose the sentence that correctly places the pronoun with the separable phrasal verb 'call off'.",
    options: [
      "The client canceled the contract, so the team called off it.",
      "The client canceled the contract, so the team called it off.",
      "The client canceled the contract, so the team called off them.",
      "The client canceled the contract, so the team it called off."
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'call off' เป็น Separable Phrasal Verb หากกรรมเป็น Pronoun (it) ต้องวางคั่นตรงกลางระหว่างกริยาและ particle เท่านั้น คือ 'called it off' (Unit 4, Focus 1)",
    signalKeywords: "separable phrasal verb + pronoun -> verb + pronoun + particle (called it off)"
  },
  {
    id: "g-03",
    section: "grammar",
    unit: 4,
    questionNumber: 18,
    question: "The internal audit department will \_\_\_\_\_\_\_\_\_\_ the discrepancies discovered in the financial ledger.",
    options: [
      "look into",
      "turn down",
      "tell off",
      "give up"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'look into' เป็น Non-separable Phrasal Verb แปลว่า ตรวจสอบข้อเท็จจริง (examine the facts / investigate) (Unit 4, Ex 4)",
    signalKeywords: "audit discrepancies -> investigate -> look into"
  },
  {
    id: "g-04",
    section: "grammar",
    unit: 4,
    questionNumber: 19,
    question: "During yesterday's product design session, the engineering team managed to \_\_\_\_\_\_\_\_\_\_ an innovative battery design.",
    options: [
      "look after",
      "storm out of",
      "come up with",
      "count on"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: 'come up with' แปลว่า คิดค้นหรือเสนอไอเดีย/วิธีแก้ปัญหา (suggest or think of an idea/plan) (Unit 4, Ex 4)",
    signalKeywords: "design session -> think of an idea -> come up with"
  },
  {
    id: "g-05",
    section: "grammar",
    unit: 4,
    questionNumber: 20,
    question: "All delegates are looking forward to \_\_\_\_\_\_\_\_\_\_ the guest lecture tomorrow afternoon.",
    options: [
      "attend",
      "attended",
      "attending",
      "have attended"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: โครงสร้าง 'look forward to' คำว่า to เป็น preposition ต้องตามด้วย Gerund (V-ing) หรือคำนามเสมอ -> 'looking forward to attending' (Unit 4, Focus 1)",
    signalKeywords: "look forward to + V-ing -> attending"
  },
  {
    id: "g-06",
    section: "grammar",
    unit: 4,
    questionNumber: 21,
    question: "Hurry up! Our domestic flight to Chiang Mai \_\_\_\_\_\_\_\_\_\_ at 14:30.",
    options: [
      "is leaving",
      "leaves",
      "will leave",
      "going to leave"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: ตารางเวลาการเดินทางที่กำหนดไว้แน่นอน (Timetabled / Scheduled event) ต้องใช้ Present Simple (Subject + V1) เสมอ -> 'flight leaves at 14:30' (Unit 4, Focus 2)",
    signalKeywords: "flight schedule with fixed time -> Present Simple (leaves)"
  },
  {
    id: "g-07",
    section: "grammar",
    unit: 4,
    questionNumber: 22,
    question: "I can't join the networking lunch because I \_\_\_\_\_\_\_\_\_\_ the regional director at 1:00 p.m. today.",
    options: [
      "meet",
      "am meeting",
      "will have met",
      "met"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: การนัดหมายที่มีการตกลงเวลาและสถานที่ไว้แล้วในอนาคตอันใกล้ (Fixed arrangement in near future) ต้องใช้ Present Continuous (is/am/are + V-ing) -> 'am meeting' (Unit 4, Focus 2)",
    signalKeywords: "fixed arrangement with time (at 1:00 p.m. today) -> Present Continuous (am meeting)"
  },
  {
    id: "g-08",
    section: "grammar",
    unit: 4,
    questionNumber: 23,
    question: "A: The office printer is out of paper.\nB: Hold on a second, I \_\_\_\_\_\_\_\_\_\_ a few packs from the storage room.",
    options: [
      "will get",
      "am getting",
      "am going to get",
      "get"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: การตัดสินใจทำทันทีขณะพูด หรือการอาสาช่วยเหลือ (Spontaneous decision/offer) ต้องใช้ Future Simple (will + V1) -> 'will get' (Unit 4, Focus 2)",
    signalKeywords: "spontaneous offer in response to immediate situation -> will + V1 (will get)"
  },
  {
    id: "g-09",
    section: "grammar",
    unit: 4,
    questionNumber: 24,
    question: "Tommy has already submitted his formal resignation; he \_\_\_\_\_\_\_\_\_\_ launch his own consultancy firm next month.",
    options: [
      "will",
      "is going to",
      "would",
      "leaves"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: มีการวางแผนและตัดสินใจไว้ล่วงหน้าแล้วอย่างชัดเจน (Prior intention / decision) ต้องใช้ 'be going to' -> 'is going to launch' (Unit 4, Focus 2)",
    signalKeywords: "already submitted resignation (prior intention) -> is going to"
  },
  {
    id: "g-10",
    section: "grammar",
    unit: 5,
    questionNumber: 25,
    question: "The keynote speaker spoke \_\_\_\_\_\_\_\_\_\_ fast that international participants could barely comprehend his arguments.",
    options: [
      "such",
      "such a",
      "so",
      "so much"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: โครงสร้าง 'so + adverb + that...' คำว่า 'fast' เป็น adverb ขยายกริยา spoke จึงต้องใช้ 'so fast that' (Unit 5, Focus 1)",
    signalKeywords: "adverb (fast) + that -> so fast that"
  },
  {
    id: "g-11",
    section: "grammar",
    unit: 5,
    questionNumber: 26,
    question: "It was \_\_\_\_\_\_\_\_\_\_ impressive presentation that several investors offered immediate venture funding.",
    options: [
      "so",
      "such an",
      "such a",
      "so much"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: โครงสร้าง 'such + a/an + adj + singular countable noun + that' คำว่า 'impressive' ขึ้นต้นด้วยเสียงสระ จึงใช้ 'such an impressive presentation' (Unit 5, Focus 1)",
    signalKeywords: "vowel adj + singular noun (impressive presentation) -> such an"
  },
  {
    id: "g-12",
    section: "grammar",
    unit: 5,
    questionNumber: 27,
    question: "We received \_\_\_\_\_\_\_\_\_\_ negative feedback from customers that we decided to redesign the mobile interface.",
    options: [
      "such",
      "such a",
      "so",
      "so many"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: 'feedback' เป็นคำนามนับไม่ได้ (uncountable noun) ดังนั้นโครงสร้างที่ถูกต้องคือ 'such + adj + uncountable noun' (ห้ามใส่ a/an) -> 'such negative feedback' (Unit 5, Focus 1)",
    signalKeywords: "adj + uncountable noun (negative feedback) -> such"
  },
  {
    id: "g-13",
    section: "grammar",
    unit: 5,
    questionNumber: 28,
    question: "The marketing team promoted the product vigorously on digital platforms. \_\_\_\_\_\_\_\_\_\_, sales exceeded the annual target by 25%.",
    options: [
      "However",
      "In contrast",
      "As a result",
      "On the other hand"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: ประโยคแรกเป็น 'สาเหตุ' (โปรโมตอย่างหนัก) และประโยคหลังเป็น 'ผลลัพธ์' (ยอดขายเกินเป้า) จึงต้องใช้กลุ่ม Showing Result -> 'As a result,' (Unit 5, Focus 2)",
    signalKeywords: "cause -> consequence/result -> As a result,"
  },
  {
    id: "g-14",
    section: "grammar",
    unit: 5,
    questionNumber: 29,
    question: "Traditional newspaper advertisements have declined sharply. \_\_\_\_\_\_\_\_\_\_, digital media advertising continues to experience rapid growth.",
    options: [
      "Consequently",
      "In contrast",
      "Therefore",
      "Moreover"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: ประโยคแรกยอดโฆษณา นสพ. ลดลง แต่ประโยคหลังโฆษณาดิจิทัลพุ่งขึ้น แสดงความขัดแย้ง/การเปรียบเทียบที่ตรงข้ามกัน จึงต้องใช้ 'In contrast,' (Unit 5, Focus 2)",
    signalKeywords: "declined sharply vs rapid growth (opposite comparison) -> In contrast,"
  },
  {
    id: "g-15",
    section: "grammar",
    unit: 6,
    questionNumber: 30,
    question: "\"Can you deliver the final proposal to the client by 4 p.m.?\" the supervisor asked Jane.\nWhich is the correct reported speech form?",
    options: [
      "The supervisor asked Jane if could she deliver the final proposal to the client by 4 p.m.",
      "The supervisor asked Jane whether she could deliver the final proposal to the client by 4 p.m.",
      "The supervisor asked Jane whether can she deliver the final proposal to the client by 4 p.m.",
      "The supervisor asked Jane if she can deliver the final proposal to the client by 4 p.m."
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: ในการรายงาน Yes/No Question ต้องใช้ whether หรือ if ตามด้วยรูปประโยคบอกเล่า [ประธาน + กริยา] และถอย Tense จาก can เป็น could -> 'whether she could deliver...' (Unit 6, Focus 2)",
    signalKeywords: "Reported Yes/No Question -> whether/if + subject (she) + past modal (could) + V1"
  },

  // ================= SECTION 3: READING COMPREHENSION (10 QUESTIONS) =================
  // PASSAGE 1: Job Satisfaction (5 Questions)
  {
    id: "r-01",
    section: "reading",
    unit: 4,
    passageId: "read-u4",
    passageTitle: "Passage 1: Job Satisfaction",
    questionNumber: 31,
    question: "According to the passage on Job Satisfaction, which of the following is NOT among the three prioritized workplace benefits reported by GoodFirms?",
    options: [
      "Annual raises",
      "Five working days a week",
      "Flexible timings",
      "Comprehensive dental insurance"
    ],
    correctAnswer: 3, // D
    explanationThai: "คำตอบคือข้อ D: ในย่อหน้าที่ 2 ระบุว่าสวัสดิการ 3 อันดับแรกที่ผู้ตอบแบบสอบถามคาดหวังคือ 1) annual raises (81.10%), 2) five working days a week (75.33%), และ 3) flexible timings (74.54%) โดยไม่ได้รวม dental insurance ไว้ใน 3 อันดับแรก (Unit 4, Ex 7)",
    evidenceSentence: "Reporting in the survey by GoodFirms, most respondents (89.05%) expect the three prioritized workplace benefits which are annual raises (81.10%), five working days a week (75.33%), and flexible timings (74.54%)."
  },
  {
    id: "r-02",
    section: "reading",
    unit: 4,
    passageId: "read-u4",
    passageTitle: "Passage 1: Job Satisfaction",
    questionNumber: 32,
    question: "In the sentence 'Gallup research revealed that only 34.0% of US employees feel engaged in a workplace,' the word 'engaged' is closest in meaning to \_\_\_\_\_\_\_\_\_\_.",
    options: [
      "suspected",
      "involved",
      "passive",
      "free"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: 'engaged' ในบริบทความผูกพันในที่ทำงานหมายถึง มีส่วนร่วม ทุ่มเท กระตือรือร้นกับงาน จึงมีความหมายเหมือนกับ 'involved' (Unit 4, Ex 7 ข้อ 2)",
    evidenceSentence: "Gallup research revealed that only 34.0% of US employees feel engaged in a workplace."
  },
  {
    id: "r-03",
    section: "reading",
    unit: 4,
    passageId: "read-u4",
    passageTitle: "Passage 1: Job Satisfaction",
    questionNumber: 33,
    question: "The passage reveals that while only 12% of employees leave due to salary alone, a staggering 75% quit because of \_\_\_\_\_\_\_\_\_\_.",
    options: [
      "managerial disagreements",
      "excessive training sessions",
      "lack of dental coverage",
      "too much flexible timing"
    ],
    correctAnswer: 0, // A
    explanationThai: "คำตอบคือข้อ A: สถิติในย่อหน้าที่ 3 ระบุชัดเจนว่าพนักงานถึง 75% ลาออกจากงานเพราะความขัดแย้งกับฝ่ายบริหาร (managerial disagreements / disputes) (Unit 4, Ex 7 ข้อ 3)",
    evidenceSentence: "Contrarily, the statistics show that 75.0% of employees quit their jobs due to managerial disagreements."
  },
  {
    id: "r-04",
    section: "reading",
    unit: 4,
    passageId: "read-u4",
    passageTitle: "Passage 1: Job Satisfaction",
    questionNumber: 34,
    question: "In paragraph 4, 'Thirty-one percent of workers who are 18- to 34- years old are satisfied with their jobs while 40.0% of those 35 and older report complete satisfaction...', the word 'those' refers to \_\_\_\_\_\_\_\_\_\_.",
    options: [
      "statistics",
      "priorities",
      "workers",
      "benefits"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: คำสรรพนาม 'those' ทำหน้าที่แทนคำนามพหูพจน์ 'workers' ที่พูดถึงในประโยคก่อนหน้า (Unit 4, Ex 7 ข้อ 4)",
    evidenceSentence: "...while 40.0% of those 35 and older report complete satisfaction with their present jobs."
  },
  {
    id: "r-05",
    section: "reading",
    unit: 4,
    passageId: "read-u4",
    passageTitle: "Passage 1: Job Satisfaction",
    questionNumber: 35,
    question: "In the final section discussing impacts of dissatisfaction, '...employers don't care enough or fail to understand the severity of the problem.' The word 'severity' can be replaced by \_\_\_\_\_\_\_\_\_\_.",
    options: [
      "flexibility",
      "gentleness",
      "tolerance",
      "hardness"
    ],
    correctAnswer: 3, // D
    explanationThai: "คำตอบคือข้อ D: ในแบบฝึกหัดของ Unit 4 คำว่า 'severity' (ความรุนแรง/ร้ายแรงของปัญหา) สัมพันธ์กับคำว่า 'hardness' (seriousness/gravity) (Unit 4, Ex 7 ข้อ 5)",
    evidenceSentence: "Although job satisfaction continues to grow, employers don't care enough or fail to understand the severity of the problem."
  },

  // PASSAGE 2: Working with Different Cultures in Business (5 Questions)
  {
    id: "r-06",
    section: "reading",
    unit: 6,
    passageId: "read-u6",
    passageTitle: "Passage 2: Working with Different Cultures in Business",
    questionNumber: 36,
    question: "Why is it crucial to understand cultural etiquette even when all participants in an international meeting communicate in English?",
    options: [
      "To demonstrate that you have a larger English vocabulary than others",
      "Because grammar rules differ in every English-speaking region",
      "To avoid unfair judgments and protect vital professional relationships",
      "Because most multinational corporations are stopping the use of English"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: ย่อหน้าที่ 1 ระบุว่าการไม่เข้าใจกติกาทางวัฒนธรรมอาจทำให้เราตัดสินผู้อื่นอย่างไม่เป็นธรรม หรือทำลายความสัมพันธ์ทางธุรกิจได้ (Unit 6, Ex 7 ข้อ 1)",
    evidenceSentence: "If we do not understand cultural 'rules,' we might make unfair judgments or ruin our professional relationships."
  },
  {
    id: "r-07",
    section: "reading",
    unit: 6,
    passageId: "read-u6",
    passageTitle: "Passage 2: Working with Different Cultures in Business",
    questionNumber: 37,
    question: "According to the passage, how might a British business professional view someone who strictly insists on being addressed by their academic title (e.g., 'Dr.')?",
    options: [
      "As extremely capable and intellectually superior",
      "As being pompous and excessively formal",
      "As showing great modesty and team spirit",
      "As demonstrating a modern informal approach"
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: ในย่อหน้าที่ 2 ระบุว่าคนอังกฤษมักชอบความไม่เป็นทางการ และอาจมองว่าการยึดติดกับคำนำหน้าดู 'pompous' (ทำตัวสำคัญเกินไป / โอ่อ่าเป็นทางการเกินไป) (Unit 6, Ex 7 ข้อ 2)",
    evidenceSentence: "But a British person might think using a title is too pompous (acting too important)."
  },
  {
    id: "r-08",
    section: "reading",
    unit: 6,
    passageId: "read-u6",
    passageTitle: "Passage 2: Working with Different Cultures in Business",
    questionNumber: 38,
    question: "In Russian business settings, how is an unprompted smile without any obvious reason typically perceived?",
    options: [
      "As a welcome gesture that breaks the ice",
      "As a clear sign of superior intelligence and respect",
      "As being insincere or even silly",
      "As a standard professional courtesy"
    ],
    correctAnswer: 2, // C
    explanationThai: "คำตอบคือข้อ C: ในย่อหน้าที่ 3 ระบุว่าในรัสเซีย การยิ้มโดยไม่มีเหตุผลชัดเจนอาจดูเหมือนไม่จริงใจ (insincere) หรือดูงี่เง่า (silly) (Unit 6, Ex 7 ข้อ 3)",
    evidenceSentence: "However, in Russia, smiling for no reason can seem insincere or even 'silly.'"
  },
  {
    id: "r-09",
    section: "reading",
    unit: 6,
    passageId: "read-u6",
    passageTitle: "Passage 2: Working with Different Cultures in Business",
    questionNumber: 39,
    question: "What is the potential risk of maintaining prolonged direct eye contact with a superior in parts of Africa and South America?",
    options: [
      "It proves that you are listening with deep enthusiasm.",
      "It might be interpreted as an aggressive challenge to their authority.",
      "It shows you are ready for an immediate salary promotion.",
      "It is universally interpreted as a mark of utmost honesty."
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: ย่อหน้าที่ 4 ระบุว่าในแอฟริกาและอเมริกาใต้ การสบตากับหัวหน้านานเกินไปอาจถูกตีความว่าเป็นการท้าทายอำนาจ (challenge to their authority) (Unit 6, Ex 7 ข้อ 4)",
    evidenceSentence: "In parts of Africa and South America, looking at a superior for too long might be interpreted as a challenge to their authority."
  },
  {
    id: "r-10",
    section: "reading",
    unit: 6,
    passageId: "read-u6",
    passageTitle: "Passage 2: Working with Different Cultures in Business",
    questionNumber: 40,
    question: "What does the author imply in the conclusion by advising readers not to 'pigeonhole' people?",
    options: [
      "We should classify business partners strictly by their nationalities.",
      "We should treat every colleague as an individual rather than stereotyping them based on a single trait.",
      "We should ignore corporate etiquette and behave as we please.",
      "We should never use cultural etiquette guides when traveling abroad."
    ],
    correctAnswer: 1, // B
    explanationThai: "คำตอบคือข้อ B: ในย่อหน้าสรุป ผู้เขียนเตือนไม่ให้ 'pigeonhole' (เหมารวมตัดสินคนจากสัญชาติหรือลักษณะเดียว) แต่ให้ปฏิบัติต่อคู่ค้าในฐานะปัจเจกบุคคล (treat partners as individuals) (Unit 6, Ex 7 ข้อ 5)",
    evidenceSentence: "...we should not pigeonhole people (label everyone from one country as the same)... always treat your business partners as individuals."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EXAM_DATA };
}
