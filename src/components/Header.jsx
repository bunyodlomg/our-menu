import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <div>
            <section className="menu">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <div className="btn-container">
                    <NavLink to="/" className="btn">all</NavLink>
                    <NavLink to="/breakfast" className="btn">breakfast</NavLink>
                    <NavLink to="/lunch" className="btn">lunch</NavLink>
                    <NavLink to="/shakes" className="btn">shakes</NavLink>
                </div>

            </section >
        </div >
    )
}

export default Header