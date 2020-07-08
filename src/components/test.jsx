import React from "react";
import ReactDOM from "react-dom";
import Counters from "./components/counters";
import {compose, pipe} from "lodash/fp";

ReactDOM.render(<Counters />, document.getElementById("root"));


// passing function as a argument in another function. They are Higher Order Functions

function sayHello(){
    return "say hello";
}

function callHello(myFunc) {
    console.log(myFunc());
}

callHello(sayHello);

/* closure i.e a function returning another function. They are also higher order functions. e.g map, settimeout
var numbers = [1,2,3,4,5];
 numbers.map((res) => {
    res*2;
}) 
setTimeout(() => {console.log("Hello")},1000) 
both takes function as an argument*/

function outer () {
    //anonimous function
    return function() {
        return "Inner function";
    } 
}

var outerValue = outer();
//outer function is returning a function.

console.log(typeof(outerValue)); //function

console.log(outerValue()); //"Inner function" 


/*  Suppose you have an input string. You need to do 2 things
1)  trim the string
2) Wrap it inside a <div> element */

var trim = (str) => {
    return str.trim();
}

var lowercase = (str) => {
    return str.toLowerCase();
}

var wrapInDiv = (str) => {
    return `<div>${str}</div>`
}

var result = wrapInDiv(lowercase(trim("        Koel             ")));
console.log(result);
// compose and pipe are lodash functions
// compose and pipe can be used to compose the functions and remove unnecessary brackets.

var transform = compose(wrapInDiv, lowercase, trim);
//var transform = pipe(trim, lowercase, wrapInDiv );
 result = transform("                  Koel                 ");
 console.log(result);

