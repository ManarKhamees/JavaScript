//1.	Concatenation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);


//2.	Length
let str3 = "JavaScript";
console.log(str3.length);


//3.	Accessing characters
let str4 = "Programming";
console.log(str4.charAt(0));


//4.	Substrings
let str5 = "coding is fun";
console.log(str5.substring(0, 4));


//5.	Replacing characters
let str6 = "cat";
console.log(str6.replace(/a/g, "e"));


//6.	Uppercase and lowercase
let str7 = "javascript";
console.log(str7.toUpperCase());


//7.	Splitting strings
let str8 = "apple,banana,orange";
console.log(str8.split(","));


//8.	Joining arrays
let arr = ["hello", "world"];
console.log(arr.join(" "));


//9.	Trimming whitespace
let str9 = " hello world ";
console.log(str9.trim());


//10.	Searching for substrings
let str10 = "hello world";
console.log(str10.includes("world"));


//11.	Reversing a string
let str11 = "hello";
console.log(str11.reverse());


//12.	Counting occurrences
let str12 = "elephant";
console.log((str12.match(/e/g) || []).length);


//13.	Checking for palindromes
let str13 = "racecar";
console.log(str13 === str13.split("").reverse().join(""));


//14.	Converting case
let str14 = "hello world";
console.log(str14.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));


//15.	Formatting strings
let num = 1234.5678;
console.log(num.toFixed(2));


//16.	Extracting numbers
let str15 = "There are 3 apples and 2 oranges";
console.log(str15.match(/\d+/g));


//17.	Validating email
let email = "example@email.com";
console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));


//18.	Censoring words
let str16 = "This is a bad word";
console.log(str16.replace(/bad/g, "good"));


//19.	Removing duplicates
let str17 = "aabbc";
console.log([...new Set(str17)].join(""));


//20.	Sorting characters
let str18 = "hello";
console.log(str18.split("").sort().join(""));


//21.	Checking for anagrams
function areAnagrams(str1, str2) {
    let sortedStr1 = str1.split("").sort().join("");  // Sort characters of str1
    let sortedStr2 = str2.split("").sort().join("");  // Sort characters of str2
    return sortedStr1 === sortedStr2;  // Compare sorted strings
}
console.log(areAnagrams("listen", "silent"));  // Output: true


//22.	Reverse Words in a Sentence
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");  // Split into words, reverse, and join back
}
console.log(reverseWords("The quick brown fox"));  // Output: "fox brown quick The"


//23.	Find the Longest Word
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(findLongestWord("Web development is fascinating"));  // Output: "development"


//24.	Palindrome Check
function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");  // Remove non-letters and convert to lowercase
    return cleanedStr === cleanedStr.split("").reverse().join("");  // Check if palindrome
}
console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // Output: true


//25.	Character Frequency
function charFrequency(str) {
    let frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;  // Increment frequency of each character
    }
    return frequency;
}
console.log(charFrequency("mississippi"));  // Output: {m: 1, i: 4, s: 4, p: 2}


//26.	Replace Vowels with Numbers
function replaceVowels(str) {
    return str.replace(/[aeiou]/gi, char => {
        const vowelsMap = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
        return vowelsMap[char.toLowerCase()];  // Replace vowels with corresponding numbers
    });
}
console.log(replaceVowels("Hello World"));  // Output: "H2ll4 W4rld"