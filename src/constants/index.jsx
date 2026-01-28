import {
  FaReact,
  RiTailwindCssFill,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  RiNextjsFill,
  SiAppwrite,
  FaLaravel,
  SiMui,
  SiExpress,
  SiNestjs,
  FaNodeJs,
  SiTypescript,
  FaPhp,
  DiMysql,
  DiMsqlServer,
  SiMongodb,
  FaGithub,
  SiPostman,
  SiSwagger,
  FaFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  FaBootstrap,
  SiOracle,
  FaLinkedin,
} from "@/constants/icons";

export const projects = [
  {
    thumbnail: "/src/assets/images/storage-management.png",
    name: "StoreIt",
    desc: "Storage Management Solution - Manage your files the best way.",
    liveUrl: "https://storage-management-peach.vercel.app/",
    githubUrl: "https://github.com/sandeshjoshi0927/storage-management",
    techStacks: [
      { icon: <RiNextjsFill />, name: "Next JS" },
      { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
      { icon: <SiAppwrite />, name: "Appwrite" },
    ],
  },
  {
    name: "Daraz Clone",
    thumbnail: "/src/assets/images/daraz-clone.png",
    desc: "UI replication of South Asia's leading ecommerce marketplace.",
    liveUrl: "https://sandeshjoshi0927.github.io/daraz-clone/",
    githubUrl: "https://github.com/sandeshjoshi0927/daraz-clone",
    techStacks: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaJs />, name: "Javascript" },
    ],
  },
  {
    name: "Weather App",
    thumbnail: "/src/assets/images/weather-app.png",
    desc: "Live weather application which shows the current weather of the places.",
    liveUrl: "https://sandeshjoshi0927.github.io/weather-app/",
    githubUrl: "https://github.com/sandeshjoshi0927/weather-app",
    techStacks: [
      { icon: <FaReact />, name: "React JS" },
      { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
    ],
  },
];

export const skills = [
  {
    title: "Frontend",
    details: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      { icon: <FaReact />, name: "React JS" },
      { icon: <RiNextjsFill />, name: "Next JS" },
      { icon: <SiMui />, name: "Material UI" },
    ],
  },
  {
    title: "Backend & APIs",
    details: [
      { icon: <FaLaravel />, name: "Laravel" },
      { icon: <FaNodeJs />, name: "Node JS" },
      { icon: <SiExpress />, name: "Express JS" },
      { icon: <SiNestjs />, name: "Nest JS" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiSwagger />, name: "Swagger" },
      { icon: <SiAppwrite />, name: "Appwrite" },
    ],
  },
  {
    title: "Programming Languages",
    details: [
      { icon: <FaJs />, name: "Javascript" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <FaPhp />, name: "PHP" },
    ],
  },
  {
    title: "Database",
    details: [
      { icon: <DiMysql />, name: "MySQL" },
      { icon: <DiMsqlServer />, name: "MSSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiOracle />, name: "Oracle" },
    ],
  },
  {
    title: "Tools & Design",
    details: [
      { icon: <FaGithub />, name: "Git & GitHub" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <SiCanva />, name: "Canva" },
      { icon: <SiAdobephotoshop />, name: "Photoshop" },
      { icon: <SiAdobeillustrator />, name: "Illustrator" },
    ],
  },
];

export const services = [
  {
    title: "UI / UX Design",
    desc: "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, and modern design principles.",
  },
  {
    title: "Responsive Design",
    desc: "Building fully responsive layouts that adapt seamlessly across desktops, tablets, and mobile devices.",
  },
  {
    title: "Development",
    desc: "Converting designs and ideas into high-quality, scalable code using modern frontend technologies.",
  },
  {
    title: "Web Performance Optimization",
    desc: "Optimizing websites for speed, performance, and smooth user experience using best practices.",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sandesh-joshi-538110200/",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    url: "https://github.com/sandeshjoshi0927",
    icon: <FaGithub />,
  },
];

export const menuItems = [
  { title: "Home", path: "#" },
  { title: "Skills", path: "#skills" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Service", path: "#service" },
];
