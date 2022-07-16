import { Routes, Route} from 'react-router-dom';
import {useContext} from 'react'
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authenticate from './routes/authenticate/authenticate.component';
import CheckOut from './components/checkout-product/checkout-product.component';
import Directory from './components/directory/directory.component';




const App = () =>{

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