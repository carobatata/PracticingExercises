// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// 1° - encontrar los multiplos de 3 y 5 debajo de mil

var multiples = function() {
    var sumMultiples = 0;
    num = 999
    while(num > 0) {
        if(num % 3 === 0 || num % 5 === 0) {
            sumMultiples = sumMultiples + num;
        }
            num = num - 1;
        }
        return sumMultiples;
    }

// multiples() = 233168

    // resultado = 233168

// sumar todos esos resultados.

module.exports = multiples;
