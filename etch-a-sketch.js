// Code that creates a 16x16 grid of square divs

const container = document.querySelector('.container');
// loop that creates 256 divs (16x16)
for(let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.classList.add('items');
    container.appendChild(divs);
}