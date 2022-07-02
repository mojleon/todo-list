// import _ from "lodash";
import "./style.css";

import { setup } from "./setup";
import { eventListeners } from "./eventListeners";
import { storage } from "./storage";

let pageBuilder = new setup();

pageBuilder.navbar();
pageBuilder.createContent();

let eListeners = new eventListeners();
eListeners.domButtons();

const localStorage = new storage();
localStorage.updateList("add_task");
localStorage.updateList("add_project");
