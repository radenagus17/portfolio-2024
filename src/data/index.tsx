import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  GanttChartSquare,
  Blocks,
  Gem,
} from "lucide-react";

export interface InfoType {
  icon: any;
  text: string;
}

export interface DataType {
  title: string;
  data: object[];
}

export interface ServiceType {
  icon: any;
  title: string;
  description: string;
}

export interface ProjectType {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

export interface ReviewsType {
  avatar: string;
  name: string;
  job: string;
  review: string;
}

export const REVIEWS_DATA: ReviewsType[] = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi nemo veritatis. Animi labore quod, commodi quasi ipsa maxime ducimus!",
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi nemo veritatis. Animi labore quod, commodi quasi ipsa maxime ducimus!",
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi nemo veritatis. Animi labore quod, commodi quasi ipsa maxime ducimus!",
  },
  {
    avatar: "/assets/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi nemo veritatis. Animi labore quod, commodi quasi ipsa maxime ducimus!",
  },
  {
    avatar: "/assets/reviews/avatar-5.png",
    name: "Oliver Taylor",
    job: "Engineer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi nemo veritatis. Animi labore quod, commodi quasi ipsa maxime ducimus!",
  },
  {
    avatar: "/assets/reviews/avatar-6.png",
    name: "Mason Wilson",
    job: "Video Editor",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi nemo veritatis. Animi labore quod, commodi quasi ipsa maxime ducimus!",
  },
];

export const PROJECT_DATA: ProjectType[] = [
  {
    image: "/assets/work/best-eats.png",
    category: "react js",
    name: "Best Eats",
    description:
      "'Best Eats' is a website to display product lists and order products by providing delivery services",
    link: "https://e-resto-app.netlify.app",
    github: "https://github.com/radenagus17/e-resto-app",
  },
  {
    image: "/assets/work/bistro-cafe.png",
    category: "react js",
    name: "Bistro Cafe",
    description:
      "'Bistro Cafe' is a website to provide food and beverage product services as well as booking places for sitting tables",
    link: "https://cafe-resto117.vercel.app",
    github: "https://github.com/radenagus17/lp-cafe-resto",
  },
  {
    image: "/assets/work/new-megafit.png",
    category: "fullstack",
    name: "New Megafit",
    description:
      "'Megafit' is a website to help members and gym employees in managing reservation services and purchasing member packages",
    link: "https://new-megafit-client.netlify.app",
    github: "https://github.com/radenagus17/New-Megafit-Client",
  },
  {
    image: "/assets/work/yoga.png",
    category: "react js",
    name: "Yoga Website",
    description:
      "'Yoga Website' is a service for booking yoga practice classes",
    link: "https://start-with-yoga.netlify.app",
    github: "https://github.com/radenagus17/lp-yoga",
  },
  {
    image: "/assets/work/job-spot.png",
    category: "next js",
    name: "Job-Spot Website",
    description:
      "'Job Spot' is a website to make it easier for job seekers to find their dream job in this 1 service",
    link: "https://profesion-spot.vercel.app",
    github: "https://github.com/radenagus17/job-hunt",
  },
  {
    image: "/assets/work/smart-home.png",
    category: "fullstack",
    name: "Smart Home Ecommerce",
    description:
      "'Smart Home Ecommerce' is a web application for organizing and managing sales products for seller partners and buyers in finding the products they want",
    link: "https://sanber-next-commerce-zeta.vercel.app/",
    github: "https://github.com/radenagus17/smart-home-ecommerce",
  },
  {
    image: "/assets/work/adina-hotel.png",
    category: "fullstack",
    name: "Adina Hotel Website",
    description:
      "'Adina Hotel' is a website application that provides hotel room booking services with a variety of room types",
    link: "https://adina-hotel-zeta.vercel.app",
    github: "https://github.com/radenagus17/adina-hotel",
  },
  {
    image: "/assets/work/truckrentals.png",
    category: "next js",
    name: "Truckrentals",
    description:
      "'Truckrentals' is a website application that makes it easier for truck rental seekers to provide truck rental services to various regions in Indonesia",
    link: "https://truckrentals.netlify.app",
    github: "https://github.com/radenagus17/truckrentals",
  },
  {
    image: "/assets/work/widing.png",
    category: "next js",
    name: "Widing.id Website",
    description:
      "'Widing.id' is a website application that allows users to distribute invitations via digital with advanced services and features",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/pokedex.png",
    category: "next js",
    name: "Permana Pokedex",
    description:
      "Browse the Pokemon list: View all Pokemon from all generations, including information such as name, type, stats, and evolution. Use filters and search to easily find the Pokemon you're looking for.",
    link: "https://permana-pokedex.vercel.app",
    github: "https://github.com/radenagus17/permana-pokedex",
  },
  {
    image: "/assets/work/ponpesluwu.png",
    category: "next js",
    name: "Ponpes Nuruljunaidiyah",
    description:
      "Information system and content management system of a web boarding school in South Sulawesi.",
    link: "https://www.nuruljunaidiyah.com",
    github: "https://github.com/radenagus17",
  },
  {
    image: "/assets/work/search-country.png",
    category: "next js",
    name: "NextJS Search Country",
    description:
      "country data search application based on the API from restcountries version 3, using search and useDebounce techniques and fetching detailed data from the country you want to search.",
    link: "https://search-country-silk.vercel.app",
    github: "https://github.com/radenagus17",
  },
  {
    image: "/assets/work/CarePulse.png",
    category: "next js",
    name: "CarePulse Consult With a Doctor",
    description:
      "an app that allows you to directly explain your illness to your doctor and schedule regular check-ups.",
    link: "https://care-pulse-ivory.vercel.app",
    github: "https://github.com/radenagus17/meet-doctor",
  },
];

export const SERVICES_DATA: ServiceType[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "With proficiency in front-end and back-end technologies, I specialize in crafting engaging, user-friendly websites tailored to your needs.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I provide comprehensive web development services as a full-stack JavaScript developer.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "My services cover the development of native or cross-platform applications, focusing on robust backend architecture, engaging frontend interfaces, and optimal performance.",
  },
];

export const QUALIFICATION_DATA: DataType[] = [
  {
    title: "education",
    data: [
      {
        university: "University Moeslim Of Indonesia",
        qualification: "Bachelor of Computer Science",
        years: "2013 - 2017",
      },
      {
        university: "Hacktiv8 Indonesia",
        qualification: "Fullstack Javascript Developer",
        years: "2021 - 2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "PT. OS Selnajaya Indonesia",
        role: "Front-end Developer",
        years: "2024 - Present",
      },
      {
        company: "Unsircle",
        role: "Fullstack Developer",
        years: "2023 - 2024",
      },
      {
        company: "PT. Pola Inti Perkasa",
        role: "Web Developer",
        years: "2022 - 2023",
      },
      {
        company: "CV. Devta Techno",
        role: "Front-end Developer",
        years: "2018 - Present",
      },
    ],
  },
];

export const SKILL_DATA: DataType[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, Typescript",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/figma.svg",
      },
      {
        imgPath: "/assets/about/notion.svg",
      },
      {
        imgPath: "/assets/about/wordpress.svg",
      },
    ],
  },
];

export const INFO_DATA: InfoType[] = [
  {
    icon: <User2 size={20} />,
    text: "R. Agus Iman Sudrajat",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 838 62 3333 17",
  },
  {
    icon: <MailIcon size={20} />,
    text: "vaghuz@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 17 Nov, 1992",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Jl. Kebon Kacang III No. 62, Jakarta Pusat",
  },
];
