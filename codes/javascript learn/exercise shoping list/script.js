var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var newLi = document.createElement("li");
	newLi.classList.add('new', lisLength)
	newLi.appendChild(document.createTextNode(input.value));
	ul.appendChild(newLi);
	input.value = "";

	newLi.addEventListener('click', function(){
		newLi.classList.toggle('done')
	})
}


var lis = document.querySelectorAll('li')
lis.forEach(function(item){
	item.addEventListener('click', function(){
		item.classList.toggle('done')
	})
})



let lisLength = 0;

function addListAfterClick() {
	lisLength++;

	if (inputLength() > 0) {
		createListElement();
	}

};


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}

}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



