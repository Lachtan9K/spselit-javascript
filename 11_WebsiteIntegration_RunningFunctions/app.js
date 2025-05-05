console.log("Running from the app.js file");

function doStuff() {
  console.log("Running doStuff function");
  console.log("this:", this);
}

doStuff();

setTimeout(doStuff, 5000);
