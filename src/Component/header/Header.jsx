import React, { useState } from 'react'
import { SlMenu } from "react-icons/sl";
import './style.scss'
import { useDispatch } from 'react-redux';
import { setShowValue } from '../store/leftPannelSlice';
import { VscChromeClose } from "react-icons/vsc";




function Header() {

    const [showMenubar,setShowMenubar]=useState(true);
    const dispatch = useDispatch();
    

   
    return (
        <>
            <div className="header">
                <div className="header-content">
                    <ul>
                        <li> <a href="#home">Home</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#information">Information</a></li>
                        <li><a href="#guide">Guide</a></li>
                    </ul>
                </div>
                <div className="menubar">
                    {showMenubar?( <SlMenu 
                    onClick={()=>
                        dispatch(setShowValue(true),
                        setShowMenubar(false))}

                    />):(<VscChromeClose
                    onClick={()=>
                        dispatch(setShowValue(false),
                        setShowMenubar(true))}
                    
                    />)}
                   
                   
                </div>
            </div>
        </>
    )
}

export default Header
