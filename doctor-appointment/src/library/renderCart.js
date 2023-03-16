import Cart from "@/components/Cart";

export const renderCart = (data) => {
  const main = document.getElementById("main");
  const dataMap = data.map((item) => {
    return Cart(item);
  });
  main.append(...dataMap);
};

export const getRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
