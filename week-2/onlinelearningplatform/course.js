// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably



export let courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// function to get published courses
export function getPublishedCourses() {
    let publishedCourses=[]
    for(let course of courses){
        if(course.published===true){
            publishedCourses.push(course)
        }
    }
    return publishedCourses;
}

// function to sort courses by price (high → low)
export function sortCoursesByPriceDesc() {
    let sortedCourses=[...courses]
    sortedCourses.sort((a,b)=>b.price - a.price)
    return sortedCourses;
}

// function to extract { title, price } only
export function getCourseTitleAndPrice() {
    let courseDetails=[]
    for(let course of courses){
        courseDetails.push({title:course.title,price:course.price})
    }
    return courseDetails;
}

// function to calculate total value of published courses
export function getTotalValueOfPublishedCourses() {
    let totalValue=0
    for(let course of courses){
        if(course.published===true){
            totalValue+=course.price
        }
    }
    return totalValue;
}