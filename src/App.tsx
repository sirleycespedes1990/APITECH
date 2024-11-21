
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import  AuthLayout  from './layout/AuthLayout'  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";//




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthLayout/>}>
      
      
        

      </Route>
    </Routes>
    </BrowserRouter>
  )
}
  
 

export default App
