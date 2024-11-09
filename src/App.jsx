
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Search from './components/Search'
import Print from './components/print/Print'
import JustPrint from './components/print/JustPrint'
import Menu from './components/menu/Menu'
import Searchprint from './components/Searchprint'

function App() {


  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='assemblynah' element={<Login/>}/>
      <Route path='assemblynah/menu' element={<Menu/>}/>
      <Route path='assemblynah/search' element={<Search/>}/>
      <Route path='assemblynah/searchprint' element={<Searchprint/>}/>
      <Route path='assemblynah/Print' element={<Print/>}/>
      <Route path='assemblynah/justprint' element={<JustPrint/>}/>
    </Routes>
         
    </BrowserRouter>
  )
}

export default App
