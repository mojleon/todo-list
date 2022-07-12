import { storage } from "./storage";
import { eventListeners } from "./eventListeners";

export class ui {
  constructor() {
    this.body = document.querySelector("body");
    this.storage = new storage();
    this.eventListeners = new eventListeners();
  }

  navbar() {
    const nav = document.createElement("nav");
    nav.innerHTML = "<img src='../assets/logo.svg'><h1>TO-DO</h1>";
    this.body.appendChild(nav);
  }

  createContent() {
    const container = document.createElement("div");
    container.classList.add("container");
    this.body.appendChild(container);

    this.sideBar(container);
    this.main(container);
    this.footer(container);
  }

  sideBar(container) {
    const sideBar = document.createElement("div");
    sideBar.classList.add("sidebar");
    sideBar.innerHTML = `<h2>SIDEBAR</h2>
      <li><button data-type='inbox'><img src='../assets/icons/inbox.svg'> INBOX</button></li>
      <li><button data-type='today'><img src='../assets/icons/calendar-today.svg'> TODAY</button></li>
      <li><button data-type='this_week'><img src='../assets/icons/calendar-week.svg'> THIS WEEK</button></li>
      <h2>PROJECTS</h2>
      <div class="projects">
        <ul class='project-content'></ul>
        <button data-type='add-project-input'><img src='../assets/icons/plus-small.svg'> ADD PROJECT</button>
      </div>
      <li><button data-type='clear-storage'>CLEAR STORAGE</button></li> `;
    container.appendChild(sideBar);
  }

  main(container) {
    const main = document.createElement("div");
    main.classList.add("tasks");
    main.innerHTML = `<h2>Main</h2>
    <ul class='content'></ul>
    <button data-type='add-task-input'>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0741 6.00299L7.99703 6.00299V0.925964H6.00299V6.00299L0.925964 6.00299L0.925964 7.99703H6.00299V13.0741H7.99703V7.99703H13.0741V6.00299Z"/>
    </svg>
    ADD TASK</button>`;
    container.appendChild(main);
  }

  footer() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>Footer</p>";
    this.body.appendChild(footer);
  }

  /////////////////////////////////////////////////////////////////////////////

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

    this.eventListeners.updateList(button, type);
  }

  disableAddInputs() {
    this.visibleInput = false;

    document.querySelector(`.add-input`).remove();
    document
      .querySelector(`button[data-type='add-task-input']`)
      .classList.remove("disabled");
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
