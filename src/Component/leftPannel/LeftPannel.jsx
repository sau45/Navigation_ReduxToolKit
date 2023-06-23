import React from 'react'
import {ImHome,ImPhoneHangUp } from "react-icons/im";
import { AiFillExclamationCircle } from "react-icons/ai";
import { VscCompassActive } from "react-icons/vsc";
import'./style.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LeftPannel() {
 
  const {showValue}  =useSelector((state)=>state.visible);
  const navigate = useNavigate();
  const navigateToPage = (page)=>{
    navigate(`/${page}`)
  }
  

  return (
    <>
    {showValue?( <div className="container">
    <div className="left-menu">
     
      
      <ul>
        <li>  <ImHome/><a onClick={()=>navigateToPage('')}>Home</a></li>
        <li><ImPhoneHangUp/><a onClick={()=>navigateToPage('contact')} >Contact</a></li>
        <li><AiFillExclamationCircle/><a onClick={()=>navigateToPage('info')}>Information</a></li>
        <li><VscCompassActive/><a onClick={()=>navigateToPage('guide')}>Guide</a></li>
      </ul>
    </div>
  </div>):("")}
   
    </>
  )
}

export default LeftPannel
