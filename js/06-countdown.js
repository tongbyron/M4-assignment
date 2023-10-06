// Prompt the user to enter the count down number.
let countDown = prompt('Enter the count down number')

// Counts down to 0 based on the number that a user passes into a prompt.
for (let i = countDown; i >= 0; i--) {
    document.write(i + '<br>');
}