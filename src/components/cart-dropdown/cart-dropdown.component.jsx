
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.components';
import CheckOut from '../checkout-product/checkout-product.component';
import './cart-dropdown.styles.scss'

const CartDropdown= () =>{
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
     
    const goToCheckOut = ()=>{
        navigate('/checkout')
    }


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                <CartItem key={item.id} cartItems={item} /> 
                ))}
            </div>
            <Button onClick={goToCheckOut}><span>Go to checkout</span></Button>
        </div>
    )

}

export default CartDropdown;