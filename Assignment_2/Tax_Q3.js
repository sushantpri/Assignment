const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTax(salary) {
    let taxRate;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            console.log("Invalid salary input.");
            rl.close();
            return;
    }

    const tax = salary * taxRate;
    console.log(`\nSalary: ₹${salary}`);
    console.log(`Tax Rate: ${taxRate * 100}%`);
    console.log(`Tax Payable: ₹${tax}`);
    rl.close();
}

rl.question("Enter your salary: ₹", (input) => {
    const salary = parseFloat(input);
    if (isNaN(salary) || salary <= 0) {
        console.log("Please enter a valid number greater than 0.");
        rl.close();
    } else {
        findTax(salary);
    }
});
