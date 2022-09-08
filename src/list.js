import storage from "./storage";
import eventListeners from "./eventListeners";

export default class list {
  constructor() {
    this.storage = new storage();
    this.eventListeners = new eventListeners();
    this.date = new Date().toLocaleDateString("en-US");
    this.content = null;
  }

  listHeader() {
    document.querySelector("#header").innerHTML = localStorage
      .getItem("projectTimeType")
      .replace("_", " ");
  }

  updateTaskList() {
    const updateType = "task_";
    let storageKeys = Object.keys(localStorage).filter((e) =>
      e.includes(updateType)
    );

    this.content = document.querySelector(".content");

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

      const value = JSON.parse(localStorage.getItem(id))?.value;
      this.appendList(id, value);
    }

    if (localStorage.getItem("projectTimeType") !== null) this.listHeader();
  }

  updateProjectList() {
    const updateType = "project_";
    let storageKeys = Object.keys(localStorage).filter((e) =>
      e.includes(updateType)
    );

    this.content = document.querySelector(".project-content");

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

      this.appendList(updateType + i, localStorage.getItem(updateType + i));
    }

    if (localStorage.getItem("projectTimeType") !== null) this.listHeader();
  }

  appendList(id, value) {
    if (value === null || value === undefined) return;

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
    checkbox.checked = JSON.parse(localStorage.getItem(id)).checkbox == true;
    this.eventListeners.addEventListenerToElement(id + "_checkbox", checkbox);
    return checkbox;
  }

  createDate(id) {
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.value = JSON.parse(localStorage.getItem(id)).date;
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
