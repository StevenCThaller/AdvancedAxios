import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={style.navBar}>
      <Link className={style.brand} to="">Welcome to Heroes Central</Link>
      <nav className={style.navLinks}>
        <Link to="">All Heroes</Link>
        <Link to="create">Add Your Own</Link>
      </nav>
    </header>
  )
}

export default Navbar