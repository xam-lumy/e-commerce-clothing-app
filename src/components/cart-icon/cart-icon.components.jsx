import { useDispatch, useSelector } from 'react-redux';
// import { useContext } from 'react';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action'
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';
import {ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';
// import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import { CartContext } from '../../contexts/cart.context';

const CartIcon = () =>{
    // const { isCartOpened, setIsCartOpened, cartCount } = useContext( CartContext )
    const dispatch = useDispatch();
    const isCartOpened = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount)
    
    const toggleIsClassOpened =() => dispatch(setIsCartOpen(!isCartOpened));

  return(
    <CartIconContainer onClick ={toggleIsClassOpened}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
    
  )

}


export default CartIcon; 