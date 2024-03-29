import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    java,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    vitejs,
    docker,
    baykar,
    teknopar,
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
      title: "Software Testing",
      icon: creator,
    },
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

  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
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
      "title": "Software Developer in Test",
      "company_name": "Teknopar Endüstriyel Otomasyon San. ve Tic. A.Ş",
      "icon": teknopar,
      "iconBg": "#E6DEDD",
      "date": "August 2023 - (.....)",
      "points": [
        "Developed Test Plan and Test Strategy for comprehensive software testing.",
        "Prepared documentation and designed test cases aligned with project management processes and adhering to the project timeline.",
        "Identified deficiencies in existing tests within projects and defined the scope for new test development.",
        "Developed and executed software test cases, emphasizing web automation testing.",
        "Conducted error tracking and reporting activities to ensure robust software quality.",
        "Performed error analysis to investigate and address root causes of identified issues.",
        "Utilized Selenium, Selenium Web Driver, Cypress, TestNG, Cucumber, Mocha, SonarQube, Postman, PyTest, Allure, and FitNesse in the testing process."
      ],
      "abilities":[
        "Specialized in Web Automation Testing.", 
        "By developing and executing test cases using; Selenium, Selenium Web Driver, Cypress, and other relevant tools.",
        "Played a key role in the development of Test Plan and Test Strategy.",
        "Prepared comprehensive documentation and designed test cases in accordance with project management processes.",
        "Identified and addressed deficiencies in existing tests and defined the scope for new test development.",
        "Conducted error tracking, reporting, and root cause analysis activities to ensure software quality."
      ],
      "includedprojects": [
        "Teknopar: Development, documentation and full responsibility for the e2e automation and manual testing of a project that is in the marketing phase of the company.",
        "Consulted Company: CI-CD process management and transforming the development environment into a developer-friendly one."
      ],
      "techStack": "GitLab, VsCode-Server, Selenium, Selenium Web Driver, Cypress, TestNG, Cucumber, Mocha, SonarQube, Postman, Docker"
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
      abilities:[
        "Developed web-based",
        "full-stack products using NodeJS, React, MongoDB, JavaScript, and Typescript. Created a web application for customers and presented it as a product owner. Gained expertise in product development roadmap, object-oriented programming, product sales marketing, and presentation.",
      ],
      includedprojects:["Developing a web-based educational program with multi-user login capability from scratch, both backend and frontend, and preparing its presentation and marketing materials"],
      techStack: "HTML, CSS, JavaScript, React, MongoDB, Typescript, NodeJS (MERN Stack)"

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
      abilities: [
        "Took an active role in ground and flight tests",
        "of Unmanned Aerial Vehicles. Documented and presented all processes up to the delivery stage of produced UAVs, communicating with global customers. Gained expertise in aviation and space technology and acquired knowledge about international trade transactions.",
      ],
      includedprojects:[
        "TB-2"
      ],
      techStack: "Used secret tools produced for the company"
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
      abilities: [
        "Managed Rest Drivers for efficient software support.",
        "Created software development steps based on customer requests. Fixed bugs during the development process. Communicated with customers to identify needs and outlined roadmaps. Adapted to flexible and remote working hours. Gained expertise in software development architecture design.",
      ],
      includedprojects:[
        "Energy Management Systems",
      ],
      techStack: "Jenkins, Rancher, DBeaver, PostgreSQL"
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
      abilities: [
        "Developed and maintained web applications using React.js",
        "and related technologies. Collaborated with cross-functional teams to create high-quality products. Mapped ReactJS projects and participated in code reviews. Developed features for dynamic data display using APIs. Communicated with customers to determine needs and created roadmaps. Acquired skills in efficiently using Front-end tools for development.",
      ],
      includedprojects:[
        "KentRehberim"
      ],
      techStack: "ReactJS, Node.js"

    },
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
      abilities: [

        "Participated in Character-Based Neural Network studies,",
        "contributed to the development of AI projects using Python, participated in code reviews, provided constructive feedback to other developers. Acquired skills in combining characters with artificial intelligence for technological advances.",
      ],
      includedprojects:["(-)"],
      techStack: "Python, Jupyter, Image Processing"

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
  