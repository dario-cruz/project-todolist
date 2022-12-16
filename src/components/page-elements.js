
// Create button so the user can add a task to a project. 
const addTaskButton = document.createElement('button')
addTaskButton.setAttribute('class', 'task-button')
addTaskButton.setAttribute('id', 'add-task-button')
addTaskButton.innerText = "New Task"

// Create modal so that the user can add a task to the project.
// On submit allow the form to close on form submit.
const createModal = ((appedingElement) => {
    const modalDiv = document.createElement('div')
    const modalContent = document.createElement('div')
    const spanElement = document.createElement('span')
    const modalForm = document.createElement('form')
    // Set up all of the names and ID's for the form for submit.
    const newTaskInput = document.createElement('input')
    const newTaskInputLabel = document.createElement('label')
    const newTaskDetail = document.createElement('input')
    const newTaskLabel = document.createElement('label')

    // Setup all of the attributes for the elements to be appended.
    modalDiv.setAttribute('class', 'modal-div')
    modalContent.setAttribute('class', 'modal-content')
    spanElement.setAttribute('class', 'span-close')
    modalForm.setAttribute('action', '')
    modalDiv.setAttribute('id', 'modal-div')
    
    // Form attributes for linking labels.
    newTaskInput.setAttribute('type', 'text')
    newTaskInput.setAttribute('id', 'task-input')
    newTaskInput.setAttribute('placeholder', '...enter something')
    newTaskInputLabel.setAttribute('for', 'task-input')

    newTaskDetail.setAttribute('type', 'text-area')
    newTaskDetail.setAttribute('col', '5')
    newTaskDetail.setAttribute('rows', '50')
    newTaskDetail.setAttribute('class', 'task-detail')
    newTaskDetail.setAttribute('id', 'task-detail')
})()