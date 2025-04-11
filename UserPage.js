import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../UserPage.css';
function UserPage() {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
    function HandleState(item){
        setName(item.target.value)
    }
    function HandleState2(item){
        setPassword(item.target.value)
    }
    function HandleLogin(){
      if(name&&password){
        navigate("/Game");
      }
      else{
        alert("Plese enter required details to login");
      }
    }
  return (
    <div>
    <h1>Let's Play a Game&nbsp; <span className="highlight"> Tic Tac Toe</span></h1>
    <div className="container">
        <input 
        type="text"
        value={name}
        onChange={HandleState}
        placeholder="Phone number, username or email address"
        className="form-input" />

        <input 
        type="Password"
        value={password}
        onChange={HandleState2}
        placeholder="Password"
        className="form-input" />

        <button className="but" onClick={HandleLogin}>Log in</button>
    </div>
    <h5>Don't have an account?&nbsp; <Link to="/signup">Sign up</Link> </h5>
    </div>
  )
}

export default UserPage;