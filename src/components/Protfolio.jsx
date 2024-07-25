import SectionName from "../ui/SectionName";
import {protfolio} from "../data";
import style from "./style";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Protfolio() {
  return (
    <section id="Protfolio" className={`bg-primaryDark ${style.border} ${style.paddingX} ${style.paddingY} !border-t-0 `}>
      <div className="mb-8"> <SectionName content= "Portfolio" /> </div>

      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 text-yellow-50 ">
        {protfolio.map((item, i) => <div key={i} 
             className="overflow-hidden grid items-center grid-cols-1 md:grid-cols-7 	border-2 border-secondary " > 
          {/* /01/ */}
          <div className={`md:col-span-3 mx-6 my-6 flex flex-col gap-2  `} >
            <h3 className={style.smallHeading}>{item.title} </h3>
            <p className={style.mainText} >{item.decription} </p>
            <div className="flex items-center gap-4 ">
              <span className=" flex items-center gap-1">
                <span> Site-Code </span>
                <i className=" text-secondary hover:text-secondaryDark cursor-pointer"><GitHubIcon /> </i>
              </span>
              <a href={item.link} target="_blank" className=" flex items-center gap-1">
                <span> Site-Link </span>
                <i className=" text-secondary hover:text-secondaryDark cursor-pointer"><OpenInNewIcon /> </i>
              </a>
              </div>
          </div>

          <div className={` bg-primary md:col-span-4 w-full cursor-pointer max-h-[340px] 
             border-secondary ${item.position === "left" ? 'order-first border-r-2' : 'border-l-2  '}`} > 
              <img src={item.img} alt="" className="-z-10 min-h-[180px] object-cover " />
             </div>

           </div>  ) }

      </div>
    </section>
  )
}

export default Protfolio
