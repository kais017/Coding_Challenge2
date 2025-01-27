let products = ["headphones","earbuds", "speaker", "microphone","mouse"];
products.unshift("keyboard");
products.pop();
console.log("Updated Products", products);

let scores = [97,65,78,100,87];
scores[1] = 70;

let total = scores.reduce((total,amount) => total + amount, 0)
let Average = total / scores.length
console.log("Total Scores", total);
console.log("Updated Scores", scores)
console.log("Average Scores", Average)

let employee = { name: "Peter Parker", age: 20, department: "Avenger", isActive: true}

employee.department = "Intern"
console.log(employee);

let customers = [{ name: "Green Goblin", email: "goblin@gmail.com", purchaseAmount: 700} , 
    { name: "Kim Kardashian", email: "kimk@gmail.com", purchaseAmount: 1000}, {name: "Jon Snow", email: "snow@gmail.com", purchaseAmount: 10 }];

customers.push({ name: "Michael Jackson", email: "mj1@gmail.com", purchaseAmount: 300});
    console.log(customers);

const order = [{ orderID: 20, customerName: "John P", amount: 900 }];
function calculateTax(amount) {return amount * 0.1}; 

console.log("Order ID number:", order[0].orderID);
console.log("Customer name:", order[0].customerName);
console.log("Tax:", calculateTax(order[0].amount));


