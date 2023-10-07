function calculator(){
	let input1 = prompt("enter first number");
	document.getElementById("first").innerHTML = input1;
	let input2 = prompt("enter second number");
	document.getElementById("second").innerHTML = input2;
	let result = parseInt(input1) + parseInt(input2);
	document.getElementById("result").innerHTML =result;
}

function start(x){
	if(x!=null){
		if (x < 18){
			alert("Sorry, you are too young to drive this car. Powering off");
		}
		else if (x == 18){
		 	alert("Congratulations on your first year of driving. Enjoy the ride!");	
		}
		else if (x > 18){
			alert("Powering On. Enjoy the ride!");
		}
	}
	else{
		var age = prompt("enter your age");
		if (age < 18){
			alert("Sorry, you are too young to drive this car. Powering off");
		}
		else if (age == 18){
		 	alert("Congratulations on your first year of driving. Enjoy the ride!");	
		}
		else if (age > 18){
			alert("Powering On. Enjoy the ride!");
		}
	}
	
}

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password".
 // Fill those values in with strings.

let user = {
	username: 'Sam',
	password: 'sam123'
}

// 2. Create an array which contains the object you have made above and 
// name the array "database".

let database = [user];

// to call an object property that is in an array
// console.log(database[0]['password']); 


// 3. Create an array called "newsfeed" which contains 3 objects with 
// properties "username" and "timeline".

let newsfeed = [
	 {
	 	username:'abu',
	 	timeline:'8.30 pm'
	 },
	 {
	 	username:'atan',
	 	timeline:'10.00 pm'
	 },
	 {
	 	username:'eton',
	 	timeline:'1.00 am'
	 }

];

// how to call objects in an array
// console.log(newsfeed[0]['username']);



let object1 = [
	{name: "HappyHands31"}, 
	{job: "website developer"}, 
	{city: "Chicago"}
];

// to call an object property within an array
// console.log(object1[0]['name']);


// LOGIN

let databaseLogin = [
	{
		username:"ramli",
		password:"123"
	},
	{
		username:"atan",
		password:"111"
	},
	{
		username:"samad",
		password:"222"
	}
];

let newsfeedLogin = [
	{
		username:"amy",
		timeline:"hellloo"
	}, 
	{
		username:"abu",
		timeline:"manteppp"
	}
];


function login2(username, password){
	for (let i = 0; i < databaseLogin.length; i++){
		if (databaseLogin[i].username === username && databaseLogin[i].password === password){
		return true;
		}
		
	return false;
}

// function Login(username, password){
// 	login2(username, password);
// 	if (true){
// 		console.log(newsfeedLogin); 
// 	}
// 	else{
// 		alert("Sorry, wrong password and username");
// 	}
// }

function Login(username, password){
	if (databaseLogin[0].username === username && databaseLogin[0].password) {
		console.log(newsfeedLogin)
	}
	else{
		alert("Sorry, wrong password and username")
	}
}


// looping database to verify profile

usernamePrompt = prompt("Please enter username")
passwordPrompt = prompt("Please enter password")

Login(usernamePrompt,passwordPrompt)


// function tambah(pertama, kedua){
// 	jumlah = parseInt(pertama) + parseInt(kedua);
// 	return jumlah
// }

// function darab(pertama, kedua){
// 	jumlah = parseInt(pertama) * parseInt(kedua);
// 	return jumlah