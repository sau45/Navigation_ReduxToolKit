import React from 'react'
import LeftPannel from '../leftPannel/LeftPannel'
import { useSelector } from 'react-redux'
import './style.scss'



function Information() {
    const {showValue}= useSelector((state)=>state.visible);
  return (
   <>
 

   <div className= "main-section-information">
    <div className={` sub-information-section ${showValue ? "flex" : ""}`}>

      <LeftPannel/>
     <section className={`information ${showValue ? "margin":""} `}>
        <h2>Information</h2>
        <span>Certainly! Here's a paragraph on the topic "Information":

Information plays a vital role in our modern world, serving as the foundation for knowledge, understanding, and decision-making. In today's digital age, we are surrounded by a vast ocean of information, accessible at our fingertips. From news articles and scientific research to social media updates and online databases, information comes in various forms and from diverse sources. The abundance of information empowers individuals to stay informed, learn new things, and explore different perspectives. However, with this abundance comes the challenge of navigating through vast amounts of data to find accurate, reliable, and relevant information. It is crucial to develop critical thinking skills to evaluate sources, verify facts, and discern trustworthy information from misinformation or disinformation. The responsible and ethical use of information promotes informed decision-making, enhances education, fosters innovation, and enables individuals and societies to grow and thrive in an ever-evolving world.</span>
        
      </section>
    </div>

   </div>
   
   </>
  )
}

export default Information
