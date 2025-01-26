// console.log("2"==2)

// console.log(null == 0)
// console.log(null >= 0)
// console.log(null > 0)

// console.log("kshitij")

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)

// Primitive - String,number ,boolean ,null ,undefined, symbol and BigInt

// Reference type - Array , Object , Function

// let Email; // here the the value in the email is Undefined

// const Id = Symbol("1234")
// const aid = Symbol("1234")

// console.log(Id === aid)

// const bigInteger = 12351586461646566414411435986419656n

// console.log(typeof bigInteger)

// let tepm = null

// console.log(typeof tepm)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// type of memory
// Stack - Primitive (we get the copy of that variable whom the memory is allocated)

// Heap - non-primitive/ Reference type - (we get the reference of the original value means that if we changes something in the this the original one is also gets changes)

let userone = {
    email : "kshitij99@gmail.com",
    name: "kshitij"
}
let usertwo = userone

usertwo.email = "piyush@gmail.com"
console.log(userone)
