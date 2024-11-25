function x(){
    const a =10;
}

var xyz =20;
x(); //! functional execution context is created

var z = function (){
    console.log(("i am anoynomous function"));
}

function test(z){
    
    console.log(z);
    z()
     
    return function(){
        console.log("hello");
        
    }
}

//! ES6, or ECMAScript 2015, is the 6th version of the ECMAScript standard for JavaScript

// console.log(this);
function glo(){
const obj = {
    fn1: function(){
        console.log(this);
        // ! A regular function's this refers to the object that called the function.
//! Here, obj.fn1() is called, so this points to the obj.
        
    },
    fn2: () =>{
        console.log(this);

        // !Arrow functions do not have their own this.
//! Instead, this is lexically inherited from the surrounding scope (the scope in which the arrow function was defined).
//! In this case, fn2 was defined in the global scope (const obj = { ... }), so this will refer to the global object.
        
    }
}

obj.fn1();
obj.fn2();
}
 
