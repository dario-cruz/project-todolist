import './index.css'
import { Project, projectList } from "./components/projectGenerator";
import { getAllLocalStorage, processAllLocalStorage, placeInStorage } from "./components/localStorageManipulator";
import { processList, projectToDom } from './components/domManipulation';
import { makeDefaultProject } from './inbox';
import { newTaskModal } from './components/pageElements';

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
const addProjectButton = document.createElement('button')
const headingTextDiv = document.createElement('div')
const headingButtonDiv = document.createElement('div')
const addTaskButton = document.createElement('button')


// Set needed attributes for page elements. 
headerPanel.setAttribute('class', 'header-panel')
leftPanel.setAttribute('class', 'left-panel')
leftPanel.setAttribute('id', 'project-panel')
rightPanel.setAttribute('class', 'right-panel')
rightPanel.setAttribute('id', 'task-panel')
footerPanel.setAttribute('class', 'footer-panel')
pageTitle.setAttribute('class', 'page-title')
addProjectButton.setAttribute('class', 'add-project-button')
newProjectDiv.setAttribute('class', 'project-div')
headingTextDiv.setAttribute('class', 'heading-text-div')
headingButtonDiv.setAttribute('class', 'heading-button-div')
addTaskButton.setAttribute('class', 'task-button')


// Content for main page elements.
pageTitle.innerText = "- Just Do It! - a Todo List by Dario Cruz"
addProjectButton.innerHTML = "Add Project"
addTaskButton.innerText = "Add Task"


// Append all the elements needed to root elements.
newProjectDiv.append(addProjectButton)
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(headingTextDiv)
headerPanel.append(headingButtonDiv)
headingTextDiv.append(pageTitle)
headingButtonDiv.append(addTaskButton)
leftPanel.append(newProjectDiv)

// Check all localStorage items, convert, and add to array for dom appending.
processAllLocalStorage(projectList)

// Append all items put in the array to the dom.
processList(projectList)

// Add events to elements appended to the dom. 
addProjectButton.addEventListener('click', () => {
    // Create form for input element and submit button
    const newProjectForm = document.createElement('form')
    newProjectForm.setAttribute('action', '')
    newProjectDiv.append(newProjectForm)
    // Create input element and on button click replace the button with the input dialog. 
    const newProjectInput = document.createElement('input')
    newProjectInput.setAttribute('id', 'new-project-input')
    newProjectInput.setAttribute('type', 'text')
    newProjectInput.setAttribute('placeholder', 'Project Name')
    newProjectForm.append(newProjectInput)
    // Create submit button for input.
    const newProjectInputButton = document.createElement('input')
    newProjectInputButton.setAttribute('type', 'submit')
    newProjectInputButton.setAttribute('value', 'Submit')
    newProjectForm.append(newProjectInputButton)
    // Replace add project button with form element.
    addProjectButton.replaceWith(newProjectForm)
    
    // On submit of input for new project, create project with name and add it to the dom. 
    newProjectForm.addEventListener('submit', (event) => {
        // Prevent the default form post and refresh of the page.
        event.preventDefault()

        // Process the project name from the form.
        let newProjectName = document.getElementById('new-project-input').value
        newProjectName = newProjectName.replaceAll(' ', '-')
        
        // Create a new project using the name. 
        const processFormSubmit = ((objectName) => {
            // Create object from the given name argument.
            let newObject = new Project(objectName)
            console.log(newObject)
            
            // Push to the list for appending to dom later. 
            projectList.push(newObject)
            
            // Add the project into local storage.
            placeInStorage(newObject)
            
            // Check the contents of the array.
            console.log(projectList)

            // Allow for access of new object outside of function. So we can append to the dom.
            return newObject
        })(newProjectName)
        
        // Add project to the dom
        projectToDom(projectList[projectList.length - 1])

        // Replace the add new project form with the add project button.
        newProjectForm.replaceWith(addProjectButton)
    })
    return newProjectInput
})
// On button click allow for adding of task.
addTaskButton.addEventListener('click', () => {
    // Obtain data on what project tasks are being displayed so that we can modify and store information
    // in the correct place. 
    let currentProject = rightPanel.getAttribute('data-object')
    
    // Get the index position of the project being displayed. So we can modify it. 
    let listPosition = projectList.findIndex(prop => prop.projectName == currentProject)
    
    // Check if the code is functioning as intended.
    console.log(currentProject, listPosition)
    // Create the modal for form input and show it so the user can input a new task.
    newTaskModal(contentDiv)
    let modalElem = document.getElementById('modal-div')
    modalElem.classList.toggle('closed-modal')
}) 



export {leftPanel, rightPanel, footerPanel, headerPanel, newProjectDiv, addProjectButton}