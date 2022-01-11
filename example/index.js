console.log(`A`, a);
var a = 45;

if (true) {
  let a = 10;
  console.log(`A`, a);
  a = 45;
  console.log(`A`, a);
}
console.log(`A`, a);

const b = 6;

console.log(`B`, b);

const obj = { name: "Artur" };

console.log(`obj`, obj);
obj.name = "Armen";
console.log(`obj`, obj);
const obj2 = { ...obj };

obj2.name = "Ashot";
console.log(`obj`, obj);
console.log(`obj`, obj2);

function hoist() {
  aa = 20;
  var bb = 100;
}
hoist();
bb = 30;
console.log(aa);
console.log(bb);

const all = () => {
  var esimich = 45;
};

for (let index = 0; index < [1, 2].length; index++) {
  const element = [1, 2][index];
}

var double = 22;
function double() {
  return "hello";
}
console.log(typeof double);
console.log(typeof double);
