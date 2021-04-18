import { FaJsSquare, FaReact } from "react-icons/fa";
import virtualbookshelf from "../images/vb.png";
import widgetgrid from "../images/wg.png";

let projectData = [
  {
    icon: <FaReact />,
    language: "React",
    name: "Virtual Bookshelf",
    subHeader: "React | Firebase | Styled Components",
    // img: "https://picsum.photos/200/300",
    img: virtualbookshelf,
    repoUrl: "https://github.com/AlexanderOlivares/Virtual-Bookshelf",
    demo: "https://alexanderolivares.github.io/Virtual-Bookshelf/",
    shortDescrip:
      "Take peek inside! Login with demo credentials username: Jane Doe | password: password1234",
    longDescrip:
      "A place for audiobook lovers to display their collection. blah blah blah blah",
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
      "A place for audiobook lovers to display their collection. blah blah blah blah",
  },
  {
    icon: <FaReact />,
    language: "React",
    name: "Todo List",
    subHeader: "React | Styled Components",
    img: "https://picsum.photos/200/300",
    repoUrl: "https://github.com/AlexanderOlivares/react-todolist",
    demo: "https://alexanderolivares.github.io/react-todolist/",
    shortDescrip: "A simple todo list app. Toggle to night theme!",
    longDescrip:
      "A place for audiobook lovers to display their collection. blah blah blah blah",
  },
  {
    icon: <FaJsSquare />,
    language: "JavaScript",
    name: "TV Countdown Timer",
    subHeader: "Vanilla JavaScript | CSS",
    img: "https://picsum.photos/200/300",
    repoUrl: "",
    demo: "https://alexcountdowntimer.epizy.com/",
    shortDescrip: "A voiced countdown timer for TV recordings",
    longDescrip: "A voiced countdown timer for TV recordings",
  },
];

export default projectData;
