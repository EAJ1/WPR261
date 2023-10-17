function calculate(a, b, operation)
{
    if(typeof a === "number" && typeof b === "number")
    {
        if(operation === "add" || operation === "subtract" || operation === "multiply" || operation === "divide")
        {
            if(operation === "add")
            {
                console.log(a + b + ", add")
            }

            if(operation === "subtract")
            {
                console.log(a - b + ", subtract")
            }

            if(operation === "multiply")
            {
                console.log(a * b + ", multiply")
            }

            if(operation === "divide")
            {
                console.log(a / b + ", divide")
            }
            else{
                console.log("Make sure that the values are operation: add, subtract, multiply or divide");
            }
        }
    }else{
        console.log("Make sure that the value is number");
    }
}

calculate(10, 10, "divide");