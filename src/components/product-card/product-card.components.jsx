import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';

import {ProductCardContainer} from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


const  ProductCard = ({ product }) =>{
    const {name, price, imageUrl} = product;
    // const {addItemToCart} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    // const addProductToCart = () => addItemToCart(product);
    

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
 return(
    <ProductCardContainer>
        <img src= {imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
 )
}

export default ProductCard;