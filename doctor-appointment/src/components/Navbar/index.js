import El from "@/library/El";
import Dropdown from "../Dropdown";
import { debounce } from "lodash";
import getData from "@/library/getData";
import { renderCart } from "@/library/renderCart";

const Navbar = () => {
  return El({
    element: "nav",
    className: "flex justify-between items-center py-2 px-4",
    child: [
      El({
        element: "img",
        className: "w-16 h-16",
        src: "./src/assets/images/logo.png",
      }),
      El({
        element: "button",
        href: "",
        child: ["تخصص‌ها", Dropdown()],
        className: "relative h-20 [&>*]:hover:block",
      }),
      El({
        element: "a",
        href: "",
        child: "سوالات متدوال",
      }),
      El({
        element: "input",
        onkeyup: debounce((e) => {
          document.getElementById("main").innerHTML = "";
          getData(`http://localhost:3000/doctors?q=${e.target.value}`).then(
            (data) => renderCart(data)
          );
        }, 700),
        type: "text",
        className: "border-0 rounded-full pr-4 outline-none bg-[#126E82]",
        placeholder: "جستجو...",
      }),
    ],
  });
};

export default Navbar;
