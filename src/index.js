// import _ from "lodash";
import "./style.css";

import ui from "./ui";
import eventListeners from "./eventListeners";
import setup from "./setup";
import listClass from "./list";

let pageBuilder = new ui();
pageBuilder.navbar();
pageBuilder.createContent();

let list = new listClass();
list.updateTaskList();
list.updateProjectList();

const defaultSetting = new setup();
defaultSetting.defaultLocalStorage();

let eListeners = new eventListeners();
eListeners.activateDomButtons();

// console.log(sessionStorage);
// localStorage.clear();
// sessionStorage.clear();
