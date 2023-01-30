import './pageElements.css'
import { Project, projectList } from './projectGenerator'
import { Task } from './taskGenerator'
import { clearAllStorage, processProjectList } from './localStorageManipulator'
import { clearTaskElem } from './domManipulation'

// Create the main div for the rest of the project elements to append to. 
const createMainDiv = () => {
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('id', 'content')
    document.body.append(contentDiv)
    return contentDiv
}

const createDefaultPageContent = () => {
    // Header of the page
    const headerPanel = document.createElement('div')
    headerPanel.setAttribute('class', 'header-panel')

    // Page title for header.
    const pageTitle = document.createElement('h1')
    pageTitle.setAttribute('class', 'page-title')
    pageTitle.innerText = "- Just Do It! - a Todo List by Dario Cruz"

    // Div element to contain all text elems for header. 
    const headingTextDiv = document.createElement('div')
    headingTextDiv.setAttribute('class', 'heading-text-div')
    
    // Div element to contain all buttons placed in header div.
    const headingButtonDiv = document.createElement('div')
    headingButtonDiv.setAttribute('class', 'heading-button-div')

    // Left panel which stores all of the projects added.
    const leftPanel = document.createElement('div')
    leftPanel.setAttribute('class', 'left-panel')
    leftPanel.setAttribute('id', 'project-panel')

    // Div to contain new project elements. 
    const newProjectDiv = document.createElement('div')
    newProjectDiv.setAttribute('class', 'project-div') 
    
    // Button for adding projects to the list and localStorage. 
    const addProjectButton = document.createElement('button')
    addProjectButton.setAttribute('class', 'add-project-button')
    addProjectButton.innerText = "Add Project"

    // Right panel which stores all of the tasks associated with the active project. 
    const rightPanel = document.createElement('div')
    rightPanel.setAttribute('class', 'right-panel')
    rightPanel.setAttribute('id', 'task-panel')

    // Button for adding new tasks to the selected project.
    const addTaskButton = document.createElement('button')
    addTaskButton.setAttribute('class', 'task-button')
    addTaskButton.setAttribute('id', 'add-task-button')
    addTaskButton.innerText = "New Task"
    
    // Footer panel for credits and acknowledgements
    const footerPanel = document.createElement('div')
    footerPanel.setAttribute('class', 'footer-panel')

    // Append the elements to one another so that they can then be appended to the main content div. 

}

const removeProjectButton = (targetElement) => {
    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'remove-project-button')
    removeButton.innerText = 'Remove Project'


    // On click get the project and delete it.
    removeButton.addEventListener('click', () => {
        // Get the parent element so we can remove the project tab.
        // Button will be placed in the same div as the project heading.
        let parentElement = removeButton.parentNode

        // Find out which project is currently selected.
        let targetProjectName = parentElement.getAttribute('id')
        targetProjectName = targetProjectName.toString().replaceAll('-tab', '')
        console.log(targetProjectName)

        // Remove the project from the projectList.
        let targetProject = projectList.find(element => element.projectName == targetProjectName)
        console.log(targetProject)
        let targetProjectIndex = projectList.indexOf(targetProject)
        projectList.splice(targetProjectIndex, 1)
        console.log(projectList)

        // Remove project tab from the dom.
        parentElement.remove()

        // Update local storage to reflect changes. 
        clearAllStorage()
        processProjectList()

        // Update the dom
        let theTarget = document.querySelector('#task-panel')
        clearTaskElem(theTarget)
  
    })
    // Attach the element.
    targetElement.appendChild(removeButton) 
}

export {createMainDiv, removeProjectButton}