import {techStack }from "../assets/index";
import styles from "./style";
import Marquee from 'react-fast-marquee';



function Featued() {
  return (
      <section className="bg-primary px-4 ss:px-8 py-8 !border-t-0 border-b-2 md:border-b-4 border-x-2 md:border-4 border-secondary  lg:px-[100px] flex flex-col md:flex-row items-center gap-12 ">

        <div className="self-start md:w-1/5 flex items-center gap-8"> 
          <h4 className ={`${styles.smallHeading} uppercase `} >tech stack </h4>
          <span className=" bg-secondary h-12 w-1 md:w-2 "> </span>
        </div>

        <div className="w-full md:w-3/4 ">
         <Marquee direction="left" speed={80} pauseOnHover={true} delay={2} className="cursor-pointer " >
          {
            techStack.map((item, i) =><div key={i} className="ml-12 ">
            <img src={item} alt="" className="lg:h-14 md:h-12 h-8  w-auto " />
          </div>  )
          }
        </Marquee>
        </div>
      </section>
  )
}

export default Featued
