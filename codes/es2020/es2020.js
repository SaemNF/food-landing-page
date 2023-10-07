// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) //the biggest safe number before corrupted
console.log(Number.MIN_SAFE_INTEGER) //the smallest safe number before corrupted

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
//3n + 4n + 1n or 3 + 4 + 1

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

//attempt
let pokemonFight = andrei_pokemon? console.log('fight') : console.log('walk away..')
let pokemonFight = andrei_pokemon?.raichu?console.log('fight'):console.log('walk away..');
let pokemonFight = andrei_pokemon?.raichu && will_pokemon ? 'fight' : 'walk away..';
let pokemonFight = andrei_pokemon?.raichu && will_pokemon?.pikachu? 'fight' : 'walk away..';
let pokemonFight = andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard? 'fight' : 'walk away..'; //final answer

// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')
//outputs false because the nullish coalescing operator (??) only returns the right-hand value ('hellooo' in this case) if the left-hand value is null or undefined.

console.log(null ?? 'hellooo')
//same case as above

console.log(null || 'hellooo')
//outputs 'hellooo' because it demonstrates how the logical OR (||) operator works in JavaScript. The || operator returns the first truthy value it encounters when evaluating expressions from left to right.

console.log((false || null) ?? 'hellooo')
//hellooo

console.log(null ?? (false || 'hellooo'))
//hellooo