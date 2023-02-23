

// Define the regex pattern, filtering out numbers and special characters.
const projectValReg = /([A-Za-z0-9]+( [A-Za-z0-9]+)+)/i

const checkTheString = (theString) => {
    console.log(theString.match(projectValReg))
}

export {checkTheString}