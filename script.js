function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

let userInput = prompt("Enter a temperature in Fahrenheit:");
let fahrenheit = parseFloat(userInput);

if (!isNaN(fahrenheit)) {
  let celsius = convertToCelsius(fahrenheit).toFixed(1);
  let description = describeTemperature(fahrenheit);
  alert(`${fahrenheit}°F is ${celsius}°C — it feels ${description}`);
} else {
  alert("Please enter a valid number.");
}
