import { useState } from "react";
import { HashLink } from 'react-router-hash-link'
import { motion } from "framer-motion";

import {  logo } from "../assets/index";
import styles from "./style";
import {sitLinks} from "../data";

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


function Nav() {
const [togale , setTogale] = useState(false);

  return (
    <header className=" bg-primaryDark border-2 md:border-4 border-secondary relative " >

      <div 
      className=" px-5 ss:px-10 md:px-[80px] lg:px-[100px] flex justify-between items-center my-[10px] " >
      {/* header logo */}
      <img src={` ${ logo}`} alt="rida labiad logo" className="w-[136px] ss:w-[146px] lg:w-[220px] h-auto cursor-pointer " />
      
      {/* mobile menu/slose icons */}
      <div className=" cursor-pointer md:hidden w-[30px]  z-10 "  
      onClick={()=>(setTogale(!togale)) } > 
      { togale ? <CloseIcon sx={{ color:"white", fontSize: 34 }} /> 
      : <MenuIcon sx={{ color:"white", fontSize: 34 }}  /> }  
      </div>
      { togale && <motion.nav 
           initial={{right:"-100%", top:"-100%", opacity:0, }}
           animate={{ right:0 , top:0, opacity:1, }}
           transition={{ ease: "easeOut", duration: 0.4 }}
      className=" bg-primary border-b-2 border-l-2 border-secondary  absolute top-0 right-0 w-3/4  z-0 " > 

       <ul 
       className="flex flex-col items-center gap-4 mt-[60px] mb-[40px] " > 
       {sitLinks.map((link, i)=> <li key={i} 
       className= {`font-semibold	 cursor-pointer hover:text-secondary transition-colors duration-500
       	ease-in-out	 ${styles.mainText}`} >{link} </li> ) }
       </ul>
      </motion.nav> }


      {/* desktop nav links verging */}
      <ul className=" hidden md:flex gap-8 " > 
      {sitLinks.map((link, i)=> <li key={i} className= {`font-semibold 	cursor-pointer hover:text-secondary transition-colors
       duration-500	ease-in-out	 ${styles.mainText}`} ><HashLink to={`#${link}`}> {link} </HashLink> </li> ) }
      </ul>

     <div className="hidden md:flex items-center gap-6  " >
      <HashLink to="#protfolio" className={`hidden md:flex !text-primaryDark font-semibold	 bg-secondary px-[24px] py-[8px] border-2 border-yellow-50
       ${styles.mainText}  `} > Protgolio</HashLink>
      </div>
     
      </div>

    </header>
  )
}

export default Nav
