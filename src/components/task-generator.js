class Task {
    // Gather Information on task. 
    constructor(taskName, taskPriority, taskNotes) {
        this.taskName = taskName
        this.taskPriority = taskPriority
        this.taskNotes = taskNotes
    }
    // Change task property functions for when the user  edits the task. 
    changeName(newName) {
        this.taskName = newName
    }
    changePriority(newPriority) {
        this.taskPriority = newPriority
    }
    changeNotes(newNotes) {
        this.taskNotes = newNotes
    }
}

export { Task }