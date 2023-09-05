export const project1: project = {
  id: 1,
  thumbnail: "/thumbnails/expedia-thumbnail.svg",
  types: "Web Application",
  images: [
    "/project-screen-shots/expedia-1.svg",
    "/project-screen-shots/expedia-2.svg",
    "/project-screen-shots/expedia-3.svg",
    "/project-screen-shots/expedia-4.svg",
    "/project-screen-shots/expedia-5.svg",
    "/project-screen-shots/expedia-6.svg",
  ],
  jingle: "All licence requests in one place",
  title: "L&M Portal - Expedia",
  color: "#8E00CB",
  embellishment: "./accents/semi-circle.svg",

  short_description:
    "Intern project to build web application built for the Licence & Maintenance team to reduce friction in the customer experience of software licence requests and have everything in one place.",
  description:
    "Developed an internal web app for the Licence & Maintenance team to streamline software license requests. I took on roles as a project manager, UI/UX designer, and developer, overseeing the project from start to finish. The team managed complex workflows, often spanning up to a year, while data scattered across systems hindered user-friendliness. My task was to create a unified platform, granting customers insights into request status and lifecycle. With a constant focus on maintainability and reusability, I designed and built the app to meet these needs.",
  tags: [
    "React",
    "Nextjs",
    "TypeScript",
    "NodeJs",
    "Figma",
    "MSSQL",
    "Html/Css",
  ],
  lessons_learned: [
    "I learned how to use the agile methodology for customer focused development",
    "I learned how to use TypeScript to reduce errors and improve code readability and reuse",
    "How to develope an app that meets security standards for company data",
    "Gained valuable experience in project ownership and end to end development",
  ],
  highlights: [
    "Able to dynamically handle over 30 different workflows",
    "Acted as the PM for the project and gained experience with customer focuesd development and UI/UX",
  ],

  challenges: [
    "Dealt with ambiguity of no standardized tech stack",
    "Acting as the PM and planning out the project with an agile approach to ensure that the product actually solve the customers problems",
    "Connecting and communicating with enterprise system data",
  ],
  mobile: false,
  link: "",
  repo: "",
};
export const project2: project = {
  id: 2,
  thumbnail: "/thumbnails/analyze-thumbnail.svg",
  types: "Web Application",
  images: [
    "/project-screen-shots/analyze-1.svg",
    "/project-screen-shots/analyze-2.svg",
    "/project-screen-shots/analyze-3.svg",
    "/project-screen-shots/analyze-4.svg",
  ],
  title: "Analyze it!",
  color: "#8E00CB",
  jingle: "Collection of metallography tools",

  embellishment: "./accents/semi-circle.svg",

  short_description:
    "Web App that is used to calculate the cross-section volume of tube shaped specimens for metallographic analysis. I added a landing page for fun as if it was a collection of metallography tools, but all buttons lead to the same app.",
  description:
    "As a materials science research assistant, I conducted metallographic analysis which sometimes involved manually measuring the volume of tube cross-sections using the shell method. I decided to create this app to automate the process reducing a task that would take several hours to only 5 minutes. The first iteration was ugly and infested with bugs, but it worked. I decided to rebuild it to improve both efficiency and the user experience. I also added a landing page for fun, but you’ll find all links lead to the same page which is the Volume Calculator.",
  tags: ["React", "Nextjs", "JavaScript", "Nodejs", "Html/Css"],
  lessons_learned: [
    "How to use the canvas element for user interaction and graphics",
    "How to make designs complex enough for professionals, and inuitive enough for beginners",
  ],
  highlights: [
    "Reduced a 5+ hour task to 30 seconds in metallographic analysis ",
    "Utilizes the shell method to accurately calculate the volume",
    "Can also be used as an irregular area calculator",
  ],
  challenges: [
    "Working with the canvas element and handling complex interactions",
    "Developing an accurate methodology to calculate the volume from a selected area",
  ],
  mobile: false,
  link: "https://tube-volume-calculator.vercel.app/",
  repo: "https://github.com/dannyboi1313/tube-volume-calculator",
};
export const project3: project = {
  id: 3,
  thumbnail: "./thumbnails/tweeter-thumbnail.svg",
  types: "Android Application",
  images: [
    "/project-screen-shots/tweeter-1.svg",
    "/project-screen-shots/tweeter-2.svg",
    "/project-screen-shots/tweeter-3.svg",
    "/project-screen-shots/tweeter-4.svg",
    "/project-screen-shots/tweeter-5.svg",
    "/project-screen-shots/tweeter-6.svg",
  ],
  title: "Tweeter",
  jingle: "A Twitter Clone",

  color: "#8E00CB",
  embellishment: "./accents/semi-circle.svg",

  short_description:
    "Twitter clone utilizing AWS with a focus on employing effective architecture and adhering to Java design patterns",
  description:
    "A semester-long class project to write and refactor code for a simple Twitter clone android app. The app was built with various AWS features and had a focus on employing effective architecture and adhering to Java design patterns. The app was built to have high scalability and handle large requests with minimal percieved latency.",
  tags: ["Java", "Android", "Lambda", "SQS", "DynamoDB"],
  lessons_learned: [
    "How to refactor code to improve maintainability, readability and code reuse",
    "How to implement Java design patterns to improve code",
  ],
  challenges: [
    "Refactoring large amounts of code",
    "Designing a scalable system",
  ],
  mobile: true,
  highlights: [
    "Capabable of handling a tweet with 10,000 users in <1 minute with a percieved latency of <1 second",
  ],
  link: "",
  repo: "",
};
export const project4: project = {
  id: 4,
  thumbnail: "./thumbnails/simulation-thumbnail.svg",
  types: "Desktop Application",
  images: ["/project-screen-shots/autoclave-1.svg"],
  title: "Autoclave Simulation",
  color: "#8E00CB",
  jingle: "Visualize the refinement process",

  embellishment: "./accents/semi-circle.svg",

  short_description:
    "Application that dynamically visualizes chemical and physical reactions in a autoclave used in common refinement processes",
  description:
    "Capstone project where I led a team of students to build an application to simulate the chemical and physical reactions in a autoclave as part of a refinement process. The app was to be used as both an internal tool to better understand the process and a sales tool for the companies valves. Thermal and Chemical models were built in simulink using PID control loops and integrated into the application.",
  tags: ["C#", "WPF", "Simulink", "XML"],
  lessons_learned: [
    "Product management on a team level",
    "Working with a client to ensure the product meets their requirements",
    "How to optimize application graphics and complex calculations",
  ],
  challenges: [
    "Interfacing matlab with an application",
    "Optimizing algorithms for matrix math and manipulation",
  ],
  mobile: false,
  highlights: [
    "Gained valuable experience as team lead",
    "Able to preform 3 different types of simulation",
  ],
  link: "",
  repo: "",
};
export const project5: project = {
  id: 5,
  thumbnail: "./thumbnails/listly-thumbnail.svg",

  types: "Web Application",
  images: [
    "/project-screen-shots/listly-1.svg",
    "/project-screen-shots/listly-2.svg",
    "/project-screen-shots/listly-3.svg",
    "/project-screen-shots/listly-4.svg",
    "/project-screen-shots/listly-5.svg",
    "/project-screen-shots/listly-6.svg",
    "/project-screen-shots/listly-7.svg",
  ],
  title: "Listly",
  color: "#8E00CB",
  jingle: "Make your shopping list smarter",

  embellishment: "./accents/semi-circle.svg",

  short_description:
    "Application where you can upload your favorite recipes, create meal plans, and easily generate shopping lists with a simple click.",
  description:
    "This app was built as a project for my web development class. It was built to solve multiple problems I have each week when trying to plan my meals. First, I can never remember what recipes I have made before and if I like them. Second, I hate having to make my grocery list. Third, I like to plan meals that have similar ingredients so that I can save money and not waste ingredients. This app solves all three of these problems and makes planning your week so much easier. ",
  tags: ["Vue", "JavaScript", "NodeJs", "Express", "MongoDB", "Html/Css"],
  lessons_learned: ["Efficient full-stack development", "Database design"],
  challenges: ["First time working with a web framework"],
  mobile: false,
  highlights: [
    "Won award for best project in a class of 250 students",
    "Designed and implemented REST Api",
  ],
  link: "https://listly.do.danielblanchard.click/",
  repo: "https://github.com/dannyboi1313/listly",
};
