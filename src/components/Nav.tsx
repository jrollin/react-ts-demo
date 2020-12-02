import React from 'react'
import logo from '../logo.png'
import { useStateContext } from '../store/Store'

type NavProps = {
    title: string
}

const Nav : React.FC<NavProps>= ({title}) => {

    const {state} = useStateContext()

    const favorites: number = state.favorites.length

    return <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://reactjs.org/">
                <img src={logo} alt="React + Typescript"  />
            </a>
        </div>
       
        <div id="navbarBasicExample" className="navbar-menu">
        {   title &&  <div className="navbar-start">
                <span className="navbar-item">
                    {title}
                </span>
            </div>
            }
            <div  className="navbar-item">♥ {favorites}</div>
        </div>
        
  </nav>
}

export default Nav