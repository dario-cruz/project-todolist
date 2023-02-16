import {format} from "date-fns"

// Get the current date and apply it to the date input.
// This will keep the started for selection pointed to the current day.
const getCurrentDate = () => {
    let today = format(new Date(), 'MM/dd/yyyy')

    // let day = String(today.getDate()).padStart(2, '0')
    // let month = String(today.getMonth() + 1).padStart(2, '0')
    // let year = today.getFullYear()
    // today = day + '/' + month + '/' + year
    return today
}

export {getCurrentDate}