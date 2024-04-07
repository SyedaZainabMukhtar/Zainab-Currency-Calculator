#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";

console.log(chalk.bgRedBright.bold('\n \t Welcome to Zainabs - CURRENCY CONVERTER \n \t'))

const Currency: any = {
    USD: 1,
    EUR: 0.91,
    CAD: 1.3,
    INR: 74.57,
    PKR: 280,
};

let user_answer = await  inquirer.prompt([
    {
    name: "From",
    message:"Enter FROM Currency",
    type: "list",
    choices: ['USD','EUR','CAD','INR','PKR']
},
{
    name: "To",
    message:"Enter the currency to convert it into:",
    type: "list",
    choices: ['USD','EUR','CAD','INR','PKR']
},
{
    name: "amount",
    message:"Enter the amount to convert:",
    type:"input",
}
]);


let from_amount = Currency[user_answer.From];
let to_amount = Currency[user_answer.To];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount      
let converted_amount = base_amount * to_amount

console.log(`Converted Amount = ${chalk.greenBright(converted_amount.toFixed(2))}`);


