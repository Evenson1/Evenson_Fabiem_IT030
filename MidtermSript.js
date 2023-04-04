// Get the current hour
<header>
let time = new Date().getHours();

// Greet the user based on the time of the day
if (time < 12) {
  console.log("Good morning");
} else if (time < 16) {
  console.log("Good afternoon");
} else if (time < 20) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
