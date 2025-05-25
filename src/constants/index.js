export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
export const myProjects = [
  {
    title: 'SuVerse - Movies and TV Shows Website',
    desc: 'This website provides an interactive and user-friendly interface for exploring movie, locating nearby theatres, and managing user authentication. The application integrates third-party services such as TMDB (The Movie Database) API, Firebase, and Google Maps API ( Leaflet ) to enhance its functionality',   
    subdesc:'Built as a unique Software-as-a-Service app with React.js 14, CSS3, HTML5, JavaScript, TMDB API, Firebase, Google Maps API ( Leaflet ) to enhance its functionality',
    href: 'https://su-verse-movie-website-2zs5.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logo.png',
    
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'html',
        path: '/assets/html.png',
      },
    ],
  },
  {
    title: 'uniBoard - To-Do List APP',
    desc: 'UniBoard is a multi-feature web application designed to enhance productivity and creativity through an intuitive and visually engaging interface. Built using HTML, CSS, and JavaScript, UniBoard is a responsive, beginner-friendly project that includes the following core features: Features Included: 🔐 Login & Registration System.',
    subdesc:'Features Included: 🔐 Login & Registration System. 📝To do list. 📊 Image gallery. ',
    href: 'https://task2-to-do-app.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/logo2.png',
   
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'html',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'css',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'javascript',
        path: '/assets/js.png',
      },
    ],
  },
  
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'FunZone is an interactive web app with quizzes, jokes, an image carousel, and a leaderboard. It features dark/light theme support, hover animations, a quiz timer, and real-time score tracking. Enjoy sound effects, a floating avatar, and smooth navigation for an engaging and fun user experience.',
    subdesc:
      'Features -Quizzes with timer and real-time score tracking,  Jokes for entertainment, Image Carousel for visual enjoyment, Leaderboard to track top scores, Dark/Light Theme Support for personalized experience.',
    href: 'https://funzone-quiz-web-app.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/logo4.png',
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'html',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'css',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'javascript',
        path: '/assets/js.png',
      },
    ],
  },

  {
    title: 'Doctors Appointment App',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:'Built using Android Studio, Java, XML, Firebase (under testing and improvement)',
    href: 'https://github.com/sumaiyatalukdar/DoctorAppoinment-App.git',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/logo3.png',
    
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Android Studio',
        path: '/assets/Android.png',
      },
      {
        id: 2,
        name: 'Java',
        path: 'assets/Java.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/fB.png',
      },
     
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [7, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Springer Capital',
    pos: 'Front-End Developer Intern',
    duration: 'May 2025 - Present',
    icon: '/assets/springer_capital.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ApexPlanet',
    pos: 'Web Developer Intern',
    duration: 'Apr 2025 - 2025',
    title: "Designed simple, intermediate and advanced web applications using html, css and JavaScript. Used JavaScript frameworks like reactjs and three.js to create advanced web site which is my own personal portfolio styled it using tailwind css.",
    icon: '/assets/apex.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Itechnothon Fest',
    pos: 'Events and Logistics Head',
    duration: 'Aug 2024 - Apr 2025',
    title: "Led a team of 4 OCs and 44 volunteers, coordinating with 4 other teams to execute the departmental fest, Organized multiple pre-events to generate buzz across the campus and planned the entire event flow.",
    icon: '/assets/Itech.jpeg',
    animation: 'salute',
  },
];