const projects = [
  {
    name: 'Portfolio',
    summary: 'The website you are currently viewing – it’s a single page web application designed and built from scratch, featuring fully responsive layouts and satisfying UI interactions.',
    description: 'This project is my personal website, which you are currently viewing! It’s a single page web application serving as my portfolio. I designed and built the website from scratch - it features fully responsive layouts and satisfying UI interaction animations.',
    hasPictures: false,
    thumbnail: 'logo.svg',
    thumbnailAlt: 'AVDN logo',
    pictures: [],
    details: 'I used a modern web development stack to significantly accelerate the development process over using just the “vanilla” languages JavaScript, HTML, and CSS. The core of the project was React, which was used extensively to compose the UI. The utility classes provided by Tailwind enabled rapid and responsive styling, with some use of the styled-jsx library for more programmatic handling of animations. Navigation between pages was handled by React Router, with no page reloads required. The project\'s dependencies were managed with npm and built with Vite for simple configuration and Hot Module Reloading for live development. During development the website was continuously delivered via GitHub Actions and deployed on Github Pages.',
    keyTechnologies: [
      {
        name: 'JavaScript',
        image: 'javascript.svg',
      },
      {
        name: 'HTML',
        image: 'html.svg',
      },
      {
        name: 'CSS',
        image: 'css.svg',
      },
      {
        name: 'React.js',
        image: 'react.svg',
      },
      {
        name: 'Tailwind CSS',
        image: 'tailwind.svg',
      },
    ],
    technologies: [
      {
        name: 'React.js',
        image: 'react.svg',
      },
      {
        name: 'p5.js',
        image: 'p5.svg',
      },
      {
        name: 'Tailwind CSS',
        image: 'tailwind.svg',
      },
      {
        name: 'React Router',
        image: 'react-router.svg',
      },
      {
        name: 'npm',
        image: 'npm.svg',
      },
      {
        name: 'Vite',
        image: 'vite.svg',
      },
      {
        name: 'Git',
        image: 'git.svg',
      },
      {
        name: 'GitHub',
        image: 'github.svg',
      },
      {
        name: 'Github Actions',
        image: 'github-actions.svg',
      },
      {
        name: 'WebStorm',
        image: 'webstorm.svg',
      },
      {
        name: 'Figma',
        image: 'figma.svg',
      },
      {
        name: 'JavaScript',
        image: 'javascript.svg',
      },
      {
        name: 'HTML',
        image: 'html.svg',
      },
      {
        name: 'CSS',
        image: 'css.svg',
      },
    ],
    path: '/portfolio',
    route: '/projects/portfolio',
    learnings: [
      {
        summary: 'Elevating the UI with animations',
        description: 'All my prior experience with web development involved static sites with no animations. This time I aimed to add animations for user feedback and visual flair. Using only CSS I was able to exert my creativity in building numerous animations: the text censoring effect on the homepage, the mobile menu button animation, the text underline hover effect, and the infinite sliding carousel for technologies and tools.',
      },
      {
        summary: 'Leveraging modern developer tools',
        description: 'By coding in the Webstorm IDE I was able to use Git/npm/Vite integrations, and features like cross-file refactoring and hot module reloading for maximum development velocity. Creating a CI/CD pipeline with Github Actions allowed an automated build and deployment to a live Github Pages site every time a change was pushed to remote.',
      },
      {
        summary: 'Cross-browser compatible styling',
        description: 'After testing and viewing the site from Safari instead of Microsoft Edge, I realised that the CSS I wrote was not consistently rendering across browsers. I then adjusted the CSS for cross-browser compatibility, which was challenging as there were multiple barely documented quirks in specific browsers\' CSS rendering.',
      },
      {
        summary: 'Using a design system with Figma',
        description: 'Creating an aesthetic website was just as important as creating a functional one since I wanted to showcase my skills in design as well as development. Rather than designing on the fly I used Figma to create a prototype of the website - following a design system made development significantly easier.',
      },
      {
        summary: 'Writing modern React',
        description: 'This was my first project using React as I had only used vanilla JavaScript prior. I gained a lot of practice writing functional components with hooks for state management and solved some very specific animation issues with the use of props and callbacks.',
      },
      {
        summary: 'Creating responsive layouts',
        description: 'Using Tailwind to build the responsive layouts was complicated by the changing states in React components. Fulling leaning into the utility-first approach of Tailwind allowed me to fine tune pixel perfect layouts for all screen sizes.',
      },
      {
        summary: 'Creative coding with WebGL2',
        description: 'While designing I opted for a background gradient effect like the one on Stripe’s website, but with novel mouse interactivity. I was able to achieve this effect with reasonable performance using an optimised 3D Perlin noise algorithm and WebGL2.',
      },
      {
        summary: 'Building a single page web application',
        description: 'Integrating React Router allowed me to create a seamless user experience in navigating the site. Nested routes were setup for hierarchical navigation of the site map.',
      },
    ],
    github: 'https://github.com/4nhus/portfolio',
  },
  {
    name: 'Eye Empathise',
    summary: 'A native iOS application that simulates visual impairments – through camera filters and guided exercises – to foster empathy for individuals with visual disabilities.',
    description: 'This project is a native iOS application designed to simulate visual impairments and foster empathy for individuals with visual disabilities. The application provides camera filters and guided exercises to help users understand the challenges faced by those with visual impairments. Submitted as my winning entry into the 2024 Swift Student Challenge, the idea for it came when I accidentally discovered one of my close friends was colourblind - he purchased bright pink shoes thinking that they were grey.',
    hasPictures: true,
    thumbnail: 'eye-empathise.svg',
    thumbnailAlt: 'Flat icon with hearts and sparkly eye within hands',
    pictures: [
      {
        src: 'eye-empathise-welcome.jpg',
        alt: 'Landing screen',
      },
      {
        src: 'eye-empathise-navigation.jpg',
        alt: 'Navigation menu',
      },
      {
        src: 'eye-empathise-tritanopia-disabled.jpg',
        alt: 'Visual impairment simulation - colour blindness filter disabled',
      },
      {
        src: 'eye-empathise-tritanopia-enabled.jpg',
        alt: 'Visual impairment simulation - colour blindness filter enabled',
      },
      {
        src: 'eye-empathise-colour-test.jpg',
        alt: 'Visual impairment challenge - colour blindness test',
      },
      {
        src: 'eye-empathise-acuity-test.jpg',
        alt: 'Visual impairment challenge - visual acuity test',
      },
      {
        src: 'eye-empathise-acuity-test-blurry.jpg',
        alt: 'Visual impairment challenge - visual acuity test progressive difficulty',
      },
      {
        src: 'eye-empathise-test-score.jpg',
        alt: 'Visual impairment challenge score',
      },
      {
        src: 'eye-empathise-ending.jpg',
        alt: 'Final call to action screen',
      },
    ],
    details: 'Eye Empathise was built entirely in Swift, utilizing SwiftUI for UI and state management. It leverages AVFoundation and CoreImage for real time imaging processing of a camera feed and pre-generated assets to simulate visual impairments. The specific CIFilters, CIColorMatrix and CIGaussianBlur were used to simulate multiple types of colour blindness, and overall low vision. These simulations are presented in the context of challenges like distinguishing colours or reading print. As accessibility was a core focus, Apple\'s Accessibility API was employed to optimise the application for use with the Apple screen reader, VoiceOver.',
    keyTechnologies: [
      {
        name: 'Swift',
        image: 'swift.svg',
      },
      {
        name: 'SwiftUI',
        image: 'swiftui.svg',
      },
    ],
    technologies: [
      {
        name: 'VoiceOver',
        image: 'voiceover.svg',
      },
      {
        name: 'Git',
        image: 'git.svg',
      },
      {
        name: 'GitHub',
        image: 'github.svg',
      },
      {
        name: 'Xcode',
        image: 'xcode.svg',
      },
      {
        name: 'Swift',
        image: 'swift.svg',
      },
      {
        name: 'SwiftUI',
        image: 'swiftui.svg',
      },
    ],
    path: '/eye-empathise',
    route: '/projects/eye-empathise',
    learnings: [
      {
        summary: 'Building applications for accessibility',
        description: 'Using the visual impairment filters I built I noticed that there could be significant issues when the UI is not designed with accessibility in mind, especially when a screen reader is used. By auditing my application for accessibility, I was able to incorporate Apples Accessibility API such that the VoiceOver screen reader could be used seamlessly.',
      },
      {
        summary: 'Using accurate domain knowledge',
        description: 'Simulating visual impairments accurately was challenging as there were multiple models for colour blindness simulation with varying degrees of accuracy. By researching the area to find the most accurate model by Machado, Oliveira, & Fernandes (2009), I was able to translate domain knowledge into an actionable and educational tool.',
      },
      {
        summary: 'Performant image processing with AVFoundation and CoreImage',
        description: 'Initially I was capturing and manipulating all the full photo frames provided by the camera, but this approach was not performant. Exploring the AVFoundation API in depth led me to using a preview stream capture instead, which I then optimised CoreImage around.',
      },
      {
        summary: 'Creating modular views and managing state with SwiftUI',
        description: 'All the application screens were composed using modular views and view modifiers, built with SwiftUI\'s declarative syntax. With state stored across the app I used the essential SwiftUI state-related property wrappers extensively.',
      },
      {
        summary: 'Performing processing on alternate threads',
        description: 'At first, I was processing the image pipeline with the main actor, but this was causing the UI to become unresponsive at times since the processing occurred during interactions. Pushing the processing onto an alternate actor fixed this performance issue.',
      },
    ],
    github: 'https://github.com/4nhus/eye-empathise',
  },
  {
    name: 'Account Service',
    summary: 'A backend for an account service that provides features like user management, payroll processing, and system security monitoring through a RESTful API.',
    description: 'This project is a backend for an account service, providing features such as user management, payroll processing, and system security monitoring. It was built using the Spring framework for Java, leveraging various Spring modules to streamline development and enhance functionality.',
    hasPictures: false,
    thumbnail: 'account-service.svg',
    thumbnailAlt: 'Flat icon with user and payroll within circle',
    pictures: [],
    details: 'Central to the project was Spring Boot - with its convention-over-configuration approach, setting up and configuring of the project was very straightforward. Spring Web was employed to create a RESTful API, allowing potential clients to interact with the service through HTTP requests. Spring Data JPA abstracted an ORM for data persistence on a relational H2 database. Data models for users, groups, payrolls, and security events were validated using Spring Validation, and encoded to, decoded from JSON with the Jackson library. Role based access control and user verification were configured using Spring Security, with an additional event logging system implemented to monitor system security and track user activities given the sensitive nature of payrolls. Project Lombok annotations minimised boilerplate code to increase development efficiency, while IntelliJ IDEA integrations with Gradle, and JUnit/Mockito simplified the building and testing process.',
    keyTechnologies: [
      {
        name: 'Java',
        image: 'java.svg',
      },
      {
        name: 'Spring',
        image: 'spring.svg',
      },
      {
        name: 'Spring Boot',
        image: 'spring-boot.svg',
      },
    ],
    technologies: [
      {
        name: 'Spring Boot',
        image: 'spring-boot.svg',
      },
      {
        name: 'Spring Data',
        image: 'spring-data.svg',
      },
      {
        name: 'Spring Security',
        image: 'spring-security.svg',
      },
      {
        name: 'Jackson',
        image: 'jackson.svg',
      },
      {
        name: 'Project Lombok',
        image: 'lombok.svg',
      },
      {
        name: 'IntelliJ IDEA',
        image: 'intellij-idea.svg',
      },
      {
        name: 'Gradle',
        image: 'gradle.svg',
      },
      {
        name: 'JUnit 5',
        image: 'junit.svg',
      },
      {
        name: 'Mockito',
        image: 'mockito.svg',
      },
      {
        name: 'Java',
        image: 'java.svg',
      },
      {
        name: 'Spring',
        image: 'spring.svg',
      },
      {
        name: 'Spring Framework',
        image: 'spring-framework.svg',
      },
    ],
    path: '/account-service',
    route: '/projects/account-service',
    learnings: [
      {
        summary: 'Implementing authentication and authorization',
        description: 'Ensuring secure access specific API endpoints was crucial for an account service. Spring Security was leveraged to implement robust authentication and authorization mechanisms. Alongside implementing security best practices, I also learnt security concepts, such as JWT, OAuth2, and SSL.',
      },
      {
        summary: 'Integrating with a relational database',
        description: 'The service required integration with a relational database for data persistence and retrieval. Spring Data JPA simplified this process by providing abstractions for common database operations, significantly reducing boilerplate code. I look forward to using the interface for working with non-relational databases.',
      },
      {
        summary: 'Testing with JUnit and Mockito',
        description: 'JUnit and Mockito were employed to write unit, integration, and tests. This involved testing business logic, mocking dependencies, and ensuring the service was reliable upon restarts. Having a robust test suite was very beneficial when adding new functionality and refactoring.',
      },
      {
        summary: 'Reducing boilerplate code with Project Lombok',
        description: 'Adopting Project Lombok for reducing boilerplate code initially posed challenges when trying to integrate the annotations with Spring Data annotations, but ironing out the quirks led to cleaner, more maintainable code.',
      },
      {
        summary: 'Diving into the Spring ecosystem',
        description: 'During the project I used the full stack of Spring modules, such as Spring Boot for project setup and configuration, Spring Web for building a RESTful API, Spring Data for database integration, and Spring Security for authentication and authorization.',
      },
      {
        summary: 'Creating RESTful APIs',
        description: 'Using Spring Web to create an API that followed the principles of REST consolidated my understanding of client-server interaction. The implementation and testing of the RESTful API highlighting the importance of contract testing and endpoint documentation.',
      },
      {
        summary: 'Managing dependencies and building with IntelliJ IDEA and Gradle',
        description: 'Using multiple Spring modules and other libraries was streamlined with Gradle. Being able to configure the project fully within the IntelliJ IDEA also facilitated efficient development.',
      },
      {
        summary: 'Client-server data handling',
        description: 'Building a robust API required sanitising potentially unreliable client requests – Spring Validation and Jackson were used to ensure data model integrity, enabling secure data handling.',
      },
    ],
    github: 'https://github.com/4nhus/account-service',
  },
  {
    name: 'Journey Genie',
    summary: 'A full stack application with a native iOS client that leverages real-time weather data and location services to generate travel itineraries.',
    description: '',
    hasPictures: true,
    thumbnail: 'journey-genie.svg',
    thumbnailAlt: 'Flat icon with plane about genie lamp',
    pictures: [
      {
        src: 'journey-genie-welcome.jpg',
        alt: 'Introduction and instruction',
      },
      {
        src: 'journey-genie-3d-map.jpg',
        alt: '3D map view',
      },
      {
        src: 'journey-genie-2d-map.jpg',
        alt: '2D map view',
      },
      {
        src: 'journey-genie-itinerary-create.jpg',
        alt: 'Generated itinerary',
      },
      {
        src: 'journey-genie-itineraries.jpg',
        alt: 'Previously generated itineraries',
      },
      {
        src: 'journey-genie-itinerary-view.jpg',
        alt: 'Viewing previously generated itinerary',
      },
      {
        src: 'journey-genie-itinerary-delete.jpg',
        alt: 'Deleting previously generated itinerary',
      },
      {
        src: 'journey-genie-itineraries-empty.jpg',
        alt: 'No previously generated itineraries',
      },
    ],
    details: 'Journey Genie features a Flask backend that fetches real-time weather data with the Visual Crossing Weather APl, feeding the data into the itinerary generation process. It then integrates with the OpenAI API to leverage natural language processing capabilities for generating itineraries. Requests for this dynamic travel itinerary generation are sent from the frontend iOS application. Responses containing the generated itineraries – sanitised for simpler handling – are then displayed in an intuitive UI built with Swift and SwiftUI. MapKit was used enable location services and map integration when generating itineraries – these itineraries also persist with on device storage via FileManager.',
    keyTechnologies: [
      {
        name: 'Swift',
        image: 'swift.svg',
      },
      {
        name: 'Python',
        image: 'python.svg',
      },
      {
        name: 'SwiftUI',
        image: 'swiftui.svg',
      },
      {
        name: 'UIKit',
        image: 'uikit.svg',
      },
      {
        name: 'Flask',
        image: 'flask.svg',
      },
    ],
    technologies: [
      {
        name: 'OpenAI API',
        image: 'openai.svg',
      },
      {
        name: 'Git',
        image: 'git.svg',
      },
      {
        name: 'GitHub',
        image: 'github.svg',
      },
      {
        name: 'Xcode',
        image: 'xcode.svg',
      },
      {
        name: 'PyCharm',
        image: 'pycharm.svg',
      },
      {
        name: 'Swift',
        image: 'swift.svg',
      },
      {
        name: 'Python',
        image: 'python.svg',
      },
      {
        name: 'SwiftUI',
        image: 'swiftui.svg',
      },
      {
        name: 'UIKit',
        image: 'uikit.svg',
      },
      {
        name: 'Flask',
        image: 'flask.svg',
      },
    ],
    path: '/journey-genie',
    route: '/projects/journey-genie',
    learnings: [
      {
        summary: 'Managing a team to deliver a project in under 48 hours',
        description: 'As a team of 4 against teams of 6, we were limited in our project scope. Team frontend experience was also limited as I was the only one with mobile development experience. Effective communication, coordination, and delegation were hence crucial to completing the project within the timeframe. To develop features simultaneously we utilised Git and Github, and performed asynchronous reviews as team member availabilities were erratic.',
      },
      {
        summary: 'Incorporating UIKit into SwiftUI ',
        description: 'Though I tried to build the app fully using SwiftUI at first, I realised that the Map view in SwiftUI did not have the required API surface area for what I wanted to build. UIKit offered rich functionality in this area however, so I learnt to integrate the UIKit functionality of MapKit into SwiftUI with UIViewRepresentable and UIViewControllerRepresentable.',
      },
      {
        summary: 'Interfacing with external APIs',
        description: 'To build the core functionality of our service we needed to interface with multiple external APIs, which required effective handling of asynchronous operations and data parsing. Working with the external APIs also meant being reading documentation to interpret the error responses, particularly ones we received from using depleted OpenAI API keys.',
      },
      {
        summary: 'Building a minimum viable product',
        description: 'Given the time restraint of the hackathon, I had to prioritise certain features in the mobile application to ensure an MVP worth pitching. Focusing on user centric design allowed me to scope the UI to what the MVP required, which helped with time management and achieving a smooth UX.',
      },
    ],
    github: 'https://github.com/4nhus/journey-genie',
  },
]

export default projects

