import { eventListeners } from "./eventListeners";
export class storage {
  constructor() {}

  clearTaskList() {
    const content = document.querySelector(".content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  addList(value, type) {
    const updateType = type === "add_task" ? "task_" : "project_";
    if (type === "add_task")
      localStorage.setItem(
        `${updateType}${localStorage.getItem(
          `${updateType.slice(0, -1)}Number`
        )}_${localStorage.getItem("projectTimeType")}`,
        value
      );
    else
      localStorage.setItem(
        `${updateType}${localStorage.getItem(
          `${updateType.slice(0, -1)}Number`
        )}`,
        value
      );

    this.incrementListNumber(type);
    this.updateList(type);
  }

  incrementListNumber(type) {
    const number = type === "add_task" ? "taskNumber" : "projectNumber";
    let incrementNumber =
      localStorage.getItem(number) !== null
        ? parseInt(localStorage.getItem(number))
        : 0;
    incrementNumber += 1;
    localStorage.setItem(number, incrementNumber);
  }

  updateList(type) {
    const updateType = type === "add_task" ? "task_" : "project_";
    let storageKeys = Object.keys(localStorage).filter((e) =>
      e.includes(updateType)
    );

    const eventListenersClass = new eventListeners();

    const content =
      type === "add_task"
        ? document.querySelector(".content")
        : document.querySelector(".project-content");

    for (let i = 0; i <= storageKeys.length; i++) {
      if (
        document.querySelector(
          `#` + updateType + i + "_" + localStorage.getItem("projectTimeType")
        ) ||
        document.querySelector(`#` + updateType + i)
      )
        continue;

      if (type === "add_task")
        this.appendList(
          updateType + i + "_" + localStorage.getItem("projectTimeType"),
          localStorage.getItem(
            updateType + i + "_" + localStorage.getItem("projectTimeType")
          ),
          content,
          eventListenersClass
        );
      else
        this.appendList(
          updateType + i,
          localStorage.getItem(updateType + i),
          content,
          eventListenersClass
        );
    }
  }

  appendList(id, task, content, eventListeners) {
    console.log(id, task);
    if (task === null) return;

    let element = document.createElement("li");
    if (id.includes("task"))
      return this.appendTask(id, task, element, eventListeners, content);
    this.appendProject(id, task, element, content);
  }

  appendTask(id, task, element, eventListeners, content) {
    const checkbox = this.createCheckbox(id, eventListeners);
    const date = this.createDate(id, eventListeners);
    const paragraph = this.createParagraph(id, task);

    element.id = id;
    element.classList.add("task");
    element.appendChild(checkbox);
    element.appendChild(paragraph);
    element.appendChild(date);

    content.append(element);
  }

  appendProject(id, task, element, content) {
    console.log("appendProject", id, task, element, content);
    const paragraph = this.createParagraph(id, task);
    const icon = this.createIcon(id);
    const button = this.createButton(id);

    button.appendChild(icon);
    button.appendChild(paragraph);

    element.id = id;
    element.appendChild(button);

    content.append(element);
  }

  createCheckbox(id, eventListeners) {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", id + "_checkbox");
    checkbox.checked = localStorage.getItem(id + "_checkbox") == "true";
    eventListeners.addEventListenerToElement(id + "_checkbox", checkbox);
    return checkbox;
  }

  createDate(id, eventListeners) {
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.value = localStorage.getItem(id + "_date");
    eventListeners.addEventListenerToElement(id + "_date", date);
    return date;
  }

  createParagraph(id, task) {
    const label = document.createElement("label");
    label.innerHTML = task;
    label.setAttribute("for", id + "_checkbox");
    return label;
  }

  createIcon(id) {
    const icon = document.createElement("img");
    icon.src = "../assets/icons/project.svg";
    icon.setAttribute("id", id + "_icon");
    return icon;
  }

  createButton(id) {
    const button = document.createElement("button");
    button.setAttribute("id", id + "_button");
    return button;
  }
}
