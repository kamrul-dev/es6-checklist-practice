/* 1. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */


// variable declare with let keyword
    /* let :
    -- Variables defined with let must be Declared before use.
    -- variable value reassign possible(that means we can change the variables value)
    -- Variables defined with let cannot be Redeclared
    -- let has block scope
    -- inside the block let keyword does not effect the variable redeclare compare with global variable.
    -- hoisting is not possible
    -- With let, redeclaring a variable in the same block is NOT allowed
     */
let name = 'Kamrul';
// name = 'Hasan'   //variable reassign possible(that means we can change the variables value)
// let name = 'Hasan' //variable redeclare is not possible
// console.log(name);


let x = 12;
{
    let x = 4; //let has block scope
    console.log('let inside of the block', x);
}
console.log('let outside of the block', x);


// hoisting is not possible
/* s = 10;
let s;
console.log(s); */ //ReferenceError: Cannot access 's' before initialization

//==========================================================================================================================

// variable declare with const keyword
    /* const:
    -- variable reassign is not possible(that means we can not change the variables value)
    -- Variables defined with const cannot be Redeclared
    -- const has block scope
    -- inside the block const keyword does not effect the variable redeclare compare with global variable.
    -- hoisting is not possible
    -- With const, redeclaring a variable in the same block is NOT allowed
    */
const fruit = 'Apple';
// fruit = 'Orange'; // variable value reassign is not possible(that means we can not change the variables value)
//const fruit = 'Bannana'; // variable redeclared is not possible
console.log(fruit);



const p = 10;
{
    const p = 5;  // const has block scope
    console.log('const inside of the block', p);
}
console.log('const outside of the block', p);


// hoisting is not possible
/* q = 12;
const q;
console.log(q); */  // SyntaxError: Missing initializer in const declaration
