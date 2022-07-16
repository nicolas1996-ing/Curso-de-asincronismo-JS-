const promise = new Promise((res, rej) => {
  res("Promise has been resolved");
});

const cows = 15;
const countCows = new Promise((res, rej) => {
  if (cows >= 15) res(true);
  else throw new Error(false);
});

countCows
  .then((resp) => console.log(resp))
  .catch((e) => console.log(e))
  .finally(() => console.log("promise has been executed"));
