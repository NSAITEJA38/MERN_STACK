// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
let enrollmentDeadline = new Date("2026-01-20");//dead line for enrolling
let currentDate=new Date() // current date

//1. check enrollment status
if(currentDate<enrollmentDeadline){
    console.log("Enrollment Open")
}else{
    console.log("Enrollment Closed")
}
//2. validate user input date
let inputDate="2026-02-30"
let dateObj=new Date(inputDate)
//check if date is valid
//check if whether the days of months are valid for all months
function isValidDate(date){
    let day=date.getDate()
    let month=date.getMonth() //month is 0 indexed
    let year=date.getFullYear() 
    let monthDays=[31,28,31,30,31,30,31,31,30,31,30,31]
    //check if day is valid for the month
    if(day>0 && day<=monthDays[month]){
        return true
    }
    return false
}
isValidDate(dateObj)?console.log("Valid Date"):console.log("Invalid Date")

