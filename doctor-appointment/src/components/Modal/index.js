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
          "bg-[#132C33] text-white w-[600px] h-[380px] flex flex-col rounded-lg absolute text-lg",
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
            id: "btnContainer",
            className: "flex flex-wrap gap-2 justify-center items-center",
            child: [
              El({
                element: "div",
                id: obj.id,
                className:
                  "flex gap-x-4 gap-y-8 flex-wrap justify-center items-center mt-10",
                child: [...showDay(obj)],
              }),
            ],
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
          className: "bg-[#126E82] text-white py-2 px-8 rounded-xl",
          child: key,
          onclick: (event) => {
            event.target.closest("div").classList.add("hidden");
            console.log(
              document
                .getElementById("btnContainer")
                .append(
                  appointmentModal(
                    event.target.closest("div").id,
                    event.target.innerText
                  )
                )
            );
          },
        })
      );
    } else {
      weekDaysElemArr.push(
        El({
          element: "button",
          className: "bg-gray-300 text-gray-600 py-2 px-8 rounded-xl",
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
