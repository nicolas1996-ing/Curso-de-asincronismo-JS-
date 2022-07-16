import axios from "axios";
const API = "https://api.escuelajs.co/api/v1/";

// generators
async function* gen() {
  const { data: products } = await axios.get(`${API}products`);
  const { data: details } = await axios.get(`${API}products/${products[0].id}`);
  const { data: category } = await axios.get(`${API}categories/${details.id}`);

  yield console.log(products);
  yield console.log(details);
  yield console.log(category);
}

const results = gen();
results.next().value; // orden de llamado de los yield (return)
results.next().value;
results.next().value;