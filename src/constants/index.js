import {
    mobile,
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
    vitejs,
    docker,
    baykar,
    inavitas,
    yucelen,
    aybu,
    netcad,
    cprogramlama,
    datalgo,
    timesheet,
    giftchain,
    ushukuk,
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
      title: "ReactJS",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Software Testing",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  ];
  const educations = [
    {
      title: "Computer Engineering (English)",
      company_name: "Ankara Yıldırım Beyazıt University (2.80 GPA)",
      icon: aybu,
      iconBg: "#383E56",
      date: "September 2016 - Agust 2022",
      points: [
        "Managing the science and technology club and informing new members about the department and emerging technologies.",
        "While managing an e-sports club. I organized seminars with many game developers and learned about game development.",
        "During my education, covid-19 appeared and I had the opportunity to make projects from most courses. You can find the links of my projects.",
      ],
    },
   
  ]
  const experiences = [
    {
      title: "Software Developer (Internship)",
      company_name: "Styx Yazılım (Yücelen Group)",
      icon: yucelen,
      iconBg: "#E6DEDD",
      date: "June 2021 - July 2021",
      points: [
        "Participated Character-Based Neural Network studies that carried out by the company.",
        "Contributed in developing AI projects using Python.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Skills Learnt:  How combining characters with artificial intelligence helps technological advances.",
      ],
    },
    {
      title: "Frontend Developer / ReactJS (Internship)",
      company_name: "NETCAD Yazılım A.Ş",
      icon: netcad,
      iconBg: "#E6DEDD",
      date: "August 2021 - September 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Mapping projects developed with ReactJS.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Developed for displaying data from static to dynamic using API's.",
        "Communicating with customers, determining their needs and drawing a roadmap.",
        "Skills Learnt: How to use efficiently Front-end tools for development."
      ],
    },
    {
      title: "Software Support Engineer",
      company_name: "Inavitas Energy Management Systems",
      icon: inavitas,
      iconBg: "#E6DEDD",
      date: "November 2021 - March 2022",
      points: [
        "Rest Driver management.",
        "Creating software development steps according to the customer's requests.",
        "Fix bugs under development.",
        "Communicating with customers, determining their needs and drawing a roadmap.",
        "Skills Learnt: Adapted flexible and remote working hours, Software development architecture design."
      ],
    },
    {
      title: "UAV Test Pilot",
      company_name: "BAYKAR Technology",
      icon: baykar,
      iconBg: "#E6DEDD",
      date: "March 2022 - September 2022",
      points: [
        "Took an active role in the ground and flight tests of Unmanned Aerial Vehicles.",
        "Documentation and presentation of all processes up to the delivery stage of the produced Unmanned Aerial Vehicles and communicating with global customers.",
        "Skills Learnt: Aviation and space, international trade transactions."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Hitatek Yazılım (BAYKAR Technology)",
      icon: baykar,
      iconBg: "#E6DEDD",
      date: "September 2022 - April 2023",
      points: [
        "Developing web-based full-stack products using NodeJS, React, MongoDB, JavaScript and Typescript technologies.",
        "Creating a web application for related customers and presenting them as a product owner.",
        "Skills Learnt: Product developing roadmap, object-oriented programming, product sales marketing and presentation"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "C Programming Projects Library",
      description:
        "Problems that i have faced on my university. I collected them for improve myself and to do again",
      tags: [
        {
          name: "cprogramming",
          color: "blue-text-gradient",
        },
        {
          name: "objectorianted",
          color: "green-text-gradient",
        },
        {
          name: "GUI",
          color: "pink-text-gradient",
        },
      ],
      image: cprogramlama,
      source_code_link: "https://github.com/tolga-karabudak/C-Problems",
    },
    {
      name: "Data Structures and Algorithms Project Library",
      description:
        "Problems that i have faced on my university. I collected them for improve myself and to do again",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: datalgo,
      source_code_link: "https://github.com/tolga-karabudak/Data-Structures-Problems-and-solutions",
    },
    {
      name: "Timesheet Tracking System",
      description:
        "Simple-Timesheet-Tracking The TimeSheet Tracking application involves applying CRUD operations to a database using .Net Core.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "yellow-text-gradient",
        },
        {
          name: "c#",
          color: "red-text-gradient",
        },
        {
          name: "docker",
          color: "purple-text-gradient",
        },
      ],
      image: timesheet,
      source_code_link: "https://github.com/tolga-karabudak/CENG423_Simple-Timesheet-Tracking",
    },
    {
      name: "GiftChain",
      description:
        "An application made to vote each other for the gift draw for new year maybe. That project I'm trying learn vueJS.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "vue",
          color: "yellow-text-gradient",
        },
      ],
      image: giftchain,
      source_code_link: "https://github.com/tolga-karabudak/giftchain",
    },
    {
      name: "Law Firm Website",
      description:
        "I took this job as a freelancer and developed a website using vanilla Javascript. The website is active and live.\n ushukukburosu.net",
        
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "yellow-text-gradient",
        },
      ],
      image: ushukuk,
      source_code_link: "https://github.com/tolga-karabudak/ushukukburosu.net",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };
  