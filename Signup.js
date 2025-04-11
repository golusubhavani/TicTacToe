import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../UserPage.css';
function Signup() {
    const[Number,setNumber]=useState("");
    const[Password,setPassword]=useState("");
    const[FullName,setFullName]=useState("");
    const[UserName,setUserName]=useState("");
    const navigate=useNavigate();

    function HandleNumber(item){
        setNumber(item.target.value)
    }
    function HandlePassword(item){
        setPassword(item.target.value)
    }
    function HandleFullName(item){
        setFullName(item.target.value)
    }
    function HandleUserName(item){
        setUserName(item.target.value)
    }
    function HandleSignup(){
        if(Number && Password && FullName && UserName){
            navigate("/");
        }
        else{
            alert("Please enter required details");
        }
    }
  return (
    <div>
        <h1>Let's Play a Game&nbsp; <span className="highlight"> Tic Tac Toe</span></h1>
        <p><span className='head'> Ready for a Challenge ?</span><br/> 
        <span className='base'> Sign Up and Dive into the Ultimate Tic Tac Toe Experience!</span></p>
        <div className='container'> <br/>
        <input 
        type='text'
        value={Number}
        onChange={HandleNumber}
        placeholder='Phone number or email address' 
        className="form-input"/> 

        <input 
        type='Password'
        value={Password}
        onChange={HandlePassword}
        placeholder='Password'
        className="form-input" />  

        <input 
        type='text'
        value={FullName}
        onChange={HandleFullName}
        placeholder='Full Name'
        className="form-input" />  

        <input 
        type='text'
        value={UserName}
        onChange={HandleUserName}
        placeholder='Username'
        className="form-input" />   
        
        <button className="but" onClick={HandleSignup}>Sign up</button>
        </div> 
        <h5>If you have an account?&nbsp; <Link to= "/">Log in</Link></h5>
    </div>
  )
}

export default Signup