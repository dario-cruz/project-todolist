import { attributeHelper } from "../helpers/attributeHelper"

// Create a modal that will open on task click and allow the user to modify the task.
// Modal form should pre-populate with task information.
// Make sure to make use of the task class setters and getters for updating.


const taskEditModal = (targetElement, targetTask) => {
    const EditModalContainer = document.createElement('div')
    attributeHelper(EditModalContainer, {'id':'edit-modal-container'})

    const EditModalContent = document.createElement('div')
    attributeHelper(EditModalContent, {'id':'edit-modal-content'})

    const EditTaskHeading = document.createElement('h1')
    attributeHelper(EditTaskHeading, {'class':'edit-task-heading'})
    EditTaskHeading.innerText = `Editing: ${targetTask.taskName}`

    const EditForm = document.createElement('form')
    attributeHelper(EditForm, {'action':'', 'id':'task-edit-form'})
    
    const EditTaskName = document.createElement('input')
    attributeHelper(EditTaskName, {'type':'text', 'id':'edit-task-name', 'required':''})

    const EditTaskDetail = document.createElement('textarea')
    attributeHelper(EditTaskDetail, {'id':'edit-task-detail', 'rows':'', 'cols':'', 'required':''})

    const EditTaskPriority = document.createElement('select')
    attributeHelper(EditTaskPriority, {'id':'edit-task-priority', 'name':'edit-task-priority'})
    
    const lowPriority = document.createElement('option')
    attributeHelper(lowPriority, {'value':'Priority 3'})
    lowPriority.innerText = 'Low Priority'
    const medPriority = document.createElement('option')
    attributeHelper(medPriority, {'value':'Priority 2'})

    const hiPriority = document.createElement('option')
    attributeHelper(hiPriority, {'value':'Priority 1'})

    const EditCancel = document.createElement('button')
    EditCancel.innerText = 'Cancel'

    const EditSubmit = document.createElement('button')
    attributeHelper(EditSubmit, {'id':'edit-submit-button', 'type':'submit'})
    EditSubmit.innerHTML = 'Submit'


    // Eventlistener for form submit. 
    // Should update the target task and update the dom with the information.
    EditForm.addEventListener('submit', () => {

    })

}

export {taskEditModal}