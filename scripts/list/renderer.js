const listElem = document.querySelector(".list");

const compareTasks = (first, second) => {
  return first.done - second.done;
};

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute("data-id", id);
  checkboxElem.checked = done;
  checkboxElem.classList.add("list-item__checkbox");
  return checkboxElem;
};

export const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list-item");
  const checkboxElem = createCheckbox({ done, id });

  const textElem = document.createElement("span");
  textElem.classList.add("list-item__text");
  textElem.textContent = text;

  if (done) {
    listItemElem.classList.add("list-item_done");
    textElem.classList.add("list-item__text", "list-item_done");
  }

  const deleteBtnElem = document.createElement("button");
  deleteBtnElem.setAttribute("data-id", id);
  deleteBtnElem.classList.add("list-item__delete-btn");

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

export const renderTasks = (tasksList) => {
  const sortedTasksList = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...sortedTasksList);
};