/*  ORIGINAL JS 

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a New Name");
    para.textContent = `Player 1: ${name}`;
}
 */

//Select the parent container that holds all the <p> elements
const container = document.querySelector(".PlayerCards");

//Add a Click event listener using .addEventListener to the parent container
    container.addEventListener("click", function(event) {
       //Check if the clicked element is a <p> element
        if (event.target.tagName === "P") {
            updateName(event.target); // Pass the click <p> element to the updateName function
        }
    });

function updateName(para) {
    const name = prompt("Enter a New Name");
    para.textContent = `Player : ${name}`
}

//We ask for a new name to be entered then store that name in variable Called 'name'


/*

We are Selecting a text paragraph (line 1), then attaching an event listener to it (Line 3)

When the paragraph is clicked, the updateName() code block is run.

The updateName code block (Function) asks the user for a new name and then inserts that name into a pragraph to update the display

*/