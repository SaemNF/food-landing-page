let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const intializer = () => {
    // highlighting buttons that is in effect
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    // creating fontlist options
    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // creating font size options
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    // font size on default
    fontSizeRef.value = 3;
};

// effecting the words
const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

// affecting options buttons
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });

});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

// change background of the buttons when clicked
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = intializer();


//********************my attempt******************************//

// TRY to do like this but don't use document.execCommand()

// let optionButtons = document.querySelectorAll('.option-button');
// let fontColor = document.getElementById('foreColor');
// let advOptionButton = document.querySelectorAll('.adv-option-button');
// let selectedText = window.getSelection();



// advOptionButton.forEach(button => {
//     button.addEventListener('change',() => {
       
//     })
// });

// optionButtons.forEach(value => {
//     value.addEventListener('click', () => {    
//         value.classList.toggle('clicked');
//         if (value.classList.contains('clicked')){
//             document.execCommand(value.id, false, null);
//         }else if(!value.classList.contains('clicked')){
//             document.execCommand(value.id, false, null);
//         }      
//     });
// });

//testing testing example new old


// affecting the text's style
let symbolBold = document.getElementById("bold");

symbolBold.addEventListener('click', ()=> {
    document.execCommand('italic', false, null);
});