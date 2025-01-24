let products = ["headphones","earbuds", "speaker", "microphone","mouse"];
products.unshift("keyboard");
products.pop();
console.log("Updated Products", products);

let scores = [97,65,78,100,87]
scores[1] = 70

let total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4]
let Average = total / scores.length

console.log("Updated Scores", scores)
console.log("Average Scores", Average)


