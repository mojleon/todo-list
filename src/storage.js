import eventListeners from "./eventListeners";
import listClass from "./list";
export default class storage {
  constructor() {}

  clearTaskList() {
    const content = document.querySelector(".content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  addList(value, type) {
    const list = new listClass();

    const updateType = type === "add_task" ? "task_" : "project_";
    if (type === "add_task") {
      sessionStorage.setItem(
        `${updateType}${localStorage.getItem(
          `${updateType.slice(0, -1)}Number`
        )}`,
        JSON.stringify({
          checkbox: null,
          value: value,
          date: null,
        })
      );
    } else
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

  saveCheckbox(id, value) {
    id = id.replace("_checkbox", "");
    let sessionStorageObject = JSON.parse(sessionStorage.getItem(id));
    sessionStorageObject.checkbox = value;
    sessionStorage.setItem(id, JSON.stringify(sessionStorageObject));
  }

  saveDate(id, value) {
    id = id.replace("_date", "");
    let sessionStorageObject = JSON.parse(sessionStorage.getItem(id));
    sessionStorageObject.date = value;
    sessionStorage.setItem(id, JSON.stringify(sessionStorageObject));
  }

  saveInput(id, value) {
    id = id.replace("_input", "");
    let sessionStorageObject = JSON.parse(sessionStorage.getItem(id));
    sessionStorageObject.value = value;
    sessionStorage.setItem(id, JSON.stringify(sessionStorageObject));
    console.log(sessionStorage.getItem(id));
  }
}
