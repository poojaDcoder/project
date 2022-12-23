import React from 'react';
import {BsFillBellFill} from 'react-icons/bs';
import {AiFillQuestionCircle} from 'react-icons/ai';
import {FaPowerOff} from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-danger"style={{height:"50px"}}>
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">ProjectDemo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{marginLeft:"25%"}} class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item">
          <a style={{fontWeight:"bold"}}  class="nav-link active text-light" aria-current="page" href="#">Component Assignment</a>
        </li>
        </ul>
    </div>    
    <div class="d-flex flex-row mb-3 " id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#"> <h6 style={{paddingTop:"5px"}}>Welcome, Username</h6> </a>
        </li>
        <li class="nav-item" style={{paddingTop:"5px"}}>
          <BsFillBellFill style={{marginTop:"10px",marginLeft:"10px",width:"fit-content",height:"18px",color:"white",cursor:"pointer"}}/>
          <AiFillQuestionCircle style={{marginTop:"10px",marginLeft:"10px",width:"fit-content",height:"18px",color:"white",cursor:"pointer"}}/>
          <FaPowerOff style={{marginTop:"10px",marginLeft:"10px",width:"fit-content",height:"18px",color:"white",cursor:"pointer"}}/>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        
        
    </>
  )
}

export default Navbar;