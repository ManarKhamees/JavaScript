//-------------------------------------------Part 1------------------------------------------
//1) Birthdate Month
let month = prompt("Please enter your birthdate month (as a number) :");

switch (parseInt(month)) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month !!");
}


//-------------------------------------------------------
//2) Right-Angled Triangular Numbers Pattern By Nested Loop
let count = 1;
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += count + " ";
        count++;
    }
    console.log(row.trim());  //trim -> تقليم للسبيسز
}


//-------------------------------------------------------
//3) Numbers Divisible by 13
for (let i = 1; i <= 1000; i++) {
    if (i % 13 === 0) {
        console.log(i);
    } else {
        continue;  //additional
    }
}


//-------------------------------------------------------
//4) Multiplication Using the Summation Only
let sum = 0;
function multiplication2(num1,num2 ) {
    for (let i = 0; i < num1; i++) {
        sum += num2;
    }
    return sum;
}
console.log(multiplication2(4,5));


//-------------------------------------------------------
//5) Calculating the Triangle's Area
function triangleArea(base, height) {
    return (base * height) / 2;
}
console.log(triangleArea(4,5));


//-------------------------------------------------------
//6) isPandigital Func (if the num contains all numbers (0-9) or not)
function isPandigital(num) {
    for (let i = 0; i <= 9; i++) {
        if (!num.toString().includes(i.toString())) {
            return false;
        }
    }
    return true;
}
console.log(isPandigital(98140723568910)); // true
console.log(isPandigital(90864523148909)); // false (7 is missed)


//-------------------------------------------------------
//7) Favorite Drink With Its Price Using Switch
let drink = prompt("Enter your favorite drink :");

switch (drink.toLowerCase()) {
    case "tea":
        console.log("The price of a tea drink is 1 dollar");
        break;
    case "coffee":
        console.log("The price of a coffee drink is 2 dollars");
        break;
    case "banana":
        console.log("The price of a banana drink is 3 dollars");
        break;
    case "apple":
        console.log("The price of an apple drink is 4 dollars");
        break;
    default:
        console.log("Sorry, this drink is not available !!");
}