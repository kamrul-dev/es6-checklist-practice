/* 
    3.4 এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
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



//for multi line statments
const multiplication = (inputA, inputB) => {
    const addOne = inputA + 2;
    const addTwo = inputB + 2;
    const multResult = addOne * addTwo;
    return multResult;
}
const addMultRsult = multiplication(7, 7);
console.log(addMultRsult);



// For single line statement 
const mult = (num1, num2) => num1 * num2;
const result = mult(5+2, 5+2);
console.log(result);