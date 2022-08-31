import storage from "./storage";
import eventListeners from "./eventListeners";

export default class list {
  constructor() {
    this.storage = new storage();
    this.eventListeners = new eventListeners();
    this.date = new Date().toLocaleDateString("en-US");
    this.content = null;
  }

  updateList(type) {
    const updateType = type === "add_task" ? "task_" : "project_";
    let storageKeys = Object.keys(localStorage).filter((e) =>
      e.includes(updateType)
    );

    this.content =
      type === "add_task"
        ? document.querySelector(".content")
        : document.querySelector(".project-content");

    for (let i = 0; i <= storageKeys.length; i++) {
      const id =
        updateType +
        i +
        "_" +
        localStorage.getItem("projectTimeType") +
        "_" +
        this.date;
      if (
        document.getElementById(id) ||
        document.querySelector(`#` + updateType + i)
      )
        continue;

      const value = localStorage.getItem(id);
      if (type === "add_task") this.appendList(id, value);
      else
        this.appendList(updateType + i, localStorage.getItem(updateType + i));
    }

    if (localStorage.getItem("projectTimeType") !== null)
      document.querySelector("#header").innerHTML = localStorage
        .getItem("projectTimeType")
        .replace("_", " ");
  }

  appendList(id, value) {
    if (value === null) return;

    let element = document.createElement("li");
    if (id.includes("task"))
      return this.appendTask(id, value, element, this.eventListeners);
    this.appendProject(id, value, element);
  }

  appendTask(id, value, element) {
    const checkbox = this.createCheckbox(id, this.eventListeners);
    const date = this.createDate(id, this.eventListeners);
    const paragraph = this.createParagraph(id, value);

    element.id = id;
    element.classList.add("task");
    element.appendChild(checkbox);
    element.appendChild(paragraph);
    element.appendChild(date);

    this.content.append(element);
  }

  appendProject(id, value, element) {
    const icon = this.createIcon(id);
    const button = this.createButton(id);

    button.appendChild(icon);
    button.innerHTML += value;

    button.setAttribute("data-type", value);

    element.id = id;
    element.appendChild(button);

    this.content.append(element);
  }

  createCheckbox(id) {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", id + "_checkbox");
    checkbox.checked = localStorage.getItem(id + "_checkbox") == "true";
    this.eventListeners.addEventListenerToElement(id + "_checkbox", checkbox);
    return checkbox;
  }

  createDate(id) {
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.value = localStorage.getItem(id + "_date");
    this.eventListeners.addEventListenerToElement(id + "_date", date);
    return date;
  }

  createParagraph(id, value) {
    const label = document.createElement("label");
    label.innerHTML = value;
    label.setAttribute("for", id + "_checkbox");
    return label;
  }

  createIcon(id) {
    const icon = document.createElement("img");
    icon.src = "./assets/icons/project.svg";
    icon.setAttribute("id", id + "_icon");
    return icon;
  }

  createButton(id) {
    const button = document.createElement("button");
    button.setAttribute("id", id + "_button");
    return button;
  }
}
