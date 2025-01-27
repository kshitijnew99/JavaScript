// Date 

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

let myCurrentDate = new Date(2025 , 11 , 26)// months in JS are starts from 0

// console.log(myCurrentDate.toDateString())

let myCurrentDates = new Date(2025 , 11 , 26, 16 ,30 )

let myCurrentDatez = new Date("2025-01-27")

// console.log(myCurrentDatez.toLocaleString())

let timeStamp = Date.now()

console.log(timeStamp)
console.log(myCurrentDatez.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate.getTime())
console.log(newdate.getTimezoneOffset())






