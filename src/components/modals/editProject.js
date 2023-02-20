import { attributeHelper } from "../../helpers/attributeHelper"
import { currentItem, targetObject } from "../../helpers/currentItemHolder"

// Modal Container
const editProjectContainer = document.createElement('div')
attributeHelper(editProjectContainer, {'id':'edit-project-container'})

// Modal Content
const editProjectContent = document.createElement('div')
attributeHelper(editProjectContent, {'id':'edit-project-content'})

// Modal Form
const editProjectForm = document.createElement('form')
attributeHelper(editProjectForm, {'id':'edit-project-form', 'action':''})

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