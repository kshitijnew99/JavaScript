// Singleton -  ek lauta object apne tarah ka. Jb constructor se banega tb singleton
// object.create yehi hai constructor method
// object literals

const mysym = Symbol("key1")


const obj = {
    name : "kshitij" ,
    [mysym] : "value1"  , // If you want to include the Symbol key wortd
    age : 20 , 
    location : "lucknow" , 
    email : "kshitij@gmail.com" ,
    isloggedin : false,
    lastlogin: ["monday", "saturday"]
}// KEy are stored as string in background

// console.log(obj.age)
// console.log(obj["age"])// USE THIS METHOD ALWAYS

// console.log(obj[mysym])// Bcz the key was of symbol type so we use sq. brakets

// console.log(typeof obj.mysym)

obj.age = 21
// Object.freeze(obj)// freezes the object
obj.email = "piyush.com"

// console.log(obj)\

obj.hello = function(){
    console.log("hello world");
}
console.log(obj.hello)
console.log(obj.hello())
