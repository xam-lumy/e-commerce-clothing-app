import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crwnlogo} from '../../assets/crown.svg';
import {NavigationContainer, NavLinks, LogoContainer, NavLink} from  './navigation.styles';
import CartIcon from '../../components/cart-icon/cart-icon.components';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {UserContext} from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase.utils';

const Navigation = ()=>{
  const { currentUser } = useContext(UserContext);
  const { isCartOpened } = useContext(CartContext)
    return(
      <Fragment>
        <NavigationContainer>
           <LogoContainer to='/' >
            <Crwnlogo className='logo' />
           </LogoContainer>
           <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? (
                    <NavLink as='span' onClick= {signOutUser}>SIGNOUT</NavLink>
                    ) : (
                      <NavLink  to='/auth'>
                       SIGN-IN
                      </NavLink>
                    )
                }
                 <CartIcon />
            </NavLinks>
            { isCartOpened && <CartDropdown /> }
        </NavigationContainer> 
        <Outlet />
      </Fragment>
    )
    
}

export default Navigation;