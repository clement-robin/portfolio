import {
    uqac,
    isty,
    uvsq,
    creator,

    bilstein,
    gpso,
    aviva,
    rkids,
    sygecom,
    fjord,

    html,
    css,
    php,
    javascript,

    threejs,
    reactjs,
    tailwind,
    
    c,
    cpp,
    python,

    mysql,
    apache,
    bash,

    arduino,
    fusion360,

    git,

    github,
    carrent,
    jobit,
    tripguide,
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
      title: "Master's degree in computer science",
      icon: uqac,
    },
    {
      title: "Engineering of Technological Architectures of Information and Communication",
      icon: isty,
    },
    {
      title: "Technical University Diploma in Computer Science",
      icon: uvsq,
    },
    {
      title: "?????????????",
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
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    /*{
      name: "Apache",
      icon: apache,
    },*/
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Arduino",
      icon: arduino,
    },
    {
      name: "Fusion360",
      icon: fusion360,
    },
    /*{
      name: "Bash",
      icon: bash,
    },*/
    {
      name: "git",
      icon: git,
    },
  ];


  const experiences = [
    {
      title: "Seasonal employee - Automotive parts packaging",
      company_name: "Bilstein",
      icon: bilstein,
      iconBg: "#383E56",
      date: "Summer 2018",
      points: [
        "Summer job",
        "In the packaging section, making cardboard boxing of orders for customers.",
        "Work with factory hours: a morning shift, an evening shift",
      ],
    },
    {
      title: "Seasonal employee - Road maintenance agent",
      company_name: "Grand Paris Seine & Oise Urban Community",
      icon: gpso,
      iconBg: "#E6DEDD",
      date: "Summer 2019",
      points: [
        "Summer job",
        "Outdoor work to keep roads in good condition.",
        "Painting of road markings, maintenance of green spaces, repairing of urban furniture",
      ],
    },
    {
      title: "Java Developer",
      company_name: "Aviva",
      icon: aviva,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - Sep 2020",
      points: [
        "Work-study contract: half the time in class, half the time in the company.",
        "Understand how the entire company database works.",
        "Define the needs of employees for an internal software.",
        "Development in JAVA of a software for the classification of checks issued by and for the insurance company.",
      ],
    },
    {
      title: "Trainer in Robotics for Kids",
      company_name: "Robotics Kids Academy",
      icon: rkids,
      iconBg: "#383E56",
      date: "Mai 2021 - June 2022",
      points: [
        "Weekly work during school time and everyday work during vacations.",
        "Design a learning program to introduce robotics for beginners or more advanced children.",
        "Make sessions in the themes of electronics, programming with Arduino, 3D modeling with Fusion 360 and 3D printing.",
        "Prepare a complete project for the year to present what the children have learned and designed to their parents.",
      ],
    },
    {
      title: "Fullstack developer",
      company_name: "Sygecom",
      icon: sygecom,
      iconBg: "#E6DEDD",
      date: "Mai 2022 - July 2022",
      points: [
        "3 months internship for my second year of engineering school.",
        "Design a website from scrach according to the needs of the company.",
        "Develop ERP allows customers to access their products, invoices and requests.",
        "The different collobarators can generate the documents according to their activities.",
        "For accountants: invoices. For salesmans: estimates."
      ],
    },
    {
      title: "Barman/Waiter/Busboy/Cook",
      company_name: "Bistrot du Fjord",
      icon: fjord,
      iconBg: "#E6DEDD",
      date: "October 2022 - Present",
      points: [
        "Student work",
        "Preparation of congresses, dinners, events, theme parties.",
        "Reception up to 200 people.",
      ],
    },
  ];


  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },{
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };