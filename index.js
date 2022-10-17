#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';

let characterName;
const builds = ['Knight', 'Sorcerer', 'Thief', 'Warrior'];
const weapons = ['Staff', 'Dagger', 'Long Sword', 'Club'];

const sleep = (ms = 3000) => new Promise(r => setTimeout(r, ms));

console.log(
  chalk.red(
    figlet.textSync('Elden Souls', { horizontalLayout: 'full' })
  )
);

clear();

const run = async () => {
  const input = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: "Enter your character's name:",
      validate: function (value) {
        if (value.length) {
          characterName = value;
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
          return "Enter your character's gender";
        }
      }
    },
    {
      name: 'type',
      type: 'list',
      message: "Choose your character type:",
      choices: builds,
      default: "Knight"
    },
    {
      name: 'weapon',
      type: 'list',
      message: "Choose a weapon from the list:",
      choices: weapons,
      default: "Sword"
    },
    {
      name: "confirm-character",
      type: "confirm",
      message: "Confirm character build?",
    },
  ]);

  const createCharacter = async () => {
    const spinner = createSpinner("Creating your character...").start();
    await sleep();

    spinner.success({ text: `${characterName} has been created!` })
  }

  createCharacter();
};

run();