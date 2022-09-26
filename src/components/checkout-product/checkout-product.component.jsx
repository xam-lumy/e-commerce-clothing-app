import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import {CheckOutContainer} from './checkout.styles';
import CheckOutItem from "../checkout-item/checkout-item.components";
import PaymentForm from '../payment-form/payment-form.component';
const CheckOut = () =>{
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    // const { cartItems, cartTotal } = useContext(CartContext)
    
   
    return(
        <CheckOutContainer>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
                <div className='header-block'>
                    <span></span>
                </div>
            </div>
            {cartItems.map((cartItem)=>(
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className='total'>Total: ${cartTotal}</span>
            <PaymentForm />
        </CheckOutContainer>
    )
}


export default CheckOut;