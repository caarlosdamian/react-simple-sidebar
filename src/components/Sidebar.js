import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

function Sidebar() {
    return (
        <>
        <div className='navbar'>
            <Link to ='#' className="menu-bars">
            <FaBars/>
            </Link>
        </div>
        </>
    )
}

export default Sidebar
