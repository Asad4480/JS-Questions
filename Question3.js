/* Question: Write a function sortNumbers that takes an array of numbers as input and returns a
new array with the numbers sorted in ascending order. */

function sortNumbers(arr) {
    
    return arr.slice().sort((a, b) => a - b);
}


const numbers = [10, 13, 15, 11, 29];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); 

