import El from "@/library/El";
import PostData from "@/library/PostData";
import PutData from "@/library/PutData";
// import { getRequest } from "@/library/renderCart";
import getData from "./../../library/getData";

const appointmentModal = (id, day) => {
  return El({
    element: "form",
    onsubmit: (e) => {
      e.preventDefault();
      const [firstName, lastName, phoneNumber] = e.target.elements;
      getData(`http://localhost:3000/doctors/${id}`).then((data) => {
        // console.log(data);
        data.week[day] = false;
        PutData(`http://localhost:3000/doctors/${id}`, data);
        const tempObj = {
          id: crypto.randomUUID(),
          firstName: firstName.value,
          lastName: lastName.value,
          phoneNumber: phoneNumber.value,
          doctor: data.name,
        };
        PostData("http://localhost:3000/appoinments", tempObj);
      });
      document.getElementById("Modal").remove();
    },
    className:
      "bg-[#bad7e9] text-black rounded-xl px-5 flex flex-col items-center gap-3 pb-3 mx-3",
    child: [
      El({
        element: "div",
        className: "flex gap-4 self-start",
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
        className: "flex gap-3",
        child: [
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
                className: "rounded bg-[#126E82] mt-2",
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
                className: "rounded bg-[#126E82] mt-2",
                type: "text",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col self-start",
        child: [
          El({
            element: "label",
            className: "pb-2",
            child: "شماره همراه بیمار:",
          }),
          El({
            element: "input",
            className: "rounded bg-[#126E82] w-72",
            type: "tel",
          }),
        ],
      }),
      El({
        element: "button",
        className: "rounded px-16 py-1 text-white bg-[#126e82]",
        child: "ثبت رزرو",
      }),
    ],
  });
};

export default appointmentModal;
