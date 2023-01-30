import './taskEditModal.css'
import { attributeHelper } from "../../helpers/attributeHelper"
import { projectList } from "../../components/projectGenerator"
import { hi } from "date-fns/locale"
import { clearAllStorage, processProjectList } from "../localStorageManipulator"
import { updateTaskPanel } from "../domManipulation"

// Create a modal that will open on task click and allow the user to modify the task.
// Modal form should pre-populate with task information.
// Make sure to make use of the task class setters and getters for updating.


const taskEditModal = (targetElement, targetTask) => {
    // Container for the entire modal.
    // Attach CSS props to this for toggling visibility of modal and content.
    const EditModalContainer = document.createElement('div')
    attributeHelper(EditModalContainer, {'id':'edit-modal-container'})

    const EditModalContent = document.createElement('div')
    attributeHelper(EditModalContent, {'id':'edit-modal-content'})

    // Heading for the modal. Text content should change with task that is being edited.
    const EditTaskHeading = document.createElement('h1')
    attributeHelper(EditTaskHeading, {'class':'edit-task-heading'})
    EditTaskHeading.innerText = `Editing: ${targetTask.taskName}`

    // Span element for closing the modal when editing is not needed.
    const EditTaskSpan = document.createElement('span')
    EditTaskSpan.innerHTML = '&times;'

    EditTaskSpan.addEventListener('click', () => {
        // Toggle the viz of the modal for editing the task.

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
    
    const EditTaskName = document.createElement('input')
    attributeHelper(EditTaskName, {'type':'text', 'id':'edit-task-name', 'required':''})
    EditTaskName.value = targetTask.taskName

    const EditTaskDetail = document.createElement('textarea')
    attributeHelper(EditTaskDetail, {'id':'edit-task-detail', 'rows':'', 'cols':'', 'required':''})
    EditTaskDetail.value = targetTask.taskNotes

    const EditTaskPriority = document.createElement('select')
    attributeHelper(EditTaskPriority, {'id':'edit-task-priority', 'name':'edit-task-priority'})
    
    const lowPriority = document.createElement('option')
    attributeHelper(lowPriority, {'value':'Priority 3'})
    lowPriority.innerText = 'Low Priority'
    const medPriority = document.createElement('option')
    attributeHelper(medPriority, {'value':'Priority 2'})

    const hiPriority = document.createElement('option')
    attributeHelper(hiPriority, {'value':'Priority 1'})

    // Check what the target tsk priority is set to and add the selected prop to the appropriate option element. 
    const priorityCheck = (() => {
        let priorityList = [lowPriority, medPriority, hiPriority]
        priorityList.forEach(element => {
            if (targetTask.taskPriority == element.value) {
                attributeHelper(element, {'selected':''})
            }
        })
    })()

    const EditTaskDueDate = document.createElement('input')
    attributeHelper(EditTaskDueDate, {'type':'date', 'id':'edit-task-duedate'})
    EditTaskDueDate.value = targetTask.taskDueDate

    const EditCancel = document.createElement('button')
    EditCancel.innerText = 'Cancel'

    const EditSubmit = document.createElement('button')
    attributeHelper(EditSubmit, {'id':'edit-submit-button', 'type':'submit'})
    EditSubmit.innerHTML = 'Submit'


    // Eventlistener for form submit. 
    // Should update the target task and update the dom with the information.
    EditForm.addEventListener('submit', () => {
        // Update all task object values. 
        targetTask.changeName(EditTaskName.value)
        targetTask.changeNotes(EditTaskDetail.value)
        targetTask.changeDueDate(EditTaskDueDate.value)
        targetTask.changePriority(EditTaskPriority.value)

        // Update localStorage
        clearAllStorage()
        processProjectList()

        // Update the DOM to reflect changes.
        let foundProject = projectList.find(element => element == document.querySelector('#task-panel').getAttribute('data-object'))
        updateTaskPanel(foundProject, document.querySelector('#task-panel'))

    })

    // Append all the things.

    targetElement.append(EditModalContainer)

    EditModalContainer.append(EditModalContent)

    EditModalContent.append (EditForm,topSection, rightSection, leftSection, bottomSection)

    topSection.append(EditTaskHeading, EditTaskSpan)
    rightSection.append(EditTaskName, EditTaskDetail)
    leftSection.append(EditTaskPriority, EditTaskDueDate)
    
    
    

}

export {taskEditModal}