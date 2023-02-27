

// Define the regex pattern, filtering out numbers and special characters.
// const projectValReg = /([A-Za-z]+( [A-Za-z]+)+)/i
// const projectValReg = /([A-Za-z]+( [A-Za-z]+)+)[^0-9]+/i
const projectValReg = /[A-Za-z\s\w]/
const checkTheString = (theString) => {
    console.log(theString.match(projectValReg))
}

export {checkTheString}