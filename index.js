import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import inquirer from 'inquirer';

const builds = ['Knight', 'Sorcerer', 'Thief', 'Warrior'];
const weapons = ['Staff', 'Dagger', 'Long Sword', 'Club'];

clear();

console.log(
  chalk.red(
    figlet.textSync('Elden Souls', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Enter your character name:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your character name';
        }
      }
    },
    {
      name: 'gender',
      type: 'input',
      message: "Enter your character's gender:",
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return "Please enter your character's gender";
        }
      }
    },
    {
      name: 'type',
      type: 'list',
      message: "Please choose your character type:",
      choices: builds,
      default: "Knight"
    },
    {
      name: 'weapon',
      type: 'list',
      message: "Please choose a weapon from the list:",
      choices: weapons,
      default: "Sword"
    },
    {
      name: "confirm-character",
      type: "confirm",
      message: "Confirm character build?",
    },
  ])
    .then(result => {
      console.log(`>>> ${result.name} has been created!`);
    })
};

run();