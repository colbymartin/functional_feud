import test from 'ava';

let functions = require('./fn');

test('range', function (t) {
    t.deepEqual(functions.range(5, 10), [5, 6, 7, 8, 9, 10]);
    t.deepEqual(functions.range(0, 4), [0, 1, 2, 3, 4]);
    t.deepEqual(functions.range(5, 6), [5, 6]);
});



test('map', function (t) {
    let testfunc1 = function square(x) {return x * x};
    let testfunc2 = function hello(x) {return 'hello ' + x + '!'};
    t.deepEqual(functions.map([1, 2, 3], testfunc1), [1, 4, 9]);
    t.deepEqual(functions.map([], testfunc1), []);
    t.deepEqual(functions.map(['Colby', 'Bob', 'Beatrice'], testfunc2), ['hello Colby!', 'hello Bob!', 'hello Beatrice!']);
});


test('filter', function (t) {
    let testfunc1 = function even(x) {return x % 2 === 0};
    let testfunc2 = function firstT(x) {if (x[0] === 'T') {return x}};
    t.deepEqual(functions.filter([1, 2, 3], testfunc1), [2]);
    t.deepEqual(functions.filter(['Tommy', 'Colby', 'Tad', 'todd'], testfunc2), ['Tommy', 'Tad']);
});

test('reduce', function (t) {
    let testfunc1 = function tallest(tall, next) {if (tall > next) {return tall} else {return next}};
    let testfunc2 = function longestword(word1, word2) {if (word1.length > word2.length) {return word1} else {return word2}};
    let testfunc3 = function sum(num1, num2) {return num1 + num2};
    let testfunc4 = function dif(num1, num2) {return num1 - num2};
    t.deepEqual(functions.reduce([6, 9, 10, 4], testfunc1, 0), 10);
    t.deepEqual(functions.reduce([6, 9, 10, 15], testfunc1, 0), 15);
    t.deepEqual(functions.reduce(['bob', 'bill', 'jeffery', 'tad', 'et'], testfunc2, 'i'), 'jeffery');
    t.deepEqual(functions.reduce(['bob', 'bill', 'will', 'tad', 'et'], testfunc2, 'i'), 'will');
    t.deepEqual(functions.reduce([1, 4, 6, 10], testfunc3, 0), 21);
    t.deepEqual(functions.reduce([20, 5, 8, 2], testfunc4, 50), 15);
});

test('all', function (t) {
    let testfunc1 = function divisbyThree(num) {return num % 3 === 0};
    t.deepEqual(functions.all([15, 18], testfunc1), true);
    t.deepEqual(functions.all([3, 6, 9, 300], testfunc1), true);
    t.deepEqual(functions.all([2, 6, 9, 300], testfunc1), false);
    t.deepEqual(functions.all([2, 4, 300], testfunc1), false);
    t.deepEqual(functions.all([], testfunc1), true);
});

test('some', function (t) {
    let testfunc1 = function divisbyThree(num) {return num % 3 === 0};
    let testfunc2 = function lengthofsix(string) {return string.length === 6};
    t.deepEqual(functions.some([15, 18], testfunc1), true);
    t.deepEqual(functions.some([3, 6, 9, 300], testfunc1), true);
    t.deepEqual(functions.some([2, 6, 9, 300], testfunc1), true);
    t.deepEqual(functions.some([2, 4, 300], testfunc1), true);
    t.deepEqual(functions.some([2, 4, 8], testfunc1), false);
    t.deepEqual(functions.some([], testfunc1), false);
    t.deepEqual(functions.some(['Colby', 'Bobby', 'uejshd', 'tad', 'giggag'], testfunc2), true);
});

test('find', function (t) {
    let testfunc1 = function startwithS(name) {return (name[0] === 's' || name[0] === 'S')};
    let testfunc2 = function containsAsterisk(string) {for (let i = 0; i < string.length; i++) {if (string[i] === '*') { return true }}};
    t.deepEqual(functions.find(['Peg', 'Terry', 'Sam', 'Ronnie', 'Sally'], testfunc1), 'Sam');
    t.deepEqual(functions.find(['Peg', 'James', 'Bi*ll', 'Ed'], testfunc2), 'Bi*ll');
});




