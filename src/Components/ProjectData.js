import { FaJsSquare, FaReact } from "react-icons/fa";
import virtualbookshelf from "../images/vb.png";
import widgetgrid from "../images/wg.png";
import todolist from "../images/todolist.png";
import tvtimer from "../images/tvtimer.png";

let projectData = [
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
      "Virtual bookshelf is place where you can visualize your collection of audiobooks or e-books on a single shelf. The book search is powered by the Google Books API. NYT Besteller List API shows you the most popular books on the homepage. EmailJS API allows you to email your shelf to friends. Login with with username/password or signin with Google.",
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
    icon: <FaReact />,
    language: "React",
    name: "Todo List",
    subHeader: "React | Styled Components",
    img: todolist,
    repoUrl: "https://github.com/AlexanderOlivares/react-todolist",
    demo: "https://alexanderolivares.github.io/react-todolist/",
    shortDescrip: "My version of a React todo list.",
    longDescrip:
      "If the eye doctor is on your todo list then toggle to dark mode for a view thats easier on the eyes. Todos are stored in local storage.",
  },
  {
    icon: <FaJsSquare />,
    language: "JavaScript",
    name: "TV Countdown Timer",
    subHeader: "Vanilla JavaScript | CSS",
    img: tvtimer,
    repoUrl: "https://github.com/AlexanderOlivares/tvTimer",
    demo: "https://alexanderolivares.github.io/tvTimer/",
    shortDescrip:
      "A voiced countdown timer for TV news producers and directors that utilizes the ResponsiveVoice Text To Speech API",
    longDescrip:
      "A solution to a broken timer. Working in TV the seconds count. When our control room timer broke I put this app together to help us countdown our anchors and reporters. I built in functionality that allows you to accurately countdown field reporters who are hearing everything on a 2-7 delay. This app is used daily at CBS Austin to time shows and recordings.",
  },
];

export default projectData;
