/* some sort of loop that can grab each individual character of a number (converted to a string) and then add those numbers. */
let totes = 0; // counter of total 'Happy Numbers'
for (let i = 0; i < 1001; i++) { // this loops through the first 1000 positive integers
    let num = i; // assign value of i to a var so i can use its value w/o screwing up its value lol
    let newNum = 0; // this will be the var i use to test the condition of the number
    for (let k = 0; k < 6; k++){ // this will do the 'happy' test on the integers up to 6 times. generally, by  six times, the number will either be reduced to '1' or be stuck on its lowest form
        num = num.toString().split("").reduce(function(sum, digit){// this fucking sick method chain breaks each integer into its individual characters first, then multiplies their squares then sums them back together. 
            return sum + (+digit * +digit);
        }, 0);
        newNum = num; // assigns this new value to the newNum var to test its condition
        // at the top of this loop, when num is reassigned to itself, it has the new value from the end of the last time it looped, which is sick
    }
    if (newNum === 1){ // these just log the numbers to the console in a longasss list and mark the happy ones
        console.log(i, ": ", newNum, " HAPPYNUMBER");
        totes++;
    } else {
        console.log(i, ": ", newNum)
    }
}
console.log("Total Happy Numbers: ", totes); // logs the total happy numbers found at the very bottom of the console list