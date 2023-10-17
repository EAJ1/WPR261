function gRandom(min, max, count)
{
    const randomnumber = [];

    for (let i = 0; i < count; i++) {
        const num = Math.floor(Math.random() * (max - min + 1) + min)

        randomnumber.push(num);
        
    }

    return randomnumber;
}

const min = 200;

const max = 600;

const count = 10;

const array = gRandom(min, max, count);
console.log(array);