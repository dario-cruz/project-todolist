import './projectModal.css'
import { Project, projectList } from "./projectGenerator"
import { clearAllStorage, processProjectList, placeInStorage } from "./localStorageManipulator"
import { processList } from "./domManipulation"

const projectModal = (targetElement) => {
    const modalContainer = document.createElement('div')
    // Set normal class.
    // Set to be closed and not visible by default.
    modalContainer.classList.add('project-modal-container', 'project-closed-modal')
    modalContainer.setAttribute('id', 'project-modal-container')
    const modalContent = document.createElement('div')
    modalContent.setAttribute('class', 'project-modal-content')

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
    projectFormButton.innerText = `Submit`

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
            // Toggle vis of modal.
            modalContainer.classList.toggle('project-closed-modal')

            // Process all of the projects and task and add them to the localStorage.
            // Clear all previously stored elements.
            clearAllStorage()
            // Store all of the current and updated project objects.
            processProjectList()

            let elementList = document.querySelectorAll('.left-panel > div')
            elementList.forEach(element => {
                if (element.classList.contains('project-div')) {

                } else {
                    element.remove()    
                }
            })
            
            console.log(elementList)

            processList(projectList)
        })(projectName)
    })
}

const projectButton = (targetElement, targetModal) => {
    const addProjectButton = document.createElement('button')
    addProjectButton.setAttribute('class', 'add-project-button')
    addProjectButton.setAttribute('id', 'add-project-button')
    addProjectButton.innerText = "Add Project"

    addProjectButton.addEventListener('click', () => {
        targetModal.classList.toggle('project-closed-modal')
    })

    // Attach the button to the targetElement
    targetElement.append(addProjectButton)
}

export { projectModal, projectButton }