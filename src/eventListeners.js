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

    const project = document.querySelectorAll(`#${id}_button`);
    project[0].addEventListener("click", (e) => {
      this.sideBarEventListeners(project);
    });
  }

  sideBarEventListeners(selector) {
    this.ui = new ui();
    selector.forEach((select) => {
      select.addEventListener("click", (e) => {
        e.stopImmediatePropagation();

        if (
          !e.target.dataset.type.includes("add") &&
          !e.target.dataset.type.includes("cancel")
        ) {
          localStorage.setItem("projectTimeType", e.target.dataset.type);
          this.storage.clearTaskList();
          this.ui.updateList("add_task");
        }

        if (e.target.dataset.type.includes("input"))
          this.ui.showInput(e.target.dataset.type);

        if (e.target.dataset.type === "clear-storage") {
          localStorage.clear();
        }
      });
    });
  }

  domButtons() {
    this.ui = new ui();

    this.buttons = document.querySelectorAll("button");
    this.sideBarEventListeners(this.buttons);
  }

  updateList(button, type) {
    this.ui = new ui();

    button.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const value = document
        .querySelector(`#${e.target.id}`)
        .parentNode.parentElement.querySelector(".input").value;
      if (type.includes("add_")) this.storage.addList(value, type);
      if (type.includes("cancel")) this.ui.disableAddInputs(type);
    });
  }
}
