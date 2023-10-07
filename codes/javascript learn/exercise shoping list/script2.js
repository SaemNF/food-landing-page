// Get a reference to the button
var myButton = document.getElementById('myButton');

// Define the event handler function
function handleClick() {
  alert('Button clicked!');
}

// Toggle the event listener based on a condition
var isEventListenerActive = true;

function toggleEventListener() {
  if (isEventListenerActive) {
    // Remove the event listener
    myButton.removeEventListener('click', handleClick);
    isEventListenerActive = false;
  } else {
    // Add the event listener
    myButton.addEventListener('click', handleClick);
    isEventListenerActive = true;
  }
}

// Add a click event listener to toggle the main event listener
document.getElementById('toggleButton').addEventListener('click', toggleEventListener);


// ///////////===========================================================/////////////////////////////////////

// // Assuming you have a list with the id "myList" in your HTML
// var myList = document.getElementById('myList');
// var liCounter = document.getElementById('liCounter'); // Assuming you have an element to display the count

// function updateLiCount() {
//   var liElements = myList.getElementsByTagName('li');
//   var count = liElements.length;
//   liCounter.textContent = count; // Update the displayed count
// }

// // Function to add a new li element
// function addLiElement() {
//   var newLi = document.createElement('li');
//   newLi.textContent = 'New Item';
//   myList.appendChild(newLi);
//   updateLiCount(); // Update the count
// }

// // Function to remove a li element
// function removeLiElement() {
//   var liElements = myList.getElementsByTagName('li');
//   if (liElements.length > 0) {
//     myList.removeChild(liElements[liElements.length - 1]);
//     updateLiCount(); // Update the count
//   }
// }

// // Initial count
// updateLiCount();
