// import _ from "lodash";
import "./style.css";

import ui from "./ui";
import eventListeners from "./eventListeners";
import setup from "./setup";

let pageBuilder = new ui();
pageBuilder.navbar();
pageBuilder.createContent();
pageBuilder.updateList("add_task");
pageBuilder.updateList("add_project");

const defaultSetting = new setup();
defaultSetting.defaultLocalStorage();

let eListeners = new eventListeners();
eListeners.activateDomButtons();
