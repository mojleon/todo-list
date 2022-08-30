export default class setup {
  constructor() {}

  defaultLocalStorage() {
    if (localStorage.getItem("taskNumber") === null)
      localStorage.setItem("taskNumber", 0);
    if (localStorage.getItem("projectNumber") === null)
      localStorage.setItem("projectNumber", 0);
    if (localStorage.getItem("projectTimeType") === null)
      localStorage.setItem("projectTimeType", "inbox");
  }
}
