// toggles a class on an element. 
// Using for testing at the moment.
const classToggleHelper = (targetElement, className) => {
    if (targetElement.classList.contains(`${className}`)) {
        targetElement.classList.remove(`${className}`)
    } else {
        targetElement.classList.add(`${className}`)
    }
}

export {classToggleHelper}