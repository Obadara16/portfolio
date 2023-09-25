import IMG1 from "./assets/afriqhub.png";
import IMG2 from "./assets/afriqfabs.png";
import IMG3 from "./assets/gainsborough.png";
import IMG4 from "./assets/portfolio.png";
import IMG5 from "./assets/portfolio3.png";
import IMG6 from "./assets/bti.png";
import IMG7 from "./assets/fundtrack.png";


export const data = [
  {
    id: 1,
    image: IMG7,
    title: "FundTrack",
    description:
      "FundTrack is a digital wallet app to easily manage your funds and make transactions with ease. Our advanced algorithm analyzes your transactions and predicts your spending habits, allowing you to plan and budget better.",
    github: "https://github.com/Obadara16/fundtrack",
    demo: "https://fundtrack-i4kx.onrender.com",
  },
  {
    id: 2,
    image: IMG1,
    title: "AfriqHub",
    description:
      "Afriqhub is a platform that aims to improve users' knowledge on various topics while allowing them to connect with like-minded people across Africa. The platform provides premium content that keeps users engaged and allows them to establish a sense of community.",
    github: "https://github.com/Obadara16",
    demo: "https://afriqhub.com",
  },
  {
    id: 3,
    image: IMG2,
    title: "AfriqFabs",
    description:
      "AfriqFabs is a family-owned business that provides high-quality, stylish, and practical fabrics at affordable prices. They offer a wide range of fabrics, including cotton, silk, polyester, rayon, linen, and wool, and are committed to sustainable and ethical sourcing practices.  ",
    github: "https://github.com/Obadara16/afriqfabs",
    demo: "https://afriqfabs.onrender.com",
  },
  {
    id: 4,
    image: IMG6,
    title: "BlockchainLab Academy",
    description:
      "Blockchain Lab Academy is an online learning platform that offers courses and training on blockchain technology. The platform provides comprehensive and up-to-date content on various blockchain topics, including blockchain basics, smart contracts, decentralized finance (DeFi), and more.",
    github: "https://github.com/Obadara16/",
    demo: "https://blockchainlabacademy.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Brocon",
    description:
      "An organization of undergraduate student consultants working to provide quality, pro-bono advisory services for our clients. We work with startup and growing companies from a variety of industries, ranging from technology to healthcare to fashion, providing innovative and effective solutions.",
    github: "https://github.com/Obadara16/Brocon",
    demo: "https://brocon.onrender.com",
  },
  {
    id: 6,
    image: IMG4,
    title: "Estate Chain",
    description:
      "Estate chain is a real estate platform that aims to change real estate in Africa by keeping track of properties, verifying them, and purchasing and selling them. All of this will be accomplished through the use of blockchain technology. ",
    github: "https://github.com/Obadara16",
    demo: "https://roqportfolio.onrender.com",
  },
  {
    id: 7,
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
    position: 'Frontend Engineer (React/Javascript)',
    company: 'Stevic Payment (Remote/Contract)',
    date: 'August 2022 - Present',
    description: [
      'Worked with the development team to build a monitoring interface for a financial application that runs on the TIANYU P30 Android POS device.',
      'Collaborated with the backend team to integrate APIs and ensure seamless functionality.',
      'Translated UI/UX designs into responsive and interactive web interfaces.',
      'Implemented best practices in frontend development, including clean code and performance optimization.',
    ],
    skills: ['Javascript', 'Python', 'PHP'],
  },
  {
    position: 'Frontend Engineer (React/Javascript)',
    company: 'Blockchain Lab (Lagos, Nigeria)',
    date: 'April 2022 - May 2023',
    description: [
      'Designed and implemented a resilient business application that empowers property owners and prospective buyers to authenticate and validate properties effectively.',
      'Performed consistent improvement of user experience and responded to customers\' issues.',
      'Collaborated with cross-functional teams to develop and deliver innovative full stack software solutions.',
      'Architect and develop scalable and high-performance web applications.',
      'Utilize best practices and software principles to write clean, maintainable code.',
      'Manage and lead distributed teams to ensure successful project execution.',
    ],
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Python',
      'Express.js',
      'Django',
      'RESTful API development and integration',
      'Git and version control',
    ],
  },
  {
    position: 'Frontend Engineer (Bootstrap/React)',
    company: 'Newmeq Digital Concept (Ibadan, Nigeria)',
    date: 'August 2019 - Mar 2022',
    description: [
      'Developed frontend systems for various web applications, focusing on creating exceptional user experiences.',
      'Collaborated with designers and backend developers to implement responsive and intuitive interfaces.',
      'Leveraged modern web technologies and frameworks to deliver high-quality frontend solutions.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
  },
  {
    position: 'Frontend Developer (Javascript/Bootstrap)',
    company: 'Creative Minds (Part-Time/Volunteer)',
    date: 'Sept. 2018 - December 2021',
    description: [
      'Collaborated with a team of developers to maintain and enhance the department\'s website.',
      'Implemented new features and improvements based on user feedback and requirements.',
      'Ensured a stable and smooth user experience by optimizing website performance and addressing any issues or bugs.',
      'Utilized modern frontend technologies such as HTML, CSS, and JavaScript to build responsive and interactive web interfaces.',
      'Employed popular frontend frameworks and libraries (e.g., React, Angular, Vue.js) to develop modular and maintainable code.',
      'Taught and mentored students in frontend development, providing guidance and support in their learning journey.',
      'Managed and updated the department\'s website content, ensuring it remains up-to-date and relevant.',
      'Followed best practices in frontend development, including code documentation, version control, and testing.',
    ],
    skills: ['Javascript', 'Bootstrap', 'HTML', 'CSS', 'React', 'Angular', 'Vue.js'],
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