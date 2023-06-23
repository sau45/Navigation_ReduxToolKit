import React from 'react'
import LeftPannel from '../leftPannel/LeftPannel'
import { useSelector } from 'react-redux'
import './style.scss'



function Guide() {
    const {showValue}= useSelector((state)=>state.visible);
  return (
   <>
 

   <div className= "main-section-guide">
    <div className={` sub-guide-section ${showValue ? "flex" : ""}`}>

      <LeftPannel/>
     <section className={`guide ${showValue ? "margin":""} `}>
        <h2>Guide</h2>
       <span>A guide serves as a valuable companion on a journey, providing direction, knowledge, and support. Whether exploring a new city, learning a new skill, or navigating through complex processes, a well-crafted guide can be an invaluable resource. 

A guide offers a roadmap, leading individuals step-by-step towards their desired destination. It acts as a beacon of information, offering insights, tips, and instructions to help users make informed decisions and overcome obstacles along the way. It provides clarity, breaking down complex concepts or tasks into manageable chunks, allowing users to grasp the subject matter more easily.

Beyond mere instructions, a guide also offers expertise and wisdom. It draws from the knowledge and experience of experts in the field, distilling their insights into actionable advice. A guide can offer best practices, recommendations, and insider tips that empower individuals to achieve their goals more efficiently and effectively.

One of the greatest strengths of a guide lies in its ability to instill confidence. It alleviates doubts and uncertainties by providing reassurance and support. A well-crafted guide anticipates common challenges and addresses them head-on, empowering individuals to tackle obstacles with resilience and determination. It acts as a trusted companion, offering encouragement and motivation throughout the journey.

In the digital age, guides come in various forms, from traditional print publications to online resources, interactive tutorials, and video tutorials. They adapt to the preferences and learning styles of different individuals, ensuring accessibility and convenience.

Ultimately, a guide goes beyond being a mere collection of instructions; it becomes a source of inspiration and empowerment. It empowers individuals to explore new horizons, acquire new skills, overcome challenges, and achieve personal growth. With its ability to illuminate paths and provide support, a guide becomes an invaluable asset in any endeavor, unlocking possibilities and helping individuals chart their course towards success.</span>
        
      </section>
    </div>

   </div>
   
   </>
  )
}

export default Guide
