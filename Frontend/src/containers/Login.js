import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../actions/auth'
import '../assets/Login.css'

const Login=({login,isAuthenticated})=> {
    const navigate = useNavigate()

    const [formData,SetFormData] = useState({
        email:"",
        password:""
    });

    const {email,password}=formData;
    const onChange = e => SetFormData({...formData,[e.target.name]:e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        login(email,password);
    }
    if (isAuthenticated)
        navigate('/')

    return (
        <div className='centered'>
            <Helmet>
                <title>login</title>
                <meta
                    name='description'
                    content='login page'
                />
            </Helmet>
            <h1>Login</h1>
            <p>Login to your account</p>
            <form onSubmit={e=>onSubmit(e)}>
                <div>
                    <input type='email' placeholder='email' name='email' value={email} onChange={e=>onChange(e)} required/>
                </div>
                <div>
                    <input type='password' placeholder='password' name='password' value={password} onChange={e=>onChange(e)} required minLength='6' />
                </div>
                <button>Login</button>
            </form>
            <p>don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}

Login.propTypes={
    login:PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login);