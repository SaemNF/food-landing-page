//effect / eventlistener / DOM Event


//select, query,  get
// let ul = document.getElementsByTagName("ul")[0];
// console.log(ul);

//add a list / how to add a list in ul / appendChild / createTextNode
var button = document.getElementById("enter");
var input = document.getElementById	("input");
var ul = document.querySelector("ul");


function insert(){
	var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
}

function valueLength(){
	return input.value.length;
}

function insertListClick(){
	if(valueLength() > 0){
			insert()
		}
}

function insertListEnter(event){
	if(valueLength() > 0 && event.keyCode === 13){
		insert()
	}
}


button.addEventListener("click", insertListClick);

input.addEventListener("keypress",insertListEnter); 
	