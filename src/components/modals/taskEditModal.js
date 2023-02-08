import './taskEditModal.css'
import { attributeHelper } from "../../helpers/attributeHelper"
import { projectList } from "../../components/projectGenerator"
import { hi } from "date-fns/locale"
import { clearAllStorage, processProjectList } from "../localStorageManipulator"
import { updateTaskPanel } from "../domManipulation"

// Create a modal that will open on task click and allow the user to modify the task.
// Modal form should pre-populate with task information.
// Make sure to make use of the task class setters and getters for updating.

// Container for the entire modal.
const editModalContainer = document.createElement('div')
const EditModalContent = document.createElement('div')
// Heading for the modal. Text content should change with task that is being edited.
const EditTaskHeading = document.createElement('h1')
// Span element for closing the modal when editing is not needed.
const EditTaskSpan = document.createElement('span')
// Grid elements that will organize and contain all of the content
const topSection = document.createElement('div')
const rightSection = document.createElement('div')
const leftSection = document.createElement('div')
const bottomSection = document.createElement('div')
// Actual form element that contains all the inputs. 
const EditForm = document.createElement('form')
// Form elements
const EditTaskName = document.createElement('input')
const EditTaskDetail = document.createElement('textarea')
const EditTaskPriority = document.createElement('select')
const lowPriority = document.createElement('option')
const medPriority = document.createElement('option')
const hiPriority = document.createElement('option')
const EditTaskDueDate = document.createElement('input')
const EditCancel = document.createElement('button')
const editSubmit = document.createElement('button')


const taskEditModal = (targetElement) => {
    // Attach CSS props to this for toggling visibility of modal and content.
    attributeHelper(editModalContainer, {'id':'edit-modal-container'})
    editModalContainer.style.visibility = 'hidden'

    attributeHelper(EditModalContent, {'id':'edit-modal-content'})

    attributeHelper(EditTaskHeading, {'class':'edit-task-heading', 'id':'edit-task-heading'})

    EditTaskSpan.innerHTML = '&times;'

    EditTaskSpan.addEventListener('click', () => {
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
    attributeHelper(EditForm, {'action':'', 'id':'task-edit-form', 'autocomplete':'off'})
    //Prevent page refresh on form submit. 
    EditForm.addEventListener('submit', (e) => {
        // Prevent default form behavior. 
        e.preventDefault()
        // Get data-object attribute information from parent element.
        let currentProject = editSubmit.parentElement.getAttribute('data-object')
        let currentTask = editSubmit.parentElement.getAttribute('data-task')
        console.log(currentProject, currentTask)
        // Find the project object and task object associated with the project.
        currentProject = projectList.find(element => element.projectName == currentProject)
        currentTask = currentProject.projectTasks.find(element => element.taskName == currentTask)
        
        // Update all task object values. 
        currentTask.changeName(taskEditModal.EditTaskName.value)
        currentTask.changeNotes(taskEditModal.EditTaskDetail.value)
        currentTask.changeDueDate(taskEditModal.EditTaskDueDate.value)
        currentTask.changePriority(taskEditModal.EditTaskPriority.value)
        
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
    
    attributeHelper(EditTaskName, {'type':'text', 'id':'edit-task-name', 'required':''})

    attributeHelper(EditTaskDetail, {'id':'edit-task-detail', 'rows':'', 'cols':'', 'required':''})

    attributeHelper(EditTaskPriority, {'id':'edit-task-priority', 'name':'edit-task-priority'})
    
    attributeHelper(lowPriority, {'value':'Priority 3', 'id':'edit-priority-lo'})
    lowPriority.innerText = 'Low Priority'
    attributeHelper(medPriority, {'value':'Priority 2', 'id':'edit-priority-med'})
    medPriority.innerText = "Medium Priority"
    attributeHelper(hiPriority, {'value':'Priority 1', 'id':'edit-priority-hi'})
    hiPriority.innerText = 'High Priority'

    attributeHelper(EditTaskDueDate, {'type':'date', 'id':'edit-task-duedate'})

    EditCancel.innerText = 'Cancel'

    EditCancel.addEventListener('click', (e) => {
        // Prevent default.
        e.preventDefault()
        // Toggle the viz of the modal for editing the task.
        toggleVis(editModalContainer)
    })


    // Append all the things.
    targetElement.append(editModalContainer)

    editModalContainer.append(EditModalContent)

    EditModalContent.append (EditForm)

    EditForm.append(topSection, rightSection, leftSection, bottomSection)

    EditTaskPriority.append(lowPriority, medPriority, hiPriority)

    topSection.append(EditTaskHeading, EditTaskSpan)
    rightSection.append(EditTaskName, EditTaskDetail)
    leftSection.append(EditTaskPriority, EditTaskDueDate)
    bottomSection.append(EditCancel, editSubmit)
}

// Create a func that adds and eventlistener to the correct dom element.
const clickEditEvent = (targetElement) => {
    targetElement.addEventListener('click', () => {
        
        // Toggle the visibility of the modal form elements.
        const editModal = document.querySelector('#edit-modal-container')
        toggleVis(editModal)
        
        // Get data-object attribute information from parent element.
        let currentProject = targetElement.parentElement.getAttribute('data-object')
        let currentTask = targetElement.parentElement.getAttribute('data-task')
        console.log(currentProject, currentTask)
        
        // Find the project object and task object associated with the project.
        currentProject = projectList.find(element => element.projectName == `${currentProject}`)
        currentTask = currentProject.projectTasks.find(element => element.taskName == `${currentTask}`)


        // Get the current values from the task and load them into the form element.
        EditTaskName.value = currentTask.taskName
        EditTaskDetail.value = currentTask.taskNotes
        EditTaskDueDate.value = currentTask.taskDueDate
        EditTaskHeading.innerText = `Editing: ${currentTask.taskName}`
        
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

const toggleVis = (target) => {
    target.style.visibility == 'hidden' ? target.style.visibility = 'visible' : target.style.visibility = 'hidden' 
}

export {taskEditModal, clickEditEvent, toggleVis}