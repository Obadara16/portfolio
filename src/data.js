import IMG1 from "./assets/afriqhub.png";
import IMG2 from "./assets/afriqfabs.png";
import IMG3 from "./assets/gainsborough.png";
import IMG4 from "./assets/portfolio.png";
import IMG5 from "./assets/gti.png";
import IMG6 from "./assets/bti.png";
import IMG7 from "./assets/fundtrack.png";
import IMG8 from "./assets/confris.png";
import IMG9 from "./assets/otwise.png";



export const data = [
  {
    id: 1,
    image: IMG5,
    title: "Gti Rides",
    description:
      "GTI Rides is a user-friendly car rental platform that simplifies booking and fleet management. It offers seamless vehicle reservations and real-time tracking, making it easier for both users and businesses to manage rentals efficiently.",
    github: "https://gtirides.com",
    demo: "https://gtirides.com",
  },
  {
    id: 2,
    image: IMG8,
    title: "Confris",
    description:
      "Confris is a Conference-as-a-Service platform designed to streamline event management. It simplifies abstract submission, peer reviews, and DOI integration, making it easier for organizers and participants to engage throughout the event lifecycle.<br /> <br /><b>(In Development) </b>",
    github: "https://roqportfolio.onrender.com",
    demo: "https://roqportfolio.onrender.com",  
  },
  {
    id: 3,
    image: IMG9,
    title: "Otwise",
    description:
      "Otwise is a home adaptation grant platform designed to assist individuals with disabilities. It simplifies the application and assessment process, providing tailored solutions to improve accessibility and enhance quality of life for users.<br /> <br /><b>(In Development) </b>",
    github: "https://roqportfolio.onrender.com",
    demo: "https://roqportfolio.onrender.com",  
  },  
  {
    id: 4,
    image: IMG7,
    title: "FundTrack",
    description:
      "FundTrack is a digital wallet app to easily manage your funds and make transactions with ease. Our advanced algorithm analyzes your transactions and predicts your spending habits, allowing you to plan and budget better.",
    github: "https://github.com/Obadara16/fundtrack",
    demo: "https://fundtrack-i4kx.onrender.com",
  },
  {
    id: 5,
    image: IMG1,
    title: "AfriqHub",
    description:
      "Afriqhub is a platform that aims to improve users' knowledge on various topics while allowing them to connect with like-minded people across Africa. The platform provides premium content that keeps users engaged and allows them to establish a sense of community.",
    github: "https://github.com/Obadara16",
    demo: "https://afriqhub.com",
  },
  {
    id: 6,
    image: IMG2,
    title: "AfriqFabs",
    description:
      "AfriqFabs is a family-owned business that provides high-quality, stylish, and practical fabrics at affordable prices. They offer a wide range of fabrics, including cotton, silk, polyester, rayon, linen, and wool, and are committed to sustainable and ethical sourcing practices.  ",
    github: "https://github.com/Obadara16/afriqfabs",
    demo: "https://afriqfabs.onrender.com",
  },
  {
    id: 7,
    image: IMG6,
    title: "BlockchainLab Academy",
    description:
      "Blockchain Lab Academy is an online learning platform that offers courses and training on blockchain technology. The platform provides comprehensive and up-to-date content on various blockchain topics, including blockchain basics, smart contracts, decentralized finance (DeFi), and more.",
    github: "https://github.com/Obadara16/",
    demo: "https://blockchainlabacademy.com",
  },
  {
    id: 8,
    image: IMG4,
    title: "Estate Chain",
    description:
      "Estate chain is a real estate platform that aims to change real estate in Africa by keeping track of properties, verifying them, and purchasing and selling them. All of this will be accomplished through the use of blockchain technology. ",
    github: "https://github.com/Obadara16",
    demo: "https://roqportfolio.onrender.com",
  },
  {
    id: 9,
    image: IMG3,
    title: "GainsBorough",
    description:
      "Gainsborough is a real estate platform that provides users with the ability to buy, rent, and lease properties. The platform also allows real estate agents to upload and sell properties to potential buyers and renters.",
    github: "https://github.com/Obadara16/",
    demo: "https://roqportfolio.onrender.com",
  },
  
];

export const experiences = [
  {
    position: 'Fullstack Engineer',
    company: 'IntentTech (Remote)',
    date: 'July 2024 - Present',
    description: [
      'Led frontend and backend development for a Conference-as-a-Service platform with features like abstract submission, peer reviews, and DOI integration.',
      'Built a Grant Management Platform from scratch, supporting client onboarding, triage, and in-depth assessment workflows.',
      'Implemented dynamic UI components and complex form handling for both platforms.',
      'Worked closely with designers for pixel-perfect UI and collaborated with stakeholders to refine features.',
      'Managed database modeling and optimized queries for performance using Prisma and PostgreSQL.',
      'Integrated CI/CD pipelines using Azure Pipelines and containerized services with Docker.',
      'Wrote automated tests using Cypress to ensure feature reliability and reduce regressions.',
      'Mentored interns, offering code reviews and guidance on task execution and best practices.',
    ],
    skills: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'Azure Pipelines', 'Cypress'],
  },
  {
    position: 'Frontend Engineer (React/JavaScript)',
    company: 'GTI Rides (Remote/Contract)',
    date: 'Nov 2023 - August 2024',
    description: [
      'Built responsive interfaces for a car rental management platform using React.',
      'Collaborated with clients to gather requirements and deliver custom frontend solutions.',
      'Wrote clean, maintainable code while following best practices in version control and documentation.',
      'Ensured timely delivery of milestones and communicated progress with stakeholders.',
    ],
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    position: 'Fullstack Engineer',
    company: 'Stevic Payment (Remote)',
    date: 'August 2022 - July 2024',
    description: [
      'Developed a financial monitoring interface for Android POS devices (TIANYU P30).',
      'Integrated backend APIs and ensured consistent functionality across application modules.',
      'Converted UI/UX designs into interactive, scalable web interfaces.',
      'Optimized performance and ensured maintainable code throughout the frontend and backend.',
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
  },
  {
    position: 'Frontend Engineer',
    company: 'Blockchain Lab (Lagos, Nigeria)',
    date: 'April 2022 - May 2023',
    description: [
      'Designed and implemented a property authentication platform for validating land and property ownership.',
      'Improved user experience through iterative design updates and direct user feedback.',
      'Worked closely with backend teams to deliver cohesive, full stack features.',
      'Applied software design principles to develop scalable, high-performance web applications.',
    ],
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js'],
  },
];


export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export const email = 'obadararoqeeb@gmail.com';