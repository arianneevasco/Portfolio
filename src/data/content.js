// All your real content lives in this file.

export const profile = {
  name: "Arianne Evasco",
  logo: "ae",
  headline: ["I turn ideas", "into working", "software"],
  intro:
    "Fourth-year Computer Science student building full-stack apps with React and Node.js, and exploring data science and AI with Python. I learn by shipping real projects.",
  email: "arianneevasco@gmail.com",
  location: "Irosin, Sorsogon, Philippines. Open to remote",
  cv: "#", // later: "/arianne-evasco-cv.pdf" (put the PDF in /public)
  links: [
    { label: "GitHub", href: "https://github.com/yourname" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  ],
  formEndpoint: "https://formspree.io/f/your-id-here",
};

// The small "profile.js" card in the hero
export const codeCard = {
  role: "Software Developer",
  stack: ["React", "Node.js", "Python"],
  focus: "Full-stack, data and AI",
  learning: "Shipping reliable software end to end",
  status: "open to work",
};

// The scrolling strip under the hero
export const techs = ["React", "Node.js", "Python", "JavaScript", "Java", "Figma"];

export const about = {
  heading: "I learn by building, and I'm not done yet.",
  lead: "I'm Arianne, a fourth-year Computer Science student at Sorsogon State University, Bulan Campus.",
  body: [
    "I started with React and Node.js because I wanted to build things people could actually click on and use. These days I'm spending more time on the other side of the screen: databases, backend logic, and Python for data science and AI.",
    "I enjoy building things and solving problems, especially the kind that take a few tries to get right. That's what keeps me learning.",
  ],
  facts: [
    "Sorsogon State University",
    "Irosin, Sorsogon",
    "Backend, frontend, data science and ethical vibe coding",
    "Freelance and projects",
  ],
};

export const skills = [
  { group: "Frontend & Design", note: "What people see and touch", items: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Figma"] },
  { group: "Backend", note: "What keeps it running", items: ["Node.js", "Express", "Java"] },
  { group: "Data science", note: "Making sense of data", items: ["Python", "R", "Jupyter", "NumPy", "Matplotlib"] },
  { group: "Currently learning", note: "On my desk right now", items: ["Django", "PostgreSQL", "Supabase"] },
  { group: "Beyond code", note: "How I work", items: ["Working in a team", "Presenting projects", "Debugging", "Learning on my own"] },
];

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
    image: null,
    certificates: [
      { title: "Certificate of Internship", issuer: "University Registrar, SorSU 2026", image: null },
    ],
  },
  {
    id: "exp2",
    kind: "Competition",
    role: "SorSU Programming Challenge",
    company: "CICTCon 2025",
    period: "2025",
    summary:
      "Placed 1st runner up at the programming challenge held at Sorsogon State University, Bulan Campus, under the theme: Journey Through Code: Unlocking the Fun in Tech.",
    image: null,
    certificates: [
      { title: "Add your certificate", issuer: "CICTCon 2025", image: null },
    ],
  },
  {
    id: "exp3",
    kind: "Exam",
    role: "TOPCIT",
    company: "Test of Practical Competency in ICT",
    period: "Add year",
    summary: "Took the Test of Practical Competency in ICT, an exam that measures practical IT skills.",
    image: null,
    certificates: [
      { title: "Add your certificate", issuer: "TOPCIT", image: null },
    ],
  },
];

export const projects = [
  { type: "Full-stack role", title: "Sulit Spot", summary: "One line on the problem it solves and what you built.", stack: ["React", "Node.js"], image: null, caseStudy: "#", code: null, note: null },
  { type: "Full-stack role", title: "Project two", summary: "One line on the problem it solves and what you built.", stack: ["React", "Node.js"], image: null, caseStudy: "#", code: null, note: null },
  { type: "Full-stack role", title: "Project three", summary: "One line on the problem it solves and what you built.", stack: ["Python"], image: null, caseStudy: "#", code: null, note: null },
];