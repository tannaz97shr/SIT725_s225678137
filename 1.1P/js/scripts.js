const messages = [
  "Welcome to SIT725!",
  "Learning JavaScript",
  "Applied Software Engineering",
  "Hello from Deakin!",
];

function changeText() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const heading = document.getElementById("heading");

  heading.textContent = messages[randomIndex];
}
