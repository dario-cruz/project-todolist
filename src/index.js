import './index.css'
import { projectList } from "./components/projectGenerator";
import { getAllLocalStorage, processAllLocalStorage, placeInStorage } from "./components/localStorageManipulator";
import { processList, projectToDom } from './components/domManipulation';
import { makeDefaultProject } from './inbox';
import { newTaskModal } from './components/pageElements';
import { domElement } from './components/elementGenerator';
import { projectButton, projectModal } from './components/projectModal';


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
// const addProjectButton = document.createElement('button')
const headingTextDiv = document.createElement('div')
const headingButtonDiv = document.createElement('div')
const addTaskButton = document.createElement('button')
const rightPanelPlaceholder = document.createElement('h1')

// Set needed attributes for page elements. 
headerPanel.setAttribute('class', 'header-panel')
leftPanel.setAttribute('class', 'left-panel')
leftPanel.setAttribute('id', 'project-panel')
rightPanel.setAttribute('class', 'right-panel')
rightPanel.setAttribute('id', 'task-panel')
footerPanel.setAttribute('class', 'footer-panel')
pageTitle.setAttribute('class', 'page-title')
// addProjectButton.setAttribute('class', 'add-project-button')
newProjectDiv.setAttribute('class', 'project-div')
headingTextDiv.setAttribute('class', 'heading-text-div')
headingButtonDiv.setAttribute('class', 'heading-button-div')
addTaskButton.setAttribute('class', 'task-button')
rightPanelPlaceholder.setAttribute('class', 'right-place-holder')


// Content for main page elements.
pageTitle.innerText = "- Just Do It! - a Todo List by Dario Cruz"
// addProjectButton.innerHTML = "Add Project"
addTaskButton.innerText = "Add Task"
rightPanelPlaceholder.innerText = "Please select a task from the left."


// Append all the elements needed to root elements.
// newProjectDiv.append(addProjectButton)
projectModal(contentDiv)
projectButton(newProjectDiv, document.querySelector('.modal-container'))
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(headingTextDiv)
headerPanel.append(headingButtonDiv)
headingTextDiv.append(pageTitle)
newProjectDiv.append(addTaskButton)
leftPanel.append(newProjectDiv)
rightPanel.append(rightPanelPlaceholder)

// Check all localStorage items, convert, and add to array for dom appending.
processAllLocalStorage(projectList)

// Append all items put in the array to the dom.
processList(projectList)

// On button click allow for adding of task.
addTaskButton.addEventListener('click', () => {
    // Obtain data on what project tasks are being displayed so that we can modify and store information
    // in the correct place. 
    let currentProject = rightPanel.getAttribute('data-object')
    if (currentProject == undefined) {
        alert('Please select a project.')
    } else {
        // Get the index position of the project being displayed. So we can modify it. 
        let listPosition = projectList.findIndex(prop => prop.projectName == currentProject)
        
        // Check if the code is functioning as intended.
        console.log(currentProject, listPosition)
        // Create the modal for form input and show it so the user can input a new task.
        newTaskModal(contentDiv)
        // toggle the class for visibility of the form. 
        let modalElem = document.getElementById('modal-div')
        modalElem.classList.toggle('closed-modal') 
    }
}) 



export {leftPanel, rightPanel, footerPanel, headerPanel, newProjectDiv}