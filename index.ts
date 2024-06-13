#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora, { Ora } from "ora";

// Function to display ASCII art title
const displayTitle = () => {
  console.log(chalk.green(figlet.textSync('CLI Calculator')));
};
displayTitle();

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
      name: "operator",
      type: "list",
      message: chalk.yellow("Select one of the operators to perform action "),
      choices: [
        chalk.magenta("ADDITION"),
        chalk.green("SUBTRACTION"),
        chalk.magenta("MULTIPLICATION"),
        chalk.green("DIVISION"),
        chalk.blue("EXPONENTIATION"),
        chalk.red("SQUARE ROOT"),
        chalk.yellow("MODULUS")
      ],
    },
  ]);
  const spinner: Ora = ora('Calculating...').start();
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
  spinner.stop();
  let result;
  // CONDITIONAL STATEMENT
  switch(answer.operator) {
    case chalk.magenta("ADDITION"):
      result = answer.firstNumber + answer.secondNumber;
      break;
    case chalk.green("SUBTRACTION"):
      result = answer.firstNumber - answer.secondNumber;
      break;
    case chalk.magenta("MULTIPLICATION"):
      result = answer.firstNumber * answer.secondNumber;
      break;
    case chalk.green("DIVISION"):
      result = answer.firstNumber / answer.secondNumber;
      break;
    case chalk.blue("EXPONENTIATION"):
      result = Math.pow(answer.firstNumber, answer.secondNumber);
      break;
    case chalk.red("SQUARE ROOT"):
      result = Math.sqrt(answer.firstNumber);
      break;
    case chalk.yellow("MODULUS"):
      result = answer.firstNumber % answer.secondNumber;
      break;
    default:
      console.log(chalk.red("Please select a correct operator"));
  }

  console.log(chalk.blue(`Result: ${result}`));



