import { attributeHelper } from "../helpers/attributeHelper"
import { projectButton } from "./modals/projectModal"
import './pageFrame.css'

// Header panel for storing Heading and other elements
const headerPanel = document.createElement('div')
attributeHelper(headerPanel, {'class':'header-panel'})

// Page title or headerPanel.
const headerContent = document.createElement('div')
attributeHelper(headerContent, {'class':'header-content-div'})

const pageHeading = document.createElement('h1')
attributeHelper(pageHeading, {'class':'header-page-heading'})
pageHeading.innerText = "- Just Do It! - a Todo List by Dario Cruz"

// Panel for selecting and modifying projects.
const leftPanel = document.createElement('div')
attributeHelper(leftPanel, {'class':'left-panel', 'id':'project-panel'})

// Project div for new project button
const newProjectDiv = document.createElement('div')
attributeHelper(newProjectDiv, {'class':'new-project-div', 'id':'new-project-div'})

// Panel for displaying an editing tasks associated with projects.
const rightPanel = document.createElement('div')
attributeHelper(rightPanel, {'id':'task-panel', 'class':'right-panel'})

// Placeholder for rightPanel when no project is selected.
const rightPlanePlaceholder = document.createElement('h1')
attributeHelper(rightPlanePlaceholder, {'class':'right-panel-placeholder'})
rightPlanePlaceholder.innerHTML = "Please select a task from the left."

// Bottom panel for footer and creator information
const footerPanel = document.createElement('div')
attributeHelper(footerPanel, {'class':'footer-panel'})

const pageFrame = (targetElement) => { 
    // Append all of the elements.
    headerPanel.append(headerContent)
    headerContent.append(pageHeading)
    rightPanel.append(rightPlanePlaceholder)
    leftPanel.append(newProjectDiv)
    projectButton(newProjectDiv)
    targetElement.append(headerPanel, rightPanel, leftPanel, footerPanel)
}    


export {pageFrame}