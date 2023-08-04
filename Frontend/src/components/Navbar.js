import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/auth'
import Alert from './Alert'
import PropTypes from 'prop-types'
import '../assets/Navbar.css'

const Navbar=({auth:{isAuthenticated,loading},logout})=>{
    const authLinks=(
      <a onClick={logout} href='#!' className='nav-item'>Logout</a>
    )
    const guestLinks =(
      <Fragment>
        <Link to='/login' className='nav-item'>Login</Link>
        <Link to='/signup' className= 'nav-item'>Signup</Link>
      </Fragment>
    )

    return (
      <Fragment>
        <nav className='navbar'>
          <div className='nav-list1'>
            <div >
              <Link to='/' className='logo'>Logo</Link>
            </div>
            <div >
              {!loading && (<Fragment>{isAuthenticated?authLinks:guestLinks}</Fragment>)}
            </div>
          </div>
          <div className='nav-list2'>
            <li className='nav-item'><NavLink exact to='/'>Home</NavLink></li>
            <li className='nav-item'><NavLink exact to='/listings'>Listings</NavLink></li>
            <li className='nav-item'><NavLink exact to='/about'>About</NavLink></li>
            <li className='nav-item'><NavLink exact to='/contact'>Contact</NavLink></li>
          </div>
        </nav>
        <Alert/>
      </Fragment>
    )
}

Navbar.propTypes = {
  logout:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state=>({
  auth: state.auth
})

export default connect(mapStateToProps,{logout})(Navbar)