
for (let i=1; i<257; i++) {
    const mainBox = document.querySelector('#mainBox');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.textContent = `${i}`;
    mainBox.appendChild(grid);


}

function addClass() {
    this.classList.add('hover');
}
function removeClass() {
    gridChange.forEach(grid => grid.classList.remove('hover'));

}

const gridChange = document.querySelectorAll('.grid');
gridChange.forEach(grid => grid.addEventListener('mouseover', addClass));


const clear = document.querySelector('.clear');
clear.addEventListener('click', removeClass);




