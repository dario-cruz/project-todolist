import { Task } from './task-generator'

// Maintain a list of all projects created. 
const projectList = []

// Make function to add project to array
const addProjectToArray = (Obj, Array) => {
    // Append Object to the designated array.
    Array.push(Obj)
}

class Project {
    // Make an array to hold all of the tasks that are included in a project. 
    constructor(projectName) {
        this.projectName = projectName
        this.projectTasks = []
    }
   
    // Make new task using imported task module and store it in the associated projectTasks array. 
    makeNewTask(name, priority, notes, dueDate) {
        let newTask = new Task(name, priority, notes, dueDate)
        this.projectTasks.push(newTask)
        return newTask
    }
   
    // Display all tasks related to the project object. 
    get getAllTasks() {
        console.log(this.projectTasks)
        return this.projectTasks
    }
   
    // Allow for changing of the project name. 
    set changeProjectName(newName) {
        this.projectName = newName
    }

}

export { Project, projectList, addProjectToArray }