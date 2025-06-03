// ? What Are Variables ?

// !--> Variables Are Like Containers Which Holds Data.

// *<----------Variables and Constants----------->

/*

    ^ Earlier JS Supports Declaration Of Variables With Only var keyword.

    ~ var means redeclare and reinitialize again and agin.

    ! But using var for Variable Declaration Has Some Problems. So ES6 Introduced In 2015 with two new way by which variables can be declared.

    & They Are let,const.

    ~ let means we can't redeclare the same variable again but we can reinitialize the value of the variable again & again.
    ~ const means constant value in which we can't redclare and also reinitialize.

*/

// *var has Global Scope whereas let,const has Local Scope. Don't Look On These Now It Will Be Discussed Later.

// & <---var keyword---->

//* Here I Declared A Variable userName using var keyword as we know using var we can Redeclare and Reinitialize again and again.

//^ Let's see the Output

/*
    * var userName = "Sonu Kumar"
    * console.log(userName)   // Output Will Be Sonu Kumar
*/

/*

*|----->Now After Redeclare and Reinitialize Lets Check The Output<------|

^ var userName = "Shubham Kumar"

^ console.log(userName) //~ Here The Output Will Be Shubham Kumar

*/

// &<--------- let keyword ----------->

/*
    & let age = 17
    & console.log(age) // Output --> 17
*/

/* 
    ! We Can't Redeclare That Variable Which Is Declared With let keyword. For Example :- 
    ! let age = 17
    ! console.log(age) ---->In This Line A Error Will Be Shown ---> SyntaxError: Identifier 'age' has already been declared. But We Can Reinitialize The Variable. Let's See How :-
    ! age = 19
    ! console.log(age) ----> Here The Output Will Be 19.
*/

// & <------ const keyword ------->

/*
    ^ const date_of_birth = 19072007
    ^ console.log(date_of_birth) // 19072007
*/

/*
    ! We Can't Redclare and Reassign Variable Which Declared With const keyword.
    ! const date_of_birth = 19072007
    ! console.log(date_of_birth) ----> SyntaxError: Identifier 'date_of_birth' has already been declared
    ! date_of_birth = 10052006
    ! console.log(date_of_birth) ----> TypeError: Assignment to constant variable.
*/

// todo Prefer Not To Use var Keyword.

// *<----- Extra Tip ----->
// ^ Here We Are Using console.log() In Each & Every Line to get the Output In The Terminal Which Makes It Slighter Complex and If We Want Output Using A Single Line Of Code. But Using console.table() We Can Get Result In A Tabular Format As Many As Paramter Passed. In The Format Of :- 
/*
    ~ ┌─────────┬──────────────┐
    ~ │ (index) │ Values       │
    ~ ├─────────┼──────────────┤
    ~ │ 0       │ 'Sonu Kumar' │
    ~ │ 1       │ 17           │
    ~ │ 2       │ 19072007     │
    ~ └─────────┴──────────────┘
    ~ If I Use --->console.table([userName,age,date_of_birth])
*/
var userName = "Sonu Kumar"
console.log(userName) 
let age = 17
console.log(age)
const date_of_birth = 19072007
console.log(date_of_birth)
console.table([userName,age,date_of_birth])


