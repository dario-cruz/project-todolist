import './index.css'
import { projectList } from "./components/projectGenerator";
import { processAllLocalStorage } from "./components/localStorageManipulator";
import { processList, projectToDom } from './components/domManipulation';
import { newTaskModal } from './components/pageElements';
import { projectButton, projectModal } from './components/projectModal';
import { taskModal, taskButton } from './components/taskModal';
import { makeDefaultProject } from './inbox';

// Add main content div to body for all other content to append to. 
const contentDiv = document.createElement('div')
contentDiv.setAttribute('id', 'content')
document.body.append(contentDiv)

// Define the elements of the page to append,
const headerPanel = document.createElement('div')
const leftPanel = document.createElement('div')
const rightPanel = document.createElement('div')
const footerPanel = document.createElement('div')
const pageTitle = document.createElement('h1')
const newProjectDiv = document.createElement('div')
const headingTextDiv = document.createElement('div')
const headingButtonDiv = document.createElement('div')
const rightPanelPlaceholder = document.createElement('h1')

// Set needed attributes for page elements. 
headerPanel.setAttribute('class', 'header-panel')
leftPanel.setAttribute('class', 'left-panel')
leftPanel.setAttribute('id', 'project-panel')
rightPanel.setAttribute('class', 'right-panel')
rightPanel.setAttribute('id', 'task-panel')
footerPanel.setAttribute('class', 'footer-panel')
pageTitle.setAttribute('class', 'page-title')
newProjectDiv.setAttribute('class', 'project-div')
headingTextDiv.setAttribute('class', 'heading-text-div')
headingButtonDiv.setAttribute('class', 'heading-button-div')
rightPanelPlaceholder.setAttribute('class', 'right-place-holder')


// Content for main page elements.
pageTitle.innerText = "- Just Do It! - a Todo List by Dario Cruz"
rightPanelPlaceholder.innerText = "Please select a task from the left."


// Append all the elements needed to root elements.
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(headingTextDiv)
headerPanel.append(headingButtonDiv)
headingTextDiv.append(pageTitle)
leftPanel.append(newProjectDiv)
rightPanel.append(rightPanelPlaceholder)

// Check all localStorage items, convert, and add to array for dom appending.
processAllLocalStorage(projectList)

// Append all items put in the array to the dom.
processList(projectList)

projectModal(contentDiv)
taskModal(contentDiv)
projectButton(newProjectDiv, document.getElementById('project-modal-container'))

export {leftPanel, rightPanel, footerPanel, headerPanel, newProjectDiv}