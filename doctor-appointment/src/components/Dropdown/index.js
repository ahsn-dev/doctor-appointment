import El from "@/library/El";
import Filter from "@/library/Filter";
import { renderCart } from "@/library/renderCart";

const Dropdown = () => {
  return El({
    element: "div",
    id: "dropdown",
    className:
      "absolute hidden bg-[#132c33] text-white w-60 -right-20 top-20 transition-all",
    child: El({
      element: "ul",
      className: "p-1",
      child: [
        El({
          element: "li",
          onclick: (e) => {
            if (e.target.tagName === "A") {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.innerText).then((data) => renderCart(data));
            } else {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.childNodes[0].innerText).then((data) =>
                renderCart(data)
              );
            }
          },
          className: "p-2 bg-[#126E82] rounded hover:bg-[#51C4D3] mb-1",
          child: El({
            element: "a",
            child: "دندانپزشک",
          }),
        }),
        El({
          element: "li",
          onclick: (e) => {
            if (e.target.tagName === "A") {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.innerText).then((data) => renderCart(data));
            } else {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.childNodes[0].innerText).then((data) =>
                renderCart(data)
              );
            }
          },
          className: "p-2 bg-[#126E82] rounded hover:bg-[#51C4D3] mb-1",
          child: El({
            element: "a",
            child: "قلب و عروق",
          }),
        }),
        El({
          element: "li",
          onclick: (e) => {
            if (e.target.tagName === "A") {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.innerText).then((data) => renderCart(data));
            } else {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.childNodes[0].innerText).then((data) =>
                renderCart(data)
              );
            }
          },
          className: "p-2 bg-[#126E82] rounded hover:bg-[#51C4D3] mb-1",
          child: El({
            element: "a",
            child: "مغز و اعصاب",
          }),
        }),
        El({
          element: "li",
          onclick: (e) => {
            if (e.target.tagName === "A") {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.innerText).then((data) => renderCart(data));
            } else {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.childNodes[0].innerText).then((data) =>
                renderCart(data)
              );
            }
          },
          className: "p-2 bg-[#126E82] rounded hover:bg-[#51C4D3] mb-1",
          child: El({
            element: "a",
            child: "روانشناس",
          }),
        }),
        El({
          element: "li",
          onclick: (e) => {
            if (e.target.tagName === "A") {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.innerText).then((data) => renderCart(data));
            } else {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.childNodes[0].innerText).then((data) =>
                renderCart(data)
              );
            }
          },
          className: "p-2 bg-[#126E82] rounded hover:bg-[#51C4D3] mb-1",
          child: El({
            element: "a",
            child: "متخصص زیبایی",
          }),
        }),
        El({
          element: "li",
          onclick: (e) => {
            if (e.target.tagName === "A") {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.innerText).then((data) => renderCart(data));
            } else {
              document.getElementById("main").innerHTML = "";
              Filter(e.target.childNodes[0].innerText).then((data) =>
                renderCart(data)
              );
            }
          },
          className: "p-2 bg-[#126E82] rounded hover:bg-[#51C4D3]",
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
