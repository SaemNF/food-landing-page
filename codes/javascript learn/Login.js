//database for username and password
let database = [
	{
		username:"atan",
		password:"123"
	},
	{
		username:"abu",
		password:"111"
	},
	{
		username:"saly",
		password:"222"
	}
];

//newsfeed
let newsfeed = [
	{
		username:"atan",
		newsfeed:"hellloooo"
	},
	{
		username:"abu",
		newsfeed:"fuuiyoo"
	}
]

//user input
let usernamePrompt = prompt("Enter username");
let passwordPrompt = prompt("Enter password");

//to verify user input
function verify(username, password){
	
	for (i=0;i<database.length;i++){
		if(database[i].username === username && 
			database[i].password === password){
			// console.log(newsfeed)
			return true
		}
	}
	return false
}

// verify(usernamePrompt,passwordPrompt)
// database.forEach(function(i){
// 	console.log(i);
// })
if (verify(usernamePrompt,passwordPrompt) === true)
{
    console.log(newsfeed)
}
else {alert("sorry, wrong username and password")};