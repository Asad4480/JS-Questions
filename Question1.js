/* Question: Write a function countCharacters that takes in a string and returns an object
containing the count of each character in the string.*/


function countCharacters(str) {
    
    const charCount = {};

    
    for (let char of str) {
        
        if (charCount[char]) {
            charCount[char]++;
        } else {
            
            charCount[char] = 1;
        }
    }

    
    return charCount;
}


const result = countCharacters("hello world");
console.log(result);
