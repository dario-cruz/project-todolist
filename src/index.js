import './index.css'
import { projectList } from "./components/projectGenerator";
import { processAllLocalStorage } from "./components/localStorageManipulator";
import { processList } from './components/domManipulation';
import { projectModal } from './components//modals/projectModal';
import { taskModal } from './components/modals/taskModal';
import { pageFrame } from './components/pageFrame';
import { makeDefaultProject } from './inbox';
import { taskEditModal } from './components/modals/taskEditModal';
import { editProjectModal } from './components/modals/editProject';
import { checkTheString } from './components/Validation/projectValidation';

// Add main content div to body for all other content to append to. 
const contentDiv = document.createElement('div')
contentDiv.setAttribute('id', 'content')
document.body.append(contentDiv)

// Create all the dom elements needed.
pageFrame(contentDiv)

// Check for projects and if none are found create the default inbox.
makeDefaultProject()

// Check all localStorage items, convert, and add to array for dom appending.
processAllLocalStorage(projectList)

// Append all items put in the array to the dom.
processList(projectList)
// Append modals
projectModal(contentDiv)
taskModal(contentDiv)
taskEditModal(contentDiv)
editProjectModal(contentDiv)

// Testing regex on the main page before implementation. 
checkTheString('This is a project nAME093dfsdf')