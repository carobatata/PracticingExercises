// Longest Collatz sequence
// Submit

//  Show HTML problem content 
// Problem 14
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

var evenOrOdd = function(num) {
    var array = [num]
    if(num === 1) return num;
    while(num > 1){
        if(num % 2 === 0) {
            num = num/2;
            array.push(num) 
        } else {
            num = num*3 + 1;
            array.push(num)
        }
    }
    return array.length;
};

var longestSequenze = function() {
    var num = 1;
    var maxLength = 0;
    var maxNumLength = 1;
    while(num < 1000000) {
        var currentSequenseLength = evenOrOdd(num)
        if(currentSequenseLength > maxLength) {
            maxLength = currentSequenseLength
            maxNumLength = num;
        }
    num = num + 1;
    }
    return maxNumLength;
}

// Answer:  837799
// Completed on Tue, 28 Dec 2021, 12:20