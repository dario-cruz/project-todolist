
// Get the current date and apply it to the date input.
// This will keep the started for selection pointed to the current day.
const getCurrentDate = () => {
    let today = new Date() 
    let day = String(today.getDate()).padStart(2, '0')
    let month = String(today.getMonth() + 1).padStart(2, '0')
    let year = today.getFullYear()
    today = year + '/' + month + '/' + day
    return today
}

export {getCurrentDate}