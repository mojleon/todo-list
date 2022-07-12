import { storage } from "./storage";
import { ui } from "./ui";

export class eventListeners {
  constructor() {
    this.storage = new storage();
    this.visibleInput = false;
  }

  addEventListenerToElement(id, element) {
    element.addEventListener("change", (e) => {
      if (id.includes("checkbox")) localStorage.setItem(id, e.target.checked);
      else localStorage.setItem(id, e.target.value);
    });
  }

  addProjectEventListener(id) {
    if (!id.includes("project")) return;

    const project = document.querySelector(`#${id}_button`);
    project.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      // this.storage.updateList("project_");
    });
  }

  domButtons() {
    this.ui = new ui();
    this.buttons = document.querySelectorAll("button");

    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopImmediatePropagation();

        if (
          !e.target.dataset.type.includes("add") &&
          !e.target.dataset.type.includes("cancel")
        ) {
          localStorage.setItem("projectTimeType", e.target.dataset.type);
          this.storage.clearTaskList();
          this.storage.updateList("add_task");
        }

        if (e.target.dataset.type.includes("input"))
          this.ui.showInput(e.target.dataset.type);

        if (e.target.dataset.type === "clear-storage") {
          localStorage.clear();
        }
      });
    });
  }

  updateList(button, type) {
    button.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const value = document
        .querySelector(`#${e.target.id}`)
        .parentNode.parentElement.querySelector(".input").value;
      if (type.includes("add")) this.storage.addList(value, type);
      if (type.includes("cancel")) this.ui.disableAddInputs(type);
    });
  }
}
