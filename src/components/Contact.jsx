import styles from "./style";

import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from "react";


function Contact() {

  const [ userName, setUserName] = useState("");
  const [ userEmail, setUserNameEmail] = useState("");
  const [ userPhone, setUserNamePhone] = useState("");
  const [ userMessage, setUserNameMessage] = useState("");


  return (
    <section className={`${styles.section} bg-primary py-[80px] `} >
      
  <div className="flex flex-col md:flex-row items-center" >
    <div className=" flex flex-col md:flex-row items-center justify-between ">
      <h4 className= {` ${styles.mediumHeading} text-yellow-50 max-w-[400px] w-full `} >Contact Us</h4>
      <div className=" flex gap-10 items-center " >
      <div className=" hidden lg:block bg-secondary h-[70px] w-[8px] " ></div>
      <p className={` ${styles.mainText} pt-3 `} >Lorem ipsum dolr sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         labore et dolore magna aliqua.  labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>

{/* =============== Contact container */}
<div className=" flex flex-col md:flex-row  gap-16 pt-[40px] w-full " >

{/* 01 */}
  <form action="" className="	flex gap-6 flex-col md:w-4/6 " >
    <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value) } placeholder="Your Name" required className={`${styles.input} `} />
    <input type="email" value={userEmail} onChange={(e)=> setUserNameEmail(e.target.value) } placeholder="Your Email" required className={`${styles.input}  `} />
    <input type="tel" value={userPhone} onChange={(e)=> setUserNamePhone(e.target.value) } placeholder="You Phone" className={`${styles.input} `} />
    <input type="text" value={userMessage} onChange={(e)=> setUserNameMessage(e.target.value) } placeholder="Your Message" className={`${styles.input} `} />
    <input type="button" value="Send" className= {` ${styles.mainText} ${styles.btn}`}  />
  </form>

  {/* 02 */}
  <div className="  md:w-2/6 flex flex-col gap-8 " >

  <div className="flex  items-center gap-[20px] border-2 border-yellow-50  bg-primaryDark px-[25px] py-[25px] " >
          <a className="bg-primary px-[10px] py-[6px] " href="#"> <EmailIcon sx={{ color:"white", fontSize: 34 }} /> </a>
          <div className="flex flex-col gap-1 " >
            <h5 className=" text-yellow-50 font-semibold text-[20px] " >Email:</h5>
            <a href="#" className=" text-yellow-50 text-[14px] " >someone@example.com</a>
          </div>
        </div>

  <div className="flex  items-center gap-[20px] border-2 border-yellow-50  bg-primaryDark px-[25px] py-[25px] " >
         <a className="bg-primary px-[10px] py-[6px] " href="#"> <TelegramIcon sx={{ color:"white", fontSize: 34 }} /> </a>
          <div className="flex flex-col gap-1 " >
            <h5 className=" text-yellow-50 font-semibold text-[20px] " >WatsaUp:</h5>
            <a href="#" className=" text-yellow-50 text-[14px] " >someone@example.com</a>
          </div>
        </div>

  <div className="flex  items-center gap-[20px] border-2 border-yellow-50  bg-primaryDark px-[25px] py-[25px] " >
          <a className="bg-primary px-[10px] py-[6px]  " href="#"> <WhatsAppIcon sx={{ color:"white", fontSize: 34 }} /> </a>
          <div className="flex flex-col gap-1 " >
            <h5 className=" text-yellow-50 font-semibold text-[20px] " >Telegram:</h5>
            <a href="#" className=" text-yellow-50 text-[14px] " >someone@example.com</a>
          </div>
        </div>

  </div>

</div>
      
    </section>
  )
}

export default Contact
