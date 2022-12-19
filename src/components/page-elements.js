import './page-elements.css'

// Create button so the user can add a task to a project. 
const newTaskButton = (appendElement) => {
    const addTaskButton = document.createElement('button')
    addTaskButton.setAttribute('class', 'task-button')
    addTaskButton.setAttribute('id', 'add-task-button')
    addTaskButton.innerText = "New Task"
}


// Create modal so that the user can add a task to the project.
// On submit allow the form to close on form submit.
const newTaskModal = (appendElement) => {
    const modalDiv = document.createElement('div')
    const modalContent = document.createElement('div')
    const spanElement = document.createElement('span')
    const modalForm = document.createElement('form')
    // Set up all of the names and ID's for the form for submit.
    const newTaskInput = document.createElement('input')
    const newTaskInputLabel = document.createElement('label')
    const newTaskDetail = document.createElement('input')
    const newTaskDetailLabel = document.createElement('label')

    // Setup all of the attributes for the elements to be appended.
    modalDiv.setAttribute('class', 'modal-div')
    modalContent.setAttribute('class', 'modal-content')
    spanElement.setAttribute('class', 'span-close')
    modalForm.setAttribute('action', '')
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

    // Append the elements to one another.
    modalDiv.append(modalContent)
    modalContent.append(spanElement)
    modalContent.append(modalForm)
    modalForm.append(newTaskInputLabel)
    modalForm.append(newTaskInput)
    modalForm.append(newTaskDetailLabel)
    modalForm.append(newTaskDetail)

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