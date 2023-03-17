import El from "@/library/El";
import appointmentModal from "@/components/AppointmentModal/index";

const Modal = (obj) => {
  return El({
    element: "div",
    id: "Modal",
    onclick: closeModal,
    className:
      "w-full h-screen backdrop-blur absolute top-0 flex justify-center items-center",
    child: [
      El({
        element: "div",
        className:
          "bg-[#132C33] text-white w-[500px] h-[300px] flex flex-col rounded-lg absolute text-lg",
        child: [
          El({
            element: "div",
            className: "flex items-center gap-4 p-3",
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
                className: "felx flex-col ml-auto",
                child: [
                  El({
                    element: "div",
                    className: "flex gap-2 mb-2",
                    child: [
                      El({
                        element: "p",
                        child: "نام:",
                      }),
                      El({
                        element: "p",
                        child: obj.name,
                      }),
                    ],
                  }),
                  El({
                    element: "div",
                    className: "flex gap-2",
                    child: [
                      El({
                        element: "p",
                        child: "تخصص:",
                      }),
                      El({
                        element: "p",
                        child: obj.expertise,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",

            id: obj.id,
            className: "flex flex-wrap gap-2 justify-center items-center mt-16",
            child: [...showDay(obj)],
          }),
        ],
      }),
    ],
  });
};

function showDay(obj) {
  console.log(obj);
  const weekDaysElemArr = [];
  for (const key in obj.week) {
    if (obj.week[key]) {
      weekDaysElemArr.push(
        El({
          element: "button",
          className: "bg-[#126E82] text-white py-1 px-3 rounded-full",
          child: key,
          onclick: (event) => {
            event.target
              .closest("div")
              .append(
                appointmentModal(
                  event.target.closest("div").id,
                  event.target.innerText
                )
              );
          },
        })
      );
    } else {
      weekDaysElemArr.push(
        El({
          element: "button",
          className: "bg-gray-300 text-white py-1 px-3 rounded-full",
          child: key,
          disabled: true,
        })
      );
    }
  }
  return weekDaysElemArr;
}

function closeModal(e) {
  if (e.target.id === "Modal") {
    e.target.remove();
  }
}

export default Modal;
