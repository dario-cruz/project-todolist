import { Project } from "./components/project-generator";
import { leftPanel, rightPanel, headerPanel } from ".";
import { domAppender } from "./components/domappender";

// Define the elements needed.

// Create default project "inbox" and add default task to the project.
const inboxProject = new Project('inbox')

inboxProject.makeNewTask('Clean the Kitchen', 1, 'Make sure to clean under the cabinet')
inboxProject.makeNewTask('Take out Trash', 2, 'Remember to sort the recycling')
inboxProject.getAllTasks()
const InboxToDom = () => {
    inboxProject.projectTasks.forEach(task => {
        let parentElem = document.createElement('div')
        parentElem.setAttribute('class', 'task')
        rightPanel.append(parentElem)
        domAppender('h1', 'task-title', parentElem, task.taskName) 
        domAppender('p', 'task-notes', parentElem, task.taskNotes)
    });
}

export {InboxToDom}