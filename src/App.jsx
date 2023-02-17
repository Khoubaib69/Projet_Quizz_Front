import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Accueil from './components/Pages/Accueil'
import Connexion from './components/Pages/Connexion'
import {
  BrowserRouter as Router , 
  Routes,
  Route
} from 'react-router-dom'
function App() {


  return (
    <Router>
    <div
     className='flex flex-col justify-between bg-pink-50 text-gray-900 min-h-screen font-sans'>
     {/* HEADER  */}
      <Header />


      {/* PAGES  */}
      <div className='min-h-full'>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/login' element={<Connexion />} />
          
        </Routes>
      </div>

       {/* FOOTER  */}
       <Footer />
       
    </div>
    </Router>
  )
}

export default App
