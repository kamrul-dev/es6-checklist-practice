/* 
    5. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
*/

/* 
    map():
        --It calls the function for every element of an array and it returns  all of the function results in a new array.
        1. loop through each element
        2. call function by each element
        3. result push in a new array

        -- Array map has return result
*/

const numbers = [1, 3, 4, 5, 5, 7, 8, 8, 34, 64, 34, 5, 45, 122, 232, 434];
const fiveTimes = numbers.map(number => number * 5);
console.log(fiveTimes);