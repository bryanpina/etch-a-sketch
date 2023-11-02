// Code that creates a 16x16 grid of square divs

const container = document.querySelector('.container');
const btnSize = document.querySelector('.size');

// When btn is clicked a prompt is given to the user

btnSize.addEventListener('click', inputGridSize)

// Asks for grid size from user and returns value

function inputGridSize(){
    return prompt("Please select canvas size.");
}

// loop that creates 256 divs (16x16)

for(let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.classList.add('items');
    container.appendChild(divs);
}