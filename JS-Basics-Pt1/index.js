const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a New Name");
    para.textContent = `Player 1: ${name}`;
}

//We ask for a new name to be entered then store that name in variable Called 'name'
