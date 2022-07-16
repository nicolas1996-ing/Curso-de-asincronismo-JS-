import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1/";

// get
// fetch(`${API}products`)
//   .then((resp) => resp.json()) // acción necesaria
//   .then((products) => {
//     console.log("product: ", products[0]);
//     return fetch(`${API}products/${products[0].id}`); // retorna promesa
//   })
//   .then((resp) => resp.json()) // acción necesaria
//   .then((detail) => {
//     console.log("detail: ", detail.title);
//     return fetch(`${API}categories/${detail.id}`); // retorna promesa
//   })
//   .then((resp) => resp.json()) // acción necesaria
//   .then((category) => {
//     console.log("category: ", category);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => "finished");

// post
// object 
let newProduct = {
  title: "product-example-01-jnar",
  price: 10,
  description: "this is a example product from jnar",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

const postData = (urlApi, data) => {
  return fetch(`${urlApi}products`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // change json format 
  });
};

postData(API, newProduct)
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally POST"));

// https://api.escuelajs.co/api/v1/products/238
// console.log(JSON.stringify(newProduct));
