/* 
    ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/

// using arrow function 
const sumThreeNumbers = (num1, num2, num3 = 7) => num1 + num2 + num3;
const sumResult = sumThreeNumbers(5, 6, 10);
console.log(sumResult);


// using regular function
function sumThree(a, b, c = 7){
    const sum = a + b + c;
    return sum;
}
const result = sumThree(5, 6, 10);
console.log(result);