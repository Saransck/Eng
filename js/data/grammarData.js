// Grammar Guide Dataset for CEFR B1-B2 Exam Preparation
// Extracted strictly from Units 4, 5, and 6

const GRAMMAR_DATA = [
  // ================= 1. PHRASAL VERBS =================
  {
    id: "g-001",
    unit: 4,
    title: "Phrasal Verbs: Separable vs. Non-separable",
    thaiTitle: "กริยาวลี: แบบแยกได้และแบบแยกไม่ได้",
    summary: "กริยาวลี (Verb + Preposition/Adverb) มีความหมายเฉพาะใหม่ และมี 2 รูปแบบหลักคือ Separable (แยกกรรมคั่นกลางได้) และ Non-separable (ห้ามแยกกรรมคั่นกลาง)",
    rule: "A phrasal verb acts as a normal verb, but it is formed by combining a verb with a particle (preposition or adverb). Its meaning is usually idiomatic and distinct from the literal meaning of the original verb.",
    structure: [
      "Non-separable: Verb + Particle + Object (ห้ามนำกรรมมาคั่นตรงกลางเด็ดขาด)",
      "Separable: Verb + Particle + Object หรือ Verb + Object + Particle (หากกรรมเป็น Pronoun เช่น it, them, me ต้องวางคั่นกลางเสมอ!)"
    ],
    usage: "ใช้สื่อสารในบริบททำงานอย่างเป็นธรรมชาติ เช่น การนัดหมาย ยกเลิก เสนอความคิด หรือสืบสวนปัญหา",
    signalWords: [
      "look after", "look into", "look forward to (+ V-ing)", "come up with", "come across",
      "call off", "bring up", "fill in", "pick up", "turn down", "add up to", "tell off"
    ],
    forms: {
      positive: "The manager called off the meeting. / The manager called it off.",
      negative: "She did not bring up the salary issue.",
      question: "Did you look into the customer's complaint?"
    },
    examples: [
      {
        en: "We <mark>look forward to</mark> seeing you again at the conference.",
        th: "เราตั้งตารอที่จะได้พบคุณอีกครั้งในการประชุม (Non-separable: ห้ามแยก และตามด้วย V-ing)",
        note: "look forward to + Gerund (seeing)"
      },
      {
        en: "The supervisor <mark>called off</mark> the meeting. / He <mark>called</mark> it <mark>off</mark>.",
        th: "หัวหน้ายกเลิกการประชุม (Separable: หากกรรมเป็นคำสรรพนาม 'it' ต้องอยู่ตรงกลาง)",
        note: "call off = to cancel"
      },
      {
        en: "Our technical team will <mark>look into</mark> the server outage immediately.",
        th: "ทีมเทคนิคจะตรวจสอบปัญหาเซิร์ฟเวอร์ล่มทันที (Non-separable: ห้ามพูด look the server into)",
        note: "look into = examine / investigate"
      },
      {
        en: "She managed to <mark>come up with</mark> a creative solution under pressure.",
        th: "เธอสามารถคิดค้นวิธีแก้ปัญหาที่สร้างสรรค์ได้ท่ามกลางความกดดัน",
        note: "come up with = suggest or think of an idea"
      }
    ],
    comparisonTable: {
      headers: ["ประเภท (Type)", "กฎตำแหน่งกรรม (Object Placement)", "ตัวอย่างคำศัพท์ (Key Verbs)", "ข้อควรระวัง (Watch-out)"],
      rows: [
        [
          "Non-separable (แยกไม่ได้)",
          "กรรมต้องอยู่ **หลังวลีเสมอ** [Verb + Particle + Object]",
          "look after, look into, look forward to, come across, get over, come up with, catch on",
          "ห้ามนำคำนามหรือสรรพนามมาแทรกกลาง เช่น *look the baby after ❌*"
        ],
        [
          "Separable (แยกได้)",
          "กรรมเป็นคำนามวางได้ 2 ตำแหน่ง แต่ถ้าเป็น **Pronoun (it/them/me) ต้องวางตรงกลางเท่านั้น**",
          "call off, bring up, fill in, pick up, turn down, give up, cut off, tell off",
          "ถ้าเป็น Pronoun ห้ามวางข้างหลัง เช่น *call off it ❌* ต้องเป็น *call it off ✔️*"
        ]
      ]
    },
    commonMistakes: [
      "ใช้กรรมเป็น Pronoun ต่อท้าย Separable Phrasal Verb: 'He called off it' ❌ -> 'He called it off' ✔️",
      "แยก Non-separable Phrasal Verb: 'We looked the problem into' ❌ -> 'We looked into the problem' ✔️",
      "ลืมใช้ V-ing หลัง look forward to: 'I look forward to hear from you' ❌ -> 'I look forward to hearing from you' ✔️"
    ],
    examTips: [
      "หากเห็นสรรพนาม เช่น it, them, him, her ในข้อสอบ ให้มองหา Phrasal verb ที่เป็นแบบ Separable ที่วางสรรพนามคั่นกลาง",
      "look into มักแปลว่า investigate/examine, ส่วน bring up แปลว่า mention/raise a topic",
      "turn down มักจับคู่กับ offer/invitation แปลว่า refuse/reject"
    ],
    miniQuiz: [
      {
        question: "Because of the sudden storm, the management decided to \_\_\_\_\_\_\_\_\_\_ the outdoor team-building event.",
        options: ["call off", "look into", "come across", "catch on"],
        answer: 0,
        explanation: "call off หมายถึง ยกเลิก (cancel) บริบทพายุเข้าทำให้ต้อง 'ยกเลิก' กิจกรรมกลางแจ้ง"
      },
      {
        question: "Choose the grammatically correct sentence with a pronoun.",
        options: [
          "The meeting was canceled, so the boss called off it.",
          "The meeting was canceled, so the boss called it off.",
          "The meeting was canceled, so the boss it called off.",
          "The meeting was canceled, so the boss called off them."
        ],
        answer: 1,
        explanation: "call off เป็น separable phrasal verb เมื่อกรรมเป็น Pronoun (it) ต้องวางคั่นกลางระหว่างกริยาและ particle เสมอ: 'called it off'"
      },
      {
        question: "The research committee will \_\_\_\_\_\_\_\_\_\_ the financial irregularities reported yesterday.",
        options: ["turn down", "give up", "look into", "tell off"],
        answer: 2,
        explanation: "look into หมายถึง ตรวจสอบ/สืบสวนหาความจริง (examine/investigate) เหมาะกับบริบทตรวจสอบความผิดปกติทางการเงิน"
      }
    ]
  },

  // ================= 2. MEETING PLANS & FUTURE FORMS =================
  {
    id: "g-002",
    unit: 4,
    title: "Meeting Plans & Future Forms",
    thaiTitle: "การวางแผนการประชุมและรูปกาลอนาคต",
    summary: "การเลือกใช้ Tense ในการพูดถึงอนาคตขึ้นอยู่กับลักษณะของแผน: ตารางเวลาแน่นอน (Present Simple), นัดหมายล่วงหน้ากำหนดวันเวลาสถานที่แล้ว (Present Continuous), แผนที่ตั้งใจไว้ก่อนหน้า (Be going to), หรือการตัดสินใจทันที/การคาดการณ์ (Will)",
    rule: "Four key structures express future events in business English, differentiated by certainty, prior planning, and schedule constraints.",
    structure: [
      "1. Present Simple: Subject + V1 (s/es) -> ตารางเวลาตายตัว (Timetable/Schedule)",
      "2. Present Continuous: Subject + is/am/are + V-ing -> นัดหมายส่วนตัว/นัดประชุมที่มีเวลากำหนดแน่นอนในอนาคตอันใกล้ (Fixed arrangement)",
      "3. Future Simple: Subject + will + V1 -> ตัดสินใจทันที (Spontaneous decision), สัญญา (Promise), คาดเดา (Prediction)",
      "4. Be going to: Subject + is/am/are + going to + V1 -> แผนการหรือความตั้งใจที่คิดไว้ล่วงหน้า (Prior intention / decision)"
    ],
    usage: "ใช้พูดถึงตารางบิน, การนัดพบลูกค้า, การอาสาช่วยเหลือทันที, หรือแผนงานของบริษัท",
    signalWords: [
      "Timetable cues: leaves at, starts at, arrives at",
      "Fixed arrangement cues: tomorrow morning, this afternoon, at 3 p.m. with someone",
      "Spontaneous cues: I'll help you, I'll get it, right now, out of paper",
      "Prior intention cues: have already decided, confirmed, plan to",
      "Certainty Adverbs: definitely (มั่นใจสุด) > probably (น่าจะ) > perhaps / maybe (อาจจะ)"
    ],
    forms: {
      positive: "The flight leaves at 5 p.m. / I am meeting the CEO tomorrow. / I will get you some coffee. / I am going to quit.",
      negative: "The train doesn't leave until 6. / I'm not attending. / He won't get the job.",
      question: "What time does the conference start? / Are you flying to Tokyo tomorrow? / Will you help me?"
    },
    examples: [
      {
        en: "The board meeting <mark>starts</mark> at 9.30 a.m. sharp.",
        th: "การประชุมคณะกรรมการเริ่มเวลา 9.30 น. ตรง (Present Simple: ตารางเวลาที่กำหนดแน่นอน)",
        note: "Scheduled timetable -> Present Simple"
      },
      {
        en: "I <mark>am having</mark> lunch with the international client this afternoon at 1 p.m.",
        th: "ฉันมีนัดทานอาหารกลางวันกับลูกค้าต่างชาติตอนบ่ายโมงวันนี้ (Present Continuous: นัดหมายที่มีเวลาระบุชัดเจน)",
        note: "Fixed personal arrangement with time/place -> Present Continuous"
      },
      {
        en: "The printer is out of toner. I <mark>will get</mark> a replacement right away.",
        th: "เครื่องพิมพ์หมึกหมด เดี๋ยวฉันจะไปหยิบตลับใหม่มาให้เดี๋ยวนี้เลย (Future Simple: ตัดสินใจทำทันที)",
        note: "Spontaneous offer/decision -> will + V1"
      },
      {
        en: "Tommy decided that he <mark>is going to quit</mark> his position to start his venture.",
        th: "ทอมมี่ตัดสินใจแล้วว่าเขาจะลาออกจากตำแหน่งเพื่อเริ่มธุรกิจของตัวเอง (Be going to: แผนการที่ตัดสินใจไว้ก่อนหน้า)",
        note: "Prior decision / intention -> be going to"
      }
    ],
    comparisonTable: {
      headers: ["รูปประโยค (Form)", "การใช้งานหลัก (Main Function)", "คำใบ้ในข้อสอบ (Signal Clues)", "ตัวอย่าง (Example)"],
      rows: [
        [
          "Present Simple (V1)",
          "ตารางเวลาขนส่งสาธารณะ ตารางประชุมทางการ (Timetabled events)",
          "at 9.00, tomorrow at 10.30 (กับกริยา leave, start, close, arrive)",
          "The flight to Frankfurt **leaves** at 7 p.m."
        ],
        [
          "Present Continuous (be + V-ing)",
          "การนัดหมายที่มีการตกลงเวลาและสถานที่กับผู้อื่นไว้แล้วในอนาคตอันใกล้",
          "this afternoon, tomorrow morning, meeting with someone",
          "We **are having** a budget review at 2 p.m. today."
        ],
        [
          "Future Simple (will + V1)",
          "การตัดสินใจทันทีขณะพูด, อาสาช่วยเหลือ, ทำนายอนาคต",
          "I'm busy, out of paper, don't worry, think, definitely, probably",
          "The phone is ringing. I **will answer** it."
        ],
        [
          "Be going to (+ V1)",
          "ความตั้งใจหรือแผนที่คิดตัดสินใจไว้แล้วก่อนที่จะพูด",
          "decided to, confirmed that, have a plan to",
          "I **am going to book** the hotel because the dates are confirmed."
        ]
      ]
    },
    commonMistakes: [
      "ใช้ will กับตารางเวลาที่มีกำหนดแน่นอน: 'The train will leave at 10' ❌ -> 'The train leaves at 10' ✔️",
      "ใช้ will เมื่อมีการตัดสินใจวางแผนไว้ล่วงหน้าแล้ว: 'I decided that I will quit' ❌ -> 'I decided that I am going to quit' ✔️",
      "วาง Adverb of certainty ผิดตำแหน่ง: 'He will definitely not' หรือ 'He definitely won't' (ในประโยคปฏิเสธ definitely/probably จะอยู่หน้า won't)"
    ],
    examTips: [
      "ถ้าข้อความมีคำว่า 'leaves at 10.30' หรือ 'starts at 9.00' ให้ตอบ Present Simple (V1)",
      "ถ้าเป็นบทสนทนาที่มีคนบอกปัญหา แล้วอีกคนอาสาแก้ปัญหาให้ทันที (เช่น A: It's dark in here. B: ...) ให้ตอบ will + V1 ทันที!",
      "ระดับความแน่นอน: definitely (แน่นอนที่สุด 100%) > probably (น่าจะประมาณ 70-80%) > perhaps/maybe (อาจจะ 50%)"
    ],
    miniQuiz: [
      {
        question: "A: The ink cartridge in the printer is empty.\nB: Don't worry, I \_\_\_\_\_\_\_\_\_\_ a new one from the supply room.",
        options: ["am getting", "will get", "am going to get", "get"],
        answer: 1,
        explanation: "เป็นการตัดสินใจและอาสาช่วยเหลือทันทีในขณะสนทนา (Spontaneous decision/offer) จึงต้องใช้ will + V1 ('will get')"
      },
      {
        question: "We need to leave for the station now because our train \_\_\_\_\_\_\_\_\_\_ at 10:15.",
        options: ["is leaving", "will leave", "leaves", "going to leave"],
        answer: 2,
        explanation: "ตารางเวลาของยานพาหนะสาธารณะที่ระบุเวลาแน่นอน (Timetabled schedule) ต้องใช้ Present Simple ('leaves')"
      },
      {
        question: "Jack has already reviewed all candidates' profiles. He \_\_\_\_\_\_\_\_\_\_ promote Lisa to department head.",
        options: ["is going to", "will", "is", "would"],
        answer: 0,
        explanation: "มีหลักฐานว่าพิจารณาและวางแผนไว้แล้วล่วงหน้า (already reviewed) จึงใช้ be going to ('is going to')"
      }
    ]
  },

  // ================= 3. SO AND SUCH =================
  {
    id: "g-003",
    unit: 5,
    title: "So vs. Such (with 'That' Clauses)",
    thaiTitle: "การใช้ So และ Such แสดงระดับความเข้มข้นและผลลัพธ์",
    summary: "So ใช้ขยาย Adjective/Adverb หรือ Many/Much ส่วน Such ใช้ขยาย Noun Phrase (Such a/an + adj + singular noun หรือ Such + adj + plural/uncountable noun) ทั้งคู่สามารถตามด้วย That เพื่อบอกผลลัพธ์",
    rule: "'So' and 'Such' are intensifiers used to emphasize quality or degree, often linked with a 'that' clause to show cause and effect.",
    structure: [
      "1. SO + Adjective / Adverb (+ that + clause): He was so tired that he slept.",
      "2. SO + many / much / few / little + Noun (+ that + clause): There were so many people that we stood.",
      "3. SUCH + a / an + Adjective + Singular Countable Noun (+ that + clause): It was such a great workshop that everyone learned.",
      "4. SUCH + (Adjective) + Plural Noun / Uncountable Noun (+ that + clause): They gave such terrible feedback that we delayed."
    ],
    usage: "ใช้เน้นย้ำความรู้สึก อาการ หรือคุณสมบัติในการนำเสนอ การทำงาน และรายงานผล",
    signalWords: [
      "so + adj (tired, late, fast, cold)",
      "so + adv (hard, fluently, quickly)",
      "so many + plural countable noun (people, things, questions)",
      "so much + uncountable noun (work, coffee, feedback)",
      "such a/an + adj + singular noun (such a smart girl, such an interesting talk)",
      "such + plural / uncountable noun (such nice colleagues, such bad weather)"
    ],
    forms: {
      positive: "She spoke so fast that nobody could take notes. / He is such an inspiring speaker.",
      negative: "It wasn't such a difficult presentation.",
      question: "Why was the conference room so cold?"
    },
    examples: [
      {
        en: "The keynote speaker spoke <mark>so fast</mark> that we struggled to grasp the core concepts.",
        th: "วิทยากรบรรยายเร็วมากจนกระทั่งพวกเราจับใจความสำคัญแทบไม่ทัน (so + adverb)",
        note: "so + fast (adverb) + that..."
      },
      {
        en: "I drank <mark>so much coffee</mark> during the seminar that I couldn't sleep all night.",
        th: "ฉันดื่มกาแฟมากเสียจนกระทั่งนอนไม่หลับตลอดคืน (so + much + คำนามนับไม่ได้)",
        note: "so much + coffee (uncountable)"
      },
      {
        en: "It was <mark>such a slow presentation</mark> that half the audience lost interest.",
        th: "มันเป็นการนำเสนอที่เชื่องช้ามากจนกระทั่งผู้ฟังครึ่งหนึ่งหมดความสนใจ (such a + adj + singular noun)",
        note: "such a + slow (adj) + presentation (singular countable)"
      },
      {
        en: "We received <mark>such terrible feedback</mark> that the management decided to postpone the launch.",
        th: "เราได้รับผลตอบรับที่แย่มากจนกระทั่งฝ่ายบริหารตัดสินใจเลื่อนการเปิดตัว (such + adj + คำนามนับไม่ได้)",
        note: "feedback เป็น uncountable noun -> ใช้ such terrible feedback (ห้ามมี a/an)"
      }
    ],
    comparisonTable: {
      headers: ["โครงสร้าง (Pattern)", "คำที่ตามหลัง (Followed By)", "ตัวอย่างการใช้ (Example)", "ข้อผิดพลาดยอดฮิต (Trap)"],
      rows: [
        [
          "SO",
          "Adjective หรือ Adverb ตัวเดี่ยวๆ",
          "The room was **so cold**.",
          "ห้ามใช้ *so cold room ❌*"
        ],
        [
          "SO",
          "many / few + คำนามนับได้พหูพจน์<br>much / little + คำนามนับไม่ได้",
          "**so many** participants<br>**so much** work",
          "ห้ามใช้ *such many people ❌*"
        ],
        [
          "SUCH A / AN",
          "Adjective + คำนามนับได้เอกพจน์ (Singular)",
          "It was **such a productive meeting**.",
          "ห้ามลืม a/an เช่น *such productive meeting ❌*"
        ],
        [
          "SUCH",
          "Adjective + คำนามพหูพจน์ หรือ คำนามนับไม่ได้",
          "**such kind colleagues** (พหูพจน์)<br>**such useful information** (นับไม่ได้)",
          "ห้ามใส่ a/an กับคำนามพหูพจน์หรือนับไม่ได้ เช่น *such an advice ❌*"
        ]
      ]
    },
    commonMistakes: [
      "ใช้ so กับนามเดี่ยว: 'It was so good presentation' ❌ -> 'It was such a good presentation' ✔️",
      "ใช้ such กับ many/much: 'There was such much work' ❌ -> 'There was so much work' ✔️",
      "ใส่ a หน้าคำนามนับไม่ได้: 'such a terrible feedback' ❌ -> 'such terrible feedback' ✔️ (feedback นับไม่ได้)"
    ],
    examTips: [
      "มองหลังช่องว่างทันที: ถ้าเจอคำคุณศัพท์/กริยาวิเศษณ์โดดเดี่ยว (adj/adv) ตอบ 'so'",
      "ถ้าเจอ a/an + adj + noun ให้ตอบ 'such' ทันที",
      "ถ้าเจอ many หรือ much ให้ตอบ 'so' เสมอ (so many / so much)",
      "ระวังคำนามนับไม่ได้ยอดนิยมในข้อสอบ: work, feedback, advice, information, furniture -> ใช้ 'such' โดยไม่มี a/an"
    ],
    miniQuiz: [
      {
        question: "The marketing director gave \_\_\_\_\_\_\_\_\_\_ inspiring presentation that the entire hall applauded.",
        options: ["so", "such an", "such a", "so much"],
        answer: 1,
        explanation: "'inspiring presentation' เป็น [Adjective ขึ้นต้นเสียงสระ (i) + นามนับได้เอกพจน์] จึงต้องใช้ 'such an'"
      },
      {
        question: "We had \_\_\_\_\_\_\_\_\_\_ much work to complete before 5 p.m. that nobody took a lunch break.",
        options: ["so", "such", "such a", "too"],
        answer: 0,
        explanation: "เมื่อมี 'much' หรือ 'many' อยู่ข้างหน้าคำนาม จะต้องใช้คู่กับ 'so' เสมอ ('so much work')"
      },
      {
        question: "I have never worked with \_\_\_\_\_\_\_\_\_\_ supportive colleagues before.",
        options: ["so", "such a", "such", "so much"],
        answer: 2,
        explanation: "'supportive colleagues' เป็นคำนามพหูพจน์ (colleagues) จึงต้องใช้ 'such' โดยไม่มี a/an"
      }
    ]
  },

  // ================= 4. DISCOURSE MARKERS =================
  {
    id: "g-004",
    unit: 5,
    title: "Discourse Markers for Presentations",
    thaiTitle: "คำเชื่อมแสดงความสัมพันธ์ของประโยค (Discourse Markers)",
    summary: "คำเชื่อมที่ทำหน้าที่เหมือนกาวประสานความคิดในการนำเสนอ แบ่งเป็น 3 กลุ่มหลัก: แสดงผลลัพธ์ (Result), แสดงความขัดแย้ง (Contrast), และ แสดงการเพิ่มข้อมูล (Addition) โครงสร้างปกติจะขึ้นต้นประโยคใหม่ตามด้วยเครื่องหมายจุลภาค (Comma)",
    rule: "Discourse markers connect sentences and indicate the logical relationship between ideas, maintaining clear presentation flow. In formal writing and presentations, they are usually placed after a full stop and followed by a comma: Sentence 1. + Marker, + Sentence 2.",
    structure: [
      "Sentence 1. Therefore / Consequently / As a result, Sentence 2. (แสดงผลลัพธ์)",
      "Sentence 1. However / On the other hand / In contrast, Sentence 2. (แสดงความขัดแย้ง)",
      "Sentence 1. Moreover / Furthermore / In addition, Sentence 2. (แสดงการเสริมข้อมูล)"
    ],
    usage: "ใช้ในการเปลี่ยนสไลด์ การนำเสนอเหตุและผล การเปรียบเทียบข้อมูลตัวเลข และการเสริมข้อดีของผลิตภัณฑ์",
    signalWords: [
      "Result / Effect: Therefore, Consequently, As a result",
      "Contrast: However, On the other hand, In contrast, Nevertheless",
      "Addition: Moreover, Furthermore, In addition"
    ],
    forms: {
      positive: "Sales fell in Europe. In contrast, they surged in Asia.",
      negative: "The plan wasn't ideal. However, we had no alternatives.",
      question: "Are discourse markers followed by commas? Yes, always in written form."
    },
    examples: [
      {
        en: "The team completed the software project ahead of schedule. <mark>Therefore,</mark> the client renewed the partnership contract.",
        th: "ทีมงานทำโครงการซอฟต์แวร์เสร็จก่อนกำหนด ดังนั้น ลูกค้าจึงต่อสัญญาความร่วมมือ (Result: แสดงผลลัพธ์)",
        note: "Ahead of schedule -> Therefore -> renewed contract"
      },
      {
        en: "The previous database was user-friendly. <mark>However,</mark> it lacked modern cybersecurity features.",
        th: "ฐานข้อมูลเดิมใช้งานง่าย อย่างไรก็ตาม มันขาดระบบความปลอดภัยทางไซเบอร์ที่ทันสมัย (Contrast: แสดงความขัดแย้ง)",
        note: "User-friendly vs lacked security -> However"
      },
      {
        en: "The application has a lightweight interface. <mark>Moreover,</mark> its battery consumption is remarkably low.",
        th: "แอปพลิเคชันมีอินเทอร์เฟซที่เบา ยิ่งไปกว่านั้น อัตราการกินแบตเตอรี่ยังต่ำมากอีกด้วย (Addition: เพิ่มข้อมูลเชิงบวก)",
        note: "Lightweight + low battery -> Moreover"
      },
      {
        en: "Sales in North America declined by 5%. <mark>In contrast,</mark> sales in Southeast Asia jumped by 20%.",
        th: "ยอดขายในอเมริกาเหนือลดลง 5% ในทางกลับกัน ยอดขายในเอเชียตะวันออกเฉียงใต้พุ่งขึ้นถึง 20% (Contrast: เปรียบเทียบข้อมูลที่ต่างกัน)",
        note: "Declined vs jumped -> In contrast"
      }
    ],
    comparisonTable: {
      headers: ["กลุ่มหน้าที่ (Function)", "คำเชื่อม (Markers)", "ความหมายภาษาไทย", "บริบทการใช้งาน (Context)"],
      rows: [
        [
          "1. Showing Result / Effect",
          "Therefore,<br>Consequently,<br>As a result,",
          "ดังนั้น / ด้วยเหตุนี้ / ส่งผลให้",
          "ประโยคแรกคือ **สาเหตุ** (Cause) และประโยคหลังคือ **ผลลัพธ์ที่ตามมา** (Consequence)"
        ],
        [
          "2. Showing Contrast",
          "However,<br>On the other hand,<br>In contrast,",
          "อย่างไรก็ตาม / ในทางตรงกันข้าม",
          "ประโยคแรกและประโยคหลังมีเนื้อหา **ตรงข้ามกัน คาดไม่ถึง หรือเปรียบเทียบจุดต่าง**"
        ],
        [
          "3. Adding Information",
          "Moreover,<br>Furthermore,<br>In addition,",
          "ยิ่งไปกว่านั้น / นอกจากนี้",
          "ประโยคหลังช่วย **เสริมน้ำหนักหรือเพิ่มข้อมูลสนับสนุน** ไปในทิศทางเดียวกันกับประโยคแรก"
        ]
      ]
    },
    commonMistakes: [
      "ใช้คำเชื่อมขัดแย้งกับประโยคที่เสริมกัน: 'The hotel was cheap. However, it was very comfortable' -> อย่างนี้ถือว่าขัดแย้งได้ แต่ถ้า 'The hotel was cheap. However, it saved us money' ❌ (ต้องเป็น Therefore หรือ Moreover)",
      "ลืมเครื่องหมาย Comma (,) หลังคำเชื่อมเมื่อขึ้นต้นประโยค",
      "สับสนระหว่าง In contrast (เน้นเปรียบเทียบ 2 สิ่ง) กับ As a result (เหตุและผล)"
    ],
    examTips: [
      "อ่านประโยคที่ 1 และประโยคที่ 2 เพื่อดูทิศทางความหมาย: บวก+บวก หรือ ลบ+ลบ -> ให้มองหา Addition (Moreover, Furthermore, In addition)",
      "ถ้าประโยคแรกเป็นเหตุทำให้เกิดประโยคหลัง -> ให้เลือก Result (Therefore, Consequently, As a result)",
      "ถ้าประโยคแรกกับประโยคหลังหักมุม ทิศทางตรงข้าม (บวก+ลบ หรือ ฝั่งหนึ่งขึ้น ฝั่งหนึ่งลง) -> ให้เลือก Contrast (However, In contrast, On the other hand)"
    ],
    miniQuiz: [
      {
        question: "Social media helps people stay connected worldwide. \_\_\_\_\_\_\_\_\_\_, it provides local businesses with powerful marketing channels.",
        options: ["In contrast", "Moreover", "However", "Consequently"],
        answer: 1,
        explanation: "ทั้งสองประโยคกล่าวถึงข้อดีของ social media ไปในทิศทางบวกเดียวกัน (ช่วยเชื่อมโยงคน + ช่วยการตลาดธุรกิจ) จึงต้องใช้กลุ่ม Addition ('Moreover')"
      },
      {
        question: "We booked the airline tickets three months in advance. \_\_\_\_\_\_\_\_\_\_, we secured a 40% early-bird discount.",
        options: ["Therefore", "However", "In contrast", "On the other hand"],
        answer: 0,
        explanation: "การจองล่วงหน้า 3 เดือนคือ 'สาเหตุ' และการได้ส่วนลด 40% คือ 'ผลลัพธ์' ที่ตามมา จึงต้องใช้คำเชื่อมบอกผล ('Therefore')"
      },
      {
        question: "The old inventory system was very straightforward to operate. \_\_\_\_\_\_\_\_\_\_, it failed to meet new data encryption standards.",
        options: ["Furthermore", "As a result", "However", "Moreover"],
        answer: 2,
        explanation: "ประโยคแรกเป็นข้อดี (ใช้งานง่าย) แต่ประโยคหลังเป็นข้อเสีย (ไม่ผ่านมาตรฐานความปลอดภัย) มีความหมายขัดแย้งกัน จึงต้องใช้ 'However'"
      }
    ]
  },

  // ================= 5. REPORTED SPEECH =================
  {
    id: "g-005",
    unit: 6,
    title: "Reported Speech: Statements & Yes/No Questions",
    thaiTitle: "การรายงานคำพูด (Reported Speech) ทั้งประโยคบอกเล่าและคำถาม",
    summary: "การนำคำพูดของผู้อื่นมารายงานต่อ ต้องทำการถอย Tense (Backshift) 1 ขั้น, เปลี่ยนสรรพนาม (Pronouns) ให้ตรงกับผู้พูดและผู้ฟัง, และหากเป็น Yes/No Question ต้องใช้ if หรือ whether พร้อมเรียงรูปประโยคแบบบอกเล่า (Subject + Verb) ห้ามใส่เครื่องหมายคำถาม (?)",
    rule: "When transforming Direct Speech into Reported Speech, adjust tenses (backshifting), pronouns, and word order to reflect the speaker's perspective.",
    structure: [
      "1. Statement: Subject + said (that) / told someone (that) + Subject + Backshifted Verb",
      "2. Yes/No Question: Subject + asked / inquired + if / whether + Subject + Verb (เรียงประธานมาก่อนกริยา ห้ามมี did/do/does และตัด ? ทิ้ง)",
      "3. Tense Backshift Rules:",
      "   • Present Simple (V1) -> Past Simple (V2)",
      "   • Present Continuous (is/am/are + V-ing) -> Past Continuous (was/were + V-ing)",
      "   • Present Perfect (has/have + V3) -> Past Perfect (had + V3)",
      "   • Past Simple (V2) -> Past Perfect (had + V3)",
      "   • will -> would | can -> could | may -> might"
    ],
    usage: "ใช้รายงานสิ่งที่ผู้บริหาร ลูกค้า หรือเพื่อนร่วมงานพูดหรือสอบถามในที่ทำงาน",
    signalWords: [
      "Reporting verbs: said that, told me that, asked if, inquired whether, wanted to know",
      "Question linkers: if, whether",
      "Modal shifts: will -> would, can -> could"
    ],
    forms: {
      positive: "Direct: 'I can help you.' -> Reported: She said that she could help me.",
      negative: "Direct: 'We don't agree.' -> Reported: They said that they didn't agree.",
      question: "Direct: 'Do you work here?' -> Reported: He asked if I worked there."
    },
    examples: [
      {
        en: "Direct: 'I am going to the meeting,' Nancy said.<br>Reported: Nancy said that she <mark>was going</mark> to the meeting.",
        th: "แนนซี่บอกว่าเธอกำลังจะไปประชุม (เปลี่ยน am going -> was going และเปลี่ยน I -> she)",
        note: "Present Cont -> Past Cont"
      },
      {
        en: "Direct: 'We have finished our quarterly report,' the team said.<br>Reported: The team told us that they <mark>had finished</mark> their quarterly report.",
        th: "ทีมงานบอกเราว่าพวกเขาทำรายงานประจำไตรมาสเสร็จแล้ว (เปลี่ยน have finished -> had finished และ our -> their)",
        note: "Present Perfect -> Past Perfect"
      },
      {
        en: "Direct: 'Can you send the minutes by 5:00 p.m.?' the supervisor asked.<br>Reported: The supervisor asked the secretary <mark>whether she could send</mark> the minutes by 5:00 p.m.",
        th: "หัวหน้าถามเลขาฯ ว่าเธอสามารถส่งรายงานการประชุมภายใน 17.00 น. ได้หรือไม่ (ใช้ whether + ประธาน she + could send และไม่มี ?)",
        note: "Yes/No Question: whether + Subject + could + V1"
      },
      {
        en: "Direct: 'Do you have the latest schedule on your desk?' the manager asked Somsak.<br>Reported: The manager asked Somsak <mark>if he had</mark> the latest schedule on his desk.",
        th: "ผู้จัดการถามสมศักดิ์ว่าเขามีกำหนดการล่าสุดบนโต๊ะหรือไม่ (ตัด Do ทิ้ง, เปลี่ยน have -> had, your -> his)",
        note: "Do you have -> if he had"
      }
    ],
    comparisonTable: {
      headers: ["ประโยคต้นฉบับ (Direct Speech)", "ประโยครายงาน (Reported Speech)", "สิ่งที่ต้องเปลี่ยน (Changes Applied)"],
      rows: [
        [
          "\"I **am learning** French.\"",
          "He said that he **was learning** French.",
          "Present Continuous $\\longrightarrow$ Past Continuous (am $\\rightarrow$ was)"
        ],
        [
          "\"We **have finished** the project.\"",
          "They announced that they **had finished** the project.",
          "Present Perfect $\\longrightarrow$ Past Perfect (have finished $\\rightarrow$ had finished)"
        ],
        [
          "\"I **will send** you **my** proposal.\"",
          "She told me that she **would send** me **her** proposal.",
          "will $\\longrightarrow$ would, my $\\longrightarrow$ her"
        ],
        [
          "\"**Can you** finish it by May?\"",
          "He asked **whether I could** finish it by May.",
          "Can you $\\longrightarrow$ whether + I + could (สลับประธานขึ้นก่อนกริยา)"
        ],
        [
          "\"**Do you have** the file?\"",
          "She asked **if I had** the file.",
          "ตัด Do ทิ้ง, กริยาแท้ผันเป็นอดีต (have $\\rightarrow$ had)"
        ]
      ]
    },
    commonMistakes: [
      "คงรูปกริยาช่วยสลับแบบประโยคคำถามเดิม: 'He asked whether could she send' ❌ -> 'He asked whether she could send' ✔️",
      "ลืมถอย Tense เมื่อกริยานำเป็นอดีต (said/asked): 'She said she is ready' ❌ -> 'She said she was ready' ✔️",
      "ใส่เครื่องหมายคำถามท้ายประโยค Reported Question: 'He asked if I knew him?' ❌ -> 'He asked if I knew him.' ✔️",
      "สับสนระหว่าง say กับ tell: say that... หรือ say to someone that..., แต่ tell someone that... (tell ต้องมีกรรมตามหลัง)"
    ],
    examTips: [
      "ในข้อสอบ Reported Question: เมื่อเห็น if หรือ whether ให้มองหาตัวเลือกที่เรียงแบบ [ประธาน + กริยา] ทันที เช่น 'she was...', 'he could...' (ห้ามเลือก was she หรือ could he เด็ดขาด!)",
      "ระวัง Pronoun ต้องสอดคล้องกับคนพูด เช่น 'my report' ของ Lester ต้องเปลี่ยนเป็น 'his report'",
      "will เปลี่ยนเป็น would, can เปลี่ยนเป็น could, have/has + V3 เปลี่ยนเป็น had + V3"
    ],
    miniQuiz: [
      {
        question: "\"Can you submit the annual audit by Friday?\" the director asked Jane.\nWhich is the correct reported speech form?",
        options: [
          "The director asked Jane if could she submit the annual audit by Friday.",
          "The director asked Jane whether she could submit the annual audit by Friday.",
          "The director asked Jane if she can submit the annual audit by Friday.",
          "The director asked Jane whether had she submitted the annual audit by Friday."
        ],
        answer: 1,
        explanation: "ในประโยคคำถาม Reported Speech ต้องใช้ whether/if + ประธาน (she) + กริยาถอย Tense (could submit) โดยไม่สลับกริยาช่วยขึ้นก่อนประธาน"
      },
      {
        question: "\"I will assist you with the project presentation,\" Kevin promised.\nWhich is the correct reported speech form?",
        options: [
          "Kevin promised that he will assist me with my project presentation.",
          "Kevin promised that he would assist me with my project presentation.",
          "Kevin promised that I would assist him with his project presentation.",
          "Kevin promised that he assists me with the project presentation."
        ],
        answer: 1,
        explanation: "will ต้องเปลี่ยนเป็น would, สรรพนาม I เปลี่ยนเป็น he, you เปลี่ยนเป็น me: 'he would assist me with my project presentation'"
      },
      {
        question: "\"Do you require any further assistance?\" the receptionist asked the guest.\nWhich is the correct reported speech form?",
        options: [
          "The receptionist asked the guest if did he require any further assistance.",
          "The receptionist asked the guest whether he required any further assistance.",
          "The receptionist asked the guest whether required he any further assistance.",
          "The receptionist asked the guest if he requires any further assistance."
        ],
        answer: 1,
        explanation: "ตัดกริยาช่วย do ทิ้ง แล้วเปลี่ยนกริยา require เป็น Past Simple (required) เรียงตามรูปประธาน + กริยา: 'whether he required...'"
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { GRAMMAR_DATA };
}
