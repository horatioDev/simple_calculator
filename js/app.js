// Simple Calcutator: HTML, CSS: grid, and JS

// Grab elements
var output = document.getElementById('output');
const buttons = document.querySelectorAll('button[class="btn"]');

// Add event listener
// button.addEventListener('click', displayOutput);

// High order function to loop through buttons and catch the value 
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let results = output.innerText = e.target.value;
        output += results;
        // return results;
        console.log(results);
    });
});

// Create a display function
function displayOutput(e) {
    console.log(e.target);
};