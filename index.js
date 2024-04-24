#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: chalk.yellow("Enter your first number"),
    },
    {
        name: "secondNumber",
        type: "number",
        message: chalk.yellow("Enter your second number"),
    },
    {
        message: chalk.yellow("select one of operator to perform action "),
        type: "list",
        name: "operator",
        choices: [
            chalk.magenta("ADDITION"),
            chalk.green("SUBTRACTION"),
            chalk.magenta("MULTIPLICATION"),
            chalk.green("DIVISION")
        ],
    },
]);
// CONDITIONAL STATEMENT
if (answer.operator === chalk.magenta("ADDITION")) {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === chalk.green("SUBTRACTION")) {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === chalk.magenta("MULTIPLICATION")) {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === chalk.green("DIVISION")) {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    (chalk.red("Please select correct operator"));
}
