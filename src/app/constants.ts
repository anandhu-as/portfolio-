export const myName = "Anandhu A S";

export const role = "Software Developer";

export const socialLinks = {
  github: "https://github.com/anandhu-as",
  linkedin: "https://linkedin.com/in/anandhuuas",
  strava: "https://www.strava.com/athletes/1185322479",
  instagram: "https://www.instagram.com/anandhuuas/",
};
const currentYear = new Date().getFullYear();
const age = currentYear - 2006;
export const bio = {
  quote: `I'm a ${age}-year-old software developer dedicated to building clean, accessible, and high-performance user interfaces that balance technical precision with polished design.`,
  paragraphs: [
    " I balance my screen time with physical discipline, particularly long-distance running and calisthenics. I'm always exploring new technologies, contributing to open source, and looking for creative ways to build better web products.",
  ],
};

export const backgroundItems = [
  {
    type: "project",
    name: "Typen.io",
    url: "https://github.com/anandhu-as/Typen.io",
    liveUrl: "https://typenio.vercel.app/",
    descriptionBefore: "Built and launched ",
    descriptionAfter:
      ", a collaborative blogging platform designed for clean, authentic publishing.",
  },
  {
    type: "project",
    name: "AnimeHub",
    url: "https://github.com/anandhu-as/AnimeHub",
    liveUrl: "https://anime-hub-sigma.vercel.app/",
    descriptionBefore: "Developed ",
    descriptionAfter:
      ", a React web application using the Jikan API for exploring detailed anime series and manga content.",
  },
  {
    type: "project",
    name: "Subscription Tracker",
    url: "https://github.com/anandhu-as/subscription-tracker-typeScript",
    descriptionBefore: "Created ",
    descriptionAfter:
      ", a secure, production-ready TypeScript REST API featuring JWT authentication, Arcjet security, and Upstash caching.",
  },
  {
    type: "project",
    name: "CryptoFlow",
    url: "",
    descriptionBefore: "Built ",
    descriptionAfter:
      ", a full-stack cryptocurrency tracker leveraging the MERN stack with interactive charts and custom watchlist management.",
  },
  {
    type: "text",
    text: "Proficient with JavaScript, TypeScript, React, Next.js, Node.js, Express, Redux, and Tailwind CSS.",
  },
  {
    type: "text",
    text: "Experienced with MongoDB, Supabase, Firebase, Upstash, SQL querying, Git workflow integration, and Linux/Kali Linux systems.",
  },
  {
    type: "text",
    text: "Passionate about writing, coding, reading, and continuous self-improvement.",
  },
];

export const educationItems = [
  {
    degree: "Bachelor of Computer Applications",
    period: "2023 — 2026",
    school: "T. John College (Autonomous), Bangalore",
    completed: true,
  },
  {
    degree: "Higher Secondary Education (Class 11 & 12)",
    period: "2021 — 2023",
    school: "Vijaya Higher Secondary School, Pulpally • Computer Science",
    completed: true,
  },
  {
    degree: "Secondary School Education (Class 10)",
    period: "2020 — 2021",
    school: "St. Mary's High School, Mullenkolley",
    completed: true,
  },
];

export const footer = {
  email: "anandhuas010203@gmail.com",
  text: "Feel free to reach out via email at",
};
