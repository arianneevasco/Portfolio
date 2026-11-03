// All your real content lives in this file.

export const profile = {
  name: "Arianne Evasco",
  logo: "ae",
  headline: ["I turn ideas", "into working", "software"],
  intro:
    "Fourth-year Computer Science student who enjoys learning, working with others, and taking on new challenges. I am a curious, dependable, and determined person who values growth, continuous improvement, and meaningful contributions.",
  email: "arianneevasco@gmail.com",
  location: "Irosin, Sorsogon, Philippines. Open to remote",
  cv: "/arianne-evasco-cv.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/arianneevasco" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arianne-evasco" },
  ],
  formEndpoint: "https://formspree.io/f/your-id-here",
};

// The small "profile.js" card in the hero
export const codeCard = {
  role: "Computer Science Student",
  stack: ["Web development", "Data management", "IT fundamentals"],
  focus: "Learning and problem-solving",
  learning: "Growing through projects and experience",
  status: "open to opportunities",
};

// The scrolling strip under the hero
export const techs = ["React", "Node.js", "Python", "JavaScript", "Java", "Figma"];

export const about = {
  heading: "I learn, grow, and keep moving forward.",
  lead: "I'm Arianne, a fourth-year Computer Science student at Sorsogon State University, Bulan Campus.",
  body: [
    "I'm a curious and determined person who enjoys learning new things, solving problems, and turning challenges into opportunities to improve.",
    "I value patience, teamwork, and continuous learning. Whether I'm working on a school project, organizing information, or preparing for a competition, I try to be responsible, detail-oriented, and open to feedback. I'm eager to learn, contribute, and grow with a team.",
  ],
  facts: [
    "Sorsogon State University",
    "Irosin, Sorsogon",
    "Curious and determined learner",
    "Completed university internship",
  ],
};

export const skills = {
  heading: "What I bring",
  accent: "so far.",
  lead: "I'm building a practical foundation in software and information technology through school projects, internship experience, and continuous learning.",
  learning: ["Web Development", "Database Fundamentals", "Software Development", "Information Technology"],
  beyond: ["Teamwork", "Communication", "Problem-Solving", "Organization", "Attention to Detail", "Presentation Skills", "Willingness to Learn"],
  groups: [
    { title: "Frontend & design", items: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Figma"] },
    { title: "Backend", items: ["Node.js", "Express", "Java"] },
    { title: "Data science", items: ["Python", "R", "Jupyter", "NumPy", "Matplotlib"] },
  ],
  tools: [
    "Python", "React", "Node.js", "Java", "JavaScript", "CSS", "HTML", "Bootstrap",
    "Figma", "Vercel", "VS Code", "MongoDB", "PostgreSQL", "Git",
  ],
};

// image: put files in public/images and write "/images/file.jpg". null shows a placeholder.
export const experiences = [
  {
    id: "exp1",
    kind: "Internship",
    role: "Records Intern",
    company: "University Registrar, SorSU",
    period: "2026",
    summary:
      "Handled and organized student records, keeping the data accurate and confidential. Supported enrollment and records processing, including encoding and verifying student data.",
    image: "/images/intern.jfif",
  },
  {
    id: "exp2",
    kind: "Competition",
    role: "SorSU Programming Challenge",
    company: "CICTCon 2025",
    period: "2025",
    summary:
      "Placed 1st runner up at the programming challenge held at Sorsogon State University, Bulan Campus, under the theme: Journey Through Code: Unlocking the Fun in Tech.",
    image: "/images/competition.jfif",
  },
  {
    id: "exp3",
    kind: "Exam",
    role: "TOPCIT",
    company: "Test of Practical Competency in ICT",
    period: "2025",
    summary: "Took the Test of Practical Competency in ICT, an exam that measures practical IT skills.",
    image: "/images/topcit.jfif",
  },
];

export const projects = [
  {
    type: "Backend role",
    title: "SorSULYAP",
    summary: "A secure, centralized university announcement system with class schedules, an activities calendar, searchable updates, downloadable attachments, and offline access for the SorSU community.",
    stack: ["Figma", "Database", "Email authentication", "Offline mode"],
    image: "/project/Screenshot%202026-10-31%20234217.png",
    caseStudy: null,
    code: null,
    note: null,
  },
  {
    type: "Frontend role",
    title: "Schedify",
    summary: "A mobile academic scheduling and notification system for SorSU students, with personalized class schedules, school events, administrator announcements, and automated reminders.",
    stack: ["React Native", "Node.js", "Express", "MongoDB Atlas", "Push notifications"],
    image: "/project/58315de5-b009-4ec2-9911-bb2839809630.jpg",
    caseStudy: null,
    code: null,
    note: null,
  },
  {
    type: "Full-stack role",
    title: "Sulit Spot",
    summary: "A community-driven mobile app for discovering and sharing affordable food, places, items, and services through posts, ratings, reviews, location pins, notifications, and AI-assisted categories.",
    stack: ["React Native", "Expo", "Firebase", "Firestore", "Cloud Functions", "Cloudinary", "Groq API"],
    image: "/project/Screenshot%202026-10-31%20224453.png",
    caseStudy: null,
    code: null,
    note: null,
  },
];

// Put the files in public/images/certs/ (lowercase names, no spaces)
export const certificates = [
  {
    title: "Test of Practical Competency in ICT (TOPCIT)",
    issuer: "TOPCIT",
    year: "2025",
    image: "/certificates/topcit-score-certificate.pdf",
  },
  {
    title: "Certificate of Internship",
    issuer: "University Registrar, SorSU",
    year: "2026",
    image: "/images/4db53200-12ac-465f-a87e-6a219307d5b4.jfif",
  },
  {
    title: "Certificate of Participation — CICTCon 2024",
    issuer: "Sorsogon State University Bulan Campus",
    year: "2024",
    image: "/images/cictcon-2024-participation.jpg",
  },
  {
    title: "1st Runner Up, Programming Challenge",
    issuer: "CICTCon 2025, SorSU",
    year: "2025",
    image: "/images/499748eb-346b-4859-b313-2f04e68e6cfd.jpg",
  },
  { title: "AI Essentials: Theory and Practice", issuer: "UP Open University", year: "2026", image: "/images/Screenshot%202026-10-31%20222842.png" },
  { title: "Data Analyst 101: Excel Formulas & Functions", issuer: "Simplilearn SkillUp", year: "2025", image: "/images/Screenshot%202026-10-31%20222938.png" },
  { title: "Introduction to C++", issuer: "Simplilearn SkillUp", year: "2024", image: "/images/Screenshot%202026-10-31%20223016.png" },
  { title: "Introduction to CSS", issuer: "Sololearn", year: "2025", image: "/images/Screenshot%202026-10-31%20223101.png" },
  { title: "Introduction to HTML", issuer: "Sololearn", year: "2025", image: "/images/Screenshot%202026-10-31%20223140.png" },
];

