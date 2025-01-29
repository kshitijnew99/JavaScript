const hero = new Array("Iron Man","Captain America", "Thor")
const dc_hero = new Array("Superman", "Batman", "Wonder Woman")


hero.push(dc_hero)
console.log(hero[3][0])

const newhero = hero.concat(dc_hero)// Concat does not affect the real array
console.log(newhero[5])

const all_hero = [...hero, ...dc_hero] // prefer this one because we can add more than two arrray in single time

console.log(all_hero)

const loop_array = [1,2,3,[4,5],6,7,[10,20,[32,9,12,2],17],100]

const flat_array = loop_array.flat(3)// Pass the depth of array you want to flatten

console.log(flat_array)

console.log(Array.isArray("kshitij"))
console.log(Array.from("kshitij"))
console.log(Array.from({name : "kshitij"}))//give an empty array


let var1 = 200
let var2 = 300
let var3 = 400

console.log(Array.of(var1, var2, var3))// 