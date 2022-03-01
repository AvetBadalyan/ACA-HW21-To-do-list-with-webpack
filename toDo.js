import { addToDo, deleteCheck } from "./toDoFunctions.js";
// selectors

export const todoInput = document.querySelector(".todo-input");
export const todoButton = document.querySelector(".todo-button");
export const todoList = document.querySelector(".todo-list");

console.log(todoInput.value);

// Event listeners

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
