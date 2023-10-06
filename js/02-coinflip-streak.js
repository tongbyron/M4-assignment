// 1. Declare an unassigned variable called coinFlip. 
let coinFlip

// 2. Create a do while loop.
do {
    // 3. Assign a randomly generated number
    coinFlip = Math.round(Math.random());

    // 4. Check the result of the coin flip.
    if (coinFlip === 0)
        // If it’s 0, write out “Heads” into the console window.
        document.write('Heads')
    else
        // If it’s 1, write out “Tails” into the console window.
        document.write('Tails')
// 5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
} while (coinFlip === 0);