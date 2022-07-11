import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crwnlogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
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
        <div className='navigation'>
          <Link className='logo-container' to='/' >
            <Crwnlogo className='logo' />
          </Link>
          <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? (
                    <span className='nav-link' onClick= {signOutUser}>SIGNOUT</span>
                    ) : (
                      <Link className='nav-link' to='/auth'>
                       SIGN-IN
                      </Link>
                    )
                }
                 <CartIcon />
            </div>
            { isCartOpened && <CartDropdown /> }
        </div>
        <Outlet />
      </Fragment>
    )
    
}

export default Navigation;