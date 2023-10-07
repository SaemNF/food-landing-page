const ztmMonsters = [
{id: 1, monster: 'Mr. Mouse', level: 1},
{id: 2, monster: 'Mac', level: 30},
{id: 3, monster: 'Denodude', level: 17},
{id: 4, monster: 'Pye', level: 5},
];

// Old Way
const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
console.log(advancedMonsters)
console.log(advancedMonster[advancedMonsters.length - 1])


// Using findLast()
const lastMonster = ztmMonsters.findLast(item => item.level > 15);
console.log(lastMonster);
// Using findLastIndex()
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
console.log(lastMonsterIndex);


const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];

//Using reverse()
const reverseMonsters = ztmMonstersList.reverse();
console.log(ztmMonstersList) 
console.log(reverseMonsters) 

//using toReversed()
const reversedMonstersTo = ztmMonstersList.toReversed();
console.log(ztmMonstersList) 
console.log(reversedMonstersTo)

//Using toSorted()
const sortedMonstersTo = ztmMonstersList.toSorted();
console.log(ztmMonstersList) 
console.log(sortedMonstersTo)

//Using toSpliced()
const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
console.log(ztmMonstersList) 
console.log(spliceMonstersTo)

//Old Way
ztmMonstersList[1] = 'Gost';
console.log(ztmMonstersList)

// Using with()
const withMonsters = ztmMonstersList.with(1, 'Gost');
console.log(ztmMonstersList) 
console.log(withMonsters)


///////////////////////////////////////////////////////////

let inputArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//if same number, put into one array
//for different number, arrange in increasing value 


const  answer = (input1) => {
	
	ArrayAnswer1.push(input1.sort(function(a,b){
		return  a - b;
	}));

};

// how to push array into an array?

function groupSameNumbers(inputArray) {
    let result = [];
    let currentGroup = [];

    let sortedArray = inputArray.sort(function(a,b){
    	return a - b;
    })

    for (let i = 0; i < sortedArray.length; i++) {
        if (i === 0 || sortedArray[i] === sortedArray[i - 1]) {
            currentGroup.push(sortedArray[i]);
        } else {
            result.push(currentGroup);
            currentGroup = [sortedArray[i]];
        }
    }

    // Push the last group if it's not empty
    if (currentGroup.length > 0) {
        result.push(currentGroup);
    }

    let flattenArray = result.map(subArray => (subArray.length === 1? subArray[0] : subArray));

    return flattenArray;
}


let array1 = [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591];
let array2 = [[1, 1, 1, 1], [2, 2, 2], [4], [5], [10], [20, 20], [391], [392], [591]];



//answer : [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]


//final answer attempted
let inputArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function groupSameNumbers(inputArray) {
    let result = [];
    let currentGroup = [];

    let sortedArray = inputArray.sort(function(a,b){
    	return a - b;
    })

    for (let i = 0; i < sortedArray.length; i++) {
        if (i === 0 || sortedArray[i] === sortedArray[i - 1]) {
            currentGroup.push(sortedArray[i]);
        } else {
            result.push(currentGroup);
            currentGroup = [sortedArray[i]];
        }
    }

    // Push the last group if it's not empty
    if (currentGroup.length > 0) {
        result.push(currentGroup);
    }

    let flattenArray = result.map(subArray => (subArray.length === 1? subArray[0] : subArray));

    return flattenArray;
}

groupSameNumbers(inputArray);