import {
    uqac,
    isty,
    uvsq,
    front,

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

    wargame,
    parser,
    rescueindoor,
    todoapp,
    manvrwild,
    ia,

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
      title: "Developer",
      icon: front,
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
        "Painting of road markings, maintenance of green spaces, repairing of urban furniture.",
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
      title: "Barman / Waiter / Busboy / Cook",
      company_name: "Bistrot du Fjord",
      icon: fjord,
      iconBg: "#E6DEDD",
      date: "October 2022 - July 2023",
      points: [
        "Student work",
        "Preparation of congresses, dinners, events, theme parties.",
        "Reception up to 200 people.",
      ],
    },
  ];


  const projects = [
    {
      name: "Wargame",
      description:
        "Wargame is a turn-based tactical game allowing to simulate battles. This project is realized by 5 students and is entirely developed in Java. There is the possibility to edit the map before playing, to play with AI players. During the game, there are several random event.",
      tags: [
        {
          name: "Java",
          color: "yellow-text-gradient",
        },
      ],
      image: wargame,
      source_code_link: "https://github.com/clement-robin/Wargame",
    },
    {
      name: "Parser",
      description:
        "This project aims to implement an SLR analyzer. The program then displays the corresponding LR parser with, line by line, the action, the stream and the stack. Moreover, if the word is accepted by the grammar, the program also displays the parse tree.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
      ],
      image: parser,
      source_code_link: "https://github.com/clement-robin/CompilerParser",
    },
    {
      name: "Indoor delivery Robot",
      description:
        "In a group of 8 students we aimed to improve a basic 4 wheels robot. We added a trailer to it for hold the mail he needs to deliver that I modeled. Additionally, I realized the Frontend part of the user interface of the system.",
      tags: [
        {
          name: "Arduino",
          color: "cyan-text-gradient",
        },
        {
          name: "Fusion360",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: rescueindoor,
      source_code_link: "https://github.com/clement-robin/RescueIndoor",
    },
    {
      name: "ToDoApp",
      description:
        "We realise an Android app, that create customizable to-do lists, add, modify, and delete tasks in lists, share lists in real-time with other users, set due dates for tasks, automatic detection of duplicates in tasks to avoid redundancy and make instant synchronization of updates between multiple users sharing a list.",
      tags: [
        {
          name: "Java",
          color: "yellow-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
      ],
      image: todoapp,
      source_code_link: "https://github.com/clement-robin/ToDoApp",
    },
    {
      name: "ManVRWild",
      description:
        "In this virtual reality simulation, we have created the following scene: the player finds himself in the forest and we guide him on the first gestures to make. He can interact with his environment by picking up objects and moving around. The goal is to learn the first gestures of survival: making fire.",
      tags: [
        {
          name: "Unreal",
          color: "gray-text-gradient",
        },
      ],
      image: manvrwild,
    },
    {
      name: "Classification by IA",
      description:
        "In this work, we manipulate the creation of convolutional neural network architecture and use the concept of transfer learning to adapt a pre-trained architecture to an image data set. With a data set of fruit photographed from all angles, the model is trained to classify a fruit among those it knows.",
      tags: [
        {
          name: "Python",
          color: "red-text-gradient",
        },
      ],
      image: ia,
    },
  ];
  
  export { services, technologies, experiences, projects };