import { useContext } from 'react';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () =>{
    const { isCartOpened, setIsCartOpened, cartCount } = useContext( CartContext )

    const toggleIsClassOpened =() => setIsCartOpened(!isCartOpened)
  return(
    <div className='cart-icon-container' onClick ={toggleIsClassOpened}>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'>{cartCount}</span>
    </div>
    
  )

}


export default CartIcon; 