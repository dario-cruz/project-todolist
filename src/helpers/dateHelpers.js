import {format} from "date-fns"

// Get the current date and apply it to the date input.
// This will keep the started for selection pointed to the current day.
const getCurrentDate = () => {
    let today = format(new Date(), 'MM/dd/yyyy')
    return today
}

export {getCurrentDate}