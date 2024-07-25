import styles from "./style";
import { webDev, webDesing} from "../assets/index";
import SectionName from "../ui/SectionName";

function Service() {
  return (
    <section id="Service" className= {`${styles.paddingX} ${styles.paddingY} ${styles.border} !border-t-0 bg-primary `} >

      <div className="mb-8"> <SectionName content= "Our-Service" /> </div>

       {/* Service Cards */}
          <div className=" flex flex-col md:flex-row gap-8 " >

            <div className="md:w-1/2  bg-primaryDark border-2  border-secondary px-6 py-8 " >
              <img src={ webDev} alt="" className="max-h-[50px] mb-[20px]"  />
              <h4 className={` ${styles.smallHeading} `}  >The Front End</h4>
              <p className= {`${styles.mainText} `} >Welcome to James portfolio Elevating Welcome to James portfolio Elevating Welcome to James </p>
            </div>

            <div className="md:w-1/2  bg-primaryDark border-2  border-secondary px-6 py-8  " >
            <img src={ webDesing} alt="" className="max-h-[50px] mb-[20px]  " />
              <h4 className={` ${styles.smallHeading} `}  >Web Desing</h4>
              <p className= {`${styles.mainText} `} >Welcome to James  portfolio Elevating Welcome to James  
              portfolio Elevating Welcome to James White's </p>
            </div>
    
          </div>_
      
    </section>
  )
}

export default Service
