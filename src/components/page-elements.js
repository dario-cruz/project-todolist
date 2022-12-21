import './page-elements.css'
import { Project } from './project-generator'
import { projectList } from './project-generator'

// Create the main div for the rest of the project elements to append to. 
const createMainDiv = () => {
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('id', 'content')
    document.body.append(contentDiv)
    return contentDiv
}

const createDefaultPageContent = () => {
    // Header of the page
    const headerPanel = document.createElement('div')
    headerPanel.setAttribute('class', 'header-panel')

    // Page title for header.
    const pageTitle = document.createElement('h1')
    pageTitle.setAttribute('class', 'page-title')
    pageTitle.innerText = "- Just Do It! - a Todo List by Dario Cruz"

    // Div element to contain all text elems for header. 
    const headingTextDiv = document.createElement('div')
    headingTextDiv.setAttribute('class', 'heading-text-div')
    
    // Div element to contain all buttons placed in header div.
    const headingButtonDiv = document.createElement('div')
    headingButtonDiv.setAttribute('class', 'heading-button-div')

    // Left panel which stores all of the projects added.
    const leftPanel = document.createElement('div')
    leftPanel.setAttribute('class', 'left-panel')
    leftPanel.setAttribute('id', 'project-panel')

    // Div to contain new project elements. 
    const newProjectDiv = document.createElement('div')
    newProjectDiv.setAttribute('class', 'project-div') 
    
    // Button for adding projects to the list and localStorage. 
    const addProjectButton = document.createElement('button')
    addProjectButton.setAttribute('class', 'add-project-button')
    addProjectButton.innerText = "Add Project"

    // Right panel which stores all of the tasks associated with the active project. 
    const rightPanel = document.createElement('div')
    rightPanel.setAttribute('class', 'right-panel')
    rightPanel.setAttribute('id', 'task-panel')

    // Button for adding new tasks to the selected project.
    const addTaskButton = document.createElement('button')
    addTaskButton.setAttribute('class', 'task-button')
    addTaskButton.setAttribute('id', 'add-task-button')
    addTaskButton.innerText = "New Task"
    
    // Footer panel for credits and acknowledgements
    const footerPanel = document.createElement('div')
    footerPanel.setAttribute('class', 'footer-panel')

    // Append the elements to one another so that they can then be appended to the main content div. 

}



// Create modal so that the user can add a task to the project.
// On submit allow the form to close on form submit.
const newTaskModal = (appendElement) => {
    // Define all elements needed to complete the modal.
    // Modal will allow for entering of task information.
    const modalDiv = document.createElement('div')
    const modalContent = document.createElement('div')
    const spanElement = document.createElement('span')
    const modalForm = document.createElement('form')
    // Set up all of the names and ID's for the form for submit.
    const newTaskInput = document.createElement('input')
    const newTaskInputLabel = document.createElement('label')
    const newTaskDetail = document.createElement('input')
    const newTaskDetailLabel = document.createElement('label')
    const newTaskDate = document.createElement('input')
    const newTaskDateLabel = document.createElement('label')
    // Create elements to allow for the user to select priority of sev of the project.
    const newTaskPriority = document.createElement('select')
    const newTaskPriorityLabel = document.createTextNode('label')
    // Create options for the select element.
    const taskPriorityOne = document.createElement('option')
    const taskPriorityTwo = document.createElement('option')
    const taskPriorityThree = document.createElement('option')

    // Create submit button to attach event to. 
    const newTaskSubmit = document.createElement('button')

    // Setup all of the attributes for the elements to be appended.
    modalDiv.setAttribute('class', 'modal-div')
    modalContent.setAttribute('class', 'modal-content')
    spanElement.setAttribute('class', 'span-close')
    modalForm.setAttribute('action', '')
    modalForm.setAttribute('id', 'task-form')
    modalDiv.setAttribute('id', 'modal-div')
    
    // Form attributes for linking labels.
    newTaskInput.setAttribute('type', 'text')
    newTaskInput.setAttribute('id', 'task-input')
    newTaskInput.setAttribute('placeholder', '...enter task name')
    newTaskInputLabel.setAttribute('for', 'task-input')

    // Set all of the attributes for the task details.
    newTaskDetail.setAttribute('type', 'text-area')
    newTaskDetail.setAttribute('col', '5')
    newTaskDetail.setAttribute('rows', '50')
    newTaskDetail.setAttribute('placeholder', '....enter some details')
    newTaskDetail.setAttribute('class', 'task-detail')
    newTaskDetail.setAttribute('id', 'task-detail')

    // Set attributes for task labels.
    newTaskInputLabel.innerText = "Task Name"
    newTaskDetailLabel.innerText = "Task Details"
    // Give the span element and X to click and close the modal.
    spanElement.innerText = "&times;"

    // Set attributes for submit button
    newTaskSubmit.setAttribute('class', 'modal-submit-button') 
    newTaskSubmit.setAttribute('id', 'modal-submit-button')
    newTaskSubmit.setAttribute('type', 'submit')
    newTaskSubmit.innerText = "Submit"
    
    // Set attribute for date form
    newTaskDate.setAttribute('type', 'date')
    newTaskDate.setAttribute('value', `${getCurrentDate()}`)
    newTaskDate.setAttribute('class', 'task-date')
    newTaskDate.setAttribute('id', 'task-date')
    newTaskDateLabel.setAttribute('for', 'task-date')

    // Attributes for the priority select and options.
    newTaskPriority.setAttribute('name', 'task-priority')
    newTaskPriority.setAttribute('id', 'task-priority')
    newTaskPriority.setAttribute('form', 'task-form')
    
    newTaskPriorityLabel.setAttribute('for', 'task-priority')
    newTaskPriorityLabel.innerText = "Select Priority"

    taskPriorityOne.setAttribute('value', '1')
    taskPriorityTwo.setAttribute('value', '2')
    taskPriorityThree.setAttributeNS('value', '3')

    
    // Append the elements to one another.
    modalDiv.append(modalContent)
    modalContent.append(spanElement)
    modalContent.append(modalForm)
    modalForm.append(newTaskInputLabel)
    modalForm.append(newTaskInput)
    modalForm.append(newTaskDetailLabel)
    modalForm.append(newTaskDetail)
    modalForm.append(newTaskSubmit)

    // Create and event so that the users submitted input gets converted to a new
    // task inside the project object. Make use of the class functions defined in
    // the module.
    newTaskSubmit.addEventListener('submit', (event) => {
        event.preventDefault()
        // Get current project that is selected and if none are selected do nothing.
        let taskPanel = document.getElementById('task-panel')

        if (taskPanel.getAttribute('data-object') == null) {
            return
        } else {
            let currentProject = taskPanel.getAttribute('data-object')    
            let objetToMod = projectList.findIndex(prop => prop.projectName == currentProject)
            let taskName = newTaskInput.value
            let taskNotes = newTaskDetail.value
            let taskDate = newTaskDate.value

            projectList[objetToMod].makeNewTask()
        }
    })

}

// Create eventlistener so that when to addTask button is pressed the modal opens so 
// the user can enter some information. 
const newTaskEvent = (targetElement, classProp) => {
    // Need this to toggle the display of the modal element when creating a new task.
    // Create functionality to toggle the display of element.
    targetElement.addEventListener('click', () => {
        targetElement.classList.toggle(`${classProp}`)
    })
}

const getCurrentDate = () => {
    let today = new Date() 
    let day = String(today.getDate()).padStart(2, '0')
    let month = String(today.getMonth() + 1).padStart(2, '0')
    let year = today.getFullYear()
    today = year + '/' + month + '/' + day
    return today
}

export {createMainDiv}