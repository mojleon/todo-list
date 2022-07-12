// import _ from "lodash";
import "./style.css";

import { ui } from "./ui";
import { eventListeners } from "./eventListeners";
import { storage } from "./storage";
import { setup } from "./setup";

let pageBuilder = new ui();
pageBuilder.navbar();
pageBuilder.createContent();

const defaultSetting = new setup();
defaultSetting.defaultLocalStorage();

const localStorage = new storage();
localStorage.updateList("add_task");
localStorage.updateList("add_project");

let eListeners = new eventListeners();
eListeners.domButtons();
