import { renderTasks, createListItem } from "./renderer.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const onCreateTask = () => {
  const todoListElem = document.querySelector(".list");
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then((response) => response.json())
    .then((task) => todoListElem.prepend(createListItem(task)));
};