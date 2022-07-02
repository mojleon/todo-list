import { storage } from "./storage";

export class eventListeners {
  constructor() {
    this.buttons = document.querySelectorAll("button");
    this.storage = new storage();
    this.visibleInput = false;
  }

  addEventListenerToElement(id, element) {
    element.addEventListener("change", (e) => {
      if (id.includes("checkbox")) localStorage.setItem(id, e.target.checked);
      else localStorage.setItem(id, e.target.value);
    });
  }

  domButtons() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopImmediatePropagation();

        if (e.target.dataset.type.includes("input"))
          this.showInput(e.target.dataset.type);
      });
    });
  }

  showInput(inputType) {
    if (inputType === "add-task-input") this.showTaskInput();
    if (inputType === "add-project-input") this.showProjectInput();
  }

  addInput(container) {
    const input = document.createElement("input");
    input.classList.add("input");
    container.appendChild(input);
  }

  addButton(container, text, backgroundColor, type) {
    const button = document.createElement("button");
    button.innerHTML = text;
    button.id = type;
    button.style.backgroundColor = backgroundColor;
    container.appendChild(button);

    button.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const value = document.querySelector(".input").value;
      if (type === "add_task") this.storage.addList(value, type);
      if (type === "cancel_adding_task") this.enableButton();
    });
  }

  enableButton() {
    this.visibleInput = false;

    console.log(document.querySelector(".add-input"));
    // document.querySelector(`.add-input`).remove();
    // document
    //   .querySelector(`button[data-type='add-input']`)
    //   .classList.remove("disabled");

    localStorage.clear();
  }

  showTaskInput() {
    if (this.visibleInput) return;
    this.visibleInput = true;

    document
      .querySelector("button[data-type='add-task-input']")
      .classList.add("disabled");

    const main = document.querySelector(".tasks");

    const container = this.createContainer();

    main.appendChild(container);

    this.addInput(container);

    this.addInputControls(container, "task");
  }

  showProjectInput() {
    const main = document.querySelector(".projects");
    const container = this.createContainer();

    main.appendChild(container);

    this.addInput(container);

    this.addInputControls(container, "project");
  }

  addInputControls(container, type) {
    const flexButtons = document.createElement("div");
    flexButtons.classList.add("flex-buttons");
    container.appendChild(flexButtons);
    this.addButton(
      flexButtons,
      "ADD " + type.toUpperCase(),
      "#9ACD32",
      "add_" + type
    );
    this.addButton(flexButtons, "CANCEL", "red", "cancel_adding_" + type);
  }

  createContainer() {
    const container = document.createElement("div");
    container.classList.add("add-input");
    return container;
  }
}
