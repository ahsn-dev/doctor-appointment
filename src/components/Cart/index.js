import El from "@/library/El";
import { getRequest } from "@/library/renderCart";
import Modal from "../Modal";

const Cart = (obj) => {
  return El({
    element: "div",
    className:
      "flex flex-col items-center justify-around w-54 min-w-[224px] h-60 rounded shadow bg-gray-200 ",
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
          id: obj.id,
          element: "button",
          child: "رزرو پزشک",
          onclick: getDataModal,
        }),
      }),
    ],
  });
};

function getDataModal(e) {
  const Id = e.target.id;
  getRequest(`http://localhost:3000/doctors/${Id}`).then((res) =>
    document.body.append(Modal(res))
  );
}

export default Cart;
