import { removeProjectButton } from "./pageElements"
import { taskButton } from "./modals/taskModal"
import { removeTask } from "./modals/taskModal"
import { attributeHelper } from "../helpers/attributeHelper"
import { toggleVis } from "./modals/taskEditModal"
import { projectList } from "./projectGenerator"
import { currentItem, targetObject, targetProject } from "../helpers/currentItemHolder"
import { formDateFormatter } from "../helpers/formDateFormatter"
import { editProjectButton } from "./modals/editProject"
import './domManipulator.css'
import { isDate } from "date-fns"

const projectToDom = (projectObj) => {
    // define needed elements to complete functionality
    const rightPanel = document.getElementById('task-panel')
    const leftPanel = document.getElementById('project-panel')

    // Define all of the elements that need to be added to the dom. 
    const projectTab = document.createElement('div')
    const projectTabHeading = document.createElement('h1')

    // Create string for attribute setting. So we can style and add eventlisteners. 
    let projectName = projectObj.projectName.toString()
    // Process the project name to a string with spaces so that we can use it as the heading.  
    let processedProjectName = projectObj.projectName.toString().replaceAll("-", " ")
    // Set attributes for dynamically added content.
    projectTab.setAttribute('id', `${projectName}-tab`)
    projectTabHeading.setAttribute('id', `${projectName}-heading`)
    projectTab.setAttribute('class', 'project-tab')
    projectTabHeading.setAttribute('class', 'project-heading')

    // Set the text content for elements. 
    projectTabHeading.innerText = `${processedProjectName}`

    // Append the project-heading to the project-tab div.
    projectTab.append(projectTabHeading)
    
    // Append the project-tab to the left-panel DOM element.
    leftPanel.append(projectTab)

    // Append the edit button
    editProjectButton(projectTab)
    
    // Append add task button
    taskButton(projectTab)
    
    // Append remove button.
    removeProjectButton(projectTab)


    // Add event for changing displayed tasks related to projects.
    projectTab.addEventListener('click', () => {
        // Remove all content form the task panel.
        rightPanel.innerHTML = ""        
        
        // Set data attribute that changes with data being displayed.
        // We can reference this when we want to add tasks to the object and update the dom. 
        rightPanel.setAttribute('data-object', `${projectName}`)
        currentItem.currentProject = projectObj
        console.log(currentItem)

        // Iterate over the tasks items on the array and add then to the DOM. 
        projectObj.projectTasks.forEach(task => {
            // Create a div for each of the tasks. Headings and Notes will be attached to this.
            taskAppender(task, rightPanel)
        });
        // Get a list of all tasks and tag them with the project data attribute. 
        // Will allow us to ID the related project and task objects for modification.
        let listOfTaskDivs = document.querySelectorAll('div.task')
        // If no tasks are present create and append place holder text.
        if (listOfTaskDivs.length == 0) {
            let placeHolderHeading = document.createElement('h1')
            attributeHelper(placeHolderHeading, {'class':'place-holder-heading'})
            placeHolderHeading.innerText = 'Please create a task.'
            rightPanel.append(placeHolderHeading)
        }
        listOfTaskDivs.forEach(element => element.setAttribute('data-object', `${projectName}`))
    })

}

const updateTaskPanel = (targetProject, targetElem) => {
    // Clear the targetElem to prep for elements to be added.
    targetElem.innerHTML = ''

    // Iterate over the tasks items on the array and add then to the DOM. 
    targetProject.projectTasks.forEach(task => {
        // Create a div for each of the tasks. Headings and Notes will be attached to this.
        taskAppender(task, targetElem)
    });
}


// Process all of the objects in the projectList array and place them in the dom. 
const processList = (arrayOfObjs) => {
    arrayOfObjs.forEach(item => {
        projectToDom(item)
    })
}

const createEditTaskButton = (targetElement) => {
    // Define element to trigger editing of task.
    const editTaskButton = document.createElement('button')
    attributeHelper(editTaskButton, {'id':'edit-task-button'})
    editTaskButton.innerText = 'Edit'
    
    // Create event on click to display editModal and populate form with current task information.
    editTaskButton.addEventListener('click', () => {
        
        editTaskButton.parentElement.click()     
        // Toggle the visibility of the modal form elements.
        const editModal = document.querySelector('#edit-modal-container')
        toggleVis(editModal)
        
        // Get data-object attribute information from parent element.
        let currentProject = targetProject()
        let currentTask = targetObject()
        console.log(currentTask)
        
        // Find the project object and task object associated with the project.
        // currentProject = projectList.find(element => element.projectName == `${currentProject}`)
        // currentTask = currentProject.projectTasks.find(element => element.taskName == `${currentTask}`)
    
        // Define all of the needed editTaskModal elements. 
        const editTaskName = document.querySelector('#edit-task-name')
        const editTaskDetail = document.querySelector('#edit-task-detail')
        const editTaskDueDate = document.querySelector('#edit-task-duedate')
        const editTaskHeading = document.querySelector('#edit-task-heading')
        const lowPriority = document.querySelector('#edit-priority-lo')
        const medPriority = document.querySelector('#edit-priority-med')
        const hiPriority = document.querySelector('#edit-priority-hi')
    
        // Get the current values from the task and load them into the form element.
        editTaskName.value = currentTask.taskName
        editTaskDetail.value = currentTask.taskNotes
        editTaskDueDate.value = currentTask.taskDueDate
        editTaskHeading.innerText = `Editing: ${currentTask.taskName}`
        
        // Check what the target task priority is set to and add the selected prop to the appropriate option element. 
        const priorityCheck = (() => {
            let priorityList = [lowPriority, medPriority, hiPriority]
            // clear all previous selected attributes.
            lowPriority.removeAttribute('selected')
            medPriority.removeAttribute('selected')
            hiPriority.removeAttribute('selected')
    
    
            // Iterate through all priorities and find the one that matches the task current and select it.
            projectList.forEach(function(item) {
                if (item.value == currentTask.taskPriority) {
                    attributeHelper(item, {'selected':''})
                }
            })
        })()
    })

    // Append to the target.
    targetElement.append(editTaskButton)
}


// Process tasks, make and append dom elements for displaying tasks.
const taskAppender = (task, elemToAppendTo) => {
    // Create needed elements to view project tasks. 
    const hostElement = document.createElement('div')
    hostElement.setAttribute('class', `task`)
    hostElement.setAttribute('data-task', `${task.taskName}`)
    const hostElementTitle = document.createElement('h1')
    hostElementTitle.setAttribute('class', 'task-title')
    hostElementTitle.innerText = `${task.taskName}`
    const hostElementNotes = document.createElement('p')
    hostElementNotes.setAttribute('class', 'task-notes')
    hostElementNotes.innerText = `${task.taskNotes}`
    const hostElementPriority = document.createElement('p')
    hostElementPriority.setAttribute('class', 'task-priority')
    hostElementPriority.innerText = `Priority: ${task.taskPriority}`
    const hostElementDueDate = document.createElement('p')
    hostElementDueDate.setAttribute('class', 'task-due-date')
    if (task.taskDueDate == undefined) {
        hostElementDueDate.innerText = 'Due Date: None'
    } else {
        let formattedDate = formDateFormatter(`${task.taskDueDate}`)
        hostElementDueDate.innerText = `Due Date: ${formattedDate}`
    }
    
    // Create divs for grid to contain all information.
    const leftSide = document.createElement('div')
    attributeHelper(leftSide, {'id':'task-left-side'})
    
    const rightSide = document.createElement('div')
    attributeHelper(rightSide, {'id':'task-right-side'})


    // Append elements to one another.
    hostElement.append(leftSide, rightSide)
    leftSide.append(hostElementTitle, hostElementNotes, hostElementPriority, hostElementDueDate)
    createEditTaskButton(hostElement)
    removeTask(hostElement)
    
    hostElement.addEventListener('click', () => {
        // Update to current project and task in the state holder object. 
        currentItem.currentTask = task
        console.log(currentItem)
    })

    // Append to the arg element.
    elemToAppendTo.appendChild(hostElement)
}

// Clear task panel, for after a project is removed. 
// theTarget should be the root task div element.
const clearTaskElem = (theTarget) => {
    console.log(theTarget)
    // Remove identifying attributes.
    theTarget.removeAttribute('data-object')

    // Remove all content and replace with placeholder text.
    let placeHolderText = document.createElement('p')
    placeHolderText.innerText = 'Please select a task from the left.'
    theTarget.innerHTML = ''
    theTarget.append(placeHolderText)

    // Mod the project obj to remove the task
    
    // Update localStorage to reflect the changes to project list. 

}

export { projectToDom, processList, taskAppender, clearTaskElem, updateTaskPanel,  }