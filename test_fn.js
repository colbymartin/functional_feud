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
    t.deepEqual(functions.reduce([6, 9, 10, 4], testfunc1, 0), 10);
    t.deepEqual(functions.reduce([6, 9, 10, 15], testfunc1, 0), 15);
    t.deepEqual(functions.reduce(['bob', 'bill', 'jeffery', 'tad', 'et'], testfunc2, 'i'), 'jeffery');
    t.deepEqual(functions.reduce(['bob', 'bill', 'will', 'tad', 'et'], testfunc2, 'i'), 'bill');
    t.deepEqual(functions.reduce([1, 4, 6, 10], testfunc3, 0), 21);
});

test('all', function (t) {
    let testfunc1 = function divisbyThree(num) {return num % 3 === 0};
    t.deepEqual(functions.all([15, 18], testfunc1), true);
    t.deepEqual(functions.all([3, 6, 9, 300], testfunc1), true);
    t.deepEqual(functions.all([2, 6, 9, 300], testfunc1), false);
    t.deepEqual(functions.all([2, 4, 300], testfunc1), false);
    t.deepEqual(functions.all([], testfunc1), true);
});





