import {techStack }from "../assets/index";
import styles from "./style";
import Marquee from 'react-fast-marquee';



function Featued() {
  return (
      <section className="bg-primary py-[60px] border-b-4 border-x-4 border-secondary px-[100px] flex items-center gap-12 ">

        <div className="w-1/5 flex items-center gap-8"> 
          <h4 className ={`${styles.smallHeading} uppercase `} >tech stack </h4>
          <span className=" bg-secondary h-12 w-2 "> </span>
        </div>

        <div className="w-3/4 ">
         <Marquee direction="left" speed={80} pauseOnHover={true} delay={2} className="cursor-pointer " >
          {
            techStack.map((item, i) =><div key={i} className="ml-16 ">
            <img src={item} alt="" className="h-14 w-auto " />
          </div>  )
          }
        </Marquee>
        </div>
      </section>
  )
}

export default Featued
