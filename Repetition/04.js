// This file is for exercising what was tough in second school lecture. Covers 07 (second half) - 08.

//AND, OR, NOT

//buy apples ony if they are cheep or discounted and not rotten
const isAppleCheap = false;
const isAppleDiscounted = false;
const isAppleRotten = false;

if ((isAppleCheap || isAppleDiscounted) && !isAppleRotten) {
  console.log("I will buy apples.");
} else {
  console.log("I will not buy apples.");
}

//ternary operator

//what to buy for lunch
let onDiet = true;

console.log(
  "What I will have for lunch?",
  onDiet ? "I will buy salad." : "I will buy pizza."
);

//looping

// function will log provided variable
function justLog(string) {
  return console.log(string);
}

// function which will uppercase a string
function toUpperCase(string) {
  return string.toUpperCase();
}

// function which will return bool if string starts with "A"
function startsWithA(string) {
  return string[0].toUpperCase() === "A";
}

// create array containing phone brands
const phoneBrands = [
  "Apple",
  "Samsung",
  "Google",
  "Alcatel",
  "Nokia",
  "Sony",
  "Huawei",
  "Xiaomi",
];

// loop through the array and print each brand via for loop
console.log("Phone brands - for loop:");
for (let i = 0; i < phoneBrands.length; i++) {
  console.log(phoneBrands[i]);
}

// loop through the array and print each brand via for-of loop
console.log("Phone brands - for-of loop:");
for (const brand of phoneBrands) {
  console.log(brand);
}

// loop through the array and print each brand via forEach method
console.log("Phone brands - forEach method:");
phoneBrands.forEach(justLog);

// brands starting with "A" via filter method
console.log("Phone brands starting with 'A':");
console.log(phoneBrands.filter(startsWithA));

// brands uppercase via map method
console.log("Phone brands uppercase:");
console.log(phoneBrands.map(toUpperCase));

// brands starting with "A" uppercase via filter and map methods
console.log("Phone brands starting with 'A' uppercase:");
console.log(phoneBrands.filter(startsWithA).map(toUpperCase));

// while loop - buying snacks until I have no money
