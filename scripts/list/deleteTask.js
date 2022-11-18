import { renderTasks } from "./renderer.js";
import { deleteTaskFromServer, getTasksList } from "./tasksGateway.js";

export const onDeleteTask = (taskId) => {
  const listItemElem = document.querySelectorAll(".list-item");
};