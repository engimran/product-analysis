import { Route, Routes } from 'react-router-dom';
import './App.css';
import Deshboard from './component/Deshbord/Deshbord';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';
import Deshbord from './component/Deshbord/Deshbord';
import Blogs from './component/Blogs/Blogs';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/deshbord' element={<Deshbord></Deshbord>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
