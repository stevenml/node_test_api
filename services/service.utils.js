function token() {
    return "ca97ee12-47ce-4606-add4-c27fd04e1b1b";
}

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function triangleType(n1, n2, n3) {
    function isInvalid(n) {
        return typeof n !== 'number';
    }

    if (isInvalid(n1) || isInvalid(n2) || isInvalid(n3))
        throw new TypeError('Not all numbers');
    if ((n1 + n2 >= n3) || (n1 + n3 >= n2) || (n2 + n3 >= n1))
        throw new RangeError(`Sum of any two sides shouldn't be greater than the third side`);

    var len = Object.keys([n1, n2, n3].reduce((a, b) => { a[b] = (a[b] || 0) + 1; return a; }, {})).length;

    return len === 3 ? 'Scalene' :
        len === 2 ? 'Isosceles' : 'Equilateral';
}


var utils = {
    token = token,
    fibonacci = fibonacci,
    triangleType = triangleType
    
}

module.exports = utils;