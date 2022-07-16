// generator
// controlar el iterador
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
// console.log(g.next().value); // acceso a valor 1 (1)
// console.log(g.next().value); // acceso a valor 2 (2)
// console.log(g.next().value); // acceso a valor 3 (3)

// ejemplo 2
function* iterable(array) {
  for (const value of array) {
    yield value;
  }
}

const it = iterable(["oscar", "omar", "ana", "lucia", "juan"]);
console.log(it.next().value); // oscar
console.log(it.next().value); // omar
console.log(it.next().value); // ana
console.log(it.next().value); // lucia
console.log(it.next().value); // juan
console.log(it.next().value); // undefined - ya no hay valor para iterar
