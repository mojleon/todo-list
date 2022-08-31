import eventListeners from "./eventListeners";

export default class input {
  constructor() {}

  showInput(inputType) {
    if (inputType === "add-task-input") this.showTaskInput();
    if (inputType === "add-project-input") this.showProjectInput();
  }

  showTaskInput() {
    if (document.querySelector("#tasks-input") !== null) return;

    document
      .querySelector("button[data-type='add-task-input']")
      .classList.add("disabled");

    const main = document.querySelector(".tasks");
    const container = this.createContainer("tasks");
    main.appendChild(container);
    this.addInput(container);
    this.addInputControls(container, "task");
  }

  showProjectInput() {
    if (document.querySelector("#projects-input") !== null) return;

    document
      .querySelector("button[data-type='add-project-input']")
      .classList.add("disabled");

    const main = document.querySelector(".projects");
    const container = this.createContainer("projects");
    main.appendChild(container);
    this.addInput(container);
    this.addInputControls(container, "project");
  }

  addInput(container) {
    const input = document.createElement("input");
    input.classList.add("input");
    container.appendChild(input);
  }

  addButton(container, text, backgroundColor, type) {
    this.eventListeners = new eventListeners();

    const button = document.createElement("button");
    button.innerHTML = text;
    button.id = type;
    button.style.backgroundColor = backgroundColor;
    container.appendChild(button);
    this.eventListeners.updateList(button, type);
  }

  disableAddInputs(type) {
    if (type.includes("task")) this.disableTaskInput();
    else this.disableProjectInput();
  }

  disableTaskInput() {
    console.log("disableTaskInput");
    document.querySelector(`#tasks-input`).remove();
    document
      .querySelector(`button[data-type='add-task-input']`)
      .classList.remove("disabled");
  }

  disableProjectInput() {
    document.querySelector(`#projects-input`).remove();
    document
      .querySelector(`button[data-type='add-project-input']`)
      .classList.remove("disabled");
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

  createContainer(type) {
    const container = document.createElement("div");
    container.classList.add("add-input");
    container.setAttribute("id", type + "-input");
    return container;
  }
}
