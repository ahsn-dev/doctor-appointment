import El from "@/library/El";

const Dropdown = () => {
  return El({
    element: "div",
    id: "dropdown",
    className: "absolute hidden bg-[#132c33] text-white w-60 -right-20 top-12",
    child: El({
      element: "ul",
      className: "p-1",
      child: [
        El({
          element: "li",
          className: "p-2 bg-[#126E82] rounded mb-1",
          child: El({
            element: "a",
            child: "دندانپزشک",
          }),
        }),
        El({
          element: "li",
          className: "p-2 bg-[#126E82] rounded mb-1",
          child: El({
            element: "a",
            child: "قلب و عروق",
          }),
        }),
        El({
          element: "li",
          className: "p-2 bg-[#126E82] rounded mb-1",
          child: El({
            element: "a",
            child: "مغز و اعصاب",
          }),
        }),
        El({
          element: "li",
          className: "p-2 bg-[#126E82] rounded mb-1",
          child: El({
            element: "a",
            child: "روانشناس",
          }),
        }),
        El({
          element: "li",
          className: "p-2 bg-[#126E82] rounded mb-1",
          child: El({
            element: "a",
            child: "پزشک عمومی",
          }),
        }),
        El({
          element: "li",
          className: "p-2 bg-[#126E82] rounded",
          child: El({
            element: "a",
            child: "چشم پزشکی",
          }),
        }),
      ],
    }),
  });
};

export default Dropdown;
