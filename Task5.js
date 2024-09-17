//-------------------------------------------Map Part------------------------------------------

/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/

let arr = [2, 5, 100];
let doubledNums = doubleNumbers(arr);

function doubleNumbers(arr){ 
    return arr.map(function(num) {
        return num * 2;
    }); 
  }
  console.log(doubledNums); 


//-------------------------------------------------------
  /*
   * Exercise 2 : 
   * 
   * Take an array of numbers and make them strings
   *
   * Test Case: 
   *
   * console.log(stringItUp([2, 5, 100]));
   * 
   * Result:
   * ["2", "5", "100"]
  */
  
  let strings = stringItUp(arr);
  function stringItUp(arr){
    return arr.map(function(num) {
        return num.toString();
    }); 
  }
  console.log(strings); 

  
  //-------------------------------------------------------
  /*
   * Exercise 3:  
   * 
   * Capitalize each of an array of names
   *
   * Test Case: 
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
   * 
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
  */
  
  let names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
  let capitalizedNames = capitalizeNames(names);

  function capitalizeNames(arr){
    return arr.map(function(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()    
    }); 
  }
  console.log(capitalizedNames); 

  
  //-------------------------------------------------------
  /*
   * Exercise 4:  
   * 
   * Make an array of strings of the names
   *
   * Test Case: 
   *
   * console.log(namesOnly([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   *   ])); 
   * 
   * Result:
   *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  */
  
  let actors = [ {name: "Angelina Jolie", age: 80},
                 {name: "Eric Jones", age: 2},
                 {name: "Paris Hilton", age: 5},
                 {name: "Kayne West", age: 16},
                 {name: "Bob Ziroll", age: 100} ];
  
  let justNames = namesOnly(actors);               
  function namesOnly(arr){
    return arr.map(function(name) {
        return name.name;
    })
  }
  console.log(justNames);


  //-------------------------------------------------------
  /*
   * Exercise 5:  
   * 
   * Make an array of strings of the names saying whether or not they can go to The Matrix
   *
   * Test Case: 
   *
   * console.log(makeStrings([
   *    {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ]));  
   * 
   * Result:
   * 
   * ["Angelina Jolie can go to The Matrix", 
   * "Eric Jones is under age!!", 
   * "Paris Hilton is under age!!", 
   * "Kayne West is under age!!", 
   * "Bob Ziroll can go to The Matrix"]
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
   */
  
  let goingToMatrix = makeStrings(actors);               

  function makeStrings(arr){
    return arr.map(function(name) {
        if (name.age >= 18){
            return `${name.name} can go to The Matrix`;
        }
        else {
            return `${name.name} is under age!!`;
        }
    })
  }
  console.log(goingToMatrix);
  

  //-------------------------------------------------------
  /*
   * Exercise 6:  
   * 
   * Make an array of the names in h1s, and the ages in h2s
   *
   * Test Case: 
   *
   * console.log(readyToPutInTheDOM([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ])); 
   * 
   * Result:
   * 
   * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
   * "<h1>Eric Jones</h1><h2>2</h2>", 
   * "<h1>Paris Hilton</h1><h2>5</h2>", 
   * "<h1>Kayne West</h1><h2>16</h2>", 
   * "<h1>Bob Ziroll</h1><h2>100</h2>"]
   */
  
  let inDOM = readyToPutInTheDOM(actors);               

  function readyToPutInTheDOM(arr){
    return arr.map(function(name) {
        return `<h1>${name.name}</h1><h2>${name.age}</h2>`;
    });
  }
  console.log(inDOM);

  
  //-------------------------------------------------------
  /*
  * Exercise 7:
  * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
  *
  * Test Cases:
  *   Test Case 1:  doubleValues([1,2,3]) 
  *   Test Case 2:  doubleValues([1,-2,-3])  
  *
  * Result:
  * Test Case 1: [2,4,6] 
  * Test Case 2: [2,-4,-6]
  */
  
  let arr2 = [1, -2, -3];
  let doubledNums2 = doubleValues(arr2);

  function doubleValues(arr){
    return arr.map(function(num) {
        return num * 2;
    }); 
  }
  console.log(doubledNums2); 
 

    //-------------------------------------------------------
    /*
    * Exercise 8:
    * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    *
    *
    * Test Cases :
    *   Test Case 1:  valTimesIndex([1,2,3])  
    *   Test Case 2:  valTimesIndex([1,-2,-3]) 
    * 
    * Result
    * Test Case 1: [0,2,6]
    * Test Case 2: [0,-2,-6]
    */
    
    /*function valTimesIndex(arr){      
    }*/

    let nums = [1,-2,-3];
    let indexed = nums.map((num, index) => num * index);
    console.log(indexed); 

    /* OR :
    const valTimesIndex = (num, index) => num * index;
    let nums = [1, -2, -3];
    let indexed = nums.map((num, index) => valTimesIndex(num, index));
    console.log(indexed); 
    */ 

    
    //-------------------------------------------------------
    /*
    * Exercise 9:
    * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
    * of that key in each object.
    * 
    * Test Case:
    * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
    * 
    * Result:
    * ['Elie', 'Tim', 'Matt', 'Colt']
    */
    
    function extractKey(arr, key) {
        return arr.map(function(obj) {
            return obj[key];
        });
    }
    console.log(extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'name'));
    

    //-------------------------------------------------------
    /*
    * Exercise 10:
    * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
    * 
    * Examples:
    * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) 
    * // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
    */
    
    function extractFullName(arr) {
        return arr.map(function(obj) {
            return obj.first + ' ' + obj.last;
        });
    }
    
    console.log(extractFullName([
        { first: 'Elie', last: 'Schoppik' }, 
        { first: 'Tim', last: 'Garcia' }, 
        { first: 'Matt', last: 'Lane' }, 
        { first: 'Colt', last: 'Steele' }
    ]));


//-------------------------------------------Foreach Part------------------------------------------
/*

* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/

function doubleValues(arr) {
    let result = [];
    arr.forEach(function(val) {
        result.push(val * 2);
    });
    return result;
}
console.log(doubleValues([5, 1, 2, 3, 10]));


 //-------------------------------------------------------
 /*
 * Exercise 2:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3]) 
 *   onlyEvenValues([5,1,2,3,10]) 
 * 
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */

function onlyEvenValues(arr) {
    let result = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            result.push(val);
        }
    });
    return result;
}
console.log(onlyEvenValues([5, 1, 2, 3, 10]));


 //-------------------------------------------------------
 /*
 * Exercise 3:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
 *  
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */
 
function showFirstAndLast(arr) {
    let result = [];
    arr.forEach(function(str) {
        result.push(str.charAt(0) + str.charAt(str.length - 1));
    });
    return result;
}
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));


 //-------------------------------------------------------
 /*
 * Exercise 4:
 * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
 * to the function with the new key and value added for each object 
 * 
 * Test Cases:
 *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
 *   
 * Result:
 *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
 *
 */

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(obj) {
        obj[key] = value;
    });
    return arr;
}
console.log(addKeyAndValue(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'title', 
    'instructor'
));


 //-------------------------------------------------------
 /*
 * Exercise 5:
 * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
 * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
 * 
 * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
 * Test Cases 2:  vowelCount('Tim') // {i:1};
 * Test Cases 3:  vowelCount('Matt') // {a:1})
 * Test Cases 4:  vowelCount('hmmm') // {};
 * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 *   
 * Result:
 * Test Cases 1: {e:2,i:1};
 * Test Cases 2: {i:1};
 * Test Cases 3: {a:1})
 * Test Cases 4: {};
 * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 */
 
function vowelCount(str) {
    let vowels = 'aeiou';
    let vowelCount = {};
    let lowerStr = str.toLowerCase();

    lowerStr.split('').forEach(function(char) {
        if (vowels.includes(char)) {
            vowelCount[char] = vowelCount[char] ? vowelCount[char] + 1 : 1;
        }
    });

    return vowelCount;
}
console.log(vowelCount('Elie')); // {e:2, i:1}
console.log(vowelCount('Tim')); // {i:1}
console.log(vowelCount('Matt')); // {a:1}
console.log(vowelCount('hmmm')); // {}
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1}