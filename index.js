#! /usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// import figlet from "figlet";
// import ora from "ora";
// // Function to display ASCII art title
// const displayTitle = () => {
//   console.log(chalk.green(figlet.textSync('CLI Calculator')));
// };
// displayTitle();
//   const answer = await inquirer.prompt([
//     {
//       name: "firstNumber",
//       type: "number",
//       message: chalk.yellow("Enter your first number"),
//     },
//     { 
//       name: "secondNumber",
//       type: "number",
//       message: chalk.yellow("Enter your second number"),
//     },
//     {
//       name: "operator",
//       type: "list",
//       message: chalk.yellow("Select one of the operators to perform action "),
//       choices: [
//         chalk.magenta("ADDITION"),
//         chalk.green("SUBTRACTION"),
//         chalk.magenta("MULTIPLICATION"),
//         chalk.green("DIVISION"),
//         chalk.blue("EXPONENTIATION"),
//         chalk.red("SQUARE ROOT"),
//         chalk.yellow("MODULUS")
//       ],
//     },
//   ]);
//   const spinner = ora('Calculating...').start();
//   await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
//   spinner.stop();
//   let result;
//   // CONDITIONAL STATEMENT
//   switch(answer.operator) {
//     case chalk.magenta("ADDITION"):
//       result = answer.firstNumber + answer.secondNumber;
//       break;
//     case chalk.green("SUBTRACTION"):
//       result = answer.firstNumber - answer.secondNumber;
//       break;
//     case chalk.magenta("MULTIPLICATION"):
//       result = answer.firstNumber * answer.secondNumber;
//       break;
//     case chalk.green("DIVISION"):
//       result = answer.firstNumber / answer.secondNumber;
//       break;
//     case chalk.blue("EXPONENTIATION"):
//       result = Math.pow(answer.firstNumber, answer.secondNumber);
//       break;
//     case chalk.red("SQUARE ROOT"):
//       result = Math.sqrt(answer.firstNumber);
//       break;
//     case chalk.yellow("MODULUS"):
//       result = answer.firstNumber % answer.secondNumber;
//       break;
//     default:
//       console.log(chalk.red("Please select a correct operator"));
//   }
//   console.log(chalk.blue(`Result: ${result}`));
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
import ansiRegex from "ansi-regex";
// Function to display ASCII art title
const displayTitle = () => {
    console.log(chalk.green(figlet.textSync('CLI Calculator')));
};
// Function to perform calculations
const performCalculation = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case "ADDITION":
            return firstNumber + secondNumber;
        case "SUBTRACTION":
            return firstNumber - secondNumber;
        case "MULTIPLICATION":
            return firstNumber * secondNumber;
        case "DIVISION":
            return secondNumber !== 0 ? firstNumber / secondNumber : "Error: Division by zero";
        case "EXPONENTIATION":
            return Math.pow(firstNumber, secondNumber);
        case "SQUARE ROOT":
            return firstNumber >= 0 ? Math.sqrt(firstNumber) : "Error: Negative square root";
        case "MODULUS":
            return firstNumber % secondNumber;
        default:
            return "Invalid operator";
    }
};
// Function to strip ANSI color codes from a string
const stripAnsi = (str) => str.replace(ansiRegex(), '');
// Main function
const runCalculator = async () => {
    displayTitle();
    try {
        const answers = await inquirer.prompt([
            {
                name: "firstNumber",
                type: "number",
                message: chalk.yellow("Enter your first number"),
                validate: (input) => !isNaN(input) || "Please enter a valid number",
            },
            {
                name: "secondNumber",
                type: "number",
                message: chalk.yellow("Enter your second number (or 0 for square root)"),
                validate: (input) => !isNaN(input) || "Please enter a valid number",
            },
            {
                name: "operator",
                type: "list",
                message: chalk.yellow("Select one of the operators to perform action "),
                choices: [
                    "ADDITION",
                    "SUBTRACTION",
                    "MULTIPLICATION",
                    "DIVISION",
                    "EXPONENTIATION",
                    "SQUARE ROOT",
                    "MODULUS"
                ].map(choice => chalk.magenta(choice)),
            },
        ]);
        const spinner = ora('Calculating...').start();
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
        spinner.stop();
        const result = performCalculation(answers.firstNumber, answers.secondNumber, stripAnsi(answers.operator) // Remove color to match the operator in switch statement
        );
        console.log(chalk.blue(`\nResult: ${result}`));
    }
    catch (error) {
        console.error(chalk.red("\nAn error occurred: "), error);
    }
};
runCalculator();
