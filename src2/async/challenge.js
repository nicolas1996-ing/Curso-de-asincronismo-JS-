import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1/";

const fetchData = async (urlApi) => (await fetch(urlApi)).json();

const anotherFunction = async () => {
  try {
    const products = await fetchData(`${API}products`); // fetch 1,2,3 ...
    const details = await fetchData(`${API}products/${products[0].id}`); // ptoduct by Id
    const category = await fetchData(`${API}categories/${details.id}`); // category by Id product

    console.log(products.at(-1)); // nueva funcionalidad JS 2022
    // console.log("Products length: ", products.length);
    // console.log("details: ", details);
    // console.log("category: ", category);
  } catch (error) {
    console.log(error);
  }
};

// anotherFunction();


// axios ...
import axios from "axios";
const {data: products} = await axios.get(`${API}products`); // 2da funcionalidad JS 2022
// console.log(products);
// console.log(products.at(-1));
