const fnAsync = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("promise has been resolved");
        // rej(new Error("error"));
    }, 2000);
  });
};

const anotherFunction = async () => {
  try {
    const resp = await fnAsync();
    console.log(resp);
    console.log('-----------------after-----------------')
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
console.log("------------------before------------------");
