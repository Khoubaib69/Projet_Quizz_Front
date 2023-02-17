import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HeaderItem = ({path, title}) => {

    const location = useLocation()
  return (
    <li className='font-bold cursor-pointer'>
    <Link
    className={ location.pathname == path ? 'border-b-4 border-pink-700' : ''}
    to={path}>{title}</Link>
</li>
  )
}

export default HeaderItem