//-------------------------------------------Part 2------------------------------------------
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(childNums, partnerName, location, job){
  console.log(`You will be a ${job} in ${location}, and married to ${partnerName} with ${childNums} kids.`);
}


//-------------------------------------------------------
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){
  age = age * 7;
  console.log(`Your doggie is ${age} years old in dog years!`);
}
calculateDogAge(1);


//-------------------------------------------------------
/*
3 
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPD){
  const maxAge = 100;
  const ageRemaining = maxAge - age;
  const totalAmount = amountPD * 365 * ageRemaining;
  console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(30, 3);


//-------------------------------------------------------
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name){
  console.log("Hello " + name);
}
greet("Manar");


//-------------------------------------------------------
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

/* - Firstly.. JavaScript doesn't support overloading with different data types of parameters !! and (x) is not defined, so you must instead use (cat).
   - Secondly.. 7 and '7' are not valid parameter names, so parameters must be valid identifiers..
   - Thirdly.. multiplying a string 'x' with a number will result a NaN value. 
   - Finally.. the correctness of the above is :*/ 

function double(value) {
  return 2 * value;
}
console.log(double(7));    // Outputs: 14
console.log(double('7'));  // Outputs: 14 (JavaScript coerces '7' to the number 7)


//-------------------------------------------------------
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;
*/

function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}


//-------------------------------------------------------
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num){
  console.log(num ** 3);
}
cube(4);


//-------------------------------------------------------
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2){
  console.log(num1 * num2);
}
multiply(4,5);


//-------------------------------------------------------
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/

function canIGetADrivingLicense(age){
  if (age >= 20)
    console.log("Yes you can !!");
  else
    console.log(`Please come back after ${20 - age} years to get one..`);
}
canIGetADrivingLicense(22);
canIGetADrivingLicense(18);


//-------------------------------------------------------
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2){
  if (str1.length === str2.length)
    console.log(true);
  else
    console.log(false);
}
sameLength("tree","clue");
sameLength("tree","car");


//-------------------------------------------------------
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1, num2){
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
largerNubmer(5, 6);
largerNubmer(5, 3);


//-------------------------------------------------------
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3
*/

function smallerNumber(num1, num2, num3) {
  let smallest = num1;

  if (num2 < smallest) {
    smallest = num2;
  }

  else if (num3 < smallest) {
    smallest = num3;
  }

  return smallest;
}
console.log(smallerNumber(8, 6, 7));  
console.log(smallerNumber(5, 99, 34));  
console.log(smallerNumber(5, 99, 3));  
console.log(smallerNumber(5, 3, 3)); 


//-------------------------------------------------------
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by XXXXXXXXXXXX -> tr

Ex: shorterString("air","tr","car","github","by")
=> by XXXXXXXXXXXX -> tr
*/

function shorterString(str1, str2, str3, str4, str5) {
  let shortest = str1; 

  function stringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
      length++;
    }
    return length;
  }

  if (stringLength(str2) < stringLength(shortest)) {
    shortest = str2;
  }

  else if (stringLength(str3) < stringLength(shortest)) {
    shortest = str3;
  }

  else if (stringLength(str4) < stringLength(shortest)) {
    shortest = str4;
  }
  
  else if (stringLength(str5) < stringLength(shortest)) {
    shortest = str5;
  }

  return shortest;
}
console.log(shorterString("air", "school", "car", "by", "github"));
console.log(shorterString("air", "tr", "car", "by", "github"));
console.log(shorterString("by", "tr", "car", "air", "github"));


//-------------------------------------------------------
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(str1, str2, str3, str4) {
  let longest = str1;

  function stringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
      length++;
    }
    return length;
  }

  if (stringLength(str2) > stringLength(longest)) {
    longest = str2;
  }

  if (stringLength(str3) > stringLength(longest)) {
    longest = str3;
  }

  if (stringLength(str4) > stringLength(longest)) {
    longest = str4;
  }

  return longest;
}
console.log(longerString("air", "school", "car", "github"));
console.log(longerString("air", "schoo", "car", "github"));
console.log(longerString("air", "school", "github", "car")); 
console.log(longerString("github", "school", "air", "car"));


//-------------------------------------------------------
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/

function isEven(num){
  if (num % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isEven(1);
isEven(2);


//-------------------------------------------------------
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/

function isOdd(num) {
  if (num % 2 === 0) {
    console.log("false");
  } else {
    console.log("true");
  }
}
isOdd(1);
isOdd(2);


//-------------------------------------------------------
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/

function positive(num) {
  if (num >= 0) {
    console.log(num);
  } else {
    console.log(num * -1);
  }
}
positive(4);
positive(-5);


//-------------------------------------------------------
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(fname, lname){
  console.log(fname + " " + lname);
}
fullName("Manar","Khamees");


//-------------------------------------------------------
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8
*/

function average(num1, num2, num3, num4, num5) {
  return (num1 + num2 + num3 + num4 + num5) / 5;
}
console.log(average(1, 2, 3, 4, 5));
console.log(average(5, 7, 9, 3, 5));


//-------------------------------------------------------
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475
*/

function randomNumber{
  return Math.random();
}
console.log(randomNumber());


//-------------------------------------------------------
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23
*/

function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(1, 8));
console.log(randomBetweenNumbers(3, 100));


//-------------------------------------------------------
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversity(score) {
  if (score >= 95 && score <= 100) {
      return "A";
  } else if (score >= 85 && score <= 94) {
      return "B";
  } else if (score >= 70 && score <= 84) {
      return "C";
  } else if (score >= 50 && score <= 69) {
      return "D";
  } else if (score >= 0 && score <= 49) {
      return "F";
  } else 
  return "Invalid Score !!";
}
console.log(scoreInUniversity(96));
console.log(scoreInUniversity(3));
console.log(scoreInUniversity(71));


//-------------------------------------------------------
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3
*/

let count = 0;
function counter() {
  return ++count;
}
console.log(counter());
console.log(counter());
console.log(counter());


//-------------------------------------------------------
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
  let temp = count;
  count = 0;
  return `${temp} and the counter is reset now`;
}
console.log(counter());       // Output: 1
console.log(counter());       // Output: 2
console.log(resetCounter());  // Output: "2 and the counter is reset now"
console.log(counter());       // Output: 1
console.log(counter());       // Output: 2
console.log(resetCounter());  // Output: "2 and the counter is reset now"
console.log(counter());       // Output: 1