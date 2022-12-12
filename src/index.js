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

export {leftPanel, rightPanel, contentDiv, footerPanel, headerPanel, newProjectDiv, addProjectButton}