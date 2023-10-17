let arrofnums = [1, 2, 3, 4, 5];

/* 
let result = arrofnums.reduce((sum, current) => sum + current, 0);

console.log(result);

*/

//let arrofnums = [1, 2, 3, 4, 5];
//what is the sum total of the values in the array?

let sum = 0;

for (let i = 0; i < arrofnums.length; i++) {
    sum = sum + arrofnums[i];
  }
console.log(sum);