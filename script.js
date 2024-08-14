//Function to generate and display a random number
function generateRandomNumber() {
  const min = -10000;
  const max = 10000; // You can change the range as needed
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  //Display the random number in the result paragraph
  document.getElementById(
    "result"
  ).textContent = `Número Randômico Gerado: ${randomNumber}`;
}

//Add a click event listener to the button
document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomNumber);
