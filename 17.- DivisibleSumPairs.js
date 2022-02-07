// Given an array of integers and a positive integer , determine the number of  pairs where   i< j && ar(i) + arr(j)% k === 0 .

// Example

// Three pairs meet the criteria:  and .

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array 
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

// Input Format

// The first line contains  space-separated integers,  and .
// The second line contains  space-separated integers, each a value of .

// Constraints

// Sample Input

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
// Sample Output

//  5

//ar = [1, 3, 2, 6, 1, 2]

//      i
//         j
function divisibleSumPairs(n, k, ar) {
    let sumPairs = 0;
    for(var i=0; i < ar.length; i++) {
        for(var j = i + 1; j < ar.length; j++){
            if((ar[i] + ar[j]) % k === 0) sumPairs += 1;  
        }
    }
    return sumPairs;
}

module.exports = divisibleSumPairs;