async function PutData(URL, obj) {
  await fetch(URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
}

export default PutData;
