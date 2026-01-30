// iv. payment.js - Payment processing
//   import { reduceStock } from './product.js';
//   import { getCartItems, getCartTotal, clearCart } from './cart.js';
//   import { applyDiscount } from './discount.js';

//   // TODO: Implement these functions

//   export function processPayment(paymentMethod, couponCode = null) {
//     // 1. Get cart items and total
//     // 2. Apply discount if coupon provided
//     // 3. Validate payment method (card/upi/cod)
//     // 4. Process payment (simulate)
//     // 5. Reduce stock for all items
//     // 6. Clear cart
//     // 7. Generate order summary

//     // Return order summary:
//     // {
//     //   orderId: ...,
//     //   items: [...],
//     //   subtotal: ...,
//     //   discount: ...,
//     //   total: ...,
//     //   paymentMethod: ...,
//     //   status: 'success/failed',
//     //   message: '...'
//     // }
//   }

//   export function validatePaymentMethod(method) {
//     // Check if method is valid (card/upi/cod)
//   }

//   function generateOrderId() {
//     // Generate random order ID
//     return 'ORD' + Date.now();
//   }
import { products, reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount, validateCoupon } from "./discount.js";

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null){
  // 1. Get cart items and total
  let cartItems=getCartItems();//getting cart items
  if(cartItems.length ===0){//checking if cart is empty
    return "cart is empty";
  }
  let cartTotal=getCartTotal();//getting total amount of cart
  // 2. Apply discount if coupon provided
  let finalamount=cartTotal;
  let discount=0;
  if(couponCode !== null){//if copuon is provided
    let checkvalid=validateCoupon(couponCode,cartTotal,cartItems)//checking coupon is vaid or not
    if(checkvalid === "Coupon is valid"){//if coupon is valid
        let amt=applyDiscount(cartTotal,couponCode,cartItems);//applying discount
        discount=amt.discount;
        finalamount=finalamount-amt.discount//calculating final amount after discount
    }
  }
  // 3. Validate payment method (card/upi/cod)
  if(validatePaymentMethod(paymentMethod)){//checking payment method is valid or not
    // 4. Process payment (simulate)
    let orderId=generateOrderId();//generating order id
    // 5. Reduce stock for all items
    for(let item of cartItems){
        reduceStock(item.id,item.quantity);//reducing the stock for items present in cart
    }
    clearCart();//clearing the cart after payment is done
    //generating order summary if payment is successful
    return {orderId:orderId,items:cartItems,subtotal:cartTotal,discount:discount,total:finalamount,paymentMethod:paymentMethod,status:"success",message:"Payment processed successfully"};
    }   
    //generating order summary if payment failed
  return {orderId:orderId,items:cartItems,subtotal:cartTotal,discount:discount,total:finalamount,paymentMethod:paymentMethod,status:"failure",message:"Payment method not valid"};
 
}

export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
  //if method is one of the valid payment methods
  if(method==='card' || method ==='upi' || method==='cod'){
        return true;
    }
    return false;
}

function generateOrderId() {
  // Generate random order ID
  return "ORD" + Date.now();
}
