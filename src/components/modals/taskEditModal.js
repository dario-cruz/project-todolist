import './taskEditModal.css'
import { attributeHelper } from "../../helpers/attributeHelper"
import { projectList } from "../../components/projectGenerator"
import { clearAllStorage, processProjectList } from "../localStorageManipulator"
import { updateTaskPanel, editTaskButton } from "../domManipulation"
import { targetObject } from '../../helpers/currentItemHolder'

// Create a modal that will open on task click and allow the user to modify the task.
// Modal form should pre-populate with task information.
// Make sure to make use of the task class setters and getters for updating.

// Container for the entire modal.
const editModalContainer = document.createElement('div')
attributeHelper(editModalContainer, {'id':'edit-modal-container', 'class':'not-visible'})
const editModalContent = document.createElement('div')
attributeHelper(editModalContent, {'id':'edit-modal-content'})

// Heading for the modal. Text content should change with task that is being edited.
const editTaskHeading = document.createElement('h1')
attributeHelper(editTaskHeading, {'class':'edit-task-heading', 'id':'edit-task-heading'})

// Span element for closing the modal when editing is not needed.
const editTaskSpan = document.createElement('span')
editTaskSpan.innerHTML = '&times;'
editTaskSpan.addEventListener('click', () => {
    // Toggle the viz of the modal for editing the task.
    toggleVis(editModalContainer)
})

// Grid elements that will organize and contain all of the content
const topSection = document.createElement('div')
attributeHelper(topSection, {'class':'top-section'})
const rightSection = document.createElement('div')
attributeHelper(rightSection, {'class':'right-section'})
const leftSection = document.createElement('div')
attributeHelper(leftSection, {'class':'left-section'})
const bottomSection = document.createElement('div')
attributeHelper(bottomSection, {'class':'bottom-section'})

// Actual form element that contains all the inputs. 
const editForm = document.createElement('form')
attributeHelper(editForm, {'action':'', 'id':'task-edit-form', 'autocomplete':'off'})
// Form will be pre-populated with current values of the task object. 
// On submit the data from the form will update the object and the DOM. 
editForm.addEventListener('submit', (e) => {
    // Prevent default form behavior. 
    e.preventDefault()
   
    // Set the current project/task object for form population and updating.
    let currentObject = targetObject()

    // Update all task object values. 
    currentObject.taskName = editTaskName.value
    currentObject.taskNotes = editTaskDetail.value
    currentObject.taskDueDate = editTaskDueDate.value
    currentObject.taskPriority = editTaskPriority.value
    
    // Update localStorage
    clearAllStorage()
    processProjectList()
    
    // Update the DOM to reflect changes.
    let foundProject = projectList.find(element => element.projectName == document.querySelector('#task-panel').getAttribute('data-object'))
    updateTaskPanel(foundProject, document.querySelector('#task-panel'))
    
    // Toggle viz of the edit modal.
    let editModalContainer = document.querySelector('#edit-modal-container')
    toggleVis(editModalContainer)
})


// Form elements
const editTaskNameLabel = document.createElement('label')
attributeHelper(editTaskNameLabel, {'class':'modal-label', 'for':'edit-task-name'})
editTaskNameLabel.innerText = 'Task Name:'
const editTaskName = document.createElement('input')
attributeHelper(editTaskName, {'type':'text', 'id':'edit-task-name', 'required':'', 'maxlength':'20'})

const editTaskDetailLabel = document.createElement('label')
attributeHelper(editTaskDetailLabel, {'class':'modal-label', 'for':'edit-task-detail'})
editTaskDetailLabel.innerText = `Task Details:`
const editTaskDetail = document.createElement('textarea')
attributeHelper(editTaskDetail, {'id':'edit-task-detail', 'rows':'', 'cols':'', 'required':''})

const editTaskPriorityLabel = document.createElement('label')
attributeHelper(editTaskPriorityLabel, {'class':'modal-label', 'for':'edit-task-priority'})
editTaskPriorityLabel.innerText = `Task Priority:`
const editTaskPriority = document.createElement('select')
attributeHelper(editTaskPriority, {'id':'edit-task-priority', 'name':'edit-task-priority'})

const lowPriority = document.createElement('option')
attributeHelper(lowPriority, {'value':'Low', 'id':'edit-priority-lo'})
lowPriority.innerText = 'Low Priority'
const medPriority = document.createElement('option')
attributeHelper(medPriority, {'value':'Medium', 'id':'edit-priority-med'})
medPriority.innerText = "Medium Priority"
const hiPriority = document.createElement('option')
attributeHelper(hiPriority, {'value':'High', 'id':'edit-priority-hi'})
hiPriority.innerText = 'High Priority'

const editTaskDueDateLabel = document.createElement('label')
attributeHelper(editTaskDueDateLabel, {'class':'modal-label', 'for':'edit-task-duedate'})
editTaskDueDateLabel.innerText = `Task Due Date:`
const editTaskDueDate = document.createElement('input')
attributeHelper(editTaskDueDate, {'type':'date', 'id':'edit-task-duedate'})

const editCancel = document.createElement('button')
editCancel.innerText = 'Cancel'
editCancel.addEventListener('click', (e) => {
    // Prevent default.
    e.preventDefault()
    // Toggle the viz of the modal for editing the task.
    toggleVis(editModalContainer)
})

const editSubmit = document.createElement('button')
attributeHelper(editSubmit, {'id':'edit-submit-button', 'type':'submit'})
editSubmit.innerHTML = 'Submit'

const taskEditModal = (targetElement) => {
    // Append all the things.
    targetElement.append(editModalContainer)

    editModalContainer.append(editModalContent)

    editModalContent.append (editForm)

    editForm.append(topSection, rightSection, leftSection, bottomSection)

    editTaskPriority.append(lowPriority, medPriority, hiPriority)

    topSection.append(editTaskHeading, editTaskSpan)
    rightSection.append(editTaskName, editTaskDetail)
    leftSection.append(editTaskPriority, editTaskDueDate)
    bottomSection.append(editCancel, editSubmit)
}

// Create a func that adds and eventlistener to the correct dom element.
const clickEditEvent = (targetElement) => {
    targetElement.addEventListener('click', () => {
        
        // Toggle the visibility of the modal form elements.
        toggleVis(editModalContainer)
        
        // Set the current project/task object for form population and updating.
        let currentObject = targetObject()


        // Get the current values from the task and load them into the form element.
        editTaskName.value = currentObject.taskName
        editTaskDetail.value = currentObject.taskNotes
        editTaskDueDate.value = currentObject.taskDueDate
        editTaskHeading.innerText = `Editing: ${currentObject.taskName}`
        
        // Check what the target task priority is set to and add the selected prop to the appropriate option element. 
        const priorityCheck = (() => {
            let priorityList = [lowPriority, medPriority, hiPriority]
            // clear all previous selected attributes.
            lowPriority.removeAttribute('selected')
            medPriority.removeAttribute('selected')
            hiPriority.removeAttribute('selected')


            // Iterate through all priorities and find the one that matches the task current and select it.
            projectList.forEach(function(item) {
                if (item.value == currentObject.taskPriority) {
                    attributeHelper(item, {'selected':''})
                }
            })
        })()
        
    })
}

// Make func that can be called to toggle viz of modal element.
const toggleVis = (target) => {
    target.classList.toggle('not-visible')
}

export {taskEditModal, clickEditEvent, toggleVis}