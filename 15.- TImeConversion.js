// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
    // Write your code here
    let militaryHour = '';
    if(s.charAt(8) === "A"){
        if(s.substring(0,2) == '12') {
            militaryHour = '00';
        } else{
            militaryHour = s.substring(0,2);
        }
    } else{
        if(s.substring(0,2) == '12'){
            militaryHour = s.substring(0,2);
        } else {
            militaryHour = parseInt(s.substring(0,2)) + 12;
        }
    }
    return militaryHour + s.substring(2,8)
}

