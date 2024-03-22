const cats = ["Milo","Otis","Garfield"]

const destructivelyAppendCat = ["Milo","Otis","Garfield"]
destructivelyAppendCat.push("Michael")

const destructivelyPrependCat = ["Milo","Otis","Garfield"]
destructivelyPrependCat.unshift("Bob")

const destructivelyRemoveLastCat = ["Milo","Otis","Garfield"]
destructivelyRemoveLastCat.pop()

const destructivelyRemoveFirstCat = ["Milo","Otis","Garfield"]
destructivelyRemoveFirstCat.shift()

const appendCat = ["Milo","Otis","Garfield"]
appendCat.push("Broom")

const prependCat = ["Milo","Otis","Garfield"]
prependCat.unshift("Arnold")

const removeLastCat = ["Milo","Otis","Garfield"]
removeLastCat.slice(0,-1)

const removeFirstCat = ["Milo","Otis","Garfield"]
removeFirstCat.slice(1)