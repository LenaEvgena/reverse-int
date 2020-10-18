module.exports = function reverse (n) {
    let num = Math.abs(n);
    let result = num.toString().split('').reverse().join('');

    return result;


}
