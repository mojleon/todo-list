// import _ from "lodash";
import "./style.css";

import { ui } from "./ui";
import { eventListeners } from "./eventListeners";
import { storage } from "./storage";
import { setup } from "./setup";

let pageBuilder = new ui();
pageBuilder.navbar();
pageBuilder.createContent();
pageBuilder.updateList("add_task");
pageBuilder.updateList("add_project");

const defaultSetting = new setup();
defaultSetting.defaultLocalStorage();

const localStorage = new storage();

let eListeners = new eventListeners();
eListeners.domButtons();
