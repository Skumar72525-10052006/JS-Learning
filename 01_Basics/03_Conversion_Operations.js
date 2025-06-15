// ! let score = 33

// * We Can Check The Data Type Of A Variable Using typeof Operator In The Following Ways :-

/*

  ! console.log(typeof score);
  ! console.log(typeof(score));

*/

// ^ JS Supports Two Types Of Data Type Conversion :- 1) Implicit/Type Coercion 2) Explicit/Type Conversion.

// & Type Coercion :- Process Of Automatic Conversion Of One Data Type To Another By JS During Operations. Also Known As Implicit Type Casting. Happens Mostly In Comparison & Arithmetic Operations. For Example :- 

// ~ 1. string + number => string

/*

  * let res = "10" + 10;
  * console.log(res);  ==> 1010

*/

// ~ 2. number + null ==> number

/*

  ^ let res = 10 + null;
  ^ console.log(res);  ==> 1

*/

// ~ 3. string +  null ==> string

/*

  todo let res = "sonu" + null;
  todo console.log(res);       ==> sonunull

*/

// ~ 4. string - number ==> number

/*

  * let res = "10" - 5;
  * console.log(res); ==> 5

*/

// ~ 5. string * string ==> number

/*

  ^ let res = "5" * "5";
  ^ console.log(res);

*/

// ~ 6. string / string ==> number

/*

  todo let res = "10" / "4";
  todo console.log(res);
  
*/

// & Type Conversion :- Process of Converting On Data Type To Another Forcefully . It Is Done Manually By The Programmer. Also Known As Explicit Type Casting. It Uses Built-In JS Methods / Functions.

// ~ string to number

/*

  * let num = "123.45";
  * console.log(num,typeof(num));   ==> 123.45 string
  * let n = Number(num);
  * console.log(n,typeof(n));   ==> 123.45 number
  * let a = parseInt(num);
  * console.log(a,typeof(a));  ==> 123 number
  * let b = parseFloat(num);
  * console.log(b,typeof(b));  ==> 123.45 number

*/

// ~ number to string

/*

  ^ let alpha = 123.45
  ^ console.log(alpha,typeof(alpha)); ==> 123.45 number
  ^ let a = String(alpha);
  ^ console.log(a,typeof(a));  ==> 123.45 string
  ^ let b = alpha.toString();
  ^ console.log(b,typeof(b));  ==> 123.45 string
  ^ let c = alpha + "";
  ^ console.log(c,typeof(c));  ==> 123.45 string
  
*/

// ~ boolean to number 

/*

  todo let bool = true;
  todo let n = Number(bool);
  todo console.log(n,typeof(n));  ==> 1 number
  todo let bool = false;
  todo let n = Number(bool);
  todo console.log(n,typeof(n));  ==> 0 number

*/

// ~ number to boolean

/*

  * let num = 2;
  * let bool = Boolean(num);
  * console.log(bool,typeof(bool));  ==> true
  * let num = 1;
  * let bool = Boolean(num);
  * console.log(bool,typeof(bool));  ==> true
  * let num = 0;
  * let bool = Boolean(num);
  * console.log(bool,typeof(bool));  ==> false

*/


// ~ boolean to string

/*

  ! let bool = false;
  ! let a = String(bool);    
  ! console.log(a,typeof(a));  ==> false string
  ! let b = bool + "";
  ! console.log(b,typeof(b));  ==> false string

  ! let bool = true;
  ! let a = String(bool);
  ! console.log(a,typeof(a));  ==> true string
  ! let b = bool + "";
  ! console.log(b,typeof(b));  ==> true string

*/

// ~ string to boolean

/*

  ^ let str = "";
  ^ let a = Boolean(str);
  ^ console.log(a,typeof(a));  ==> false boolean
  ^ let str_ing = "sonu";
  ^ let b = Boolean(str_ing);
  ^ console.log(b,typeof(b));  ==> true boolean

*/

// ~ undefined to NaN

/*

  & let num = undefined;
  & let a = Number(num);
  & console.log(a,typeof(a));  ==> NaN number
  & let num;
  & let a = Number(num);
  & console.log(a,typeof(a));  ==> NaN number

*/

// ~ string to NaN

/*

  todo let str = "1a2b3c";
  todo let a = Number(str);
  todo console.log(a,typeof(a));  ==> NaN number

*/

// ~ null to number

/*

  todo let a = null;
  todo let b = Number(a);
  todo console.log(b,typeof(b));  ==> 0 number

*/

// * Operations On Strings With Numbers.

/*

  ^ console.log("1"+2+3);  ==>123
  ^ -> As 1st Operand Is String So It Will Go Accordingly By Concatenating Each Other.

  & console.log(1+2+"3");  ==>33
  & -> As 1st Operand Is Number So It Will Go Accordingly By Adding First 2 Operands Then Concatenate With The 3rd Operand.

  ~ console.log(1+"2"+3);  ==>123
  ~ -> As 1st Operand Is Number & 2nd Operand Is String So It Will Concate Itself Then The Result Will Be Concate With 3rd Operand.

*/

// ! Operations On Booleans

/*

  * console.log(+true);  ==> 1
  * -> As Boolean Is First Converted Into Number And It Will The Value Corresponding To The Value Of Boolean.

  todo console.log(+""); ==> 0
  todo -> As Boolean Is First Converted Into Number And It Will The Value Corresponding To The Value Of Boolean.
  
*/
