import { removeProjectButton } from "./pageElements"
import { taskButton } from "./modals/taskModal"
import { removeTask } from "./modals/taskModal"

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
    
    // Append remove button.
    removeProjectButton(projectTab)

    // Append add task button
    taskButton(projectTab)

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
            taskAppender(task.taskName, task.taskNotes, task.taskPriority, task.taskDueDate, rightPanel)
        });
        // Get a list of all tasks and tag them with the project data attribute. 
        // Will allow us to ID the related project and task objects for modification.
        let listOfTaskDivs = document.querySelectorAll('div.task')
        listOfTaskDivs.forEach(element => element.setAttribute('data-object', `${projectName}`))
    })

    const showAllTasks = () => {
        // Iterate over the tasks items on the array and add then to the DOM. 
        projectObj.projectTasks.forEach(task => {
            // Create a div for each of the tasks. Headings and Notes will be attached to this.
            taskAppender(task.taskName, task.taskNotes, task.taskPriority, task.taskDueDate, rightPanel)
        });
    }
}

// Process all of the objects in the projectList array and place them in the dom. 
const processList = (arrayOfObjs) => {
    arrayOfObjs.forEach(item => {
        projectToDom(item)
    })
}

// Process tasks, make and append dom elements for displaying tasks.
const taskAppender = (taskName, taskNotes, taskPriority, taskDueDate, elemToAppendTo) => {
    // Create needed elements to view project tasks. 
    let hostElement = document.createElement('div')
    hostElement.setAttribute('class', `task`)
    hostElement.setAttribute('data-task', `${taskName}`)
    let hostElementTitle = document.createElement('h1')
    hostElementTitle.setAttribute('class', 'task-title')
    hostElementTitle.innerText = `${taskName}`
    let hostElementNotes = document.createElement('p')
    hostElementNotes.setAttribute('class', 'task-notes')
    hostElementNotes.innerText = `${taskNotes}`
    let hostElementPriority = document.createElement('p')
    hostElementPriority.setAttribute('class', 'task-priority')
    hostElementPriority.innerText = `Priority: ${taskPriority}`
    let hostElementDueDate = document.createElement('p')
    hostElementDueDate.setAttribute('class', 'task-due-date')
    if (taskDueDate == undefined) {
        hostElementDueDate.innerText = 'Due Date: None'
    } else {
        hostElementDueDate.innerText = `Due Date: ${taskDueDate}`
    }

    // Append elements to one another.
    hostElement.appendChild(hostElementTitle)
    hostElement.appendChild(hostElementNotes)
    hostElement.appendChild(hostElementPriority)
    hostElement.appendChild(hostElementDueDate)
    removeTask(hostElement)

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

export { projectToDom, processList, taskAppender, clearTaskElem }