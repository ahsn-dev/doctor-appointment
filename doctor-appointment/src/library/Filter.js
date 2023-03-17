async function Filter(text) {
  const respose = await fetch(
    `http://localhost:3000/doctors?expertise=${text}`
  );
  const data = await respose.json();
  return data;
}

export default Filter;
