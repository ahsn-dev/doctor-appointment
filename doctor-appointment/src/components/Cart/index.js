import El from "@/library/El";

const Cart = (obj) => {
  return El({
    element: "div",
    id: obj.id,
    className:
      "flex flex-col items-center justify-around w-56 h-60 rounded shadow bg-gray-200 ",
    child: [
      El({
        element: "div",
        child: El({
          element: "img",
          src: "./src/assets/images/icon.png",
        }),
      }),
      El({
        element: "div",
        className: "w-full flex justify-evenly",
        child: [
          El({
            element: "p",
            child: "نام: ",
          }),
          El({
            element: "p",
            id: "doctorFullname",
            child: obj.name,
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full flex justify-evenly",
        child: [
          El({
            element: "p",
            child: "تخصص: ",
          }),
          El({
            element: "p",
            id: "doctorExpertise",
            child: obj.expertise,
          }),
        ],
      }),
      El({
        element: "div",
        className: "rounded-full bg-gray-400 px-2 py-1 text-white ",
        child: El({
          element: "button",
          child: "رزرو پزشک",
        }),
      }),
    ],
  });
};

export default Cart;
