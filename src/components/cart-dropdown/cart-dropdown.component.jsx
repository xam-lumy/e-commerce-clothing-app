// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
// import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.components';
import { selectCartItems } from '../../store/cart/cart.selector'
import CheckOut from '../checkout-product/checkout-product.component';
import { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown= () =>{
   const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
     
    const goToCheckOut = ()=>{
        navigate('/checkout')
    }


    return (
        <CartDropDownContainer>
           <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItems={item} /> )
                ) : (
                    <EmptyMessage> Your cart is Empty</EmptyMessage>
                )}
           </CartItems>
            <Button onClick={goToCheckOut}><span>Go to checkout</span></Button>
        </CartDropDownContainer>
    )

}

export default CartDropdown;