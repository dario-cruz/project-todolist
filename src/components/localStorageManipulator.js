import { projectToDom } from "./dom-manipulation"
import { projectList } from "./project-generator"

// Place project object into localStorage with identifier being the projectname.
// Convert to JSON so object can be placed in localStorge. 
const placeInStorage = (projectObj) => {
    window.localStorage.setItem(`${projectObj.projectName}`, JSON.stringify(projectObj))
}
// Get the store project object from storage and parse it into js object and return it. 
const retrieveFromStorage = (projectObj) => {
    let unParsedItem = window.localStorage.getItem(`${projectObj.projectName}`)
    return JSON.parse(unParsedItem)
}

// Remove item from localStorage by native js object name.
const removeFromStorage = (projectObj) => {
    window.localStorage.removeItem(`${projectObj.projectName}`)
}

// Clear all data from localStorage.
const clearAllStorage = () => {
    window.localStorage.clear()
    console.log('All the data has been cleared.')
}

// Get all items in localStorage
const getAllLocalStorage = () => {
    const localObjs = {...localStorage}
    const logTheObjs = () => {
        console.log(localObjs)
    }
    return {
        localObjs,
        logTheObjs,
    }
}

// Process all of the objects created to localStorage JSON
const processProjectList = () => {
    projectList.forEach(item => {
        item = JSON.stringify(item)
        localStorage.setItem(item)
    })
}

// Process list of json and stringified objs into native JS objs.
const processAllLocalStorage = (destinationArray) => {
    // Get a list of all items in localStorage.
    let localStorageList = {...localStorage}
    // For each value, parse the object out of JSON
    Object.keys(localStorageList).forEach(key => {
        let unprocessedItem = localStorage.getItem(`${key}`)
        destinationArray.push(JSON.parse(`${unprocessedItem}`))
        // Check the status of the destination array.
        console.log(destinationArray)
    })
}

// Export all the functionality
export { placeInStorage, retrieveFromStorage, removeFromStorage, clearAllStorage, getAllLocalStorage, processAllLocalStorage, processProjectList }