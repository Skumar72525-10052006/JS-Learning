// todo If U Want To Treat Your JS File As A Newer Version You Can Use The Command Given Below :- 
// * "use strict";

// ! alert(3 + 3) We Can't Use Alert Inside NodeJS Engine, It Can Be Used Inside Browser Engine.

// ^ Make Sure To Increase The Code Readability.

// ? What Is Data Types ????

// !--> It Is A Classification That Tells The Computer How To Interpret And Process A Piece Of Data. It Defines The Type Of Value A Variable Can Hold.

/*

    & JS Supports 2 Types Of Data :-
    1) Primitive
    2) Non-Primitive

*/

/*

    * Primitive Means Which Are Already Defined/ Built-in. It Is Immutable & Is Compared By The Values.

    ^ Primitive Data Types Includes :- 
        ! I) Number
        ! II) String
        ! III) Undefined
        ! IV) Boolean
        ! V) Null
        ! VI) BigInt
        ! VII) Symbol

    * Non-Primitive Means Derieved From Primitive Data Types. Also Called As Reference Types As It Stores References To Other Objects Or Complex Data Structure. It Is Mutuable & Is Compared By The Reference.

    ^ Non-Primitive Data Types Includes :-
        ! I) Array
        ! II) Objects
        ! III) Functions
        ! IV) Date
        ! V) Regex
        ! & Many More.    
    
*/

/*

    ~ Explaination Of Each Types Of Data Types Firstly Primitive Then Non-Primitive.

    ^ I) Number :- Used To Hold Decimal As Well As Integer Values. For Example :-
    ^    let num = 2.525;
    ^    Here num Is A Variable Which Stores Value Of Floating Data Type.

    & II) String :- Represents A Sequence Of Characters/ Combination Of Characters. In This The Characters Are Surrounded By Either Double Quotes("") Or Single Quotes('') Or Backtick(``). For Example :- 
    &    let fname = "Sonu"
    &    let mname = 'Kumar'
    &    let lname = `Mandal`
    &    Here, The Variables fname, mname, lname All Are String Variables.

    * III) Undefined :- Means A Variable Declared But Not Initialised Or Explicitly The Value Is Set To Undefined. For Example :-
    *    let bank_bal;
    *    Here, The Variable bank_bal Is Declared But Not Initialised Any Values. So, It Is Undefined. We Can Also Declare It Explicitly As :- let bank_bal = undefined;

    ! IV) Boolean :- Used To Represent Logical Values. It Has 2 Possible Values True Or False. For Example :- 
    !    const isLoggedIn = true;
    !    Here, A Variable isLoggedIn Declared True Means The Condition Is True.

    ~ V) Null :- It Indicates The Intentional Absence Of Any Value. It Is Mainly Used To Show That A Variable Or Attribute Has No Value. We Can Say It As A Standalone Value. For Example :- 
    ~    let bank_bal = null;
    ~    Here, The Variable bank_bal Is Initialised As null Which Means No Value.

    ? VI) BigInt :- Represents Number Greater Than 2^53 - 1 Which Helps To Perform Operations On Large Numbers. It Can Be Specified By Adding 'n' At The Last Of The Number. For Example :-
    ?    let big = 10052006n;

    ^ VII) Symbol :- It Is Used To Create Objects Which Will Always Be Unique. It Is Introduced In ES6. It Returns Unique Identifiers That Can Be Used To Add Unique Property Keys To An Object That Won't Collide With Keys Of Any Other Code That Might Add To The Object. Used To Enable Encapsulation Or Information Hiding. For Example :- 
    ^    let sym = Symbol("Hello");

    & VIII) Object :- An Entity Having Properties & The Methods. It Holds Data In The Key-Value Pairs. We Can Create Objects Using Curly Braces {} Or By Using The new Object() Keyword.
    &    For Example :- Creating Objects Using Curly Braces {}

    &        let car = {
    &            brand : "Toyota",
    &            model : "Corlloa",
    &            year : 2020
    &        }

    &    Another Example :- Creating Objects Using new Object() Constructor

    &        let car_1 = new Object();
    &        car_1.brand = "Toyota";
    &        car_1.model = "Corolla";
    &        car_1.year = 2020;

    * IX) Array :- It Is A Special Object That Stores An Ordered Collection Of Elements Or Values, Which Can Be Of Any Data Type. We Can Say It As A Container To Store Different Or Similar Items. We Can Create Array Using Square Brackets [] Or By Using new Array() Keyword.
    *    For Example :- Creating Array Using Square Brackets []

    *        let fruits = ["Apple","Banana","Cherry","Mango"];

    *    Another Example :- Creating Array Using new Array() Constructor

    *        let arr = new Array(1,2,3,4,5)

*/

// * Primitive Data Types

let num = 2.525;
console.log(typeof num);

let fname = "Sonu"
let mname = 'Kumar'
let lname = `Mandal`
console.log(typeof fname , typeof mname , typeof lname);

let bank_bal;
console.log(typeof bank_bal);

const isLoggedIn = true;
console.log(typeof isLoggedIn);

let bank_balance = null;
console.log(bank_balance);

let big = 10052006n;
console.log(typeof big);

let sym = Symbol("Hello");
console.log(typeof sym);

// * Non-Primitive Data Types

let car = new Object();
car.name = "Toyota";
car.model = "Corolla";
car.year = 2020;
console.log(car);
console.log(typeof car);

let fruits = new Array("Apple","Banana","Cherry","Mango");
console.log(fruits);
console.log(typeof fruits)








