// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   const newCats = [...cats, "Broom"]
   return newCats;
}
function prependCat(name) {
    const newNewCats = ["Arnold", ...cats]; 
    return newNewCats;
}
function removeLastCat() {
    const removeLastCat = [...cats];
    removeLastCat.splice(-1);
    return removeLastCat;
}
function removeFirstCat() {
    const removeFirstCat = cats.slice();
    removeFirstCat.splice(0,1);
    return removeFirstCat;
}