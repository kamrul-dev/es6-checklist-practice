/* 
   2. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

// creating object
const myInfo = {
    id: '1810xxx',
    sl: 12,
    semester : 'final Semester',
}

// decalring variable with const
const firstName = 'Kamrul';
const lastName = 'Hasan';

// used template string
const info = `Hi, ${firstName} ${lastName}. Your Id is ${myInfo.id} and your semeseter is ${myInfo.semester}.`;
console.log(info);