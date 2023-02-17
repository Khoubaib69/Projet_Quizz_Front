import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className='py-4'>
         <h3
          className='text-lg text-gray-800 font-bold text-center'>
          IT QUIZZ - {date} - Copyright</h3>
    </footer>
  )
}

export default Footer