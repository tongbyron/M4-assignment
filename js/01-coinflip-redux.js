// Declare an unassigned variable called coinFlip. 
let coinFlip

// Prompt the user to enter the number of coin flips.
let numberFlips = prompt('Enter the number of coin flips')

// Executes the for loop numberFlips times
for (let i = 0; i < numberFlips; i++) {
    // Assign a randomly generated number
    coinFlip = Math.round(Math.random());
}

// Display the coin flip results in the console.
if (coinFlip === 0)
    // If it’s 0, write out “Heads” into the console window.
    document.write('Heads')
else
    // If it’s 1, write out “Tails” into the console window.
    document.write('Tails')