import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../pages/home/index'
import './globals.css'
import React from 'react'
import { Outlet } from 'react-router-dom'


export default function App() {
  return (
 
<div className='App'>
<h1>Cabecalho</h1>
<Outlet/>
</div>
)
  
}



// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from '../pages/index'
// import './globals.css'
// import React from 'react'

// export default function App() {
//   return (
    

    
//        <Router>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
         
//         </Routes>
//         </Router> 
    
   
// )
  
// }