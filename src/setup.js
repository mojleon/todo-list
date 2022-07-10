export class setup {
  constructor() {
    this.body = document.querySelector("body");
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

  defaultLocalStorage() {
    if (localStorage.getItem("taskNumber") === null)
      localStorage.setItem("taskNumber", 0);
    if (localStorage.getItem("projectNumber") === null)
      localStorage.setItem("projectNumber", 0);
    if (localStorage.getItem("projectTimeType") === null)
      localStorage.setItem("projectTimeType", "inbox");
  }
}
