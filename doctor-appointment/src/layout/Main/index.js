import El from "@/library/El";
import { getRequest, renderCart } from "@/library/renderCart";

const Main = () => {
  return El({
    element: "div",
    className: "flex justify-center items-center gap-16 px-40 py-16",
    id: "main",
  });
};

getRequest("http://localhost:3000/doctors").then((response) => {
  renderCart(response);
});

export default Main;
