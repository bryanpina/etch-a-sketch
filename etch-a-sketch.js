document.addEventListener("DOMContentLoaded", function(){
    console.log('hi')
})

const container = document.querySelector('.container');
const btnSize = document.querySelector('.size');
const message = document.querySelector('.message');

// When btn is clicked a prompt is given to the user

btnSize.addEventListener('click', inputGridSize)

// Removes divs and adds divs based on users input via prompt

function inputGridSize(size){

    // Removes previous divs when select size button is clicked

    while(container.lastElementChild){
        container.removeChild(container.lastElementChild);
    }

    //Prompts user to select canvas size

    size = prompt("Please select canvas size.");
    
    if(size == ""){
        message.innerText = 'Please provide a number from 2 to 100';
    } else if(size < 2 || size > 100){
        message.innerText = 'Only numbers from 2 to 100 are accepted';
    } else{
        message.innerText = 'Etch-A-Sketch';
    }

    //creates css grid layout based on size input
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // variable that multiples for columns and rows

    let numDivs = size * size;

    //loop that creates divs on grid based on number of divs

    for(let i = 0; i < numDivs; i++) {
        const divs = document.createElement('div');
        divs.classList.add('items');
        container.appendChild(divs);
    }
}