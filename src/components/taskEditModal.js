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
    attributeHelper(EditForm, {'action':'', 'id':'task-edit-form'})
    
    const EditTaskName = document.createElement('input')
    attributeHelper(EditTaskName, {'type':'text', 'id':'edit-task-name'})

    const EditTaskDetail = document.createElement('textarea')
    attributeHelper(EditTaskDetail, {'id':'edit-task-detail', 'rows':'', 'cols':''})

    const EditTaskPriority = document.createElement('select')
    attributeHelper(EditTaskPriority, {'id':'edit-task-priority', 'name':'edit-task-priority'})
    
    const lowPriority = document.createElement('option')
    attributeHelper(lowPriority, {'value':'low'})
    const medPriority = document.createElement('option')
    attributeHelper(medPriority, {'value':'med'})
    const hiPriority = document.createElement('option')
    attributeHelper(hiPriority, {'value':'hi'})

    const EditCancel = document.createElement('button')

    const EditSubmit = document.createElement('button')
    attributeHelper(EditSubmit, {'id':'edit-submit-button', 'type':'submit'})
}