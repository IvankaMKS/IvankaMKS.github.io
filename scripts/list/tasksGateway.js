const baseUrl = "https://63712a810399d1995d8ca5e6.mockapi.io/tasks";

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => {
    return response.json();
  });
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updateTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updateTaskData),
  });
};

export const deleteTaskFromServer = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
};