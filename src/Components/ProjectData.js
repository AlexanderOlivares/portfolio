import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import virtualbookshelf from "../images/vb.png";
import widgetgrid from "../images/wg.png";
import timer from "../images/timer.png";
import sidebar from "../images/sidebar.png";

let projectData = [
  {
    icon: <FaNodeJs />,
    language: "Node",
    name: "Sidebar List",
    subHeader:
      "PostgreSQL | Express | React | Node.js | JWT | REST api | Bootsrap | EmailJS",
    img: sidebar,
    repoUrl: "https://github.com/AlexanderOlivares/sidebar-list",
    demo: "https://sidebar-list.herokuapp.com/",
    shortDescrip:
      "Login with demo credentials username: janedoe@yahoo.com | password: password1234",
    longDescrip: `Create your own private list or invite a friend to a "sidebar list". Just as judges and lawyers have a sidebar for private conversations, you and your invited editor will have a private list. Only you and your editor will be authorized to create, edit and delete items from your shared-list. I made this project so that my girlfriend and I could add items to our grocery list independently. This app also works great for a list of "things to pack" for a vacation.`,
  },
  {
    icon: <FaReact />,
    language: "React",
    name: "Virtual Bookshelf",
    subHeader: "React | Firebase | Styled Components",
    img: virtualbookshelf,
    repoUrl: "https://github.com/AlexanderOlivares/Virtual-Bookshelf",
    demo: "https://alexanderolivares.github.io/Virtual-Bookshelf/",
    shortDescrip:
      "Login with demo credentials username: janedoe@yahoo.com | password: password1234",
    longDescrip:
      "Virtual bookshelf is place where you can visualize your collection of audiobooks or e-books on a single shelf. The book search is powered by the Google Books API. NYT Besteller List API shows you the most popular books on the homepage. EmailJS API allows you to email your shelf to friends. Login with username/password or sign-in with Google.",
  },
  {
    icon: <FaJsSquare />,
    language: "JavaScript",
    name: "Widget Grid",
    subHeader: "Vanilla JavaScript | CSS",
    img: widgetgrid,
    repoUrl: "https://github.com/AlexanderOlivares/Widget-Grid",
    demo: "https://alexanderolivares.github.io/Widget-Grid/",
    shortDescrip: "Four-in-one widget app built with CSS grid",
    longDescrip:
      "It's a weather app, notepad, calculator and an alarm clock/timer/pomodoro timer all wrapped into one project. I made this app as a helper for doing coding challenges. I set up the widget grid on my secondary monitor then I get on Codewars, set the timer and code away. The calculator comes in handy on math related challenges and the notepad is nice for jotting down things to lookup later. The weather app uses the OpenWeatherMap API and works for all U.S. cities",
  },
  {
    icon: <FaJsSquare />,
    language: "JavaScript",
    name: "TV Countdown Timer",
    subHeader: "Vanilla JavaScript | Bootstrap",
    img: timer,
    repoUrl: "https://github.com/AlexanderOlivares/tvTimer",
    demo: "https://alexanderolivares.github.io/tvTimer/",
    shortDescrip:
      "A voiced countdown timer for TV news producers and directors that utilizes the ResponsiveVoice Text To Speech API",
    longDescrip:
      "A solution to a broken timer. Working in TV the seconds count. When our control room timer broke I put this app together to help us countdown our anchors and reporters. I built in functionality that allows you to accurately countdown field reporters who hear everything on a 2-7 second delay. This app is used daily at CBS Austin to time shows and recordings.",
  },
];

export default projectData;
