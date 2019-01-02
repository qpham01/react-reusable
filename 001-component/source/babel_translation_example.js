function hey(from, to) {
  // Common JS
  from = from || "Ben"; // if from doesn't exist, default to Ben
  to = to || "you";
  console.log("Hello from " + from + " , to " + to + ".");
}

// Babel will translate es2016 JS below to ES5 for use in the browser on the fly.
function hey_es2016(from = "Ben", to = "you") {
  console.log(`Hello from ${from} , to ${to}`);
}
hey();
hey_es2016();
