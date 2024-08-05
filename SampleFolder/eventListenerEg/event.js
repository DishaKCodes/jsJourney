
function handleButtonClick() {
  console.log('Button clicked!');
}
 
// Get the button element
const button = document.getElementById('myButton');

// Add event listener for 'click' event
button.addEventListener('click', handleButtonClick);
 
document.getElementById('clickButton').addEventListener('click', function() {
  alert('Button clicked!');
});


document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission behavior
  console.log('Form submitted!');
});

const textInput = document.getElementById('textInput2');

textInput.addEventListener('focus', function() {
  console.log('Input focused');
});
textInput.addEventListener('blur', function() {
  console.log('Input blurred');
});
window.addEventListener('load', function() {
  console.log('Page and all resources loaded');
});
window.addEventListener('resize', function() {
  console.log('Window resized');
});
window.addEventListener('scroll', function() {
  console.log('Document scrolled');
});

