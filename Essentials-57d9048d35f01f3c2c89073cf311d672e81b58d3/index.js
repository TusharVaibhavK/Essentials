document.getElementById("btn").addEventListener("click", function(){
    let n = parseInt(document.getElementById("num").value);
    let r = parseInt(document.getElementById("range").value);
    let prod = "";

    for(let i = 1; i<=r; i++){
        prod +=n+"x"+i+"="+n*i+"<br>";
    }

    document.getElementById("result").innerHTML = prod;
});

// Prime Number Generator

 // for (let num = 2; num <= n; num++) {
 //     let isPrime = true;
 //     for (let i = 2; i <= Math.sqrt(num); i++) {
 //         if (num % i === 0) {
 //             isPrime = false;
 //             break;
 //         }
 //     }
 //     if (isPrime) {
 //         console.log(num);
 //     }
 // }


// BMI Calculator

// let weight = parseFloat(document.getElementById("weight").value);
// let height = parseFloat(document.getElementById("height").value);
// let bmi = weight / (height * height);
// document.getElementById("result").innerHTML = bmi;


// Palindrome Checker

// let str = document.getElementById("str").value;
// let isPalindrome = true;
// for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }


// Fibonacci Series

// let n1 = 0, n2 = 1, next;
// console.log(n1);
// console.log(n2);
// for (let i = 3; i <= n; i++) {
//     next = n1 + n2;
//     console.log(next);
//     n1 = n2;
//     n2 = next;
// }


// Factorial Calculator

// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }
// console.log(fact);


// Generate pattern 

// for (let i = 1; i <= n; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += j + " ";
//     }
//     console.log(pattern);
// }



// Uppercase to Lowercase

// Function to convert a string to lowercase
// function convertToLowercase(str) {
//     return str.toLowerCase();
// }

// // Example usage
// let uppercaseString = "HELLO WORLD";
// let lowercaseString = convertToLowercase(uppercaseString);

// console.log(lowercaseString);  // Output: "hello world"



// Count frequency of words in a text box

// let text = document.getElementById("text").value;
// let words = text.split(" ");
// let wordFrequency = {};
// for (let word of words) {
//     if (word in wordFrequency) {
//         wordFrequency[word]++;
//     } else {
//         wordFrequency[word] = 1;
//     }
// }
// console.log(wordFrequency);


// Fibonacci Series

// let n1 = 0, n2 = 1, next;
// console.log(n1);
// console.log(n2);
// for (let i = 3; i <= n; i++) {
//     next = n1 + n2;
//     console.log(next);
//     n1 = n2;
//     n2 = next;
// }


// largest of three numbers

// let a = 5, b = 10, c = 15;
// let largest = a;
// if (b > largest) {
//     largest = b;
// }
// if (c > largest) {
//     largest = c;
// }
// console.log(largest);


// Program that accepts any mathemtical expression in input field and evaluates the expression

// let expression = document.getElementById("expression").value;
// let result
// try {
//     result
// } catch (error) {
//     console.log("Invalid expression");
// }




