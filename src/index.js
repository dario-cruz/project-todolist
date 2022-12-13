import { domAppender } from "./components/domappender";
import { pageElement } from "./components/pageElement-class";
import './index.css'
import { InboxToDom } from "./inbox";
import { projectToDom } from "./components/dom-manipulation";
import { inboxProject } from "./inbox";
import { Project } from "./components/project-generator";

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

// Set needed attributes for page elements. 
headerPanel.setAttribute('class', 'header-panel')
leftPanel.setAttribute('class', 'left-panel')
rightPanel.setAttribute('class', 'right-panel')
footerPanel.setAttribute('class', 'footer-panel')
pageTitle.setAttribute('class', 'page-title')
addProjectButton.setAttribute('class', 'add-project-button')
newProjectDiv.setAttribute('class', 'project-div')

// Content for main page elements.
pageTitle.innerText = "- Just Do It! -"
addProjectButton.innerHTML = "Add Project"

// Append all the elements needed to root elements.
newProjectDiv.append(addProjectButton)
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(pageTitle)

// Testing localStorage
console.log(inboxProject)
window.localStorage.setItem("inboxProject", JSON.stringify(inboxProject))

const testItem = window.localStorage.getItem("inboxProject")
console.log(JSON.parse(testItem))

// Process the project object and add the project to the DOM via various defined elements.
projectToDom(inboxProject)
// Append the add project div to the end of the left-panel div. 
leftPanel.append(newProjectDiv)


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
        event.preventDefault()
        let newName = document.getElementById('new-project-input').value
        // newName = newName.toString.replaceAll(' ', '')
        console.log(newName)
        // const createdProject = new Project(document.getElementById('new-project-input').value)
        // console.log(createdProject)
        projectObjectNamer(document.getElementById('new-project-input').value)
        // Not working need to add elem back
        newProjectForm.replaceWith(addProjectButton)
        newProjectDiv.remove(newProjectInputButton)
    })
        
    const projectObjectNamer = (name) => {
        name = new Project(name)
        console.log(name)
        return name
    }
    
    return newProjectInput
})


export {leftPanel, rightPanel, contentDiv, footerPanel, headerPanel, newProjectDiv, addProjectButton}