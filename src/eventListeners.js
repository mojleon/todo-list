import storage from "./storage";
import listClass from "./list";
import input from "./input";

export default class eventListeners {
  constructor() {
    this.storage = new storage();
    this.visibleInput = false;
    this.input = new input();
  }

  addEventListenerToElement(id, element) {
    element.addEventListener("change", (e) => {
      if (id.includes("checkbox"))
        this.storage.saveCheckbox(id, e.target.checked);
      else if (id.includes("input")) this.storage.saveInput(id, e.target.value);
      else this.storage.saveDate(id, e.target.value);
    });
  }

  addProjectEventListener(id) {
    if (!id.includes("project")) return;

    const project = document.querySelectorAll(`#${id}_button`);
    project[0].addEventListener("click", (e) => {
      this.sideBarEventListeners(project);
    });
  }

  sideBarEventListeners(selector) {
    this.list = new listClass();
    selector.forEach((select) => {
      select.addEventListener("click", (e) => {
        e.stopImmediatePropagation();

        if (
          !e.target.dataset.type.includes("add") &&
          !e.target.dataset.type.includes("cancel")
        ) {
          localStorage.setItem("projectTimeType", e.target.dataset.type);
          this.storage.clearTaskList();
          this.list.updateTaskList();
        }

        if (e.target.dataset.type.includes("input"))
          this.input.showInput(e.target.dataset.type);

        if (e.target.dataset.type === "clear-storage") {
          sessionStorage.clear();
          document.querySelector(".project-content").innerHTML = "";
          document.querySelector("button[data-type='inbox']").click();
        }
      });
    });
  }

  activateDomButtons() {
    this.buttons = document.querySelectorAll("button");
    this.sideBarEventListeners(this.buttons);
  }

  updateList(button, type) {
    button.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const value = document
        .querySelector(`#${e.target.id}`)
        .parentNode.parentElement.querySelector(".input").value;
      if (type.includes("add_")) this.storage.addList(value, type);
      if (type.includes("cancel")) this.input.disableAddInputs(type);
    });
  }
}
