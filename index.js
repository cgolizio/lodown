'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Identity takes any variable, of any datatype, and returns the
 * variable unchanged.
 * 
 * @param {*} value: Any type of value.
 * 
 * @return {*}: Returns the passed in value, unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Defines the datatype of any value.
 * 
 * @param {*} value: Any type of value.
 * 
 * @return {String}: Returns a string which states the datatype of the passed in
 * value.
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    }
    else if (value === null) {
        return "null";
    }
    else if (typeof value === "number") {
        return "number";
    }
    else if (typeof value === "function") {
        return "function";
    }
    else if (value === undefined) {
        return "undefined";
    }
    else if (typeof value === "string") {
        return "string";
    }
    else if (value === true || value === false) {
        return "boolean";
    }
    else {
        return "object";
    }
}
module.exports.typeOf = typeOf;


/**
 * first: Takes an array and a number, and will return the first number of items
 * from the array. Before it does that, it will first check whether or not the
 * passed in array is actually an array. If it is not, it will return an empty
 * array ([]). Then it makes sure that a number is passed into the function, and
 * also confirms that the number is actually a number. If it is not included, or
 * the number is not a number, it will return the very first item from the array.
 * If the number is greater than the length of the array, the entire array will
 * be returned.
 * 
 * @param {Array} array: The array that will have some of its items returned.
 * @param {Number} num: The number which indicates how many of the array's items
 * to return.
 * 
 * @return {Array}: Returns an array containing the first number of values of the
 * original array, based off the passed in number.
 */
function first(array, num) {
    if (!Array.isArray(array) || num < 0) {
        return [];
    }
    if (!num || isNaN(num)) {
        return array[0];
    }
    if (num > array.length) {
        return array;
    }
    return array.slice(0, num);
}
module.exports.first = first;


/**
 * last: Takes an array and a number, and will return the last number of items
 * from the array. Before it does that, it will first check whether or not the
 * passed in array is actually an array, and it will check if the passed in
 * number is of positive value. If one of these is not, it will return an empty
 * array ([]). Then it makes sure that a number is passed into the function, and
 * also confirms that the number is actually a number. If it is not included, or
 * the number is not a number, it will return the very last item from the array.
 * If the number is greater than the length of the array, the entire array will
 * be returned.
 * 
 * @param {Array} array: The array from which items will be returned.
 * @param {Number} num: The number of items to return, starting from the last
 * element, and moving towards the first.
 * 
 * @return {Array}: An array containing the last number of items from the passed
 * in array, based on the passed in number.
 */
function last(array, num) {
    if (!Array.isArray(array) || num < 0) {
        return [];
    }
    if (!num || isNaN(num)) {
        return array[array.length - 1];
    }
    if (num > array.length) {
        return array;
    }
    var reversed = array.reverse();
    return reversed.slice(0, num).reverse();
}
module.exports.last = last;


/**
 * indexOf: Designed to loop through an array, and return the index of the first
 * occurence of the passed in value within the array. It will first check if the
 * array is an actual array. Then it will check if the array contains the passed
 * in value. If it is not an array, or it does not contain the value, -1 will be
 * returned.
 * 
 * @param {Array} array: The array through which the function will loop through
 * in search of the passed in value.
 * @param {*} value: The value that the function will search for in the array.
 * 
 * @return {Number}: A number representing the index of the value within the
 * array.
 */
function indexOf(array, value) {
    if (!Array.isArray(array) || !array.includes(value)) {
        return -1;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
}
module.exports.indexOf = indexOf;


/** contains: This function will iterate through a passed in array, in search of
 * a value which is also passed in. It will return a boolean value depending on
 * whether or not it finds the value.
 * 
 * @param {Array} array: The array which will be searched through.
 * @param {*} value: The value to search for in the array.
 * 
 * @return {Boolean}: True or false depending on whether or not the function
 * finds the value.
 */
function contains(array, value) {
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: This function takes an array, and removes all the values that are
 * not unique. In other words, it removes any duplicate values inside the array.
 * It then returns an array containing all the unique values from the original
 * array.
 * 
 * @param {Array} array: The array that will be iterated through.
 * 
 * @return {Array}: An array containing all the non-duplicated values from the
 * original array.
 */
function unique(array) {
    var noDuplicates = [];
    for (let i = 0; i < array.length; i++) {
        if (indexOf(noDuplicates, array[i]) === -1) {
            noDuplicates.push(array[i]);
        }
    }
    return noDuplicates;
}
module.exports.unique = unique;


/**
 * filter: Designed to take an array and a function. It will iterate through the
 * array, and call the passed in function passing in the arguments of the item
 * itself, the item's index, and the array. The function will then resolve to
 * either true or false. All of the array items which resolve to true will then
 * be placed inside a new array, and lastly the new array will be returned.
 * 
 * @param {Array} array: The array which will have some of its elements filtered
 * passed into the returned array.
 * @param {Function} func: The function used to test each element, and ultimately
 * be the deciding factor of whether or not a given element will be pushed into
 * the final array.
 * 
 * @return {Array}: An array containing all the elements, from the original array,
 * that resolved to true after being passed into the input function.
 */
function filter(array, func) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            result.push(array[i]);
        }
    }
    return result;
}
module.exports.filter = filter;


/**
 * reject: This function will take an array and a function, iterate through the
 * array, and pass its items, their indexes, and the array into separate function
 * calls for each of the items. If the function resolves to false, the item for
 * that specific call will be placed inside a new array. Finally the new array
 * will be returned.
 * 
 * @param {Array} array: The array which will have its elements passed into the
 * passed in function.
 * @param {Function} func: The function which will test each item of the array.
 * 
 * @return {Array}: A new array containing all the elements from the original
 * array that resolve to false after being passed into the function.
 */
function reject(array, func) {
    var rejected = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            rejected.push(array[i]);
        }
    }
    return rejected;
}
module.exports.reject = reject;


/**
 * partition: This function takes in an array and a function. It will pass each
 * element from the array through the function. If the element resolves to true,
 * or if it is of truthy value, that element will be placed into a new array. If
 * the element resolves to false, or if it is of falsey value, that element will 
 * be placed into different, new array. Both of these new arrays will then be
 * placed inside of an array, and the array of arrays will be returned. This will
 * appear as so: [ [<truthy-elements>], [<falsey-elements>] ]
 * 
 * @param {Array} array: The array which will have its values evaluated and
 * ultimately placed into one of the two groups.
 * @param {Function} func: The function used to test each element within the
 * array.
 * 
 * @return {Array}: An array containing two sub-arrays: the first with the truthy
 * elements from the original array, and the second with the falsey elements.
 */
function partition(array, func) {
    var truthy = [];
    var falsey = [];
    var result = [];
    for (let i = 0; i < array.length; i++) {
        func(array[i]) === true ? truthy.push(array[i]) : falsey.push(array[i]);
    }
    result.push(truthy, falsey);
    return result;
}
module.exports.partition = partition;


/**
 * map: Map takes in a collection (can be either an array or an object), and a
 * function. It passes each value within the collection through the function,
 * and pushes the result of each function call into a new array. The new array
 * is then returned.
 * 
 * @param {Array or Object} collection: The collection of values, each of which
 * will be passed into the function.
 * @param {Function} func: The function which will run for each value inside the
 * collection. Each return will be placed inside a new array.
 * 
 * @return {Array}: The new array containing the results of each function call,
 * for each value in the collection.
 */
function map(collection, func) {
    var result = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection));
        }
    }
    else {
        for (var key in collection) {
            result.push(func(collection[key], key, collection));
        }
    }
    return result;
}
module.exports.map = map;


/**
 * pluck: Pluck takes an array, filled with objects, and a string which represents
 * a property. For each of the objects inside the array, it will look for the
 * key of the passed in property. It then takes the value attatched to that key,
 * for each of the objects, and places them inside a new array. That new array is
 * then returned.
 * 
 * @param {Array} arrOfObj: An array filled with objects. Each object will have
 * a value attatched to the passed in property/key pushed into the returned array,
 * if the property exists in the objects.
 * @param {String} prop: The property that will be searched for, and the value of
 * which will be placed in the returned array.
 * 
 * @return {Array}: An array containing the values of the passed in property key
 * in each of the objects that has the key in question.
 */
function pluck(arrOfObj, prop) {
    var result = [];
    map(arrOfObj, function(obj) {
        return result.push(obj[prop]);
    })
    return result;
}
module.exports.pluck = pluck;


/**
 * every: This function takes in either an array or an object, and a function. It
 * will call the function for each value inside the collection, passing in the
 * value, either its index or its key, and the collection itself. The function
 * will then resolve to either true or false. If all the values resolve to true,
 * then true is returned; if even one of the values resolves to false, then false
 * is returned. If the function is not provided in the function call, 'every' will
 * evaluate each item in the collection, and return true if they're ALL of truthy
 * value, and false otherwise.
 * 
 * @param {Array or Object} collection: The array or object which will have its
 * values passed through the passed in function.
 * @param {Function} func: The function to test each value of the array or object.
 * 
 * @return {Boolean}: True will be returned if all of the values in the collection
 * resolve to true, or if they are all truthy. Otherwise, false will be returned.
 */
function every(collection, func) {
    let result = true;
    if (!func) {
        for (let key in collection) {
            if (collection[key] === false) {
                result = false;
            }
        }
    }
    else {
        each(collection, function(item, i, collection) {
            if (func(item, i, collection) === false) {
                result = false;
            }
        })
    }
    return result;
}
module.exports.every = every;


/**
 * some: The 'some' function takes in either an array or an object, and a function.
 * It will call the function for each value inside the collection, passing in the
 * value, either its index or its key, and the collection itself. The function
 * will then resolve to either true or false. If all the values resolve to false,
 * then false is returned; if even one of the values resolves to true, then true
 * is returned. If the function is not provided in the function call, 'some' will
 * evaluate each item in the collection, and return false if they're ALL of false
 * value, and true if even one of them is truthy.
 * 
 * @param {Array or Object} collection: The array or object which will have its
 * values passed through the passed in function.
 * @param {Function} func: The function that will test each value of the array
 * or object.
 * 
 * @return {Boolean}: True will be returned if at least one of the values in the
 * collection resolves to true, or if at least one of them is truthy. If all the
 * function calls evaluate to false, or if all of the values are falsey, then
 * false will be returned.
 */
function some(collection, func) {
    var result = false;
    if (!func) {
        for (let key in collection) {
            if (collection[key]) {
                result = true;
            }
        }
    }
    else {
        each(collection, function(item, i, collection) {
            if (func(item, i, collection)) {
                result = true;
            }
        })
    }
    return result;
}
module.exports.some = some;


/**
 * reduce: Reduce takes in an array, a function and a seed. It will call the
 * function for each value, passing in the result from the previous function call,
 * the current value, and its index. The first time the passed in function is
 * called, the seed is used for the previous result. If no seed is passed into
 * the function call, the first element of the array is used as the previous
 * result. When the function is called with the final element in the array, the
 * result of that final function call is returned.
 * 
 * @param {Array} array: The array which will have its elements iterated through,
 * and passed into the passed in function.
 * @param {Function} func: The function that will be called for each element
 * within the array.
 * @param {*} seed: The initial value, passed into the function as the previous
 * result during the first time the passed in function is called.
 * 
 * @return {*}: The result of the final function call will be returned.
 */
function reduce(array, func, seed) {
    var prev = seed;
    if (seed === undefined) {
        prev = array[0];
        for (let i = 1; i < array.length; i++) {
            prev = func(prev, array[i], i);
        }
    }
    else {
        each(array, function(item, i, array) {
            prev = func(prev, array[i], i, array);
        })
    }
    return prev;
}
module.exports.reduce = reduce;


/**
 * extend: Extend takes at least two objects, but more than two can be passed in
 * if desired. The properties from the second object will be copied into the first
 * object. If more objects are included in the function call, their properties
 * will also be copied into the first object. The updated object will then be
 * returned.
 * 
 * @param {Object} obj: The object which will be updated before being returned.
 * 
 * @return {Object}: The first object passed into the function, but with additional
 * properties; the new properties in the object will be copied from any subsequent
 * object arguments when the function is called.
 */
function extend(obj) {
    each(Array.from(arguments), function(item, i, collection) {
        Object.assign(obj, item);
    })
    return obj;
}
module.exports.extend = extend;
