import { projectList } from "../components/projectGenerator";

// Create a holder object for storing the current project and task  to be updated and edited. 
let currentItem = {
    currentProject: '',
    currentTask: ''
}

// Create function to match the current project and task to the project and task on the project list.
const targetObject = () => {
    let projectLoc = projectList.find(element => element == currentItem.currentProject)
    let taskLoc = projectLoc.projectTasks.find(element => element == currentItem.currentTask)

    return taskLoc
}

export {currentItem, targetObject}