import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderItem from './HeaderItem'

const Header = ({title = "IT QUIZZ"}) => {

    const navigate = useNavigate()

    const links = [
        {path : "/", title: "ACCUEIL"},
        {path: "/products", title: "CATÉGORIES"},
        {path: "/login", title: "CONNEXION"},
    ]
   
  return (
    <header className='flex justify-between items-center'>
    {/* LOGO */}
    <div className='container mx-auto justify-between py-5 flex items-center'>

        <div
        onClick={() => navigate('/')}
         className='flex gap-3 items-center'>
      <img 
      src="../../public/img/logo.svg" 
      alt="logo shuriken"
      width={40}
      height={40} />
      <h3 className='text-xl font-bold'>{title}</h3>
    </div>

    {/* LIENS */}

    <nav>
      <ul className='flex justify-between gap-10'>
          {links.map(({title, path}) => (
              <HeaderItem key={title} path={path} title={title} />
          ))}
        <li className='font-bold cursor-pointer'>
        </li>
      </ul>
    </nav>
    </div>

  </header>
  )
}

export default Header