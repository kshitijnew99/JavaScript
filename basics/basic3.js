let score = undefined

console.log(typeof score)
console.log(typeof (score))

let value = Number(score)
console.log(typeof value)
console.log(value)

/* Note: if score = "33abc" it's number conversion is  NaN with the type number.
if score = null before type object and it's number conversion is  0 with the type number.
if score = undefined before type undefined it's number conversion is  NaN with the type number.
ture is converted into 1 and vica versa
*/