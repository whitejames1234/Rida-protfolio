import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import { logo,  fiverr, upwork } from "../assets/index";
import styles from "./style";


function Footer() {
  return (
    <footer className=" bg-primaryDark px-[20px] md:px-[40px] lg:px-[100px] border-x-2  py-[80px] md:border-x-4 border-secondary border-b-2 md:border-b-4 ">
      <div className=" grid grid-flow-row md:grid-cols-4 lg:gap-[30px] items-center justify-between w-full ">

       {/* 01 */}
        <div className=" col-span-2	 " >
          <img src={`${logo} `} alt="footer logo" className="w-[136px] md:w-[180px] h-auto " />
          <p className={`${styles.mainText} mt-[30px] max-w-[700px] `} >
             Welcome to James White's portfolio Elevating Experiences with React
              and Tailwind CSS. Explore the Intersection of Design and Technology</p>
          
          <div className="flex items-center gap-10 mt-[30px] ">
          <a href="https://www.fiverr.com/ridalabiad?up_rollout=true" target='_blank' className=' bg-secondaryDark px-[22px] py-4 ' > 
          <img src={fiverr} alt="fiver logo" className='max-w-[22px] h-auto ' /> </a> 
          <a href="https://www.upwork.com/nx/find-work/best-matches" target='_blank' className=' bg-secondaryDark px-[22px] py-4 ' > 
          <img src={upwork} alt="fiver logo" className='max-w-[22px] h-auto ' /> </a> 
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
    <a href="#" className="text-[18px] text-yellow-50 " > rlwebdesign </a>
   </div>
   <div className=" flex items-center gap-[20px] " >
    <WhatsAppIcon sx={{ color: "#FFD700", fontSize: 34, cursor:"pointer"} } />
    <a href="#" className="text-[18px] text-yellow-50 " > +212 651-868533 </a>
   </div>
   <div className=" flex items-center gap-[20px] " >
    <TelegramIcon sx={{ color: "#FFD700", fontSize: 34, cursor:"pointer"} } />
    <a href="#" className="text-[18px] text-yellow-50 " > +212 651-868533 </a>
   </div>
   <div className=" flex items-center gap-[20px] " >
     <LinkedInIcon sx={{ color: "#FFD700", fontSize: 34, cursor:"pointer"} } />
    <a href="#" className="text-[18px] text-yellow-50 " > rlwebdesign </a>
   </div>

        </div>
    

      </div>
      
    </footer>
  )
}

export default Footer
