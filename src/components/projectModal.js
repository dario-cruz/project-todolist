import { placeInStorage } from "./localStorageManipulator"
import { Project, projectList } from "./projectGenerator"

const projectModal = (targetElement) => {
    const modalContainer = document.createElement('div')
    modalContainer.setAttribute('class', 'modal-container')

    const modalContent = document.createElement('div')
    modalContent.setAttribute('class', 'modal-content')

    const projectForm = document.createElement('form')
    // Remove the default behavior or the form. 
    projectForm.setAttribute('action', '')
    projectForm.setAttribute('method', '')
    
    // Setting up label form project input.
    const projectFormLabel = document.createElement('label')
    projectFormLabel.setAttribute('for', 'project-form-input')
    projectFormLabel.innerText = 'Project Name'

    // Setup input for form.
    const projectFormInput = document.createElement('input')
    projectFormInput.setAttribute('type', 'text')
    projectFormInput.setAttribute('id', 'project-form-input')
    projectFormInput.setAttribute('required', '')

    // Button for submit
    const projectFormButton = document.createElement('button')
    projectFormButton.setAttribute('type', 'submit')
    projectFormButton.setAttribute('id', 'project-form-button')

    // append all the things.
    projectForm.append(projectFormLabel)
    projectForm.append(projectFormInput)
    projectForm.append(projectFormButton)
    modalContent.append(projectForm)
    modalContainer.append(modalContent)
    targetElement.append(modalContainer)

    // On submit take input and make project.
    projectForm.addEventListener('submit', (event) => {
        // Stop form from refreshing page.
        event.preventDefault()

        // Grab user input and add as project.
        let projectName = projectFormInput.value
        projectName = projectName.replaceAll(' ', '-')

        const processFormInput = ((objectName) => {
            // Create project and push to projectList array.
            let newObj = new Project(objectName)
            projectList.push(newObj)
            // Place in local storage.
            placeInStorage(newObj)

        })(projectName)
    })
}

const projectButton = (targetElement, targetModal) => {
    const button = document.createElement('button')
    button.setAttribute('class', 'add-project-button')
    button.setAttribute('id', 'add-project-button')
    button.innerText = "Add Project"

    button.addEventListener('click', () => {
        targetModal.classList.toggle('closed-modal')
    })

    // Attach the button to the targetElement
    targetElement.append(button)
}