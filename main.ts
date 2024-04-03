#! /na74p/usr/bin/env node

//TODO APP IN TYPESCRIPT BY NAMEERA AZAM

import inquirer from "inquirer";

//user available
let todo = [];
while (true) {
  let input = await inquirer.prompt([
    {
      name: "Todoitem",
      type: "input",
      message: "add todo item and listing",
    },

    {
      name: "addMore",
      type: "list",
      choices: ["yes", "no"],
    },
  ]);

  //output of the program
  const { Todoitem, addMore } = input;

  todo.push(Todoitem);
  if (addMore == "no") {
    console.log("Todolist:");

    //add more item
    for (let i = 0; i < todo.length; i++) {
      console.log(todo[i]);
    }

    //exit loop
    break;
  }
}
