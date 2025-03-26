export const initialIntents = {
  intents: [
    {
      tag: "greeting",
      patterns: [
        "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
        "what's up", "howdy", "greetings", "hi there"
      ],
      responses: [
        "Hello! Welcome to Kolhapur Institute of Technology. How can I assist you today?",
        "Namaste! I'm here to provide information about KIT, Kolhapur. What would you like to know?",
        "Greetings from KIT! How may I help you with information about our institute?",
        "Hello! I'm your KIT information assistant. Ask me anything about our college."
      ]
    },
    {
      tag: "goodbye",
      patterns: [
        "bye", "goodbye", "see you", "see you later", "take care",
        "farewell", "have a good day", "until next time", "catch you later"
      ],
      responses: [
        "Goodbye! Feel free to contact us again if you have more questions about KIT.",
        "Have a great day! For more information, visit our official website at www.kitkolhapur.edu.in",
        "Take care! You can always reach out to KIT admissions at 0231-1234567.",
        "Farewell! Jai Maharashtra!"
      ]
    },
    {
      tag: "thanks",
      patterns: [
        "thank you", "thanks", "appreciate it", "thank you so much",
        "thanks a lot", "great help", "you've been helpful", "thanks for the help"
      ],
      responses: [
        "You're welcome! Always happy to help with KIT-related queries.",
        "It's our pleasure to assist you with information about Kolhapur Institute of Technology!",
        "Dhanyavaad! Don't hesitate to ask if you need more information about KIT.",
        "Anytime! For official updates, check our website regularly."
      ]
    },
    {
      tag: "admissions",
      patterns: [
        "How do I apply to KIT?", "What are the admission requirements?",
        "When is the application deadline?", "What's the admission process?",
        "Tell me about KIT admissions", "How can I get admitted to KIT?",
        "What documents needed for KIT admission?", "Is there an application fee?",
        "Can I apply online to KIT?", "What's the cutoff for KIT?"
      ],
      responses: [
        "KIT offers admissions through MHT-CET/JEE Main for engineering and MAH-CET for MBA. The typical admission process includes: 1) Appearing for entrance exam, 2) CAP rounds counseling, 3) Document verification, and 4) Fee payment. Visit www.kitkolhapur.edu.in/admissions for details.",
        "For BE admissions at KIT, you need: 1) Minimum 50% in 10+2 (45% for reserved categories), 2) Valid MHT-CET/JEE Main score. The application fee is ₹1000 for general category and ₹800 for reserved categories.",
        "KIT admission deadlines: MHT-CET applications usually close in March, CAP rounds begin in July. MBA admissions follow MAH-CET schedule with applications typically due in February."
      ]
    },
    {
      tag: "courses",
      patterns: [
        "What courses does KIT offer?", "Available programs at KIT",
        "List of degrees at KIT", "Popular courses at KIT", "Academic programs",
        "What can I study at KIT?", "Degree options", "Fields of study",
        "Most popular majors at KIT", "Academic departments"
      ],
      responses: [
        "KIT offers: 1) BE in Computer, Mechanical, Civil, E&TC, Electrical Engineering 2) ME in Computer, Mechanical 3) MBA 4) MCA 5) Diploma in Engineering branches. All programs are AICTE approved.",
        "Our top programs include: 1) Computer Engineering (NBA accredited) 2) Mechanical Engineering 3) MBA (affiliated to Shivaji University) with specializations in Marketing, Finance, HR.",
        "You can explore: UG Engineering (BE), PG Engineering (ME), Management (MBA), and Computer Applications (MCA). Many students pursue additional certifications alongside degrees."
      ]
    },
    {
      tag: "placements",
      patterns: [
        "Placement record", "Companies visiting KIT", "Placement statistics",
        "Career opportunities", "Highest package", "Average salary",
        "Placement cell", "Internship opportunities", "Job placements",
        "Recruitment at KIT"
      ],
      responses: [
        "KIT has an active placement cell with 85% placement rate. Top recruiters include TCS, Infosys, Wipro, Cognizant, Tech Mahindra. Average package: ₹4.5 LPA, highest: ₹12 LPA (2023 data).",
        "Our placement highlights: 1) 150+ companies visit annually 2) Pre-placement offers through internships 3) Dedicated training in aptitude and technical skills 4) Average package ₹4-5 LPA for BE.",
        "KIT's Training & Placement Office organizes: 1) Campus recruitment 2) Internships 3) Soft skills training 4) Mock interviews 5) Industry interaction programs throughout the year."
      ]
    },
    {
      tag: "facilities",
      patterns: [
        "Campus infrastructure", "Labs at KIT", "Library facilities",
        "Sports facilities", "Hostel amenities", "Campus buildings",
        "Computer labs", "Workshops", "Auditorium", "Campus wifi"
      ],
      responses: [
        "KIT campus features: 1) 25-acre green campus 2) Central library with 50,000+ books 3) 30+ specialized labs 4) Sports complex 5) Hostels for 500+ students 6) High-speed wifi across campus.",
        "Our facilities include: 1) Modern computer labs with latest software 2) Mechanical workshops 3) Electronics and electrical labs 4) CAD/CAM center 5) Language lab 6) 800-seat auditorium.",
        "KIT provides: 1) Separate boys and girls hostels with mess 2) Gymnasium 3) Basketball, volleyball courts 4) Canteen and cafeteria 5) Medical facility 6) Transportation for local students."
      ]
    },
    {
      tag: "fees",
      patterns: [
        "Fee structure", "Tuition fees", "Course fees",
        "Hostel charges", "Payment options", "Scholarship options",
        "Education loan", "Fee payment deadline", "Yearly fees",
        "Additional charges"
      ],
      responses: [
        "KIT fee structure (2023-24): BE ₹1.15 L/year, ME ₹1.25 L/year, MBA ₹1.05 L/year, MCA ₹95k/year. Hostel fee: ₹60k/year including mess charges. Payment can be made via DD/online transfer.",
        "Fee details: 1) Tuition fee varies by category (Govt approved) 2) One-time admission fee ₹5000 3) Exam fee ₹1500/semester 4) Caution deposit ₹5000 (refundable). EBC/SBC scholarships available.",
        "Payment options: 1) Full year payment (5% discount) 2) Semester-wise 3) Education loan assistance available 4) SC/ST/OBC scholarships as per Govt norms. Contact accounts@kitkolhapur.edu.in for queries."
      ]
    },
    {
      tag: "contact",
      patterns: [
        "How to contact KIT?", "Email address", "Phone number",
        "Location address", "Google maps link", "Admission office contact",
        "Principal contact", "Department contacts", "Emergency number",
        "Administrative office"
      ],
      responses: [
        "KIT contact details: Address: Kolhapur Institute of Technology, Shiroli Road, Kolhapur - 416234. Phone: 0231-1234567. Email: info@kitkolhapur.edu.in. Website: www.kitkolhapur.edu.in",
        "Important contacts: 1) Admission Office: 0231-1234567 ext 101 2) Principal Office: ext 201 3) Placement Cell: ext 301 4) Accounts: ext 401. Office hours: 9:30 AM to 5:30 PM (Mon-Sat).",
        "Location: KIT is located on Shiroli Road, 12km from Kolhapur Railway Station. Nearest bus stop: KIT College Stop (ST buses available). Google Maps: https://maps.app.goo.gl/examplelink"
      ]
    },
    {
      tag: "ranking",
      patterns: [
        "KIT ranking", "NAAC accreditation", "NBA accreditation",
        "College ratings", "How good is KIT?", "Recognition",
        "Affiliation", "Accreditations", "Awards", "Reputation"
      ],
      responses: [
        "KIT is AICTE approved and affiliated to Shivaji University, Kolhapur. Computer Engineering is NBA accredited. Consistently ranked among top private engineering colleges in Maharashtra.",
        "Accreditations: 1) AICTE approved 2) Affiliated to Shivaji University 3) NBA accredited for Computer Engineering 4) ISO 9001:2015 certified 5) Recognized by DTE Maharashtra.",
        "KIT has received 'Best Engineering College' award from SPPU twice. Our Computer Engineering department has 5-star rating from AICTE-CII survey. Strong industry-academia collaborations."
      ]
    },
    {
      tag: "events",
      patterns: [
        "College festivals", "Technical events", "Cultural programs",
        "Workshops", "Seminar schedule", "Upcoming events",
        "Student activities", "Annual function", "Hackathons", "Guest lectures"
      ],
      responses: [
        "KIT hosts: 1) 'Techtonic' - annual tech fest 2) 'Kritva' - cultural fest 3) Regular hackathons and coding competitions 4) Industry expert lectures 5) Sports tournament 'Khel Mahakumbh'.",
        "Upcoming events: 1) Alumni meet (Dec 15) 2) Tech workshop on AI (Nov 20-22) 3) Campus recruitment drive (Jan 10-15). Check our events calendar at www.kitkolhapur.edu.in/events",
        "Student activities include: 1) IEEE student chapter events 2) SAE competitions 3) CSI tech seminars 4) Cultural competitions 5) Social initiatives through NSS unit."
      ]
    },
    {
      tag: "alumni",
      patterns: [
        "Notable alumni", "Alumni network", "Alumni association",
        "Where do KIT graduates work?", "Alumni success stories",
        "Placement companies", "Higher studies after KIT", "Alumni achievements",
        "Alumni contacts", "Former students"
      ],
      responses: [
        "KIT alumni work at Google, Microsoft, TCS, L&T, Tata Motors, and other top companies. Many pursue higher studies at IITs, NITs, and abroad. Our alumni network has 5000+ members worldwide.",
        "Notable alumni include: 1) Mr. X - Director at ABC Tech 2) Ms. Y - Entrepreneur (XYZ Startup) 3) Dr. Z - Professor at IIT Bombay. Alumni Association organizes annual meet and mentorship programs.",
        "KIT Alumni Association provides: 1) Networking opportunities 2) Career guidance 3) Startup support 4) Scholarship funds. Connect at alumni@kitkolhapur.edu.in or join our LinkedIn group."
      ]
    },
    {
      tag: "research",
      patterns: [
        "Research at KIT", "Faculty research", "Publications",
        "Research labs", "Projects", "Patents", "Research funding",
        "PhD programs", "Research opportunities", "Innovation center"
      ],
      responses: [
        "KIT encourages research with: 1) 5+ specialized research labs 2) Annual research grant of ₹10 lakhs 3) Industry collaboration projects 4) Patent filing support. Faculty have published 100+ papers in 5 years.",
        "Research areas: 1) Renewable Energy 2) Machine Learning 3) Advanced Manufacturing 4) IoT 5) Structural Engineering. Students can join ongoing projects through URPS (Undergraduate Research Program).",
        "KIT has filed 15 patents in last 3 years. Our Innovation Center provides: 1) Prototyping facilities 2) Seed funding 3) Mentorship 4) Incubation support for student startups."
      ]
    },
    {
      tag: "international",
      patterns: [
        "Foreign students", "Exchange programs", "Global collaborations",
        "International admissions", "MOUs", "Study abroad", "Foreign university ties",
        "Eligibility for NRI", "NRI quota", "International programs"
      ],
      responses: [
        "KIT welcomes international students under NRI/PIO quota. Requirements: 1) Equivalent of 10+2 qualification 2) Valid passport/visa 3) Eligibility certificate from Shivaji University. Contact international@kitkolhapur.edu.in",
        "Global collaborations: 1) Student exchange with Technical University of Munich 2) Joint research with University of Tokyo 3) Faculty exchange program with NUS Singapore.",
        "For NRI admissions: 1) 15% seats reserved 2) Fee structure differs 3) Separate application process 4) Documents need attestation. Application deadline is usually May 31 annually."
      ]
    },
    {
      tag: "calendar",
      patterns: [
        "Academic calendar", "Semester dates", "Holiday list",
        "Exam schedule", "Vacation dates", "College reopening",
        "Important dates", "Event schedule", "Term dates", "Academic schedule"
      ],
      responses: [
        "Academic year at KIT: Odd semester (June-Nov) with exams in Oct-Nov, Even semester (Dec-Apr) with exams in Mar-Apr. Summer vacation: May-June. Detailed calendar at www.kitkolhapur.edu.in/academic-calendar",
        "Key dates 2023-24: 1) Winter break: Dec 25-Jan 1 2) Diwali vacation: As per Maharashtra govt schedule 3) University exams: Nov 1-30 (odd sem), Apr 1-30 (even sem).",
        "Current schedule: Odd semester classes till Oct 30, exams Nov 5-30. Even semester begins Dec 1. College remains closed on all public holidays and Sundays."
      ]
    }
  ]
};