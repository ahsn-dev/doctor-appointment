import Navbar from "@/components/Navbar";
import El from "@/library/El";

const Header = () => {
  return El({
    element: "header",
    className: "bg-gray-200",
    child: [Navbar()],
  });
};

export default Header;
