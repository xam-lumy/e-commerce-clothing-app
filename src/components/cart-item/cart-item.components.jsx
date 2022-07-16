import {CartItemContainer} from './cart-item.styles';

const CartItem = ({cartItems}) =>{
    const { name, imageUrl, price, quantity } = cartItems
    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
              <span className='price'>
                {quantity} x ${price}
              </span>
            </div>
            
        </CartItemContainer>
    )
}

export default CartItem;