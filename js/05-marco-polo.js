// Iterates numbers from 1 to 100.
for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        // For numbers which are multiples of both 3 and 5 print "Marco! Polo!".
        document.write('Marco! Polo!<br>')
    else if (i % 3 == 0)
        // For multiples of 3, print "Marco!" instead of the number. 
        document.write('Marco!<br>')
    else if (i % 5 == 0) 
        // For multiples of 5, print "Polo!" instead of the number. 
        document.write('Polo!<br>')
    else
        document.write(i + '<br>')
}