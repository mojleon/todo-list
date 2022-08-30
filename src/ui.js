import storage from "./storage";
import eventListeners from "./eventListeners";

export default class ui {
  constructor() {
    this.body = document.querySelector("body");
    this.storage = new storage();
    this.eventListeners = new eventListeners();
    this.date = new Date().toLocaleDateString("en-US");
  }

  navbar() {
    const nav = document.createElement("nav");
    nav.innerHTML = "<img src='./assets/logo.svg'><h1>TO-DO</h1>";
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
      <li><button data-type='inbox'><img src='./assets/icons/inbox.svg'> INBOX</button></li>
      <li><button data-type='today'><img src='./assets/icons/calendar-today.svg'> TODAY</button></li>
      <li><button data-type='this_week'><img src='./assets/icons/calendar-week.svg'> THIS WEEK</button></li>
      <h2>PROJECTS</h2>
      <div class="projects">
        <ul class='project-content'></ul>
        <button data-type='add-project-input'><img src='./assets/icons/plus-small.svg'> ADD PROJECT</button>
      </div>
      <li><button data-type='clear-storage'>CLEAR STORAGE</button></li> `;
    container.appendChild(sideBar);
  }

  main(container) {
    const main = document.createElement("div");
    main.classList.add("tasks");
    main.innerHTML = `<h2 id="header">INBOX</h2>
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

  ///////////////////////////////////////////////////////////////////////////
  updateList(type) {
    const updateType = type === "add_task" ? "task_" : "project_";
    let storageKeys = Object.keys(localStorage).filter((e) =>
      e.includes(updateType)
    );

    const eventListenersClass = new eventListeners();

    const content =
      type === "add_task"
        ? document.querySelector(".content")
        : document.querySelector(".project-content");

    for (let i = 0; i <= storageKeys.length; i++) {
      // if (
      //   document.querySelector(
      //     `#` +
      //       updateType +
      //       i +
      //       "_" +
      //       localStorage.getItem("projectTimeType") +
      //       "_" +
      //       this.date
      //   ) ||
      //   document.querySelector(`#` + updateType + i)
      // )
      //   continue;

      if (type === "add_task")
        this.appendList(
          updateType +
            i +
            "_" +
            localStorage.getItem("projectTimeType") +
            "_" +
            this.date,
          localStorage.getItem(
            updateType +
              i +
              "_" +
              localStorage.getItem("projectTimeType") +
              "_" +
              this.date
          ),
          content,
          eventListenersClass
        );
      else
        this.appendList(
          updateType + i,
          localStorage.getItem(updateType + i),
          content,
          eventListenersClass
        );
    }

    if (localStorage.getItem("projectTimeType") !== null)
      document.querySelector("#header").innerHTML = localStorage
        .getItem("projectTimeType")
        .replace("_", " ");
  }

  appendList(id, task, content, eventListeners) {
    if (task === null) return;

    let element = document.createElement("li");
    if (id.includes("task"))
      return this.appendTask(id, task, element, eventListeners, content);
    this.appendProject(id, task, element, content);
  }

  appendTask(id, task, element, eventListeners, content) {
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

  appendProject(id, task, element, content) {
    const icon = this.createIcon(id);
    const button = this.createButton(id);

    button.appendChild(icon);
    button.innerHTML += task;

    button.setAttribute("data-type", task);

    element.id = id;
    element.appendChild(button);

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

  createIcon(id) {
    const icon = document.createElement("img");
    icon.src = "./assets/icons/project.svg";
    icon.setAttribute("id", id + "_icon");
    return icon;
  }

  createButton(id) {
    const button = document.createElement("button");
    button.setAttribute("id", id + "_button");
    return button;
  }
}
