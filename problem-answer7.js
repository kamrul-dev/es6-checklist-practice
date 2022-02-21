/* 
    ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/

/* 
    find():
        --find() method loop through in an array
        --If it finds a specific element then it returns the match first specific  elements. returns single element from an array
        --If not found then it shows the result undefined
*/

const products = [
    { name: 'symphony xper.', price: 1000, color: 'black' },
    { name: 'Samsung galuxy s2', price: 1200, color: 'white' },
    { name: 'Nokia x2', price: 5000, color: 'blue' },
];

const productPrice = products.find(product => product.price == 5000);
console.log(productPrice);