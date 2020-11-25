import React from 'react'
import logo from '../logo.png'

type NavProps = {
    title: string
}

const Nav : React.FC<NavProps>= ({title}) => {

    return <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://reactjs.org/">
                <img src={logo} alt="React + Typescript"  />
            </a>
        </div>
        {title && 
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <span className="navbar-item">
                    {title}
                </span>
            </div>
            
        </div>
        }
  </nav>
}

export default Nav