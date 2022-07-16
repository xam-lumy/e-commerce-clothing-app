import { useContext } from 'react';
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';
import {ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';
// import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () =>{
    const { isCartOpened, setIsCartOpened, cartCount } = useContext( CartContext )

    const toggleIsClassOpened =() => setIsCartOpened(!isCartOpened)
  return(
    <CartIconContainer onClick ={toggleIsClassOpened}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
    
  )

}


export default CartIcon; 