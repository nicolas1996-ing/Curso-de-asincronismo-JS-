const { fetchData } = require("../utils/fetchData");
const url = "https://rickandmortyapi.com/api/character/";

fetchData(url)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${url}${data.results[0].id}`); // return promise
  })
  .then((data) => {
    // resolve 2nd promise
    console.log(data.name);
    return fetchData(data.origin.url); // return promise
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => {
    console.log(err);
  });
