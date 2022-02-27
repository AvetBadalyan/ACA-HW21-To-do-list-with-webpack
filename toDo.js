import { addToDo, deleteCheck } from "./toDoFunctions";

// selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);


