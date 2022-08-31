import eventListeners from "./eventListeners";
import listClass from "./list";
export default class storage {
  constructor() {
    this.date = new Date().toLocaleDateString("en-US");
  }

  clearTaskList() {
    const content = document.querySelector(".content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  addList(value, type) {
    const list = new listClass();

    const updateType = type === "add_task" ? "task_" : "project_";
    if (type === "add_task")
      localStorage.setItem(
        `${updateType}${localStorage.getItem(
          `${updateType.slice(0, -1)}Number`
        )}_${localStorage.getItem("projectTimeType")}_${this.date}`,
        value
      );
    else
      localStorage.setItem(
        `${updateType}${localStorage.getItem(
          `${updateType.slice(0, -1)}Number`
        )}`,
        value
      );

    type.includes("task") ? list.updateTaskList() : list.updateProjectList();
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
