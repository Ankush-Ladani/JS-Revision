/* 

For storing some thing we need a memory somewhere.
For that purpose in JS we introduce variable ( simply they are containers which stores value of different type )

In JS , we have 3 types of keyword to define variables which are let , var and const.

So Today I have learned basic things about all and something related to scope.

*/

/*

const keyword is used to define variables which can't be changes in future.

Things to remember in const keyword :-

    1. const variables can't be left un-initialized.
    eg. -> const name;

    2. Their value will not be changed.

*/

const accountId = 12345;

/*

let keyword is used for variables whose value can be changed in future.

Generally we use let keyword while declaration

Things to remember in let keyword :-

    1. If let variable is not initialized then it's default value if undefined.
    2. value of let variable can be changed in future.

*/

let name = "ankush";

/*

var keyword is not used in today's or latest code due to its issue with scopes.

Things to remember in let keyword :-
    1. It's same for var that if not initialized then it's default value if undefined.
    2. 2. value of var variable can be changed in future.

But main problem with var is that :-

    Once initialzed then its value can be changed from anywhere in program.

*/

var age = 12;

// This is not the way you should initialize your variable in any way.
email = "a@ankush.com";
