let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlAPI) => {
  return new Promise((resolve, reject) => {
    const xhttp = new xmlHttpRequest();
    xhttp.open("GET", urlAPI, true); // request type: get
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        // state completed
        xhttp.status == 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", urlAPI));
      }
    };
    xhttp.send();
  });
};

module.exports = {
  fetchData,
};
