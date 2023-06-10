function convertTemperature() {
    // Get the temperature input value
    var temperatureInput = document.getElementById("temperatureInput").value;
  
    // Validate the input as a number
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for the temperature.");
      return;
    }
  
    // Get the selected unit
    var unitInputs = document.getElementsByName("unit");
    var selectedUnit;
  
    for (var i = 0; i < unitInputs.length; i++) {
      if (unitInputs[i].checked) {
        selectedUnit = unitInputs[i].value;
        break;
      }
    }
  
    // Convert the temperature
    var convertedTemperature;
    var convertedUnit;
  
    if (selectedUnit === "Celsius") {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
      convertedUnit = "Celsius";
    } else if (selectedUnit === "Fahrenheit") {
      convertedTemperature = (parseFloat(temperatureInput) * (9 / 5)) + 32;
      convertedUnit = "Fahrenheit";
    } else if (selectedUnit === "Kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      convertedUnit = "Kelvin";
    }
  
    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + convertedUnit;
  }
  // Change the color of the button
function changeButtonColor(color) {
  var convertButton = document.getElementById("convertButton");
  convertButton.style.backgroundColor = color;
}

// Example usage: changeButtonColor("#FF0000");
