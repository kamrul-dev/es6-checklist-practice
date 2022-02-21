/* 
    3.2 তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
*/

/* 
    Arrow Function:
        -- Arrow functin declared with variable name. This variable name work as a function name.
        -- Then provide assignment operator(=)
        -- Then write the parameter name. if parameter is single name then do not 
            need to provide parenthesis/first brackets. If has multiple parameter name then use parenthesis 
        -- Then provide arrow function symbol =>
        -- Then return the result

        -- If program has multiple statements then use curly braces after the arrow function symbol =>
        --
            const divByFive = number => {
                statement 1;
                statement 1;
                statement 1;
            return result;
            }
*/

const addAndMultiplication = (num1, num2) => {
    const add1 = num1 + 2;
    const add2 = num2 + 2;
    const multResult = add1 * add2;
    return multResult;
}
const finalResult = addAndMultiplication(5, 5);
console.log(finalResult);








