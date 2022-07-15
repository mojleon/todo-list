import { eventListeners } from "./eventListeners";
import { ui } from "./ui";
export class storage {
  constructor() {}

  clearTaskList() {
    const content = document.querySelector(".content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  addList(value, type) {
    const uiClass = new ui();

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

    uiClass.updateList(type);
    const eventListenersClass = new eventListeners();

    eventListenersClass.addProjectEventListener(
      `${updateType}${localStorage.getItem(`${updateType.slice(0, -1)}Number`)}`
    );
    this.incrementListNumber(type);
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
}
