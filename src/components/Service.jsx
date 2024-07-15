import styles from "./style";
import { webDev, webDesing} from "../assets/index";
import SectionName from "../ui/SectionName";

function Service() {
  return (
    <section className= {`${styles.section} lg:px-[140px] bg-primary py-[80px] `} >

      <div className="mb-8"> <SectionName content= "Our-Service" /> </div>

       {/* Service Cards */}
          <div className=" grid gap-[40px] grid-cols-1 md:grid-cols-2 justify-between items-center " >

            <div className=" bg-primaryDark border-2  border-secondary px-6 py-8 " >
              <img src={ webDev} alt="" className="max-h-[50px] mb-[20px] "  />
              <h4 className={` ${styles.smallHeading} `}  >The Front End</h4>
              <p className= {`${styles.mainText} `} >Welcome to James portfolio Elevating Welcome to James portfolio Elevating Welcome to James </p>
            </div>

            <div className=" bg-primaryDark border-2  border-secondary px-6 py-8  " >
            <img src={ webDesing} alt="" className="max-h-[50px] mb-[20px]  " />
              <h4 className={` ${styles.smallHeading} `}  >Web Desing</h4>
              <p className= {`${styles.mainText} `} >Welcome to James  portfolio Elevating Welcome to James  portfolio Elevating Welcome to James White's</p>
            </div>
            
          </div>_
      
    </section>
  )
}

export default Service
