import { Routes, Route} from 'react-router-dom';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { checkUserSession } from './store/user/user.action';
import {useContext} from 'react'
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authenticate from './routes/authenticate/authenticate.component';
import CheckOut from './components/checkout-product/checkout-product.component';
import Directory from './components/directory/directory.component';
import { setCurrentUser } from './store/user/user.action';




const App = () =>{
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkUserSession());
  }, [])

  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Directory />} />
        <Route path='shop/*' element={<Shop />} /> 
        <Route path='auth' element={<Authenticate />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>

  );
};

export default App;