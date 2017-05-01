
module.exports = {
    range: range,
    map: map,
    filter: filter,
    reduce: reduce,
    all: all,
    some: some,
    find: find, 
};



/////////////////// 1. Range ///////////////////

// range(min, max) return an array of numbers between min and max including both min and max.
// inputs: Two numbers
// outputs: array of numbers between the two (including they themselves);
// 1. create an empty array
// 2. loop from count = min to count <= max
// 3. for each count, push that count onto the empty array. Return that array

function range(min, max) {
    let rangeArray = [];
    for (let count = min; count <= max; count++) {
        rangeArray.push(count);
    }
    return rangeArray;
}


/////////////////// 2. Map ///////////////////

// map(array, func) returns an array of the same length as the input array but with func 
// applied to each (just like built-in map). 
// inputs: an array and a function
// outputs: an array of outputs of each item in input array run through input function
// 1. create empty array
// 2. loop through each item in input array
// 3. pass each item through input function
// 4. push output onto empty array
// 5. return empty array

function map(maparray, mapfunction) {
    let mapOutput = [];
    for (let i = 0; i < maparray.length; i++) {
        mapOutput.push(mapfunction(maparray[i]));
    }
    return mapOutput;
}


/////////////////// 3. Filter ///////////////////

// filter(array, func) returns an array containing a subset of the input array based 
// on the return value of func (just like built-in filter).
// inputs: and array and a function
// outputs: an array of outputs of each item in input array that passes (boolean) the input function
// 1. create empty array
// 2. loop through each item in input array and run through the input function
// 3. if the input[count] passes, add to empty array
// 4. return empty array

function filter(filterarray, filterfunction) {
    let filterOutput = [];
    for (let i = 0; i < filterarray.length; i++) {
        if (filterfunction(filterarray[i])){
            filterOutput.push(filterarray[i]);
        }
    }
    return filterOutput;
};


/////////////////// 4. Reduce ///////////////////

// reduce(array, func, start) returns a single value derived from using func to merge two values 
// from array until only one value remains (just like built-in reduce). start is the initial value.
// inputs: an array, a function, and a starting value;
// output: value
// 1. create an empty value. Set it equal to the starting value
// 2. run a loop through each value in array, compare to start value
// 3. whichever value emerges from comparative function, make that the defined value
// 4. return that value 

function reduce(reducearray, reducefunction, startvalue) {
    let value = startvalue;
    for (let i = 0; i < reducearray.length; i++) {
        value = reducefunction(value, reducearray[i]);
    }
    return value;
};


/////////////////// 5. All ///////////////////

// all(array, func) returns true if calling func with each element of array returns true in all cases
// inputs: array and a function
// outputs: boolean (true or false)
// 1. Assign a boolean value to true
// 2. loop through array, running each value into function
// 3. if function does not pass, return false / if function passes at each value, return inital boolean value

function all(allarray, allfunction) {
    let answer = true;
    for (let i = 0; i < allarray.length; i++) {
        if (!allfunction(allarray[i])) {
            return false;
        }
    }
    return answer;
} 


/////////////////// 6. Some ///////////////////

// some(array, func) returns true if calling func with each element of array returns true in at least one case
// inputs: array and a function
// outputs: boolean (true or false)
// 1. assign boolean to false
// 2. loop through array, running each value into function 
// 3. If, at any point a function passes, return true for the function

function some(somearray, somefunction) {
    let some = false;
    for (let i = 0; i < somearray.length; i++) {
        if (somefunction(somearray[i])) {
            return true;
        }
    }
    return some;
}


/////////////////// 7. Find ///////////////////

// find(array, func) returns the first element where calling func with the element returns true
// inputs: array and a function 
// outputs: a single string or number
// 1. run loop through array
// 2. pass each value through function. Once one passes, return that value. 
// 3. If none pass, return false

function find(findarray, findfunction) {
    for (let i = 0; i < findarray.length; i++) {
        if (findfunction(findarray[i])) {
            return findarray[i];
        }
    }
    return false;
}