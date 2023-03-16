import El from "@/library/El";

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
        element: "a",
        href: "",
        child: "تخصص‌ها",
      }),
      El({
        element: "a",
        href: "",
        child: "سوالات متدوال",
      }),
      El({
        element: "input",
        type: "text",
        className: "border-0 rounded-full pr-4 outline-none",
        placeholder: "جستجو...",
      }),
    ],
  });
};

export default Navbar;
