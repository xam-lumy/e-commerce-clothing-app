import { useSelector, useDispatch } from 'react-redux';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemToCart} from '../../store/cart/cart.action'

import {CheckOutItemContainer} from  './checkout-item.styles';



const CheckOutItem = ({cartItem}) =>{
    
    // const {clearItemFromCart, addItemToCart, removeItemToCart} = useSelector()
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems); 
    const {name, imageUrl, price, quantity} = cartItem;
    
    
    const clearItemHandler =() => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));

    return(
            <CheckOutItemContainer>
                <div className='image-container'>
                    <img src={imageUrl} alt={`${name}`} />
                </div>
                <span className='name'> {name}</span>
                <span className='quantity'>
                    <div className="arrow" onClick={removeItemHandler}>
                        &#10094;
                    </div>
                     <span className='value'>{quantity}</span>
                    <div className="arrow" onClick={addItemHandler}>
                       &#10095;
                    </div>
                </span>
                <span className='price'>${price}</span>
                <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
            </CheckOutItemContainer>

    )

}


export default CheckOutItem;