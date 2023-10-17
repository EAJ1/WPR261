let arr = [2, 76, 4, 90, 22];

arr.forEach((num, index, array) => {
 
    array[index] = num * 2;
});

let b = arr.map((num) => {
    return num * 2;
});

let wasFound = arr.find((val) => {
    return val === 34;
    //return !(val%2)
});

let wasFound1 = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(b);         
console.log(wasFound); 
console.log(wasFound1);