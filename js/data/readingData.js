// Reading Passages Dataset for CEFR B1-B2 Exam Preparation
// Strictly extracted from Units 4, 5, and 6

const READING_DATA = [
  // ================= PASSAGE 1 (UNIT 4) =================
  {
    id: "read-u4",
    unit: 4,
    title: "Job Satisfaction",
    thaiTitle: "ความพึงพอใจในการทำงานของพนักงาน",
    sourceText: "Adapted from Julija (2022) in Unit 4",
    mainIdea: "Understanding the statistical factors contributing to employee job satisfaction and dissatisfaction, age-related priority differences, and the severe financial and operational costs to companies that overlook employee happiness.",
    mainIdeaThai: "การทำความเข้าใจปัจจัยเชิงสถิติที่ส่งผลต่อความพึงพอใจและความไม่พึงพอใจในงาน ความแตกต่างตามช่วงอายุ และต้นทุนความเสียหายมหาศาลขององค์กรที่มองข้ามความสุขของพนักงาน",
    authorsPurpose: "To inform employers about crucial workplace satisfaction factors and warn them of the high financial and organizational costs of employee dissatisfaction.",
    tone: "Objective, informative, analytical, and professional",
    paragraphs: [
      {
        paraNum: 1,
        heading: "Overview of Job Satisfaction",
        text: "Job satisfaction statistics have been an important tool for employers in looking for and understanding their employees' work happiness. The following are statistics on American job satisfaction and dissatisfaction which can be a practical advice to American employers who want to ensure a positive work environment for their employees.",
        thaiSummary: "สถิติความพึงพอใจในงานเป็นเครื่องมือสำคัญสำหรับนายจ้างในการเข้าใจความสุขของพนักงาน ซึ่งเป็นคำแนะนำที่เป็นประโยชน์ในการสร้างสภาพแวดล้อมการทำงานเชิงบวก"
      },
      {
        paraNum: 2,
        heading: "What affects employees' job satisfaction?",
        text: "There are several factors affecting employees' job satisfaction. Sixty percent of workers think that coworkers have the most influence on their job happiness. The report in 2019 indicated that two in three employees consider the people whom they work with have the greatest contribution to job satisfaction. Nearly 57% of workers globally are satisfied with their employment. According to the research by GoodFirms, about 50% of employees are satisfied with their positions while about 30% are not. Thirteen percent of employees are unsure or neutral to their present jobs. Reporting in the survey by GoodFirms, most respondents (89.05%) expect the three prioritized workplace benefits which are annual raises (81.10%), five working days a week (75.33%), and flexible timings (74.54%). Exactly 70.87% of employees consider the importance of fair treatment in a workplace, including having work related to their interests (71.40%), achieving a healthy work/life balance (70.60%), and having a friendly boss (69.53%). According to the Society of Human Resource Management, 72.0% of employees rank respect within a workplace as the most important factor to job satisfaction.",
        thaiSummary: "ปัจจัยที่ส่งผลต่อความพึงพอใจ ได้แก่ เพื่อนร่วมงาน (60%), สวัสดิการ 3 อันดับแรกคือ การขึ้นเงินเดือนประจำปี (81.10%), ทำงาน 5 วันต่อสัปดาห์ (75.33%), และเวลาทำงานที่ยืดหยุ่น (74.54%) นอกจากนี้การได้รับการปฏิบัติอย่างเป็นธรรม (70.87%) และความเคารพซึ่งกันและกัน (72.0%) มีความสำคัญอย่างยิ่ง"
      },
      {
        paraNum: 3,
        heading: "What affects employees' job dissatisfaction?",
        text: "Along with job satisfaction, employers also need to know what cause employees' dissatisfaction in job. Seventy-nine percent of employees reported feeling undervalued as a main reason to quit their jobs. Sixty-five percent of employees noted their manager's failure to recognize their hard work even once in 12 months. Gallup research revealed that only 34.0% of US employees feel engaged in a workplace. Most of them feel that their jobs aren't fulfilling enough. Although money is an important factor, HR Daily Advisor found that only 12.0% of employees consider leaving a job due to pay grade alone. Contrarily, the statistics show that 75.0% of employees quit their jobs due to managerial disagreements. Those who enjoy a close relationship with management team are likely to be more productive and remain in their roles. In a recent LinkedIn survey, 73.0% of employees would stay with a company if there were more skill-building opportunities on offer.",
        thaiSummary: "สาเหตุของความไม่พึงพอใจ: พนักงาน 79% ลาออกเพราะรู้สึกไม่เห็นคุณค่า (undervalued), 65% ระบุว่าผู้จัดการไม่เคยชมเชยในรอบ 12 เดือน, มีเพียง 34% ที่รู้สึกผูกพันกับงาน (engaged) ที่น่าสนใจคือ มีเพียง 12% ที่ลาออกเพราะเรื่องเงินเดือนอย่างเดียว แต่มากถึง 75% ลาออกเพราะความขัดแย้งกับผู้บริหาร (managerial disagreements)"
      },
      {
        paraNum: 4,
        heading: "How is age influenced to job satisfaction?",
        text: "Recent job satisfaction statistics have shown difference in the priorities and happiness of employees across different age ranges. Thirty-one percent of workers who are 18- to 34- years old are satisfied with their jobs while 40.0% of those 35 and older report complete satisfaction with their present jobs. Full-time workers (34.0%) are more satisfied with jobs than part-time workers (23.0%). More companies (56.0%) have updated their policies to appeal to a multi-generational workforce such as baby boomers, Gen-X, Gen-Y, and Gen-Z workers. Workers who are 18- to 34- years old most likely prioritize pay rates and progression opportunities as important factors to job satisfaction. A recent CNBC/Survey Monkey research found 35.0% of workers cited job meaningfulness as crucial to job satisfaction. Likewise, a Pew Research survey indicated 59.0% of older workers prioritize job security as more important than salary whereas workers between 18- and 24-years old value a higher salary over job security. Millennials are the largest generation of US workers. They are at least three times more likely to quit their jobs than other generations. Forty-three percent reported that they will change jobs in the next two years if they get more money and opportunities.",
        thaiSummary: "อิทธิพลของช่วงวัย: วัย 18-34 ปี พึงพอใจในงาน 31% เทียบกับวัย 35 ปีขึ้นไปที่พึงพอใจ 40% คนวัย 18-34 ให้ความสำคัญกับอัตราค่าตอบแทนและโอกาสเติบโต (progression) คนอายุมากให้ความสำคัญกับความมั่นคงในงาน (job security 59%) มากกว่าเงินเดือน ส่วนคนรุ่น Millennials มีโอกาสลาออกมากกว่ารุ่นอื่นถึง 3 เท่า"
      },
      {
        paraNum: 5,
        heading: "What are the impacts of job dissatisfaction?",
        text: "Although job satisfaction continues to grow, employers don't care enough or fail to understand the severity of the problem. Let's see what the study found out about the results of ongoing job dissatisfaction. As many as 52.0% of American workforce are uninspired and undermotivated. Majority of these employees (67.0%) believe that things have gotten worse since the start of the COVID-19 pandemic. A Bankrate survey from August 2021 revealed that 55.0% of US workers are likely to look for a new job within the next 12 months. Companies that overlook employee satisfaction cost the US as much as $450-$550 billion each year due to increased turnover and employment drives, poorer employee productivity, and a general lack of effort on their part. Research by Edelman Trust Barometer found that only 48.0% of non-managerial staff trust their companies. This makes every day work and overall company growth harder since mistrust leads to lower work engagement, unhappiness in the workplace, and overall decreased productivity.",
        thaiSummary: "ผลกระทบจากความไม่พึงพอใจ: พนักงานอเมริกัน 52% ขาดแรงบันดาลใจ, 55% มีแนวโน้มหางานใหม่ภายใน 12 เดือน องค์กรที่มองข้ามเรื่องนี้สร้างความเสียหายทางเศรษฐกิจในสหรัฐฯ สูงถึง 450-550 พันล้านดอลลาร์ต่อปี จากอัตราการลาออก (turnover) และการสูญเสียผลิตภาพ นอกจากนี้ พนักงานเพียง 48% ที่ไว้ใจบริษัทของตน"
      }
    ],
    importantVocab: [
      { word: "coworkers", pos: "noun", meaning: "เพื่อนร่วมงาน", clue: "60% say they have most influence on job happiness" },
      { word: "undervalued", pos: "adj", meaning: "ไม่ได้รับการเห็นคุณค่า", clue: "main reason 79% quit their jobs" },
      { word: "engaged", pos: "adj", meaning: "มีส่วนร่วมและผูกพันกับงาน", clue: "synonym of 'involved'; opposite of passive" },
      { word: "managerial disagreements", pos: "noun", meaning: "ความขัดแย้งกับผู้บริหาร", clue: "cause of 75% of employees quitting" },
      { word: "severity", pos: "noun", meaning: "ความร้ายแรง / ความรุนแรง", clue: "synonym of 'hardness' or seriousness" },
      { word: "turnover", pos: "noun", meaning: "อัตราการหมุนเวียน/การลาออกของพนักงาน", clue: "costs $450-$550 billion annually" },
      { word: "progression opportunities", pos: "noun", meaning: "โอกาสความก้าวหน้าในสายอาชีพ", clue: "prioritized by 18-34 year olds" },
      { word: "job security", pos: "noun", meaning: "ความมั่นคงในหน้าที่การงาน", clue: "prioritized by 59% of older workers" }
    ],
    contextClues: [
      {
        target: "engaged",
        sentence: "Gallup research revealed that only 34.0% of US employees feel engaged in a workplace. Most of them feel that their jobs aren't fulfilling enough.",
        explanation: "คำว่า 'engaged' อยู่ในบริบทตรงข้ามกับ 'not fulfilling enough' จึงแปลว่า มีความผูกพัน มีส่วนร่วมอย่างกระตือรือร้น (involved)"
      },
      {
        target: "severity",
        sentence: "Although job satisfaction continues to grow, employers don't care enough or fail to understand the severity of the problem.",
        explanation: "คำว่า 'severity' ขยายคำว่า 'of the problem' ซึ่งเป็นปัญหาที่รุนแรงจนกระทั่งทำให้เกิดความเสียหาย จึงมีความหมายใกล้เคียงกับ 'hardness' หรือ seriousness"
      }
    ],
    referenceWords: [
      {
        pronoun: "those",
        location: "Paragraph 4, Line 3",
        sentence: "...while 40.0% of those 35 and older report complete satisfaction...",
        refersTo: "workers (workers aged 35 and older)",
        explanation: "those ทำหน้าที่แทนคำนามพหูพจน์ที่กล่าวถึงก่อนหน้า คือ workers"
      },
      {
        pronoun: "their",
        location: "Paragraph 3, Line 2",
        sentence: "...Sixty-five percent of employees noted their manager's failure to recognize their hard work...",
        refersTo: "employees",
        explanation: "their อ้างอิงถึงความพยายามและการทำงานหนักของพนักงาน (employees)"
      }
    ],
    factsVsInferences: [
      {
        type: "Direct Fact",
        statement: "Three prioritized benefits expected by 89.05% of respondents are annual raises, five working days a week, and flexible timings.",
        sourceLocation: "Paragraph 2"
      },
      {
        type: "Direct Fact",
        statement: "Only 12.0% of employees consider leaving a job due to pay grade alone, whereas 75.0% quit due to managerial disagreements.",
        sourceLocation: "Paragraph 3"
      },
      {
        type: "Inference",
        statement: "Improving communication and conflict resolution between managers and staff will likely reduce company turnover and save operational costs.",
        reasoning: "Because 75% leave due to managerial disagreements and turnover costs up to $550 billion, addressing manager-employee relations directly targets the root cause."
      }
    ],
    questions: [
      {
        id: "q-r-u4-01",
        question: "There are several factors that affect employees' job satisfaction, EXCEPT for \_\_\_\_\_\_\_\_\_\_.",
        options: ["workplace benefits", "job positions", "colleagues", "unfriendly supervisor"],
        answer: 3,
        evidence: "Paragraph 2 states that friendly boss (69.53%), coworkers (60%), positions (50%), and workplace benefits (89.05%) affect satisfaction. An 'unfriendly supervisor' causes dissatisfaction, not satisfaction.",
        explanationThai: "ในบทอ่านระบุว่าปัจจัยที่ส่งผลต่อความพึงพอใจคือ สวัสดิการ, ตำแหน่งงาน, เพื่อนร่วมงาน และหัวหน้าที่เป็นมิตร ดังนั้น 'หัวหน้าที่ไม่เป็นมิตร (unfriendly supervisor)' จึงไม่ใช่ปัจจัยสร้างความพึงพอใจ"
      },
      {
        id: "q-r-u4-02",
        question: "Which of the following can best be substituted for the word 'engaged' in the passage?",
        options: ["suspected", "involved", "free", "passive"],
        answer: 1,
        evidence: "Gallup research revealed that only 34.0% of US employees feel engaged in a workplace.",
        explanationThai: "คำว่า 'engaged' ในบริบทนี้หมายถึง มีส่วนร่วมและทุ่มเทกับการทำงาน จึงมีความหมายเหมือนกับ 'involved' (ข้อ B)"
      },
      {
        id: "q-r-u4-03",
        question: "According to the passage, the primary cause of employee departure is \_\_\_\_\_\_\_\_\_\_.",
        options: ["managerial disputes", "more chances in work training", "feeling valued", "engagement in work"],
        answer: 0,
        evidence: "The statistics show that 75.0% of employees quit their jobs due to managerial disagreements.",
        explanationThai: "สถิติในบทอ่านระบุว่าพนักงานถึง 75% ลาออกเนื่องจาก managerial disagreements ซึ่งมีความหมายตรงกับ 'managerial disputes' (ข้อพิพาท/ความขัดแย้งกับผู้บริหาร)"
      },
      {
        id: "q-r-u4-04",
        question: "In the sentence '...while 40.0% of those 35 and older report complete satisfaction...', the word 'those' refers to \_\_\_\_\_\_\_\_\_\_.",
        options: ["statistics", "priorities", "age ranges", "workers"],
        answer: 3,
        evidence: "Thirty-one percent of workers who are 18- to 34- years old are satisfied with their jobs while 40.0% of those 35 and older...",
        explanationThai: "คำว่า 'those' ทำหน้าที่แทนคำนาม 'workers' ที่พูดถึงในประโยคก่อนหน้า"
      },
      {
        id: "q-r-u4-05",
        question: "The word 'severity' in the passage can be best replaced by \_\_\_\_\_\_\_\_\_\_.",
        options: ["flexibility", "hardness", "gentleness", "tolerance"],
        answer: 1,
        evidence: "...employers don't care enough or fail to understand the severity of the problem.",
        explanationThai: "'severity' หมายถึง ความรุนแรง ความร้ายแรงของปัญหา ซึ่งสอดคล้องกับคำว่า 'hardness' ในแบบฝึกหัดของบทเรียน"
      }
    ]
  },

  // ================= PASSAGE 2 (UNIT 5) =================
  {
    id: "read-u5",
    unit: 5,
    title: "Dealing with Nervousness",
    thaiTitle: "การรับมือกับความประหม่าในการนำเสนอ",
    sourceText: "Adapted from Grussendorf, M. (2007) in Unit 5",
    mainIdea: "Nervousness before a presentation is completely universal; the solution is not avoiding it, but managing it and channeling nervous energy through preparation, relaxation, environmental familiarity, audience connection, and visualization.",
    mainIdeaThai: "ความประหม่าก่อนการนำเสนอเป็นเรื่องปกติของทุกคน หัวใจสำคัญไม่ใช่การพยายามหลีกเลี่ยง แต่คือการรู้วิธีรับมือและเปลี่ยนพลังงานความประหม่าให้เป็นพลังบวกผ่านการเตรียมตัว การผ่อนคลาย การคุ้นเคยกับสถานที่ และการจินตนาการภาพความสำเร็จ",
    authorsPurpose: "To guide speakers with practical, actionable strategies to manage stage fright and deliver confident, enthusiastic presentations.",
    tone: "Encouraging, practical, empathetic, and instructional",
    paragraphs: [
      {
        paraNum: 1,
        heading: "Universal Stage Fright",
        text: "As American author Mark Twain famously said, 'There are two types of people: those who are nervous and those who lie about it.' Almost everyone feels nervous before a presentation, whether it's a big or small audience, colleagues or strangers. The key is not to avoid nervousness but to find effective ways to handle it and even use it to improve your performance.",
        thaiSummary: "มาร์ก ทเวน กล่าวว่า คนมีสองประเภทคือคนที่ประหม่ากับคนที่โกหก ทุกคนล้วนตื่นเต้นก่อนการนำเสนอ หัวใจสำคัญคือการหาวิธีจัดการและนำมันมาใช้พัฒนาตนเอง"
      },
      {
        paraNum: 2,
        heading: "Preparation & Physical Relaxation",
        text: "Be prepared. 'Failing to prepare is preparing to fail.' Preparation is essential for a strong presentation. Knowing exactly what you want to say and practicing it beforehand can help you feel more confident. Practice until you feel comfortable with the material so you can focus on other parts of the presentation. Learn to relax. Relaxing your body can reduce nervousness. Try stretching or breathing exercises before you speak. For example, sit upright, breathe in slowly, hold for five seconds, then breathe out slowly. Relax your facial muscles by opening your eyes and mouth wide, then closing them tightly.",
        thaiSummary: "การเตรียมตัวล่วงหน้าคือหัวใจหลัก ช่วยให้เกิดความมั่นใจ การฝึกผ่อนคลายร่างกาย เช่น การยืดกล้ามเนื้อ การฝึกหายใจเข้าช้าๆ กลั้นไว้ 5 วินาที แล้วผ่อนออก รวมถึงการบริหารกล้ามเนื้อใบหน้า ช่วยลดความตื่นเต้นได้จริง"
      },
      {
        paraNum: 3,
        heading: "Familiarity, Connection & Mindset",
        text: "Familiarize yourself with the room. Arrive early and get to know the space where you will speak. Walk around, check that everything you need is in place, and practice with any equipment like a microphone or projector if you plan to use them. Get to know your audience. If possible, greet people as they arrive. It will feel more comfortable to speak to familiar faces than to complete strangers. Focus on your message. Instead of thinking about your nervousness, focus on what you want to share and how it can benefit the audience. Visualize success. Picture yourself speaking confidently and imagine the audience applauding at the end. Visualizing a positive experience can make you feel more at ease. By following these steps, you can better manage your nervousness. Remember, being a little nervous can also be helpful; it can give you the energy boost needed for an enthusiastic presentation.",
        thaiSummary: "ทำความคุ้นเคยกับสถานที่โดยมาถึงก่อนเวลา ตรวจสอบไมโครโฟนและโปรเจกเตอร์ ทักทายผู้ฟังเมื่อพวกเขามาถึงเพื่อสร้างความคุ้นเคย มุ่งเน้นที่คุณค่าของเนื้อหาที่จะมอบให้ผู้ฟัง และจินตนาการภาพความสำเร็จตอนที่ทุกคนปรบมือ ความประหม่าเล็กน้อยสามารถเป็นพลังขับเคลื่อนความกระตือรือร้นได้"
      }
    ],
    importantVocab: [
      { word: "anxiety", pos: "noun", meaning: "ความวิตกกังวล", clue: "nervousness before speaking" },
      { word: "familiarize", pos: "verb", meaning: "ทำความคุ้นเคย", clue: "arrive early and get to know the space" },
      { word: "visualize", pos: "verb", meaning: "จินตนาการเห็นภาพในใจ", clue: "picture yourself speaking confidently" },
      { word: "energy boost", pos: "noun", meaning: "การกระตุ้นพลังงาน", clue: "nervousness provides extra energy for enthusiasm" },
      { word: "applauding", pos: "verb", meaning: "ปรบมือชื่นชม", clue: "audience clapping at the end" }
    ],
    contextClues: [
      {
        target: "energy boost",
        sentence: "Remember, being a little nervous can also be helpful; it can give you the energy boost needed for an enthusiastic presentation.",
        explanation: "คำว่า 'helpful' และ 'enthusiastic presentation' บอกบริบทว่าความตื่นเต้นเล็กน้อยช่วยเติมพลังงานกระตุ้นให้การนำเสนอดูน่าตื่นตาตื่นใจ"
      }
    ],
    referenceWords: [
      {
        pronoun: "it",
        location: "Paragraph 1, Line 4",
        sentence: "...find effective ways to handle it and even use it to improve your performance.",
        refersTo: "nervousness",
        explanation: "'it' หมายถึง ความประหม่าหรือความตื่นเต้น (nervousness)"
      },
      {
        pronoun: "them",
        location: "Paragraph 3, Line 4",
        sentence: "...practice with any equipment like a microphone or projector if you plan to use them.",
        refersTo: "equipment (microphone or projector)",
        explanation: "'them' หมายถึง อุปกรณ์ที่จะใช้ในการนำเสนอ"
      }
    ],
    factsVsInferences: [
      {
        type: "Direct Fact",
        statement: "Sitting upright, inhaling slowly, holding for 5 seconds, and exhaling slowly is a recommended relaxation technique.",
        sourceLocation: "Paragraph 2"
      },
      {
        type: "Direct Fact",
        statement: "Mark Twain stated that everyone feels nervous or lies about it.",
        sourceLocation: "Paragraph 1"
      },
      {
        type: "Inference",
        statement: "Speaking to familiar faces lowers speech anxiety compared to speaking exclusively to anonymous strangers.",
        reasoning: "Because greeting attendees beforehand converts strangers into familiar faces, making the presenter feel more comfortable."
      }
    ],
    questions: [
      {
        id: "q-r-u5-01",
        question: "What does the author suggest about nervousness in the opening paragraph?",
        options: [
          "It is a sign of personal dishonesty.",
          "It is a common experience for people giving presentations.",
          "It is a rare occurrence during presentations.",
          "It is a direct result of inadequate preparation."
        ],
        answer: 1,
        evidence: "Almost everyone feels nervous before a presentation, whether it's a big or small audience...",
        explanationThai: "ผู้เขียนระบุชัดเจนว่าเกือบทุกคนจะรู้สึกตื่นเต้นก่อนการนำเสนอเสมอ ดังนั้นมันจึงเป็นประสบการณ์ร่วมที่เกิดขึ้นตามปกติ (common experience)"
      },
      {
        id: "q-r-u5-02",
        question: "What is a recommended way to physically relax before a presentation?",
        options: [
          "Taking a long power nap",
          "Doing stretching or breathing exercises",
          "Listening to rock music at high volume",
          "Drinking a cup of very strong coffee"
        ],
        answer: 1,
        evidence: "Try stretching or breathing exercises before you speak. For example, sit upright, breathe in slowly...",
        explanationThai: "ในบทความแนะนำให้ยืดเหยียดร่างกาย (stretching) หรือฝึกการหายใจ (breathing exercises)"
      },
      {
        id: "q-r-u5-03",
        question: "Why is it important to greet and get to know your audience beforehand?",
        options: [
          "To impress them with your technical knowledge",
          "To ensure that they like you personally",
          "To feel more comfortable during the presentation",
          "To persuade them to purchase your product"
        ],
        answer: 2,
        evidence: "It will feel more comfortable to speak to familiar faces than to complete strangers.",
        explanationThai: "บทอ่านระบุว่าการทักทายผู้ฟังจะช่วยให้เรารู้สึกสบายใจขึ้นเมื่อต้องพูดต่อหน้าคนที่คุ้นหน้าคุ้นตา"
      },
      {
        id: "q-r-u5-04",
        question: "According to the passage, what is an essential foundation for a strong presentation?",
        options: [
          "Knowing the audience personally",
          "Arriving late to build suspense",
          "Practicing and being well-prepared",
          "Memorizing the script word for word"
        ],
        answer: 2,
        evidence: "'Failing to prepare is preparing to fail.' Preparation is essential for a strong presentation.",
        explanationThai: "บทความยกสุภาษิตว่าการเตรียมตัวเป็นสิ่งจำเป็นสูงสุดสำหรับการนำเสนอที่ยอดเยี่ยม (Practicing and being well-prepared)"
      },
      {
        id: "q-r-u5-05",
        question: "How does the passage suggest turning nervousness to one's advantage?",
        options: [
          "By pretending that you have no fear",
          "By avoiding eye contact with the audience",
          "By harnessing the extra energy boost it provides",
          "By ignoring the audience completely"
        ],
        answer: 2,
        evidence: "Remember, being a little nervous can also be helpful; it can give you the energy boost needed for an enthusiastic presentation.",
        explanationThai: "ความประหม่าเล็กน้อยสามารถนำมาใช้เป็นพลังขับเคลื่อน (energy boost) ที่ทำให้การนำเสนอดูกระตือรือร้นและมีพลัง"
      }
    ]
  },

  // ================= PASSAGE 3 (UNIT 6) =================
  {
    id: "read-u6",
    unit: 6,
    title: "Working with Different Cultures in Business",
    thaiTitle: "การทำงานร่วมกับวัฒนธรรมที่แตกต่างในแวดวงธุรกิจ",
    sourceText: "Adapted from British Council (2026) in Unit 6",
    mainIdea: "Even when English is the common business language, behavioral etiquette regarding names/titles, smiling, and eye contact varies across cultures. Professionals must observe rules without stereotyping or pigeonholing individuals.",
    mainIdeaThai: "แม้ว่าจะใช้ภาษาอังกฤษเป็นภาษากลางเหมือนกัน แต่มารยาทและพฤติกรรม เช่น การเรียกชื่อและคำนำหน้า, ความหมายของการยิ้ม, และการสบสายตา แตกต่างกันอย่างมากในแต่ละวัฒนธรรม นักธุรกิจจึงต้องปรับตัวโดยไม่เหมารวมตัดสินคนแบบเหมารวม",
    authorsPurpose: "To sensitize global professionals to cultural subtleties and warn against stereotyping business partners.",
    tone: "Insightful, cross-cultural, cautionary, and respectful",
    paragraphs: [
      {
        paraNum: 1,
        heading: "Global Communication & Etiquette",
        text: "In today's global economy, business happens across international borders. Most people use English to communicate, but the small details of how we behave vary significantly. If we do not understand cultural 'rules,' we might make unfair judgments or ruin our professional relationships. To be successful, you should learn about these three important areas of etiquette.",
        thaiSummary: "ในเศรษฐกิจยุคไร้พรมแดน แม้ทุกคนจะใช้ภาษาอังกฤษ แต่รายละเอียดพฤติกรรมแตกต่างกันมาก การไม่เข้าใจกติกาทางวัฒนธรรมอาจทำให้เกิดการตัดสินที่ไม่เป็นธรรมหรือทำลายความสัมพันธ์ทางธุรกิจได้"
      },
      {
        paraNum: 2,
        heading: "1. Using Names and Titles",
        text: "The way we use names can cause confusion. In many European and Latin American countries, people use formal titles like 'Mr.,' 'Ms.,' or academic titles like 'Dr.' to show respect for someone's hard work. However, in the UK and the U.S., people often prefer a more informal approach and use first names very quickly. A German businessman might feel disrespected if you omit his title. But a British person might think using a title is too pompous (acting too important). The best strategy is to observe how others behave or simply ask how they would like to be addressed.",
        thaiSummary: "การใช้ชื่อและคำนำหน้า: ประเทศในยุโรปและละตินอเมริกาชอบใช้คำนำหน้าอย่างเป็นทางการเพื่อแสดงความเคารพ ขณะที่ในสหรัฐฯ และสหราชอาณาจักรชอบความไม่เป็นทางการและเรียกชื่อต้นอย่างรวดเร็ว คนเยอรมันอาจรู้สึกไม่ได้รับความเคารพหากคุณไม่เอ่ยคำนำหน้า ส่วนคนอังกฤษอาจมองว่าการใช้คำนำหน้าดูเย่อหยิ่ง (pompous) ทางออกที่ดีที่สุดคือการสังเกตหรือถามโดยตรง"
      },
      {
        paraNum: 3,
        heading: "2. The Meaning of a Smile",
        text: "In the West, people often smile to 'break the ice,' but its meaning changes around the world. In the U.S., Australia, and Britain, a smile signifies openness. However, in Russia, smiling for no reason can seem insincere or even 'silly.' Research shows that in Switzerland and China, people associate smiling with intelligence. But in Japan and Iran, people often think a serious face looks more capable and professional. In some places, like India, a smile might even be misinterpreted as a sign of dishonesty.",
        thaiSummary: "ความหมายของรอยยิ้ม: ในโลกตะวันตกการยิ้มช่วยละลายพฤติกรรมและแสดงความเปิดกว้าง แต่ในรัสเซีย การยิ้มโดยไม่มีเหตุผลถูกมองว่าไม่จริงใจหรือดูงี่เง่า ในสวิตเซอร์แลนด์และจีนมองว่าการยิ้มสื่อถึงความฉลาด ส่วนในญี่ปุ่นและอิหร่านมองว่าใบหน้าที่จริงจังดูมีความสามารถและเป็นมืออาชีพมากกว่า ในบางแห่งเช่นอินเดีย รอยยิ้มอาจถูกตีความผิดว่าไม่ซื่อสัตย์"
      },
      {
        paraNum: 4,
        heading: "3. Eye Contact and Authority",
        text: "Looking someone in the eye is not the same in every culture. In the UK or the U.S., direct eye contact proves you are paying attention. However, in Japan or South Korea, it can be seen as aggressive or disrespectful. In parts of Africa and South America, looking at a superior for too long might be interpreted as a challenge to their authority.",
        thaiSummary: "การสบสายตาและอำนาจ: ในสหราชอาณาจักรและสหรัฐฯ การสบตาแสดงถึงความใส่ใจ แต่ในญี่ปุ่นหรือเกาหลีใต้ อาจถูกมองว่าก้าวร้าวหรือไม่เคารพ และในแอฟริกาและอเมริกาใต้ การจ้องตากับผู้บังคับบัญชานานเกินไปอาจถูกตีความว่าเป็นการท้าทายอำนาจ"
      },
      {
        paraNum: 5,
        heading: "Conclusion: Avoid Stereotypes",
        text: "Learning about these patterns is helpful, but we should not pigeonhole people (label everyone from one country as the same). A person's behavior depends on many factors, including their age, gender, and personal experiences. Use this cultural knowledge as a guide, but always treat your business partners as individuals.",
        thaiSummary: "บทสรุป: ไม่ควรเหมารวม (pigeonhole) พฤติกรรมของทุกคนในประเทศหนึ่งว่าต้องเหมือนกันหมด เพราะปัจจัยเรื่องอายุ เพศ และประสบการณ์ส่วนตัวมีอิทธิพล จงใช้ความรู้นี้เป็นแนวทางและปฏิบัติต่อคู่ค้าในฐานะปัจเจกบุคคลเสมอ"
      }
    ],
    importantVocab: [
      { word: "etiquette", pos: "noun", meaning: "มารยาท / ธรรมเนียมปฏิบัติ", clue: "formal rules for polite behavior in business" },
      { word: "pompous", pos: "adj", meaning: "เย่อหยิ่ง / ทำตัวโอ่อ่าเกินไป", clue: "acting too important or superior" },
      { word: "insincere", pos: "adj", meaning: "ไม่จริงใจ / เสแสร้ง", clue: "expressing feelings not honest or genuine" },
      { word: "capable", pos: "adj", meaning: "มีความสามารถ", clue: "having skills to do a task well" },
      { word: "misinterpreted", pos: "adj / verb", meaning: "ถูกตีความผิด", clue: "understood or explained incorrectly" },
      { word: "superior", pos: "noun", meaning: "ผู้บังคับบัญชา / หัวหน้า", clue: "person with higher rank or position at work" },
      { word: "pigeonhole", pos: "verb", meaning: "เหมารวม / จัดกลุ่มตีตรา", clue: "label everyone as the same / stereotype" }
    ],
    contextClues: [
      {
        target: "pompous",
        sentence: "But a British person might think using a title is too pompous (acting too important).",
        explanation: "ในประโยคมีวงเล็บอธิบายความหมายทันทีว่า '(acting too important)' จึงแปลว่า เย่อหยิ่ง หรือทำตัวสำคัญเกินจริง"
      },
      {
        target: "pigeonhole",
        sentence: "Learning about these patterns is helpful, but we should not pigeonhole people (label everyone from one country as the same).",
        explanation: "มีคำขยายความในวงเล็บระบุว่า 'label everyone from one country as the same' ซึ่งหมายถึง การเหมารวม/ตีตราตัดสินผู้คนแบบเดียวกัน"
      }
    ],
    referenceWords: [
      {
        pronoun: "its",
        location: "Paragraph 3, Line 1",
        sentence: "In the West, people often smile to 'break the ice,' but its meaning changes around the world.",
        refersTo: "a smile",
        explanation: "'its' แสดงความเป็นเจ้าของของ 'a smile' (ความหมายของรอยยิ้ม)"
      },
      {
        pronoun: "their",
        location: "Paragraph 4, Line 4",
        sentence: "...looking at a superior for too long might be interpreted as a challenge to their authority.",
        refersTo: "a superior's",
        explanation: "'their' อ้างอิงถึงอำนาจของผู้บังคับบัญชา (superior)"
      }
    ],
    factsVsInferences: [
      {
        type: "Direct Fact",
        statement: "A German businessman might feel disrespected if you omit his academic or formal title.",
        sourceLocation: "Paragraph 2"
      },
      {
        type: "Direct Fact",
        statement: "In Japan and Iran, a serious facial expression is often regarded as more capable and professional than a smile.",
        sourceLocation: "Paragraph 3"
      },
      {
        type: "Inference",
        statement: "Assuming a young cosmopolitan Japanese executive will always feel threatened by direct eye contact is an example of pigeonholing.",
        reasoning: "Because individual behaviors depend on age, personal travel experiences, and corporate background, as highlighted in Paragraph 5."
      }
    ],
    questions: [
      {
        id: "q-r-u6-01",
        question: "Why is it important to understand cultural etiquette even when everyone in a meeting speaks English?",
        options: [
          "To prove that your English grammar is superior to your partners",
          "Because English words have different grammatical structures worldwide",
          "To avoid unfair judgments and protect professional relationships",
          "Because international business is gradually abandoning the English language"
        ],
        answer: 2,
        evidence: "If we do not understand cultural 'rules,' we might make unfair judgments or ruin our professional relationships.",
        explanationThai: "บทอ่านระบุชัดเจนว่าการเข้าใจมารยาทวัฒนธรรมช่วยป้องกันการตัดสินผู้อื่นอย่างไม่เป็นธรรมและช่วยรักษาความสัมพันธ์ทางวิชาชีพไว้"
      },
      {
        id: "q-r-u6-02",
        question: "How might a British professional feel if a business partner insists on being addressed as 'Dr.' (Doctor of Philosophy)?",
        options: [
          "They would consider the partner exceptionally capable and diligent.",
          "They might think the person is being pompous and overly formal.",
          "They would instantly feel deeper admiration for that individual.",
          "They would conclude that the partner is delightfully informal."
        ],
        answer: 1,
        evidence: "But a British person might think using a title is too pompous (acting too important).",
        explanationThai: "คนอังกฤษอาจรู้สึกว่าการยืนกรานใช้คำนำหน้าดูเย่อหยิ่งและเป็นทางการเกินไป (pompous and overly formal)"
      },
      {
        id: "q-r-u6-03",
        question: "In Russia, how is an unprompted smile without an obvious reason typically perceived?",
        options: [
          "As an admirable sign of high intelligence and openness",
          "As an effective technique to break the ice with strangers",
          "As a gesture of deep honesty and heartfelt respect",
          "As being insincere or even a sign of silly behavior"
        ],
        answer: 3,
        evidence: "However, in Russia, smiling for no reason can seem insincere or even 'silly.'",
        explanationThai: "ในรัสเซีย การยิ้มโดยไม่มีเหตุผลมักถูกมองว่าไม่จริงใจ (insincere) หรืองี่เง่า (silly)"
      },
      {
        id: "q-r-u6-04",
        question: "What is the potential risk of prolonged direct eye contact when speaking to a superior in parts of Africa and South America?",
        options: [
          "It might be misinterpreted as an open challenge to their authority.",
          "It proves that you are listening attentively to their instructions.",
          "It indicates that you are a highly ambitious and modern employee.",
          "It is universally welcomed as a sign of complete honesty."
        ],
        answer: 0,
        evidence: "In parts of Africa and South America, looking at a superior for too long might be interpreted as a challenge to their authority.",
        explanationThai: "ในบางพื้นที่ของแอฟริกาและอเมริกาใต้ การจ้องตาผู้บังคับบัญชานานเกินไปอาจถูกตีความว่าเป็นการท้าทายอำนาจ"
      },
      {
        id: "q-r-u6-05",
        question: "What does the author imply by warning readers not to 'pigeonhole' people?",
        options: [
          "We should consistently categorize partners based on their passports.",
          "We should not judge an entire group or individual based on a single trait.",
          "We should only consider a person's age and gender in meetings.",
          "We should disregard cultural guidelines and behave however we prefer."
        ],
        answer: 1,
        evidence: "...we should not pigeonhole people (label everyone from one country as the same)... treat your business partners as individuals.",
        explanationThai: "การไม่ 'pigeonhole' หมายถึงการไม่เหมารวมตัดสินบุคคลหรือกลุ่มคนจากลักษณะเพียงอย่างเดียว โดยต้องมองเพื่อนร่วมงานเป็นปัจเจกบุคคล"
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { READING_DATA };
}
