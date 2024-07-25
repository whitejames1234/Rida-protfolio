import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import { logo} from "../assets/index";
import styles from "./style";
import Fiverr from '../ui/Fiverr';
import Upwork from '../ui/Upwork';


function Footer() {
  return (
    <footer className={`bg-primaryDark ${styles.border} ${styles.paddingX} ${styles.paddingY} !border-t-0`} >
      <div className=" grid grid-flow-row md:grid-cols-4 gap-6 lg:gap-[30px] items-center justify-between w-full ">

       {/* 01 */}
        <div className=" col-span-2 flex flex-col gap-4	 " >
          <img src={`${logo} `} alt="footer logo" className="w-[160px] md:w-[180px] h-auto " />
          <p className={`${styles.mainText}  max-w-[700px] `} >
             Welcome to James White's portfolio Elevating Experiences with React
              and Tailwind CSS. Explore the Intersection of Design and Technology</p>
          
          <div className="flex items-center gap-8">
            <Fiverr />
            <Upwork />
          </div>

        </div>

     {/* 02 */}
        <ul className=" flex flex-col gap-[12px] col-span-1	  " >
          <li className=" text-[16] font-semibold text-yellow-50 ">  Quiq Links </li>
          <li > <a href="#" className="text-[16px] text-yellow-50 " > About</a> </li>
          <li > <a href="#" className="text-[16px] text-yellow-50 " > Service </a> </li>
          <li > <a href="#" className="text-[16px] text-yellow-50 " > Protfolio </a> </li>
          <li > <a href="#" className="text-[16px] text-yellow-50 " > Contact </a> </li>
        </ul>


     {/* 03 */}
  <div className="flex flex-col gap-4 col-span-1	  ">

   <div className=" flex items-center gap-[20px] " >
     <InstagramIcon sx={{ color: "#FFD700", fontSize: 34, cursor:"pointer"} } />
    <a href="https://www.instagram.com/rlwebdesign/?hl=en" className="text-[18px] text-yellow-50 " > rlwebdesign </a>
   </div>
   <div className=" flex items-center gap-[20px] " >
    <WhatsAppIcon sx={{ color: "#FFD700", fontSize: 34, cursor:"pointer"} } />
    <a href="https://api.whatsapp.com/send?phone=212651868533" className="text-[18px] text-yellow-50 " > +212 651-868533 </a>
   </div>
   <div className=" flex items-center gap-[20px] " >
    <TelegramIcon sx={{ color: "#FFD700", fontSize: 34, cursor:"pointer"} } />
    <a href="#" className="text-[18px] text-yellow-50 " > +212 651-868533 </a>
   </div>
   <div className=" flex items-center gap-[20px] " >
     <LinkedInIcon sx={{ color: "#FFD700", fontSize: 34, cursor:"pointer"} } />
    <a href="https://www.linkedin.com/in/rida-labiad-a7a177256/" _blank className="text-[18px] text-yellow-50 " > rlwebdesign </a>
   </div>

        </div>
    

      </div>
      
    </footer>
  )
}

export default Footer
