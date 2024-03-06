import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componet/Header';
import Home from './componet/Home';
import { Route, Routes } from 'react-router-dom';
import Singleproduct from './componet/Singleproduct';
import Cart from './componet/Cart';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/singleproduct/:id' element={<Singleproduct />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </div>
  );
}

export default App;
