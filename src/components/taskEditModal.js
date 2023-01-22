import { attributeHelper } from "../helpers/attributeHelper"

// Create a modal that will open on task click and allow the user to modify the task.
// Modal form should pre-populate with task information.
// Make sure to make use of the task class setters and getters for updating.


const taskEditModal = (targetElement) => {
    const EditModalContainer = document.createElement('div')
    attributeHelper(EditModalContainer, {'id':'edit-modal-container'})

    const EditModalContent = document.createElement('div')
    attributeHelper(EditModalContent, {'id':'edit-modal-content'})

    const EditForm = document.createElement('form')
    
    const EditTaskName = document.createElement('input')

    const EditTaskDetail = document.createElement('input')

    const EditTaskPriority = document.createElement('select')

    const EditCancel = document.createElement('button')

    const EditSubmit = document.createElement('button')
    attributeHelper(EditSubmit, {'id':'edit-submit-button', 'type':'submit'})
}