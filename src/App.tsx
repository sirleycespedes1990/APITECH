
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import  AuthLayout  from './layout/AuthLayout'  // te hacia falta en el import AuthLayout


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
