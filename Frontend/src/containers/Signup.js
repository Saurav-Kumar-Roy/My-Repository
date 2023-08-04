import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { setAlert } from '../actions/alert'
import { signup } from '../actions/auth'
import PropTypes from 'prop-types'
import '../assets/Signup.css'


const Signup=({setAlert,signup,isAuthenticated})=> {
    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name,email,password,password2} = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        if (password!==password2){
            console.log(password)
            console.log(password2)
            setAlert("Password dont match",'Error')
        }   
        else
            signup({name,email,password,password2});
    }

    if (isAuthenticated)
        navigate('/')

    return(
        <div className='centered'>
            <Helmet>
                <title>Signup</title>
                <meta
                    name='description'
                    content='Signup page'
                />
            </Helmet>
            <h1>Signup</h1>
            <p>Signup to your account</p>
            <form onSubmit={e=>onSubmit(e)}>
                <div>
                    <input type='text' placeholder='Name' name='name' value={name} onChange={e=>onChange(e)} required/>
                </div>
                <div>
                    <input type='email' placeholder='Email' name='email' value={email} onChange={e=>onChange(e)} required/>
                </div>
                <div>
                    <input type='password' placeholder='Password' name='password' value={password} onChange={e=>onChange(e)} required minLength='6' />
                </div>
                <div>
                    <input type='password' placeholder='Re enther the Password' name='password2' value={password2} onChange={e=>onChange(e)} required minLength='6' />
                </div>
                <button>Register</button>
            </form>
            <p>Alerdy have an account? <Link to="/login">Login</Link></p>
        </div>
    )
    
}

Signup.propTypes={
    setAlert:PropTypes.func.isRequired,
    signup:PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{setAlert,signup})(Signup);