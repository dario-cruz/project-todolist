import { Task } from './task-generator'
class Project {
    // Make an array to hold all of the tasks that are included in a project. 
    constructor(projectName) {
        this.projectName = projectName
        this.projectTasks = []
    }
    makeNewTask(name, priority, notes) {
        let newTask = new Task(name, priority, notes)
        this.projectTasks.push(newTask)
        return newTask
    }
    getAllTasks() {
        console.log(this.projectTasks)
        return this.projectTasks
    }
}

export { Project }