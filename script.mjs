const runFizzBuzz = () => {
  const numInput = document.getElementById("num");
  const outputElement = document.getElementById("output");
  const num = Number(numInput.value);
  outputElement.textContent = "";

  if (!numInput.checkValidity()) {
      outputElement.textContent = "Please enter a valid number.";
      return;
  }

  for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          outputElement.innerHTML += '<span style="color: #ff00ff">FizzBuzz</span><br>';
      } else if (i % 3 === 0) {
          outputElement.innerHTML += '<span style="color: #ff0000">Fizz</span><br>';
      } else if (i % 5 === 0) {
          outputElement.innerHTML += '<span style="color: #0000ff">Buzz</span><br>';
      } else {
          outputElement.innerHTML += i + "<br>";
      }
  }
}