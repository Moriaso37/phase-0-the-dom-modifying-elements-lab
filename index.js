// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the inner HTML of the new <h1> element to include your name and "is the champion"
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the new <h1> element to the body (or another appropriate parent element)
document.body.appendChild(newHeader);