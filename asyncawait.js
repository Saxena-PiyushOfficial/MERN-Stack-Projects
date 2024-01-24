/*function hello() {
  console.log("hello brother");
}

hello();*/

async function hello() {
  console.log("hello brother");
}

hello();
console.log("------------------------------------------");

let hellonew = async function() {
  console.log("hello");
};

hellonew();
console.log("------------------------------------------");
async function executeAsync() {
var hi = async () => {
  return "hi Piyush";
};
console.log(await hi());
}
executeAsync()
console.log("---------------------------xxxxxxxx---------------");

hello().then((value) => console.log(value));
hellonew().then(console.log);
