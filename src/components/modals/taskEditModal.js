import './taskEditModal.css'
import { attributeHelper } from "../../helpers/attributeHelper"
import { projectList } from "../../components/projectGenerator"
import { clearAllStorage, processProjectList } from "../localStorageManipulator"
import { updateTaskPanel, editTaskButton } from "../domManipulation"

// Create a modal that will open on task click and allow the user to modify the task.
// Modal form should pre-populate with task information.
// Make sure to make use of the task class setters and getters for updating.

// Container for the entire modal.
const editModalContainer = document.createElement('div')
const editModalContent = document.createElement('div')
// Heading for the modal. Text content should change with task that is being edited.
const editTaskHeading = document.createElement('h1')
// Span element for closing the modal when editing is not needed.
const editTaskSpan = document.createElement('span')
// Grid elements that will organize and contain all of the content
const topSection = document.createElement('div')
const rightSection = document.createElement('div')
const leftSection = document.createElement('div')
const bottomSection = document.createElement('div')
// Actual form element that contains all the inputs. 
const editForm = document.createElement('form')
// Form elements
const editTaskName = document.createElement('input')
const editTaskDetail = document.createElement('textarea')
const editTaskPriority = document.createElement('select')
const lowPriority = document.createElement('option')
const medPriority = document.createElement('option')
const hiPriority = document.createElement('option')
const editTaskDueDate = document.createElement('input')
const editCancel = document.createElement('button')
const editSubmit = document.createElement('button')


const taskEditModal = (targetElement) => {
    // Attach CSS props to this for toggling visibility of modal and content.
    attributeHelper(editModalContainer, {'id':'edit-modal-container', 'class':'not-visible'})

    attributeHelper(editModalContent, {'id':'edit-modal-content'})

    attributeHelper(editTaskHeading, {'class':'edit-task-heading', 'id':'edit-task-heading'})

    editTaskSpan.innerHTML = '&times;'

    editTaskSpan.addEventListener('click', () => {
        // Toggle the viz of the modal for editing the task.
        toggleVis(editModalContainer)
    })
    
    attributeHelper(topSection, {'class':'top-section'})
    attributeHelper(rightSection, {'class':'right-section'})
    attributeHelper(leftSection, {'class':'left-section'})
    attributeHelper(bottomSection, {'class':'bottom-section'})
    attributeHelper(editSubmit, {'id':'edit-submit-button', 'type':'submit'})
    editSubmit.innerHTML = 'Submit'

    // Form will be pre-populated with current values of the task object. 
    // On submit the data from the form will update the object and the DOM. 
    attributeHelper(editForm, {'action':'', 'id':'task-edit-form', 'autocomplete':'off'})
    //Prevent page refresh on form submit. 
    editForm.addEventListener('submit', (e) => {
        // Prevent default form behavior. 
        e.preventDefault()
       
        // Get data-object attribute information from parent element.
        let currentProject = editTaskButton.parentElement.getAttribute('data-object')
        let currentTask = editTaskButton.parentElement.getAttribute('data-task')
        console.log(currentProject, currentTask)
        // Find the project object and task object associated with the project.
        currentProject = projectList.find(element => element.projectName == currentProject)
        currentTask = currentProject.projectTasks.find(element => element.taskName == currentTask)
        
        // Update all task object values. 
        currentTask.taskName = editTaskName.value
        currentTask.taskNotes = editTaskDetail.value
        currentTask.taskDueDate = editTaskDueDate.value
        currentTask.taskPriority = editTaskPriority.value
        
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
    
    attributeHelper(editTaskName, {'type':'text', 'id':'edit-task-name', 'required':''})

    attributeHelper(editTaskDetail, {'id':'edit-task-detail', 'rows':'', 'cols':'', 'required':''})

    attributeHelper(editTaskPriority, {'id':'edit-task-priority', 'name':'edit-task-priority'})
    
    attributeHelper(lowPriority, {'value':'Priority 3', 'id':'edit-priority-lo'})
    lowPriority.innerText = 'Low Priority'
    attributeHelper(medPriority, {'value':'Priority 2', 'id':'edit-priority-med'})
    medPriority.innerText = "Medium Priority"
    attributeHelper(hiPriority, {'value':'Priority 1', 'id':'edit-priority-hi'})
    hiPriority.innerText = 'High Priority'

    attributeHelper(editTaskDueDate, {'type':'date', 'id':'edit-task-duedate'})

    editCancel.innerText = 'Cancel'

    editCancel.addEventListener('click', (e) => {
        // Prevent default.
        e.preventDefault()
        // Toggle the viz of the modal for editing the task.
        toggleVis(editModalContainer)
    })


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
        
        // Get data-object attribute information from parent element.
        let currentProject = targetElement.parentElement.getAttribute('data-object')
        let currentTask = targetElement.parentElement.getAttribute('data-task')
        console.log(currentProject, currentTask)
        
        // Find the project object and task object associated with the project.
        currentProject = projectList.find(element => element.projectName == `${currentProject}`)
        currentTask = currentProject.projectTasks.find(element => element.taskName == `${currentTask}`)


        // Get the current values from the task and load them into the form element.
        editTaskName.value = currentTask.taskName
        editTaskDetail.value = currentTask.taskNotes
        editTaskDueDate.value = currentTask.taskDueDate
        editTaskHeading.innerText = `Editing: ${currentTask.taskName}`
        
        // Check what the target task priority is set to and add the selected prop to the appropriate option element. 
        const priorityCheck = (() => {
            let priorityList = [lowPriority, medPriority, hiPriority]
            // clear all previous selected attributes.
            lowPriority.removeAttribute('selected')
            medPriority.removeAttribute('selected')
            hiPriority.removeAttribute('selected')


            // Iterate through all priorities and find the one that matches the task current and select it.
            projectList.forEach(function(item) {
                if (item.value == currentTask.taskPriority) {
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