// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
let date1=new Date()
//takes current system time
let year=date1.getFullYear()
//fetch year of the given date
let month=date1.getMonth()
console.log(month)
//fetch month of the givrn date
let date=date1.getDate()
//fetch day of the given date(1,31)
let day=date1.getDay()
//fetch day of the given date(sunday..saturday)
console.log(day)
let hrs=date1.getHours()
//fetch system hour time
let mins=date1.getMinutes()
//fetch system minutes time
let sec=date1.getSeconds()
//fetch system seconds 
console.log(day,'-',month,'-',year,' ',hrs,':',mins,':',sec)