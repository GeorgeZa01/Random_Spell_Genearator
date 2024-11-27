// Select elements
const spellArea = document.getElementById("spellArea");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const ingredientsList = [`Dragon Scale`, `Phoenix Feather`, `Unicorn Horn`];

// Function to generate a random spell
function generateSpell() {
  // Randomly select an ingredient
  const randomIndex = Math.floor(Math.random() * ingredientsList.length);
  const selectedIngredient = ingredientsList[randomIndex];

  // Countdown before displaying the spell
  let countdown = 3;
  const countdownInterval = setInterval(() => {
    spellArea.textContent = `Magic arriving in... ${countdown}`;
    countdown--;

    if (countdown < 0) {
      clearInterval(countdownInterval);
      // Display the spell
      spellArea.textContent = `Your Spell is: ${selectedIngredient}`;
      // Change background color
      spellArea.style.backgroundColor = getRandomColor();
    }
  }, 1000);
}

// Function to reset the spell area
function resetSpellArea() {
  spellArea.textContent = "Your spell will appear here!";
  spellArea.style.backgroundColor = "#fff";
}

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listeners
generateButton.addEventListener("click", generateSpell);
resetButton.addEventListener("click", resetSpellArea);
