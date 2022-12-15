import './index.css'
import { makeDefaultProject } from "./inbox";
import { Project, projectList } from "./components/project-generator";
import { getAllLocalStorage, processAllLocalStorage, placeInStorage } from "./components/localStorageManipulator";
import { processList, projectToDom } from './components/dom-manipulation';

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
pageTitle.innerText = "- Just Do It! - a Todo List by Dario Cruz"
addProjectButton.innerHTML = "Add Project"

// Append all the elements needed to root elements.
newProjectDiv.append(addProjectButton)
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(pageTitle)
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




export {leftPanel, rightPanel, contentDiv, footerPanel, headerPanel, newProjectDiv, addProjectButton}