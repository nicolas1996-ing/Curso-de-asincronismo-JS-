let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://rickandmortyapi.com/api/character/";

function fetchData(urlAPI, callback) {
  let xhttp = new xmlHttpRequest();
  xhttp.open("GET", urlAPI, true); // request type: get
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      // state completed
      if (xhttp.status === 200) {
        // state request success
        callback(null, JSON.parse(xhttp.responseText)); // no error, response
      } else {
        const error = new Error("Error" + urlAPI);
        return callback(error, null); // error, no response
      }
    }
  };
  xhttp.send();
}

// callback hell 
fetchData(url, function (errorOne, dataOne) {
  if (errorOne) return console.log(errorOne);
  fetchData(url + dataOne.results[0].id, function (errorTwo, dataTwo) {
    if (errorTwo) return console.log(errorTwo);
    fetchData(dataTwo.origin.url, function (errorThree, dataThree) {
      if (errorThree) return console.log(errorThree);
      console.log(dataOne.info.count); // request one
      console.log(dataTwo.name); // request two
      console.log(dataThree.dimension); // request three
    });
  });
});
