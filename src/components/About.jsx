import styles from "./style";
import {about} from "../assets/index";
import Fiverr from "../ui/Fiverr";
import Upwork from "../ui/Upwork";



function About() {
  return (
    <section id="About" className= {` ${styles.section}  bg-primaryDark py-[80px] text-white `} >

      <div className=" grid grid-cols-6 "  >
        <div className="col-span-2 border-secondary border-4 px-6 py-6 flex flex-col justify-center gap-2	">
          <div className="border-2 border-secondary h-[120px] w-full "><img className="object-cover w-full h-full " src={about} alt="" /> </div>
          <h3 className={`${styles.smallHeading} mt-4 !text-secondary `} >Full-Stack Devloper </h3>
          <p className={`${styles.mainText}  `} >
            Hi, I'm Rida Labiad, A Full-Stack Developer From Marrakech With 
            Over Two Years Of Experience In Building Robust And Scalable Web 
            Applications. Since February 2022, I've Been Dedicated To Creating Clean And Efficient Code, 
            Ensuring That My Projects Not Only Meet But Exceed Expectations.
          </p>
          <div className="flex items-center gap-4 mt-3 ">
            <Fiverr />
            <Upwork />
          </div>
        </div>
        <div id="#about" className="col-span-4  border-secondary border-4 border-l-0 px-6 py-6 flex flex-col gap-4 ">
        <h3 className={`${styles.smallHeading} mt-4 !text-secondary `} >What We Provide</h3>
        <p className={`${styles.mainText} `} >
        I specialize in back and frontend development, seamlessly integrating the two to deliver 
        comprehensive solutions. My expertise includes:
        </p>
        <div className=" flex flex-col gap-2">
          <p className={`${styles.mainText} `}> <span className="font-semibold text-secondary">Frontend Development:</span> Utilizing the latest technologies such as React and Tailwind CSS to 
            create responsive, user-friendly interfaces.</p>
          <p className={`${styles.mainText} `}> <span className="font-semibold text-secondary">Backend Development:</span> Building secure and efficient server-side 
          applications with Node.js and MongoDB. </p>
          <p className={`${styles.mainText} `}> <span className="font-semibold text-secondary">Full-Stack Integration:</span> Combining my skills to deliver end-to-end solutions that are both performant and maintainable.</p>
        </div>
        <p className={`${styles.mainText} `} >
          I pride myself on getting things done efficiently and effectively, always striving for excellence in every project I undertake. With a strong foundation in JavaScript and a keen eye for detail, I ensure that my code is clean, maintainable, and up to date-with the latest industry standards.
          Whether you need a dynamic single-page application, a robust backend system, or a complete web solution, I have the skills and experience to bring your vision to life. Let's work together to create something amazing!
        </p>
         

        </div>
      </div>

    </section>) } 

export default About

// <div className="flex items-center gap-10 ">
// <Fiverr />
// <Upwork />
// </div>
