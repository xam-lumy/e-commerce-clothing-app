import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {CheckOutContainer} from './checkout.styles';
import CheckOutItem from "../checkout-item/checkout-item.components";
const CheckOut = () =>{
    const { cartItems, cartTotal } = useContext(CartContext)
    
   
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
        </CheckOutContainer>
    )
}


export default CheckOut;