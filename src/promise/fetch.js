const url = "https://rickandmortyapi.com/api/character/";

fetch(url)
    .then(data => console.log(data))
//   .then((data) => data.json())
//   .then((resp) => console.log(resp.info.count))
  .catch((err) => {
    console.log(err);
  });


