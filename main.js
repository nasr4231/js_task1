// Write a program that allow to user enter number then printit
var getNum = prompt("Enter a number:");
console.log(getNum)

// Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
var getNum = prompt("Enter a number:");
if (getNum % 3 == 0 && getNum % 4 == 0) {
    console.log("Yes");
} else {
    console.log("No");
}

// Write a program that allows the user to insert 2 integers then print the max
var getNum1 = prompt('enter frist num:');
var getNum2 = prompt('enter second num:');
if (getNum1 > getNum2) {
    console.log(getNum1);
} else {
    console.log(getNum2);
}

// Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
var getNum = prompt('enter a num: ');

if (getNum < 0) {
    console.log("Negative");
} else {
    console.log("Positive");
}

// Write a program that take 3 integers from user then print the max element
// and the min element.
var getNum1 = prompt('enter frist num:');
var getNum2 = prompt('enter second num:');
var getNum3 = prompt('enter third num:');
if (getNum1 > getNum2 && getNum1 > getNum3) {
    console.log("Max is: " + getNum1);
} else if (getNum2 > getNum1 && getNum2 > getNum3) {
    console.log("Max is: " + getNum2);
} else {
    console.log("Max is: " + getNum3);
}

// Write a program that allows the user to insert integer number then
// check If a number is oven or odd
var getNum = prompt('enter a num: ');
if (getNum % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

var getChar = prompt('enter a char: ');
if (getChar == 'a' || getChar == 'e' || getChar == 'i' || getChar == 'o' || getChar == 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number
var getNum = prompt('enter a num: ');
for (var i = 1; i <= getNum; i++) {
    console.log(i);
}

// Write a program that allows userto insert integerthen print a multiplication table up to 12.
var getNum = prompt('enter a num: ');
for (var i = 1; i <= 12; i++) {
    console.log(getNum + " * " + i + " = " + (getNum * i));
}

// Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number
var getNum = prompt('enter a num: ');
for (var i = 1; i <= getNum; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Writeaprogramthattaketwointegersthenprintthepower
var getNum1 = prompt('enter frist num:');
var getNum2 = prompt('enter second num:');
var result = 1;
for (var i = 1; i <= getNum2; i++) {
    result *= getNum1;
}
console.log(result);

// Write a program to enter marks of five subjects and calculate total, average and
// percentage.
var sub1 = parseFloat(prompt('enter sub1 num:'));
var sub2 = parseFloat(prompt('enter sub2 num:'));
var sub3 = parseFloat(prompt('enter sub3 num:'));
var sub4 = parseFloat(prompt('enter sub4 num:'));
var sub5 = parseFloat(prompt('enter sub5 num:'));
var total = sub1 + sub2 + sub3 + sub4 + sub5;
var average = total / 5;
var percentage = (total / 500) * 100;
console.log("Total: " + total);
console.log("Average: " + average);
console.log("Percentage: " + percentage);

// Write a program to input month number and print number of days in that
// month.
var month = parseInt(prompt("Enter month number (1-12):"));
var days;

if (month === 2) {
    days = 28;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
} else {
    days = 31; 
}

console.log("Number of days: " + days);     

// Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

var sub1 = parseFloat(prompt('enter Physics num:'));
var sub2 = parseFloat(prompt('enter Chemistry num:'));
var sub3 = parseFloat(prompt('enter Biology num:'));
var sub4 = parseFloat(prompt('enter Mathematics num:'));
var sub5 = parseFloat(prompt('enter Computer num:'));       
var total = sub1 + sub2 + sub3 + sub4 + sub5;
var percentage = (total / 500) * 100;
var grade;      

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log("Total: " + total);
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);         

// ******************************** Using switch case*******************************

// Write a program to print total number of days in month
var month = parseInt(prompt("Enter month number (1-12):"));
var days;

switch (month) {
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10:
    case 12: 
        days = 31;
        break;
    case 4: 
    case 6: 
    case 9: 
    case 11: 
        days = 30;
        break;
    case 2: 
        days = 28;
        break;
    default:
        console.log("Invalid month");
}

console.log("Number of days: " + days);

// Write a program to check whether an alphabet is vowel or consonant
var getChar = prompt('enter a char: ').toLowerCase();
switch (getChar) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}           

// Write a program to find maximum between two numbers
var getNum1 = prompt('enter frist num:');
var getNum2 = prompt('enter second num:');      
switch (true) {
    case (getNum1 > getNum2):
        console.log(getNum1);
        break;
    case (getNum2 > getNum1):
        console.log(getNum2);
        break;
    default:
        console.log("Both are equal");
}   

// Write a program to check whether a number is even or odd
var getNum = prompt('enter a num: ');
switch (true) {
    case (getNum % 2 == 0):
        console.log("Even");
        break;
    default:
        console.log("Odd");
}           

// Write a program to check whether a number is positive or negative or zero
var getNum = prompt('enter a num: ');   
switch (true) {
    case (getNum > 0):
        console.log("Positive");
        break;
    case (getNum < 0):
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}   

// Write a program to create Simple Calculator
var num1 = parseFloat(prompt("Enter first number:"));   
var num2 = parseFloat(prompt("Enter second number:"));
var operator = prompt("Enter operator (+, -, *, /):");
var result;         
switch (operator) {     
    case '+':
        result = num1 + num2;
        break;          
    case '-':                           
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;                      
    default:
        console.log("Invalid operator");
        result = null; 
}