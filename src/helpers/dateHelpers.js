import {format, formatDistance} from "date-fns"

// Get the current date and apply it to the date input.
// This will keep the started for selection pointed to the current day.
const getCurrentDate = () => {
    let today = format(new Date(), 'MM/dd/yyyy')
    return today
}

const getDateDistance = (dateString) => {
    // Chop string into pieces and put them in an array.
    // Forms create dates as strings ie '2023-01-20' YYYY-MM-DD
    let dateArray = dateString.split('-')
    return formatDistance(new Date(dateArray[0], dateArray[1], dateArray[2]), new Date())
}



export {getCurrentDate, getDateDistance}