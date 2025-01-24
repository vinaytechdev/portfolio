import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Maruti Suzuki",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Led development of full-stack applications using MERN stack and modern web technologies",
      "Architected and implemented scalable backend APIs and database schemas",
      "Optimized application performance through code refactoring and implementing caching strategies",
      "Mentored junior developers and conducted technical training sessions on React and Node.js",
      "Integrated third-party APIs and services to enhance application functionality"
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "TechCodistic",
    icon: starbucks,
    iconBg: "#383E56",
    date: " Mar 2024 - Jun 2024",
    points: [
      
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "The Website Makers",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Developed responsive and user-friendly web interfaces using HTML5, CSS3, and JavaScript",
      "Collaborated with UI/UX designers to implement pixel-perfect designs and animations",
      "Optimized website performance through efficient code practices and asset optimization",
      "Gained hands-on experience with modern frontend frameworks like React.js",
      "Assisted in troubleshooting cross-browser compatibility issues and bug fixes",
      "Participated in daily stand-ups and sprint planning meetings with the development team"
    ],
  },
];

const projects = [
  {
    name: "Youtube Clone",
    description:
      "A comprehensive YouTube clone application that replicates core features of YouTube, including video playback, search functionality, channel pages, and responsive design using React and Material UI."
    ,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid-api",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vinaytechdev/youtube-clone",
  },
  {
    name: "Blog Website",
    description:
      "A modern blogging platform built with React that features rich text editing, real-time previews, user authentication. Includes categories, tags, and a responsive design for optimal reading experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vinaytechdev/blogging-website",
  },
  {
    name: "Burger UI",
    description:
      "A modern and responsive burger restaurant website showcasing a delicious menu, and an engaging user interface. Features smooth animations, interactive elements, and enhance the digital dining experience.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vinaytechdev/burger-site",
  },
];

export { services, technologies, experiences, projects };
