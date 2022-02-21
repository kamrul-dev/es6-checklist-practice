/* 
    6. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
*/

/* 
    filter():
        --filter() method Loop through in an array
        --If conditions satisfy these elements then that filter returns those elements  in a new array.
        --If the condition is not satisfied then filter() returns an empty array [ ].
*/

const numbers = [1, 23, 4, 5, 6, 7, 8, 9, 23, 54, 56, 67, 23, 51];
const oddFilter = numbers.filter(number => number % 2 != 0);
console.log(oddFilter);