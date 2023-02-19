import { addProjectToArray, projectList, Project } from "./components/projectGenerator";
import { placeInStorage } from "./components/localStorageManipulator";

// Make IIFE that will create the default task. 
const makeDefaultProject = () => {
    // Make condition to check localStorage for items. If items are present, do not add the default project.
    if (localStorage.length === 0) {
        // Create default project "inbox" and add default task to the project.
        const inboxProject = new Project('Inbox')
        // Create elements for the left-panel. 
        inboxProject.makeNewTask('Clean the Kitchen', 'Hi', 'Make sure to clean under the cabinet.', '2030-01-02')
        inboxProject.makeNewTask('Take out Trash', 'Low', 'Remember to sort the recycling.', '2023-02-02')
    
        //Add to localStorage
        placeInStorage(inboxProject)
    } else {
        console.log('Items present in localStorage.')
        console.log('Not creating default project.')
    }
}


export {makeDefaultProject}