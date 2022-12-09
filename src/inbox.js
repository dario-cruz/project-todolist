import { Project } from "./components/project-generator";
import { leftPanel, rightPanel, headerPanel } from ".";
import { domAppender } from "./components/domappender";
import { projectToDom } from "./components/dom-manipulation";

// Define the elements needed.

// Create default project "inbox" and add default task to the project.
const inboxProject = new Project('Inbox')
// Create elements for the left-panel. 
inboxProject.makeNewTask('Clean the Kitchen', 1, 'Make sure to clean under the cabinet')
inboxProject.makeNewTask('Take out Trash', 2, 'Remember to sort the recycling')
inboxProject.getAllTasks()

// projectToDom(inboxProject)

export {inboxProject}