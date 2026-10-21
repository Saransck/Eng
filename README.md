# CEFR B1–B2 English Exam Preparation Web App

Interactive Web Application สำหรับเตรียมสอบภาษาอังกฤษระดับ CEFR B1–B2 โดยรวบรวมเนื้อหาและโครงสร้างข้อสอบจากเอกสารประกอบการเรียน 3 บทเรียนหลัก:
- **Unit 4: At the Workplace**
- **Unit 5: Presentation**
- **Unit 6: Communication in Multicultural Contexts**

---

## 🚀 วิธีการเปิดใช้งาน (How to Run)

เว็บแอปพลิเคชันถูกออกแบบด้วยสถาปัตยกรรม **Zero-Dependency Modern Single Page Application (SPA)** เพื่อให้สามารถเปิดใช้งานได้ทันทีบนทุกระบบปฏิบัติการ (Windows, macOS, Linux, iOS, Android) โดยไม่ต้องติดตั้ง Node.js หรือรัน Local Server ใด ๆ เพิ่มเติม:

1. ดับเบิลคลิกไฟล์ `index.html` หรือคลิกขวาแล้วเลือกเปิดด้วยเบราว์เซอร์ (Google Chrome, Microsoft Edge, Firefox, Safari)
2. หรือเปิดเบราว์เซอร์แล้วพิมพ์ URL: `file:///D:/Eng/index.html`
3. ใช้งานได้ทันทีทั้งแบบออฟไลน์และออนไลน์ พร้อมรองรับหน้าจอคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน (Responsive Design)

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
d:/Eng/
├── index.html                   # โครงสร้างหน้าเว็บหลักและส่วนประกอบ UI
├── README.md                    # คู่มือการติดตั้งและคำอธิบายระบบ
├── unit_4_at_the_workplace.md   # ไฟล์เนื้อหาต้นฉบับ Unit 4
├── unit_5_presentation.md       # ไฟล์เนื้อหาต้นฉบับ Unit 5
├── unit_6_communication_in_multicultural_contexts.md # ไฟล์เนื้อหาต้นฉบับ Unit 6
├── css/
│   └── main.css                 # Design System, Glassmorphism, Theme Tokens, Responsive
└── js/
    ├── app.js                   # Application Controller & LocalStorage Manager
    └── data/
        ├── vocabData.js         # คลังคำศัพท์ทั้งจากบทเรียนและบทอ่าน Reading (Units 4-6)
        ├── grammarData.js       # คู่มือไวยากรณ์ 5 หัวข้อหลัก พร้อมตารางเปรียบเทียบและ Mini Quiz
        ├── readingData.js       # บทอ่านฉบับเต็ม 3 บท พร้อมวิเคราะห์ศัพท์และหลักฐาน
        ├── cheatSheetData.js    # คลังคีย์เวิร์ดสรุปย่อก่อนสอบ (Vocab, Grammar, Reading)
        └── examData.js          # คลังข้อสอบจำลอง 40 ข้อ (Vocab 15, Grammar 15, Reading 10)
```

---

## 🌟 ฟังก์ชันหลักทั้ง 7 หน้าเว็บ

### 1. Dashboard (หน้าแรก)
- **สถิติจริงจากระบบ (Live Counters):** แสดงจำนวนคำศัพท์จริง (Vocabulary), หัวข้อไวยากรณ์ (Grammar Guide), บทอ่าน (Reading Passages) และข้อสอบจำลอง (Practice Exam)
- **ความคืบหน้าการเรียนรู้ (Progress Bars):** คำนวณเปอร์เซ็นต์คำศัพท์ที่จำได้แล้วจากฐานข้อมูลจริงใน `localStorage`
- **Continue Learning Button:** ปุ่มพานักศึกษากลับไปเรียนหรือฝึกทำข้อสอบต่อจากจุดเดิม
- **Quick Review:** ทางลัดสำหรับเปิดทบทวนคีย์เวิร์ดสำคัญที่พบบ่อยในข้อสอบทันที

### 2. Vocabulary Explorer (คลังคำศัพท์)
- **ครอบคลุมครบถ้วน:** รวบรวมคำศัพท์ทั้งจากเนื้อหาหลักและบทอ่าน Reading ของ Unit 4, 5, 6
- **ข้อมูลคำศัพท์ครบมิติ:** Word, Part of Speech, คำแปลไทย, English Definition, Context Clues, Synonyms, Antonyms, Collocations และตัวอย่างประโยคพร้อมคำแปล
- **ระบบตัวกรองและการค้นหา:** Real-time Search, กรองตาม Unit (4, 5, 6), กรองเฉพาะคำศัพท์จาก Reading, กรองเฉพาะคำที่บันทึกไว้ (⭐) หรือคำที่ยังจำไม่ได้ (⏳)
- **ระบบ Flashcards แบบ 3D Flip:** พลิกการ์ดหน้า-หลังเพื่อทดสอบความจำ สลับคำศัพท์ รองรับการกดแป้นพิมพ์และปุ่มควบคุม
- **สถานะการเรียนรู้:** ปุ่ม *Mark as Learned* (จำได้แล้ว) และ *Save for Review* (บันทึกทบทวน) บันทึกลงในหน่วยความจำของเครื่องโดยอัตโนมัติ

### 3. Grammar Guide (คู่มือไวยากรณ์เจาะลึก)
แบ่งเป็น 5 หัวข้อสำคัญตามตำราเรียน:
1. **Phrasal Verbs:** Separable vs. Non-separable พร้อมกฎตำแหน่งของกรรมและคำสรรพนาม (Pronouns)
2. **Meeting Plans & Future Forms:** Present Simple (ตารางเวลา), Present Continuous (นัดหมายใกล้ตัว), Will (การตัดสินใจทันที/อาสา), Be going to (แผนที่ตั้งใจไว้ก่อนหน้า) และ Adverbs of Certainty
3. **So vs. Such:** การใช้ So + Adj/Adv หรือ Many/Much และ Such a/an + Adj + Noun, Such + Plural/Uncountable Noun
4. **Discourse Markers for Presentations:** คำเชื่อมกลุ่ม Result (Therefore, Consequently, As a result), Contrast (However, On the other hand, In contrast), และ Addition (Moreover, Furthermore, In addition)
5. **Reported Speech:** กฎการถอย Tense (Backshift), การเปลี่ยนคำสรรพนาม และโครงสร้าง Yes/No Question ด้วย `if / whether + Subject + Verb`
- **ลูกเล่นเสริม:** Accordion เปิด-ปิด, ตาราง Matrix เปรียบเทียบจุดที่สับสนบ่อย, ไฮไลต์ Keyword ในตัวอย่าง และ **Mini Quiz รายหัวข้อ** พร้อมเฉลยอธิบายภาษาไทยทันที

### 4. Reading Practice (บทอ่านและเทคนิคการอ่าน)
แสดงบทอ่านฉบับสมบูรณ์ทั้ง 3 บท:
- **Passage 1:** *Job Satisfaction* (สถิติปัจจัยความพึงพอใจและต้นทุนการลาออก)
- **Passage 2:** *Dealing with Nervousness* (การจัดการความตื่นเต้นและเปลี่ยนเป็นพลัง)
- **Passage 3:** *Working with Different Cultures in Business* (มารยาทข้ามวัฒนธรรมและการหลีกเลี่ยงการเหมารวม)
- **ฟังก์ชันพิเศษ:**
  - **Interactive Vocab Popover:** สามารถคลิกคำศัพท์ไฮไลต์ในเนื้อเรื่องเพื่อเปิดดูคำแปลและคำอธิบายได้ทันที
  - **Thai Summary Toggle:** สลับเปิด-ปิดคำแปลสรุปใจความภาษาไทยรายย่อหน้า
  - **In-depth Analysis Sidebar:** แสดง Main Idea, Author's Purpose, คำอ้างอิง (Reference Words), การแยกข้อเท็จจริงกับการอนุมาน (Fact vs Inference)
  - **Comprehension & Evidence Matching:** แบบฝึกหัดพร้อมจับคู่ข้อสอบกับประโยคหลักฐานในบทอ่าน

### 5. Keyword Cheat Sheet (คลังสรุปย่อก่อนสอบ)
- **Vocabulary Clues:** Collocations ยอดนิยม (เช่น *take the minutes*, *make arrangements*, *maintain eye contact*, *build rapport*, *saving face*), คำที่มีความหมายใกล้เคียง/ตรงข้าม และ Negative Prefixes (un-, dis-, in-)
- **Grammar Signal Words:** รวบรวมคำใบ้ โครงสร้าง รูปแบบที่พบ และคำเตือนกับดักข้อสอบ
- **Reading Question Keywords:** เทคนิคและกลยุทธ์จัดการคำถาม เช่น *Main Idea, According to the passage, Infer/Imply, Refer to, Closest in meaning, Author's purpose, NOT/EXCEPT*
- **ฟังก์ชันค้นหาด่วน:** สามารถพิมพ์คำค้นเพื่อดึงเฉพาะคีย์เวิร์ดที่ต้องการทบทวนได้ทันที

### 6. Practice Exam (ข้อสอบจำลอง 40 ข้อ)
- **โครงสร้างข้อสอบ:**
  - **Vocabulary:** 15 ข้อ
  - **Grammar:** 15 ข้อ
  - **Reading Comprehension:** 10 ข้อ (2 บทอ่าน x 5 ข้อ)
- **2 โหมดการใช้งาน:**
  - **Practice Mode:** เลือกตอบแล้วตรวจคำตอบพร้อมแสดงคำอธิบายภาษาไทยและคีย์เวิร์ดได้ทันที
  - **Exam Mode:** ซ่อนเฉลยระหว่างทำ พร้อมตัวจับเวลา (Timer), ติดธงข้อที่สงสัย (Flag), แผงนำทางข้อสอบ (Question Navigator 1-40) และหน้าต่างยืนยันก่อนส่ง
- **ระบบวิเคราะห์ผลคะแนน:**
  - แสดงคะแนนรวมและจำแนกรายหมวด (Vocab /15, Grammar /15, Reading /10)
  - **Retry Wrong Answers:** ปุ่มคัดกรองเฉพาะข้อที่ตอบผิด เพื่อให้ผู้เรียนฝึกซ้ำจนกว่าจะแม่นยำ
  - **Retake Exam:** ปุ่มรีเซ็ตทำข้อสอบชุดใหม่

### 7. Progress & Review (สรุปความคืบหน้า)
- รายงานสถานะการเรียนรู้คำศัพท์ (จำได้แล้ว, บันทึกไว้, ยังไม่ได้จำ)
- ประวัติคะแนนการทำข้อสอบย้อนหลัง
- **Frequent Mistakes Tracker:** รายการข้อสอบและหัวข้อที่ทำผิดจากการสอบล่าสุด พร้อมปุ่มเปิดทบทวนเป็นรายข้อ
- **Saved Vocabulary Deck:** คลังคำศัพท์ที่กดดาวไว้ สามารถคลิกเปิดฝึกด้วยระบบ Flashcards ได้ทันที

---

## 🎨 การออกแบบและเทคโนโลยี

- **Visual Design:** Dark Mode / Light Mode สมบูรณ์แบบ คุมโทนสีตามหมวดหมู่ (Emerald สำหรับ Vocab, Indigo สำหรับ Grammar, Amber สำหรับ Reading, Rose สำหรับ Exam)
- **Typography:** ฟอนต์คุณภาพสูงจาก Google Fonts (*Outfit*, *Plus Jakarta Sans* สำหรับภาษาอังกฤษ และ *Sarabun* สำหรับภาษาไทย)
- **Zero-Dependency:** ใช้มาตรฐาน HTML5, CSS3 และ Pure Vanilla JavaScript (ES6+) ไม่ต้องพึ่งพาไลบรารีภายนอกที่อาจมีปัญหาเรื่องการเข้ากันได้
- **Local Persistence:** บันทึกสถานะคำศัพท์, คะแนนสอบ, และธีมผ่าน Web Storage API (`localStorage`)