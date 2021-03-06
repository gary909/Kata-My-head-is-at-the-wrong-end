function fixTheMeerkat(arr) {
    return arr.reverse();
}

console.log(fixTheMeerkat(["tail", "body", "head"])); // Return: ["head", "body", "tail"]
console.log(fixTheMeerkat(["tails", "body", "heads"])); // Return: ["heads", "body", "tails"]
console.log(fixTheMeerkat(["bottom", "middle", "top"])); // Return: ["top", "middle", "bottom"]
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"])); //["upper legs", "torso", "lower legs"]
console.log(fixTheMeerkat(["ground", "rainbow", "sky"])); // Return: ["sky", "rainbow", "ground"]