//how to create grid?
//how to addEventListener to the grid?

let gridWidth = document.getElementById('width-range');
let gridHeight = document.getElementById('height-range');
let createGrid = document.getElementById('submit-grid');
let clearGrid = document.getElementById('clear-grid');
let colorInput = document.getElementById('color-input');
let eraseBtn = document.getElementById('erase-btn');
let paintBtn = document.getElementById('paint-btn');
let container = document.querySelector('.container');
let widthValue = document.getElementById('width-value');
let heightValue = document.getElementById('height-value');

let draw = false;
let erase = false;

createGrid.addEventListener("click", () => {
    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);

            col.addEventListener('mousedown', () => {
               draw = true;
               if (erase) {
                   col.style.backgroundColor = "transparent";
               } else {
                   col.style.backgroundColor = colorInput.value;
               }
            });

            col.addEventListener('mousemove', (e) => {
                let elementId = document.elementFromPoint(
                	e.clientX,e.clientY
                ).id;
                checker(elementId);
                // console.log(elementId);
            });

            col.addEventListener('mouseup', () => {
                draw = false;
            });

            div.appendChild(col);

        container.appendChild(div);
    	};
    };
    
    // console.log(container);
  });


function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorInput.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

clearGrid.addEventListener('click',()=>{
	container.innerHTML='';
})

eraseBtn.addEventListener("click", () => {
    erase = true;
});

paintBtn.addEventListener("click", () => {
    erase = false;
});

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

window.onload = () => {
	gridWidth.value = 0;
	gridHeight.value = 0;
}