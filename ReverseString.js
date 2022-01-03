// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


var reverseString = function(s) {
    var aux;
    var i = 0;
    var j = s.length - 1;
    while(i < j) {
        aux = s[j];
        s[j] = s[i];
        s[i] = aux;
        i++;
        j--;
    }
    return s;
};

// var reverseString = function(input) {
//     var reverseArray = [];
//     for(var i=0; i < input.length; i++) {
//         reverseArray.unshift(input[i])
//     }
//     return reverseArray;
// };
