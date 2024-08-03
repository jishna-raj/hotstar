

import './App.css'
import './bootstrap.min.css';
import Footer from './components/Footer';
import Search from './pages/Search';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Wel from './components/Wel';
import Start from './pages/Start'
import Header from './components/Header';



function App() {
  

  return (
    <>
<Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mypage' element={<Start/>}/>
        <Route path='/' element={<Wel/>}/>
        <Route path='/search' element={<Search/>}/>
</Routes>
      
      <Footer/>
    </>
  )
}

export default App
