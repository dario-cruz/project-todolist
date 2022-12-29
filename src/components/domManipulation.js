import { leftPanel, rightPanel } from ".."
import { domAppender } from "./domAppender"
import { Project } from "./projectGenerator"

const projectToDom = (projectObj) => {
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
    
    // Add event for changing displayed tasks related to projects.
    projectTab.addEventListener('click', () => {
        // Remove all content form the task panel.
        rightPanel.innerHTML = ""        
        
        // Set data attribute that changes with data being displayed.
        // We can reference this when we want to add tasks to the object and update the dom. 
        rightPanel.setAttribute('data-object', `${projectName}`)

        // Iterate over the tasks items on the array and add then to the DOM. 
        projectObj.projectTasks.forEach(task => {
            // Create a div for each of the tasks. Headings and Notes will be attached to this.
            let parentElement = document.createElement('div')
            parentElement.setAttribute('class', 'task')
            rightPanel.append(parentElement)
            domAppender('h1', 'task-title', parentElement, task.taskName)
            domAppender('p', 'task-notes', parentElement, task.taskNotes)
        });
    })

    const showAllTasks = () => {
        // Iterate over the tasks items on the array and add then to the DOM. 
        projectObj.projectTasks.forEach(task => {
        
            // Create a div for each of the tasks. Headings and Notes will be attached to this.
            let parentElement = document.createElement('div')
            parentElement.setAttribute('class', 'task')
            rightPanel.append(parentElement)
            domAppender('h1', 'task-title', parentElement, task.taskName)
            domAppender('p', 'task-notes', parentElement, task.taskNotes)
        });
    }
}

// Process all of the objects in the projectList array and place them in the dom. 
const processList = (arrayOfObjs) => {
    arrayOfObjs.forEach(item => {
        projectToDom(item)
    })
}

const taskAppender = (taskName, taskNotes, taskPriority, taskDueDate, elemToAppendTo) => {
    // Create needed elements to view project tasks. 
    let hostElement = document.createElement('div')
    hostElement.setAttribute('class', `task`)
    let hostElementHeading = document.createElement('h1')
    hostElementHeading.setAttribute('class', 'task-heading')
    hostElementHeading.innerText = `${taskName}`
    let hostElementNotes = document.createElement('p')
    hostElementNotes.setAttribute('class', 'task-notes')
    hostElementNotes.innerText = `${taskNotes}`
    let hostElementPriority = document.createElement('p')
    hostElementPriority.setAttribute('class', 'task-priority')
    hostElementPriority.innerText = `Priority: ${taskPriority}`
    let hostElementDueDate = document.createElement('p')
    hostElementDueDate.setAttribute('class', 'task-due-date')
    hostElementDueDate.innerText = `Due Date: ${taskDueDate}`

    // Append elements to one another.
    hostElement.appendChild(hostElementHeading)
    hostElement.appendChild(hostElementNotes)
    hostElement.appendChild(hostElementPriority)
    hostElement.appendChild(hostElementDueDate)

    // Append to the arg element.
    elemToAppendTo.appendChild(hostElement)
}

export { projectToDom, processList }