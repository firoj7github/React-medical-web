
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Service' element={<Service></Service>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Blog' element={<Blog></Blog>}></Route>
       </Routes> 
    </div>
  );
}

export default App;
