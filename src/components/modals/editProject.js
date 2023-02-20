import { attributeHelper } from "../../helpers/attributeHelper"
import { currentItem } from "../../helpers/currentItemHolder"
import { projectList } from "../projectGenerator"

// Modal Container
const editProjectContainer = document.createElement('div')
attributeHelper(editProjectContainer, {'id':'edit-project-container'})

// Modal Content
const editProjectContent = document.createElement('div')
attributeHelper(editProjectContent, {'id':'edit-project-content'})

// Modal Form
const editProjectForm = document.createElement('form')
attributeHelper(editProjectForm, {'id':'edit-project-form', 'action':''})
editProjectForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let targetProject = projectList.find(element => element == currentItem.currentProject)
    // Update the project name value with value from input.
    targetProject.projectName = editProjectName.value
    
})

// Form Inputs
const editProjectNameLabel = document.createElement('label')
attributeHelper(editProjectNameLabel, {'for':'edit-project-input','form':'edit-project-form'})
const editProjectName = document.createElement('input')
attributeHelper(editProjectName, {'id':'edit-project-input','type':'text', 'required':''})

// Submit button
const editProjectSubmit = document.createElement('button')
attributeHelper(editProjectSubmit, {'id':'edit-project-submit'})

// Span element for closing modal.
const editProjectSpan = document.createElement('span')
editProjectSpan.innerHTML = '&times'


// Exportable func for adding element to the dom.
const editProjectModal = (targetElement) => {

}


export {editProjectModal}