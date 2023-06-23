import React from 'react'
import LeftPannel from '../leftPannel/LeftPannel'
import { useSelector } from 'react-redux'
import './style.scss'



function Contact() {
    const {showValue}= useSelector((state)=>state.visible);
  return (
   <>
 

   <div className= "main-section-contact">
    <div className={` sub-contact-section ${showValue ? "flex" : ""}`}>

      <LeftPannel/>
     <section className={`contact ${showValue ? "margin":""} `}>
        <h2>Contact</h2>
        <span>
            Contact is an essential aspect of any business or organization. It serves as a crucial link between the company and its customers, clients, or users. Contact information enables individuals to reach out, inquire, or engage with the business for various purposes. 

In today's interconnected world, contact information goes beyond the traditional phone calls and physical mail. It encompasses a wide range of communication channels, including email, social media platforms, live chat, and online forms. These multiple avenues provide convenience and flexibility, ensuring that individuals can choose the most suitable method to connect with the company.

Having clear and easily accessible contact information is paramount for establishing trust and credibility. Customers and users seek reassurance that their concerns, queries, or feedback will be addressed promptly and efficiently. Providing accurate contact details such as phone numbers, email addresses, and office addresses not only enables communication but also instills confidence in the company's commitment to customer service.

Moreover, contact information serves as a gateway to potential opportunities. It allows prospective clients, partners, or collaborators to initiate conversations, discuss business propositions, or explore potential partnerships. By making contact information readily available, businesses open doors to new ventures and collaborations that can drive growth and expansion.

In addition to providing contact details, businesses often implement dedicated customer support systems. These systems can include help desks, ticketing systems, or customer service teams that specialize in addressing inquiries and resolving issues. Effective customer support strengthens relationships, fosters loyalty, and helps businesses better understand their customers' needs and preferences.

</span>
        
      </section>
    </div>

   </div>
   
   </>
  )
}

export default Contact
