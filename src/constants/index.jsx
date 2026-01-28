import { FaReact, RiTailwindCssFill, FaHtml5, FaCss3Alt, FaJs } from "@/icons";

export const projects = [
  {
    thumbnail: "todo-app.png",
    name: "TODO APP",
    desc: "Manage your tasks with ease",
    liveUrl: "https://sandeshjoshi0927.github.io/TODO-APP/",
    githubUrl: "https://github.com/sandeshjoshi0927/TODO-APP",
    techStacks: [
      { icon: <FaReact />, name: "React JS" },
      { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
    ],
  },
  {
    name: "Daraz Clone",
    thumbnail: "daraz-clone.png",
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
    thumbnail: "weather-app.png",
    desc: "Live weather application which shows the current weather of the places.",
    liveUrl: "https://sandeshjoshi0927.github.io/weather-app/",
    githubUrl: "https://github.com/sandeshjoshi0927/weather-app",
    techStacks: [
      { icon: <FaReact />, name: "React JS" },
      { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
    ],
  },
];
