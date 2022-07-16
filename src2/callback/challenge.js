// https://fakeapi.platzi.com/
// https://api.escuelajs.co/api/v1/products

require("dotenv").config();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = process.env.URL_API; // valor que no cambiará ( mayuscula )

function fetchData(urlAPI, callback) {
  let xhttp = new XMLHttpRequest();

  // abrir solicitud
  xhttp.open("GET", urlAPI, true);

  // estados de la solitud
  // 0 - solicitud no inicializada
  // 1 - loading - aun no se llama el valor de 'send'
  // 2 - solicitud ejectudad - ya se ejecutó el valor de 'send'
  // 3 - interactuado - trabajando con la solicitud
  // 4 - la solicitud se ha completado

  // configurar solicitud
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        // éxito
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // error
        const error = new Error("Error ", urlAPI);
        callback(error, null);
      }
    }
  };

  // ejectar solicitud
  xhttp.send();
}

// petición 1.
function callback(error, data) {
  if (error) {
    return console.error(error);
  }

  // petición 2.
  fetchData(`${API}products/${data[1].id}`, function (error2, data2) {
    if (error2) {
      return console.error(error2);
    }
    // petición 3.
    fetchData(
      `${API}categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) {
          return console.error(error3);
        }
        console.log("Product description: ", data[1]);
        console.log("Product title: ", data2?.title);
        console.log("Product category name: ", data3?.name);
      }
    );
  });
}

fetchData(`${API}products`, callback);
