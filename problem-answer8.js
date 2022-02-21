/* 
    8. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
*/

/* Destructuring:
    --The destructuring assignment syntax is a JavaScript expression that makes it 
        possible to unpack values from arrays, or properties from objects, into distinct variables.
*/

const obj = { name: 'cycle', price: 5000, color: 'black'};

const {name, price, color} = obj;
console.log(name, price, color);
