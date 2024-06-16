/* Question: Write a function fibonacci that takes an integer n as input and returns the n-th
number in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each
subsequent number is the sum of the previous two. */


function fibonacci(n) {
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    
    let a = 0, b = 1;

    
    for (let i = 2; i <= n; i++) {
        let next = a + b; 
        a = b;           
        b = next;        
    }

    return b; 
}


const result = fibonacci(10);
console.log(result); 
