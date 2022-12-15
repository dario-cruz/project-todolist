import { leftPanel, rightPanel } from ".."
import { domAppender } from "./domappender"
import { Project } from "./project-generator"

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

// Process all of the objects in the projectList array and place them in the dom. 
const processList = (arrayOfObjs) => {
    arrayOfObjs.forEach(item => {
        projectToDom(item)
    })
}

export { projectToDom, processList }