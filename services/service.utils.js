
const fibonaccix = require('fibonacci');

function token() {
    return "ca97ee12-47ce-4606-add4-c27fd04e1b1b";
}

function fibonacci(num) {
    var a, b, temp;

    if (num >= 0) {
        a = 1, b = 0;
        num--;
        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
    }
    else {
        a = 0, b = 1;
        while (num <= 0) {
            temp = a;
            a = b - a;
            b = temp;
            num++;
        }
    }

    return b;
}

// function fibonacci(num) {
//     return parseInt(fibonaccix.iterate (num).number);
// }

function reversewords(sentence) {
    return sentence.split('').reverse().join('');
}

function triangleType(n1, n2, n3) {
    function isInvalid(n) {
        return isNaN(n);
    }

    if (isInvalid(n1) || isInvalid(n2) || isInvalid(n3))
        throw new TypeError('Not all numbers');
    if ((n1 + n2 <= n3) || (n1 + n3 <= n2) || (n2 + n3 <= n1))
        throw new RangeError(`Sum of any two sides must be greater than the third side`);

    var len = Object.keys([n1, n2, n3].reduce((a, b) => { a[b] = (a[b] || 0) + 1; return a; }, {})).length;

    return len === 3 ? 'Scalene' :
        len === 2 ? 'Isosceles' : 'Equilateral';
}


var utils = {
    token: token,
    fibonacci: fibonacci,
    triangleType: triangleType,
    reversewords: reversewords
}

module.exports = utils;