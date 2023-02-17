import {format} from "date-fns";

// Create a func that takes the form text string from a date input and format it in 'day/month/year'

const formDateFormatter  = (dateString) => {
    let dateArray = dateString.split('-')
    dateString = format(new Date(`${dateArray[0]},${dateArray[1]},${dateArray[2]}`), 'dd/MM/yyyy')
    return dateString
}

export {formDateFormatter}