import styles from "./style";
import {about} from "../assets/index";
import Fiverr from "../ui/Fiverr";
import Upwork from "../ui/Upwork";
import SectionName from "../ui/SectionName";



function About() {
  return (
    <section className= {` ${styles.section} bg-primary py-[70px] `} >
      <div className=" grid grid-cols-5 items-center gap-8 lg:gap-12 "  >

<div className="bg-cover col-span-2	 bg-center border-2 lg:border-4 border-secondary " >
    <img src= {`${about}`} alt="about-image" className="w-full h-full" />
</div>

<div className="col-span-3 flex flex-col gap-4">
    <div > <SectionName content= "About Us" /></div>
    <p className={`${styles.mainText}`}>
       Hi! I James White 21 Years Old, Am A Frond-End React Developer That Can Also Do Web Design At The Same Time,
       Im Somone That Like To Get Thing   Done And This Make Trust More Of My Selfe The Thing That Makes Me
      Happy Every Time I Do That,  I Have Been Doing This Since  2021 Means I Have More Than 2 Years Of Experience
       , I Liked Everything About The Web And Technology From My First Time  I Touch Computer With My Hand, Im Somone That
      Easy To Work With That What Other People Say About Me So What You Waiting For Let s Get That Job Done Today  
    </p>

     <div className="flex items-center gap-10 ">
        <Fiverr />
        <Upwork />
     </div>
</div>

      </div>
    </section>
  )
}

export default About
