let fruits = ["apple", "banana"];

let vegetables = ["onion", "carrot"];

console.log("The length of vegetables: ",vegetables.length);

let food = fruits.concat(vegetables);

food.shift();

food.pop(-2);

food.reverse();

console.log("The food array : ",food );