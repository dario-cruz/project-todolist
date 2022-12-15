import { addProjectToArray, projectList, Project } from "./components/project-generator";
import { placeInStorage } from "./components/localStorageManipulator";

// Make IIFE that will create the default task. 
const makeDefaultProject = (() => {
    // Make condition to check localStorage for items. If items are present, do not add the default project.
    if (localStorage.length == 0) {
        // Create default project "inbox" and add default task to the project.
        const inboxProject = new Project('Inbox')
        // Create elements for the left-panel. 
        inboxProject.makeNewTask('Clean the Kitchen', 1, 'Make sure to clean under the cabinet')
        inboxProject.makeNewTask('Take out Trash', 2, 'Remember to sort the recycling')
        
        //Add it to the project list. 
        addProjectToArray(inboxProject, projectList)
        //Add to localStorage
        placeInStorage(inboxProject)
    } else {
        console.log('Items present in localStorage.')
        console.log('Not creating default project.')
    }
})()


export {makeDefaultProject}