import Navbar from "@/components/Navbar";
import El from "@/library/El";

const Header = () => {
  return El({
    element: "header",
    className: "bg-[#132c33] text-white",
    child: [Navbar()],
  });
};

export default Header;
