// import _ from "lodash";
// import "./style.css";

import { setup } from "@/src/setup";
import { eventListeners } from "@/src/eventListeners";
import { storage } from "@/src/storage";

// function component() {
//   const element = document.createElement("div");

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// }

// document.body.appendChild(component());

let pageBuilder = new setup();

pageBuilder.navbar();
pageBuilder.createContent();

let eListeners = new eventListeners();
eListeners.domButtons();

const localStorage = new storage();
localStorage.updateTasks();
