import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";
import { getTasksList } from "./tasksGateway.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    renderTasks(tasksList);
    initTodoListHandlers();
  });
});