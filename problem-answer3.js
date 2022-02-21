/* 
    3.1 একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
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

const divByFive = number => number / 5;
const divResult = divByFive(500);
console.log(divResult);


// use default parameter
/* const divByFive = (number=50) => number / 5;
const divResult = divByFive();
console.log(divResult); */