const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve({
            name: 'nicolas',
            age:25
        });
      }, 3000);
    } else {
      reject(new Error("Test error"));
    }
  });
};

const resolveAsyncFunction = async () => {
  const something = await doSomethingAsync();
  console.log(something.name);
};

console.log("------------Before-1------------");
resolveAsyncFunction();
console.log("-------------After-1------------");

const anotherAsyncFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something.age);
  } catch (error) {
    console.log(error);
  }
};

console.log("------------Before-2------------");
anotherAsyncFunction();
console.log("-------------After-2------------");