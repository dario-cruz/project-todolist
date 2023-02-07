import './taskEditModal.css'
import { attributeHelper } from "../../helpers/attributeHelper"
import { projectList } from "../../components/projectGenerator"
import { hi } from "date-fns/locale"
import { clearAllStorage, processProjectList } from "../localStorageManipulator"
import { updateTaskPanel } from "../domManipulation"

// Create a modal that will open on task click and allow the user to modify the task.
// Modal form should pre-populate with task information.
// Make sure to make use of the task class setters and getters for updating.

const taskEditModal = (targetElement) => {
    // Container for the entire modal.
    // Attach CSS props to this for toggling visibility of modal and content.
    const EditModalContainer = document.createElement('div')
    attributeHelper(EditModalContainer, {'id':'edit-modal-container'})
    EditModalContainer.style.visibility = 'hidden'

    const EditModalContent = document.createElement('div')
    attributeHelper(EditModalContent, {'id':'edit-modal-content'})

    // Heading for the modal. Text content should change with task that is being edited.
    const EditTaskHeading = document.createElement('h1')
    attributeHelper(EditTaskHeading, {'class':'edit-task-heading', 'id':'edit-task-heading'})

    // Span element for closing the modal when editing is not needed.
    const EditTaskSpan = document.createElement('span')
    EditTaskSpan.innerHTML = '&times;'

    EditTaskSpan.addEventListener('click', () => {
        // Toggle the viz of the modal for editing the task.
        toggleVis(EditModalContainer)
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
    // Form will be pre-populated with current values of the task object. 
    // On submit the data from the form will update the object and the DOM. 
    const EditForm = document.createElement('form')
    attributeHelper(EditForm, {'action':'', 'id':'task-edit-form', 'autocomplete':'off'})
    //Prevent page refresh on form submit. 
    EditForm.addEventListener('submit', (e) => {
        // Prevent default form behavior. 
        e.preventDefault()
        // Get data-object attribute information from parent element.
        let currentProject = editSubmit.parentElement.getAttribute('data-object')
        let currentTask = editSubmit.getAttribute('data-task')
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
    
    const EditTaskName = document.createElement('input')
    attributeHelper(EditTaskName, {'type':'text', 'id':'edit-task-name', 'required':''})

    const EditTaskDetail = document.createElement('textarea')
    attributeHelper(EditTaskDetail, {'id':'edit-task-detail', 'rows':'', 'cols':'', 'required':''})

    const EditTaskPriority = document.createElement('select')
    attributeHelper(EditTaskPriority, {'id':'edit-task-priority', 'name':'edit-task-priority'})
    
    const lowPriority = document.createElement('option')
    attributeHelper(lowPriority, {'value':'Priority 3', 'id':'edit-priority-lo'})
    lowPriority.innerText = 'Low Priority'
    const medPriority = document.createElement('option')
    attributeHelper(medPriority, {'value':'Priority 2', 'id':'edit-pnpx riority-med'})
    const hiPriority = document.createElement('option')
    attributeHelper(hiPriority, {'value':'Priority 1', 'id':'edit-priority-hi'})

    const EditTaskDueDate = document.createElement('input')
    attributeHelper(EditTaskDueDate, {'type':'date', 'id':'edit-task-duedate'})

    const EditCancel = document.createElement('button')
    EditCancel.innerText = 'Cancel'

    EditCancel.addEventListener('click', (e) => {
        // Prevent default.
        e.preventDefault()
        // Toggle the viz of the modal for editing the task.
        toggleVis(EditModalContainer)
    })

    const editSubmit = document.createElement('button')
    attributeHelper(editSubmit, {'id':'edit-submit-button', 'type':'submit'})
    editSubmit.innerHTML = 'Submit'

    // Append all the things.
    targetElement.append(EditModalContainer)

    EditModalContainer.append(EditModalContent)

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
        currentProject = projectList.find(element => element.projectName == currentProject)
        currentTask = currentProject.projectTasks.find(element => element.taskName == currentTask)

        // Define the elements to be edited.
        const formTaskName = document.querySelector('#edit-task-name')
        const formTaskDetail = document.querySelector('#edit-task-detail')
        const formTaskDueDate = document.querySelector('#edit-task-duedate')
        const formTaskPriorityHi = document.querySelector('#edit-priority-hi')
        const formTaskPriorityMed = document.querySelector('#edit-priority-med')
        const formTaskPriorityLo = document.querySelector('#edit-priority-lo')
        const formEditHeading = document.querySelector('#edit-task-heading')
        console.log(formTaskPriorityHi)

        // Get the current values from the task and load them into the form element.
        formTaskName.value = currentTask.taskName
        formTaskDetail.value = currentTask.taskNotes
        formTaskDueDate.value = currentTask.taskDueDate
        formEditHeading.innerText = `Editing: ${currentTask.taskName}`
        
        // Check what the target task priority is set to and add the selected prop to the appropriate option element. 
        const priorityCheck = (() => {
            let priorityList = [formTaskPriorityLo, formTaskPriorityMed, formTaskPriorityHi]
            // clear all previous selected attributes.
            formTaskPriorityLo.removeAttribute('selected')
            formTaskPriorityMed.removeAttribute('selected')
            formTaskPriorityHi.removeAttribute('selected')


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

export {taskEditModal, clickEditEvent}