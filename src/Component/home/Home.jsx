import React from 'react'
import LeftPannel from '../leftPannel/LeftPannel'
import { useSelector } from 'react-redux'
import './style.scss'



function Home() {
    const {showValue}= useSelector((state)=>state.visible);
  return (
   <>
 

   <div className= "main-section-home">
    <div className={` sub-home-section ${showValue ? "flex" : ""}`}>

      <LeftPannel/>
     <section className={`home ${showValue ? "margin":""} `}>
        <h2>Home</h2>
        <span>Sure! Here's a paragraph on the topic "Home":

Home is more than just a physical space; it is a place where we find solace, comfort, and a sense of belonging. It is where we create lasting memories, share laughter and tears, and build connections with our loved ones. Home is where we retreat after a long day, seeking refuge from the outside world. It is a sanctuary that reflects our personal style and values, filled with cherished belongings and mementos. Within the walls of our home, we find warmth, love, and security. It is a place where we can truly be ourselves, free from judgment or pretense. Home is not limited to the physical structure, but encompasses the people, relationships, and experiences that make it truly special. It is the heart of our lives, a place that holds our dreams and aspirations, and a source of comfort that wraps us in its embrace. Home is where our story unfolds, and its significance transcends mere bricks and mortar.</span>
        
      </section>
    </div>

   </div>
   
   </>
  )
}

export default Home
