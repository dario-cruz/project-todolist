import './editProject.css'
import { attributeHelper } from "../../helpers/attributeHelper"
import { currentItem, targetProject } from "../../helpers/currentItemHolder"
import { processList } from "../domManipulation"
import { projectList } from "../projectGenerator"
import { clearAllStorage, processProjectList } from '../localStorageManipulator'

// Modal Container
const editProjectContainer = document.createElement('div')
attributeHelper(editProjectContainer, {'id':'edit-project-container','class':'is-hidden'})

// Modal Content
const editProjectContent = document.createElement('div')
attributeHelper(editProjectContent, {'id':'edit-project-content'})

// Modal Heading
const editProjectHeading =document.createElement('h1')
attributeHelper(editProjectHeading, {'id':'edit-project-heading'})

// Modal Form
const editProjectForm = document.createElement('form')
attributeHelper(editProjectForm, {'id':'edit-project-form', 'action':''})
editProjectForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let targetProj = targetProject()
    // Update the project name value with value from input.
    targetProj.projectName = editProjectName.value

    // Update left-panel with updated project name. 
    let elementList = document.querySelectorAll('.left-panel > div')
    elementList.forEach(element => {
        if (element.classList.contains('new-project-div')) {

        } else {
            element.remove()
        }
    })
    clearAllStorage()
    processProjectList()
    processList(projectList)

    // Toggle viz of modal.
    editProjectContainer.classList.toggle('is-hidden')
})

// Form Inputs
const editProjectNameLabel = document.createElement('label')
attributeHelper(editProjectNameLabel, {'for':'edit-project-input','form':'edit-project-form'})
editProjectNameLabel.innerText = 'Edit Project Name:'
const editProjectName = document.createElement('input')
attributeHelper(editProjectName, {'id':'edit-project-input','type':'text', 'required':'', 'maxlength':'15'})

// Submit button
const editProjectSubmit = document.createElement('button')
attributeHelper(editProjectSubmit, {'id':'edit-project-submit'})
editProjectSubmit.innerText = 'Submit'

// Span element for closing modal.
const editProjectSpan = document.createElement('span')
attributeHelper(editProjectSpan, {'id':'edit-project-span'})
editProjectSpan.innerHTML = '&times'

editProjectSpan.addEventListener('click', () => {
    // Toggle viz of modal element. 
    editProjectContainer.classList.toggle('is-hidden')
})


// Exportable func for adding element to the dom.
const editProjectModal = (targetElement) => {
    // Build out the structure of the modal.
    editProjectContainer.append(editProjectContent)
    editProjectContent.append(editProjectHeading, editProjectForm, editProjectSpan)
    editProjectForm.append(editProjectNameLabel, editProjectName, editProjectSubmit)

    // Attach the modal to the target.
    targetElement.append(editProjectContainer)
}

const editProjectButton = (targetElement) => {
    const editButton = document.createElement('button')
    attributeHelper(editButton, {'id':'edit-project-button'})
    editButton.innerText = 'Edit'

    editButton.addEventListener('click', () => {
        editButton.parentElement.click()

        let targetProj = targetProject()
        // Change heading to show current project being modded. 
        editProjectHeading.innerText = `Editing: ${targetProj.projectName}`
       
        // Set the input value to be the name of project being edited.
        editProjectName.value = targetProj.projectName

        // Toggle viz of element.
        editProjectContainer.classList.toggle('is-hidden')
    })
    // Append the button to the target.
    targetElement.append(editButton)
}

export {editProjectModal, editProjectButton}