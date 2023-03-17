import El from "@/library/El";
import Header from "./layout/Header";
import Main from "./layout/Main";

const App = () => {
  const app = El({
    element: "div",
    className: "relative",
    child: [Header(), Main()],
  });

  return app;
};

export default App;
