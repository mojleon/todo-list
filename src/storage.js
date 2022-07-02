import { eventListeners } from "./eventListeners";
export class storage {
  constructor() {}

  addList(value, type) {
    console.log(value, type);
    localStorage.setItem(`task_${localStorage.getItem("taskNumber")}`, value);
    this.incrementListNumber();
    this.updateTasks(value);
  }

  incrementListNumber() {
    let taskNumber =
      localStorage.getItem("taskNumber") !== null
        ? parseInt(localStorage.getItem("taskNumber"))
        : 0;
    taskNumber += 1;
    localStorage.setItem("taskNumber", taskNumber);
  }

  updateTasks(value) {
    let storageKeys = Object.keys(localStorage).filter((e) =>
      e.includes("task_")
    );

    const eventListenersClass = new eventListeners();

    const content = document.querySelector(".content");

    for (let i = 0; i <= storageKeys.length; i++) {
      if (document.querySelector("#task_" + i)) continue;
      const index = i == 0 ? "null" : i;
      this.appendTask(
        "task_" + i,
        localStorage.getItem("task_" + index),
        content,
        eventListenersClass
      );
    }
    // const content = document.querySelector(".content");
    // const element = document.createElement("li");
    // element.innerHTML = task;
    // content.append(element);
  }

  appendTask(id, task, content, eventListeners) {
    if (task === null) return;
    let element = document.createElement("li");

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
}
