// -----------------------------
// Part 1: Variables & Conditionals
// -----------------------------
let userName = "Gunther";
let userAge = 18;

// Simple conditional check
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}

// -----------------------------
// Part 2: Custom Functions
// -----------------------------
function changeMessage() {
  // DOM Interaction #1: change text
  document.getElementById("message").textContent = "Hello, " + userName + "!";
}

function addListItems() {
  // DOM Interaction #2: add elements
  let items = ["Apple", "Banana", "Cherry"];
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear list first

  // Loop through items
  for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.textContent = items[i];
    list.appendChild(li);
  }
}

// -----------------------------
// Part 3: Loops
// -----------------------------
function countNumbers() {
  // Loop Example 1: for loop
  for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i);
  }

  // Loop Example 2: while loop
  let num = 1;
  while (num <= 3) {
    console.log("While loop number: " + num);
    num++;
  }

  // DOM Interaction #3: update message with loop result
  document.getElementById("message").textContent = "Check the console for counting";
}

// -----------------------------
// Part 4: Event Listeners
// -----------------------------
document.getElementById("btnChange").addEventListener("click", changeMessage);
document.getElementById("btnList").addEventListener("click", addListItems);
document.getElementById("btnLoop").addEventListener("click", countNumbers);
