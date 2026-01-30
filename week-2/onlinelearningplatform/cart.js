// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

import {courses} from './course.js';
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// function to merge cart with courses to get full course info
export function mergeCartWithCourses(courses) {
    let cart=[]
    for(let item of cart){
        for(let course of courses){
            if(item.courseId===course.id){
                cart.push({...item,...course})
            }
        }
    }
    return cart;
}

// function to calculate total cart amount
export function calculateTotalAmount(courses) {
    let totalAmount=0
    for(let item of cart){
        for(let course of courses){
            if(item.courseId===course.id){
                totalAmount+=course.price*item.qty
            }
        }
    }
    return totalAmount;
}

// function to increase quantity of a course (immutably)
export function increaseCourseQuantity(courseId) {
    let updatedCart=[]
    for(let item of cart){
        if(item.courseId===courseId){
            let updatedItem={...item,qty:item.qty+1}
            updatedCart.push(updatedItem)
        }
        else{
            updatedCart.push(item)
        }
    }
    return updatedCart;
}

// function to remove a course from cart
export function removeCourseFromCart(courseId) {
    let updatedCart=[]
    for(let item of cart){
        if(item.courseId!==courseId){
            updatedCart.push(item)
        }
    }
    return updatedCart;
}

// function to check if all cart items are paid courses
export function checkIfPaid(courses) {
    for(let item of cart){
        let isPaidCourse=false
        for(let course of courses){
            if(item.courseId===course.id && course.paid===true){
                isPaidCourse=true
                break
            }
        }
        if(!isPaidCourse){
            return false
        }
    }
    return true
}