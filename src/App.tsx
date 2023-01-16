import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Shop from './pages/Shop';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigation />}>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/plant-care' element={<h1>Plant Care</h1>}/>
          <Route path='/blogs' element={<h1>Blogs</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
