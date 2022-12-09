import { leftPanel, rightPanel } from ".."
import { domAppender } from "./domappender"

const projectToDom = (projectObj) => {
    // Define all of the elements that need to be added to the dom. 
    let projectTab = document.createElement('div')
    let projectTabHeading = document.createElement('h1')
    // Process the project name to a string with no spaces so that we can use it as an identifier. 
    let processedProjectName = projectObj.projectName.toString().replaceAll(" ", "-").toLowerCase()
    projectTab.setAttribute('class', `${processedProjectName}-tab`)
    projectTabHeading.setAttribute('class', `${processedProjectName}-heading`)
    projectTabHeading.innerText = `${processedProjectName}`
    // Append the project-heading to the project-tab div.
    projectTab.append(projectTabHeading)
    // Append the project-tab to the left-panel DOM element.
    leftPanel.append(projectTab)

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

export {projectToDom}