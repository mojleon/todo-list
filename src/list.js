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

  formatDate(date) {
    if (date === null || date === false || date === undefined) return;

    let dateFormated = date.split("-").reverse();
    dateFormated = [dateFormated[1], dateFormated[0], dateFormated[2]];

    if (dateFormated.includes("task_")) return;

    return dateFormated
      .join(",")
      .replace(/,/g, "/")
      .replace(/0(?=\d\/)/, "");
  }

  getStorageKeys(updateType) {
    const projectTimeType = localStorage.getItem("projectTimeType");
    if (projectTimeType === "inbox") {
      return Object.keys(sessionStorage).filter((item) => item);
    }
    if (projectTimeType === "today") {
      return Object.keys(sessionStorage).filter(
        (item) =>
          this.formatDate(JSON.parse(sessionStorage.getItem(item)).date) ===
            this.date ?? item
      );
    }
    if (projectTimeType === "this_week") {
      return Object.keys(sessionStorage).filter((item, index) => {
        const getTaskDate = JSON.parse(sessionStorage.getItem(item)).date;
        if (!getTaskDate) return;
        const day = 86400000; //number of milliseconds in a day
        const typeTaskDate = new Date(this.formatDate(getTaskDate)).getTime();
        console.log();
        if (typeTaskDate - new Date(this.date).getTime() + day * 7 >= 0)
          return item;
      });
    }
  }

  updateTaskList() {
    const updateType = "task_";
    let storageKeys = this.getStorageKeys(updateType);

    if (storageKeys === undefined) return;
    this.content = document.querySelector(".content");

    storageKeys.forEach((id) => {
      if (document.getElementById(id)) return;

      const value = JSON.parse(sessionStorage.getItem(id))?.value;
      this.appendList(id, value);
    });

    if (localStorage.getItem("projectTimeType") !== null) this.listHeader();
  }

  updateProjectList() {
    const updateType = "project_";
    let storageKeys = Object.keys(localStorage).filter((e) =>
      e.includes(updateType)
    );

    this.content = document.querySelector(".project-content");

    for (let i = 0; i <= storageKeys.length; i++) {
      const id = updateType + i;

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
    const input = this.createInput(id, value);

    element.id = id;
    element.classList.add("task");
    element.appendChild(checkbox);
    element.appendChild(input);
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
    checkbox.checked = JSON.parse(sessionStorage.getItem(id)).checkbox == true;
    this.eventListeners.addEventListenerToElement(id + "_checkbox", checkbox);
    return checkbox;
  }

  createDate(id) {
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.value = JSON.parse(sessionStorage.getItem(id)).date;
    this.eventListeners.addEventListenerToElement(id + "_date", date);
    return date;
  }

  createInput(id, value) {
    const input = document.createElement("input");
    input.value = value;
    input.setAttribute("id", id + "_input");
    input.setAttribute("class", "task-input");
    this.eventListeners.addEventListenerToElement(id + "_input", input);
    return input;
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
