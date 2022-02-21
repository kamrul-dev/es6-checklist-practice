/* 
    3.3 এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
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


const multiplication = (num1, num2, num3) => num1 * num2 * num3;
const multResult = multiplication(2, 3, 4);
console.log(multResult);