import './taskModal.css'
import { attributeHelper } from "../../helpers/attributeHelper";
import { Task } from "../taskGenerator";
import { clearAllStorage, processProjectList } from '../localStorageManipulator'
import { getCurrentDate } from "../../helpers/dateHelpers";
import { Project, projectList } from "../projectGenerator";
import { currentItem, targetObject, targetProject } from '../../helpers/currentItemHolder';

const taskModal = (targetElement) => {
    // Create the contain to hold all of the content
    const modalContainer = document.createElement('div')
    attributeHelper(modalContainer, {'id': 'task-modal-container', 'class':'task-modal-container'})

    // Make container for the content to be appended.
    const modalContent = document.createElement('div')
    attributeHelper(modalContent, {'class': 'task-modal-content'})

    // Create form for user input. 
    const modalTaskForm = document.createElement('form')
    attributeHelper(modalTaskForm, {'action': '', 'method': '', 'id':'modal-task-form', 'autocomplete':'off'})

    // Create Task name input
    const taskNameInput = document.createElement('input')
    const taskNameInputLabel = document.createElement('label')
    attributeHelper(taskNameInput, {'type': 'text', 'id': 'task-name-input', 'required': '', 'maxlength':'20'})
    attributeHelper(taskNameInputLabel, {'for': 'task-name-input'})
    taskNameInputLabel.innerText = 'Task Name'

    // Create task detail input 
    const taskDetailInput = document.createElement('textarea')
    const taskDetailInputLabel = document.createElement('label')
    attributeHelper(taskDetailInput, {'id': 'task-detail-input', 'rows': '4', 'cols': '25', 'required': ''})
    attributeHelper(taskDetailInputLabel, {'for': 'task-detail-input'})
    taskDetailInputLabel.innerText = 'Task Details:'

    // Create Task Priority input
    const taskPriorityInput = document.createElement('select')
    const taskPriorityInputLabel = document.createElement('label')
    attributeHelper(taskPriorityInput, {'id': 'task-priority-input', 'name': 'task-priority', 'required': ''})
    attributeHelper(taskPriorityInputLabel, {'for': 'task-priority-input'})
    taskPriorityInputLabel.innerText = 'Task Priority:'

    const priorityOne = document.createElement('option')
    attributeHelper(priorityOne, {'value': 'High'})
    priorityOne.innerText = 'High Priority'

    const priorityTwo = document.createElement('option')
    attributeHelper(priorityTwo, {'value': 'Medium'})
    priorityTwo.innerText = 'Medium Priority'

    const priorityThree = document.createElement('option')
    attributeHelper(priorityThree, {'value': 'Low'})
    priorityThree.innerText = 'Low Priority'

    // Create task date input 
    const taskDateInput = document.createElement('input')
    const taskDateInputLabel = document.createElement('label')
    attributeHelper(taskDateInput, {'id': 'task-date-input', 'type': 'date', 'required': '', 'value': `${getCurrentDate()}`})
    attributeHelper(taskDateInputLabel, {'for': 'task-date-input'})
    taskDateInputLabel.innerText = 'Due Date:'

    // Create a button for submitting the form. 
    const taskFormSubmit = document.createElement('button')
    attributeHelper(taskFormSubmit, {'id':'task-form-button', 'type':'submit'})
    taskFormSubmit.innerText = 'Submit'

    // Create a button for canceling the form and closing the modal.
    const taskFormCancel = document.createElement('button')
    attributeHelper(taskFormCancel, {'id':'task-form-cancel'})
    taskFormCancel.innerText = 'Cancel'
    // And the event on click to close the modal.
    taskFormCancel.addEventListener('click', () => {
        modalContainer.style.visibility = 'hidden'
    })

    // Create heading element that will change based on the name of the prohject selected.
    const titleHeading = document.createElement('h1')
    attributeHelper(titleHeading, {'class':'modal-heading', 'id':'task-form-heading'})

    // Create divs to store the form content in and organize using grid.
    const topDiv = document.createElement('div')
    attributeHelper(topDiv, {'class':'top-div'})

    const rightDiv = document.createElement('div')
    attributeHelper(rightDiv, {'class':'right-div'})

    const rightDivTwo = document.createElement('div')
    attributeHelper(rightDivTwo, {'class':'right-div-two'})

    const leftDiv = document.createElement('div')
    attributeHelper(leftDiv, {'class':'left-div'})

    const leftDivTwo = document.createElement('div')
    attributeHelper(leftDivTwo, {'class':'left-div-two'})

    const bottomDiv = document.createElement('div')
    attributeHelper(bottomDiv, {'class':'bottom-div'})

    // Create span element for closing the modal without completing input.
    const taskSpan = document.createElement('span')
    attributeHelper(taskSpan, {'class': 'task-span-close'})
    taskSpan.innerHTML = '&times;'
    // Allow user to close modal on span click.
    taskSpan.addEventListener('click', () => {
        modalContainer.style.visibility = 'hidden'
    })

    // Add event for the submit of the form
    modalTaskForm.addEventListener('submit', (event) => {
        //Prevent the default form behavior. 
        event.preventDefault()

        // process all of the form inputs into a task object.
        // Get current project that is selected and if none are selected do nothing.
        let taskPanel = document.getElementById('task-panel')
        if (taskPanel.getAttribute('data-object') == null) {
            return
        } else {
            let currentProject = document.getElementById('task-panel').getAttribute('data-object')  
            let taskName = taskNameInput.value
            let taskNotes = taskDetailInput.value
            let taskPriority = taskPriorityInput.value
            let taskDate = taskDateInput.value
             
            // Match the data prop of active project with the project object.
            let targetProjectName = projectList.find(element => element.projectName == currentProject)
            console.log(targetProjectName)
             
            // Make sure that the targetProjectName has the current inheritance.
            Object.setPrototypeOf(targetProjectName, Project)
             
            // Gather all of the form data and process into a task for project.
            let formTask = new Task(taskName, taskPriority, taskNotes, taskDate)
            targetProjectName.projectTasks.push(formTask)
             
            // Process all of the projects and task and add them to the localStorage.
            // Clear all previously stored elements.
            clearAllStorage()
            // Store all of the current and updated project objects.
            processProjectList()
            // Refresh the task panel so that the new task shows after submit.

            let targetForClick = `${currentProject}` + '-tab'
            document.getElementById(`${targetForClick}`).click()

            // Toggle the class that will control the visibility of the modal.
            modalContainer.style.visibility = 'hidden'
        }
    })

    // Attach modal content to parent modal container.
    modalContainer.append(modalContent)

    // Attach form element to modal content
    modalContent.append(modalTaskForm)

    // Attach top div which will contain span element for closing modal.
    modalTaskForm.append(topDiv)
    topDiv.append(taskSpan, titleHeading)

    // Attach right div which will contain form elements.
    modalTaskForm.append(rightDiv, rightDivTwo)
    rightDiv.append(taskNameInputLabel, taskNameInput)
    rightDivTwo.append(taskDetailInputLabel, taskDetailInput)

    // Attach let dive which will contain form elements.
    modalTaskForm.append(leftDiv, leftDivTwo)
    taskPriorityInput.append(priorityThree, priorityTwo, priorityOne)
    leftDiv.append(taskPriorityInputLabel, taskPriorityInput)
    leftDivTwo.append(taskDateInputLabel, taskDateInput)

    // Attached the bottom div for adding buttons to submit or cancel the input. 
    bottomDiv.append(taskFormCancel, taskFormSubmit)
    modalTaskForm.append(bottomDiv)

    // Append the final completed element to the target.
    targetElement.append(modalContainer)
}

// Create button for activating the new task modal. 
const taskButton = (targetElement) => {
    const addTaskButton = document.createElement('button')
    attributeHelper(addTaskButton, {'id': 'add-task-button', 'class': 'add-task-button'})
    addTaskButton.innerText = 'Add Task'

    addTaskButton.addEventListener('click', () => {
        let currentProject = document.getElementById('task-panel').getAttribute('data-object')
        if (currentProject == undefined) {
            alert('Please select a project.')
        } else {
            // Change the heading for the task modal based on the project selected.
            let headingText = document.getElementById('task-panel').getAttribute('data-object')
            headingText = headingText.replaceAll('-', ' ')
            document.getElementById('task-form-heading').innerText = `Project: ${headingText}`

            // Get the index position of the project being displayed. So we can modify it. 
            let listPosition = projectList.findIndex(prop => prop.projectName == currentProject)
            // Check if the code is functioning as intended.
            console.log(currentProject, listPosition)
            // Toggle modal viz.
            document.getElementById('task-modal-container').style.visibility = 'visible'
            // document.getElementById('task-modal-container').classList.toggle('task-closed-modal')
        }

    })
    // Append the button to needed element.
    targetElement.append(addTaskButton)
}

const removeTask = (targetElement) => {
    // Create the button and give it some attributes.
    const removeTaskButton = document.createElement('button')
    attributeHelper(removeTaskButton, {'class':'remove-task-button', 'id':'remove-task-button'})
    removeTaskButton.innerText = 'Remove Task'
    // Append the button to the targetElement arg.
    targetElement.append(removeTaskButton)

    removeTaskButton.addEventListener('click', () => {
        // Use variables to find the target project.
        let foundProject = targetProject()

        // Find the target task.
        let foundTask = targetObject()

        // Remove the task from the project it belongs to.
        foundProject.projectTasks.pop(foundTask)

        // Remove the task panel from the dom.
        removeTaskButton.parentElement.remove()

        // Update localStorage
        clearAllStorage()
        processProjectList()
    })
}

export {taskModal, taskButton, removeTask}