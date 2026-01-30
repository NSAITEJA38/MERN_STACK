// iii. discount.js - Coupon and discount logic
//                           // Available coupons
//                           const coupons = {
//                             'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
//                             'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
//                             'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
//                           };

//                           // TODO: Implement these functions

//                           export function validateCoupon(couponCode, cartTotal, cartItems) {
//                             // 1. Check if coupon exists
//                             // 2. Check minimum amount requirement
//                             // 3. Check category requirement (if any)
//                             // Return { valid: true/false, message: '...' }
//                           }

//                           export function calculateDiscount(couponCode, cartTotal) {
//                             // Calculate discount amount based on coupon type
//                             // Return discount amount
//                           }

//                           export function applyDiscount(cartTotal, couponCode, cartItems) {
//                             // 1. Validate coupon
//                             // 2. If valid, calculate discount
//                             // 3. Return final amount and discount details
//                             // Return {
//                             //   originalTotal: ...,
//                             //   discount: ...,
//                             //   finalTotal: ...,
//                             //   message: '...'
//                             // }
//                           }

// Available coupons
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {type: "percentage", value: 20, minAmount: 10000, category: "electronics"},
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  let coupon = coupons[couponCode];//getting coupon details and storing in coupon variable
  if(!coupon){
    return "Invalid coupon code";
  }
  // 2. Check minimum amount requirement
  if(cartTotal < coupon.minAmount){
    return "total amount is less than minimum amount"
  }
  // 3. Check category requirement (if any)
  if(coupon.category){
    let categoryFound=false;
    for(let item of cartItems){//checking for the category in cart items
        if(item.category===coupon.category){
            categoryFound=true;
            break;
        }
    }
    if(!categoryFound){
        return "category not found";
    }
  // Return { valid: true/false, message: '...' }
    return "Coupon is valid";
    }
}

export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  let coupon=coupons[couponCode];
  let discount=0;
  if(coupon.type === "percentage"){//if coupon type is percentage
    discount=(coupon.value/100)*cartTotal;//stroring discount value
  }
  if(coupon.type === "flat"){//if coupon type is flat
    discount=coupon.value;//storing discount value
  }
  // Return discount amount
  return discount;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  // 1. Validate coupon
  let validdate=validateCoupon(couponCode,cartTotal,cartItems);
  let discount=0;//initializing discount variable
  let finaldiscount=cartTotal;//initializing final amount variable
  // 2. If valid, calculate discount
  if(validdate === "Coupon is valid"){
    discount=calculateDiscount(couponCode,cartTotal)//calculating discount
    finaldiscount=cartTotal-discount;//updating final amount after discount
    //generating final details after applying discount if discount is applied
    return {orginalTotal:cartTotal,discount:discount,finalTotal:finaldiscount,message:"Discount applied successfully"}
    }
  // 3. Return final amount and discount details
  // Return {
  //   originalTotal: ...,
  //   discount: ...,
  //   finalTotal: ...,
  //   message: '...'
  // }
  //generating final details if discount is not applied
  return {orginalTotal:cartTotal,discount:discount,finalTotal:finaldiscount,message:"Discount is not available"}
}
