console.log('Here is : ', 'array')


/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]
*/

let numbers = [1, 7, 9, 45];
let strings = ["Str", "alex", "moh", 'the', 'fox', 'over', 'lazy', 'dog'];


//-------------------------------------------------------
/*
2
What is the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/

console.log("Index of Banana : ", fruits.indexOf("Banana")); // Output: 1
console.log("Index of Tomato : ", fruits.indexOf("Tomato")); // Output: 0


//-------------------------------------------------------
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

let favFood = ["Shawerma", "Shawerma", "Shawerma", "Shawerma", "Shawerma"];
let favSport = ["Football", "Basketball", "Tennis"];
let favMovie = ["The Amazing Spider Man", "Red", "Ghosted", "Knives Out"];


//-------------------------------------------------------
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr){
    return arr[0];
}
console.log(firstOfArray([1, 4, 5]));
console.log(firstOfArray(["t", "u", "g", "x"]));


//-------------------------------------------------------
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr){
    return arr[arr.length - 1];
}
console.log(lastOfArray([1, 4, 5]));
console.log(lastOfArray(["t", "u", "g", "x"]));


//-------------------------------------------------------
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0, 5, 7, 9];

// Remove the first element (0)
array.shift();  // [5, 7, 9]

// Add elements to the beginning
array.unshift(3, 4);  // [3, 4, 5, 7, 9]

// Remove the middle element (5) and replace it with 6
array.splice(2, 1, 6);  // [3, 4, 6, 7, 9]

// Remove the second-to-last element (7)
array.splice(3, 1);  // [3, 4, 6, 9]

// Add elements to the end
array.push(8, 10);  // [3, 4, 6, 9, 8, 10]

// Remove and re-order the last elements
array.splice(3, 0, 8);  // [3, 4, 6, 8, 9, 10]

// Add 1 to the beginning
array.unshift(1);  // [1, 3, 4, 6, 8, 9, 10]

console.log(array);  // Output: [1, 3, 4, 6, 8, 9, 10]


//-------------------------------------------------------
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];

console.log(array2.push(4)); // Output: 5 (array's length)
console.log(array2); // Output: [5, 9, -7, 3.5, 4]

console.log(array2.unshift(10)); // Output: 6 (array's length)
console.log(array2); // Output: [10, 5, 9, -7, 3.5, 4]

console.log(array2.shift()); // Output: 10 (the removed element)
console.log(array2); // Output: [5, 9, -7, 3.5, 4]

console.log(array2.pop()); // Output: 4 (array's length)
console.log(array2); // Output: [5, 9, -7, 3.5]


//-------------------------------------------------------
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr){
    if (arr.length % 2 === 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        let mid1 = arr[(arr.length / 2) - 1];
        let mid2 = arr[arr.length / 2];
        return `${mid1} and ${mid2}`;
    }
}
console.log(middleOfArray([1, 4, 5])); // Output: 4
console.log(middleOfArray(["t", "u", "g", "x"])); // Output: "u and g"


//-------------------------------------------------------
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.pop(); // Or animals.length = 2;
console.log(animals);


//-------------------------------------------------------
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(arr, index){
    return arr[index];  // Or using for loop with checking the equality of i with index
}

var nums = [1, 2, 3, 8, 9];

console.log(indexOfArray(nums, 3));
console.log(indexOfArray(nums, 1));
console.log(indexOfArray(nums, 4));


//-------------------------------------------------------
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search about the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr){
    return arr.slice(0, -1); // Or using pop()
}

var nums = [1, 2, 3, 8, 9];
console.log(arrayExceptLast(nums));


//-------------------------------------------------------
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr, value){
    arr.push(value);
    return arr;
}

var nums = [1, 2, 3, 8, 9];
console.log(addToEnd(nums, 5)); // Output: [1, 2, 3, 8, 9, 5]


//-------------------------------------------------------
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(arr){
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}

var nums = [1, 2, 3, 8, 9];
console.log(sumArray(nums));


//-------------------------------------------------------
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(arr){
    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min; 
}

var nums = [1, 2, 3, 8, 9];
console.log(minInArray(nums));


//-------------------------------------------------------
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(arr, element){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== element) {
            result.push(arr[i]);
        }
    }
    return result;
}

var nums = [1, 2, 3, 8, 9];
console.log(removeFromArray(nums, 8)); 


//-------------------------------------------------------
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { 
            result.push(arr[i]); 
        }
    }
    return result;
}

var nums = [1, 2, 3, 8, 9];
console.log(oddArray(nums));


//-------------------------------------------------------
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(arr){
    if (arr.length === 0) return 0; 

    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum / arr.length;
}

var nums = [1, 2, 3, 8, 9];
console.log(aveArray(nums));


//-------------------------------------------------------
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr){
    if (arr.length === 0) return ""; 
    let shortest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i]; 
        }
    }
    return shortest;
}

var strings2 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArray(strings2));


//-------------------------------------------------------
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(str, char){
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) { 
            count++; 
        }
    }
    return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string, "a"));
console.log(repeatChar(string, "z"));


//-------------------------------------------------------
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr){
    let result = []; 
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i].length % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var strings3 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings3));


//-------------------------------------------------------
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr){
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(arr[i], i));
    }
    return result;
}

var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));


//-------------------------------------------------------
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(arr){
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(nums));
