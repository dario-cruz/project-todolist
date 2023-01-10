import './taskModal.css'
import { attributeHelper } from "../helpers/attributeHelper";
import { Task } from "./taskGenerator";
import { clearAllStorage, processProjectList } from './localStorageManipulator'
import { getCurrentDate } from "../helpers/dateHelpers";
import { Project, projectList } from "./projectGenerator";

const taskModal = (targetElement) => {
    // Create the contain to hold all of the content
    const modalContainer = document.createElement('div')
    attributeHelper(modalContainer, {'id': 'task-modal-container', 'class':'task-modal-container'})

    // Make container for the content to be appended.
    const modalContent = document.createElement('div')
    attributeHelper(modalContent, {'class': 'task-modal-content'})

    // Create form for user input. 
    const modalTaskForm = document.createElement('form')
    attributeHelper(modalTaskForm, {'action': '', 'method': ''})

    // Create Task name input
    const taskNameInput = document.createElement('input')
    const taskNameInputLabel = document.createElement('label')
    attributeHelper(taskNameInput, {'type': 'text', 'id': 'task-name-input', 'required': ''})
    attributeHelper(taskNameInputLabel, {'for': 'task-name-input'})
    taskNameInputLabel.innerText = 'Task Name'

    // Create task detail input 
    const taskDetailInput = document.createElement('textarea')
    const taskDetailInputLabel = document.createElement('label')
    attributeHelper(taskDetailInput, {'id': 'task-detail-input', 'rows': '4', 'cols': '50', 'required': ''})
    attributeHelper(taskDetailInputLabel, {'for': 'task-detail-input'})
    taskDetailInputLabel.innerText = 'Task Details:'

    // Create Task Priority input
    const taskPriorityInput = document.createElement('select')
    const taskPriorityInputLabel = document.createElement('label')
    attributeHelper(taskPriorityInput, {'id': 'task-priority-input', 'name': 'task-priority', 'required': ''})
    attributeHelper(taskPriorityInputLabel, {'for': 'task-priority-input'})
    taskPriorityInput.innerText = 'Task Priority:'

    const priorityOne = document.createElement('option')
    attributeHelper(priorityOne, {'value': 'Priority 1'})
    priorityOne.innerText = 'High Priority'

    const priorityTwo = document.createElement('option')
    attributeHelper(priorityTwo, {'value': 'Priority 2'})
    priorityTwo.innerText = 'Low Priority'

    const priorityThree = document.createElement('option')
    attributeHelper(priorityThree, {'value': 'Priority 3'})
    priorityThree.innerText = 'No Priority'

    // Create task date input 
    const taskDateInput = document.createElement('input')
    const taskDateInputLabel = document.createElement('label')
    attributeHelper(taskDateInput, {'id': 'task-date-input', 'type': 'date', 'required': '', 'value': `${getCurrentDate()}`})
    attributeHelper(taskDateInputLabel, {'for': 'task-date-input'})
    taskDateInputLabel.innerText = 'Due Date:'

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

    // Append all the things.
    modalContainer.append(modalContent)

    modalContent.append(taskSpan)

    modalContent.append(taskNameInputLabel)
    modalContent.append(taskNameInput)

    modalContent.append(taskDetailInputLabel)
    modalContent.append(taskDetailInput)

    modalContent.append(taskPriorityInputLabel)
    modalContent.append(taskPriorityInput)

    taskPriorityInput.append(priorityOne, priorityTwo, priorityThree)

    modalContent.append(taskDateInputLabel)
    modalContent.append(taskDateInput)


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


export {taskModal, taskButton}