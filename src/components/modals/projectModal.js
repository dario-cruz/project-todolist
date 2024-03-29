import './projectModal.css'
import { Project, projectList } from "../projectGenerator"
import { clearAllStorage, processProjectList, placeInStorage } from "../localStorageManipulator"
import { processList } from "../domManipulation"
import { attributeHelper } from '../../helpers/attributeHelper'

const projectModal = (targetElement) => {
    // Modal container to control the visibility of content.
    const modalContainer = document.createElement('div')
    attributeHelper(modalContainer, {'id':'project-modal-container', 'class':'project-modal-container', 'class':'is-hidden'})
    
    // Actual div that contains the modal content.
    const modalContent = document.createElement('div')
    attributeHelper(modalContent, {'class':'project-modal-content'})

    const projectSpan = document.createElement('span')
    attributeHelper(projectSpan, {'id':'project-span', 'class':'project-span-close'})
    projectSpan.innerHTML = '&times;'

    const projectForm = document.createElement('form')
    // Remove the default behavior or the form. 
    attributeHelper(projectForm, {'action':'', 'method':'', 'autocomplete':'off'})
    
    // Setting up label form project input.
    const projectFormLabel = document.createElement('label')
    attributeHelper(projectFormLabel, {'for':'project-form-input'})
    projectFormLabel.innerText = 'Project Name'

    // Setup input for form.
    const projectFormInput = document.createElement('input')
    attributeHelper(projectFormInput, {'type':'text', 'id':'project-form-input', 'required':'', 'maxlength': '15'})

    // Button for submit
    const projectFormButton = document.createElement('button')
    attributeHelper(projectFormButton, {'id':'project-form-button', 'type':'submit'})
    projectFormButton.innerText = `Submit`

    // append all the things.
    projectForm.append(projectFormLabel)
    projectForm.append(projectFormInput)
    projectForm.append(projectFormButton)
    modalContent.append(projectSpan)
    modalContent.append(projectForm)
    modalContainer.append(modalContent)
    targetElement.append(modalContainer)

    // On span click close the modal without submitting any data.
    projectSpan.addEventListener('click', () => {
        modalContainer.classList.toggle('is-hidden')
    })

    // On submit take input and make project.
    projectForm.addEventListener('submit', (event) => {
        // Stop form from refreshing page.
        event.preventDefault()

        // Grab user input and add as project.
        let projectName = projectFormInput.value

        const processFormInput = ((objectName) => {
            // Create project and push to projectList array.
            let newObj = new Project(objectName)
            projectList.push(newObj)
            // Place in local storage.
            placeInStorage(newObj)
            // Toggle vis of modal.
            modalContainer.classList.toggle('is-hidden')

            // Process all of the projects and task and add them to the localStorage.
            // Clear all previously stored elements.
            clearAllStorage()
            // Store all of the current and updated project objects.
            processProjectList()

            let elementList = document.querySelectorAll('.left-panel > div')
            elementList.forEach(element => {
                if (element.classList.contains('new-project-div')) {

                } else {
                    element.remove()    
                }
            })
            
            console.log(elementList)

            processList(projectList)
        })(projectName)
        // Click the element after form submit.

    })

}

const projectButton = (targetElement) => {
    const addProjectButton = document.createElement('button')
    attributeHelper(addProjectButton, {'id':'add-project-button', 'class':'add-project-button'})
    addProjectButton.innerText = "New Project"

    addProjectButton.addEventListener('click', () => {
        document.getElementById('project-modal-container').classList.toggle('is-hidden')
    })

    // Attach the button to the targetElement
    targetElement.append(addProjectButton)
}

export { projectModal, projectButton }