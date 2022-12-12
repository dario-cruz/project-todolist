import { Task } from './task-generator'

class Project {
    // Make an array to hold all of the tasks that are included in a project. 
    constructor(projectName) {
        this.projectName = projectName
        this.projectTasks = []
    }
    // Make new task using imported task module and store it in the associated projectTasks array. 
    makeNewTask(name, priority, notes) {
        let newTask = new Task(name, priority, notes)
        this.projectTasks.push(newTask)
        return newTask
    }
    // Display all tasks related to the project object. 
    getAllTasks() {
        console.log(this.projectTasks)
        return this.projectTasks
    }
}

export { Project }