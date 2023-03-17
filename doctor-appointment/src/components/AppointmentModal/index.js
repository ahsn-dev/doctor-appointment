import El from "@/library/El";
// import { getRequest } from "@/library/renderCart";

const appointmentModal = (id, day) => {
  return El({
    element: "form",
    className: "bg-[#132C33] text-white rounded",
    child: [
      El({
        element: "div",
        className: "flex gap-4",
        child: [
          El({
            element: "p",
            child: "روز:",
          }),
          El({
            element: "p",
            child: day,
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex",
        chid: [
          El({
            element: "div",
            child: [
              El({
                element: "label",
                className: "pb-2",
                child: "نام بیمار:",
              }),
              El({
                element: "input",
                className: "rounded bg-[#126E82]",
                type: "text",
              }),
            ],
          }),
          El({
            element: "div",
            child: [
              El({
                element: "label",
                className: "pb-2",
                child: "نام خانوادگی بیمار:",
              }),
              El({
                element: "input",
                className: "rounded bg-[#126E82]",
                type: "text",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        child: [
          El({
            element: "label",
            className: "pb-2",
            child: "شماره همراه بیمار:",
          }),
          El({
            element: "input",
            className: "rounded bg-[#126E82]",
            type: "tel",
          }),
        ],
      }),
      El({
        element: "button",
        className: "rounded px-3 py-1 text-white",
        child: "ثبت رزرو",
      }),
    ],
  });
};

export default appointmentModal;
