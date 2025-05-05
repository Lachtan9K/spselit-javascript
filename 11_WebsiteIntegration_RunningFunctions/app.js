console.log("Running from the app.js file");

function doStuff(from = "direct call") {
  console.log("Running doStuff function from: " + from);
  console.log("this:", this);
}

doStuff();

setTimeout(doStuff, 5000, "timeout");

setInterval(doStuff, 10000, "interval");
