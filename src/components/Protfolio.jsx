import SectionName from "../ui/SectionName";
import {protfolio} from "../data";
import style from "./style";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Protfolio() {
  return (
    <section id="protfolio" className="bg-primaryDark px-[140px] py-[80px] border-x-4  md:border-b-4 border-secondary">
      <div className="mb-8"> <SectionName content= "Portfolio" /> </div>

      <div className="flex flex-col gap-6 text-yellow-50 ">
        {protfolio.map((item, i) => <div key={i} className=" grid items-center grid-cols-7  border-2 border-secondary " > 
          {/* /01/ */}
          <div className="col-span-3 mx-6 my-6 flex flex-col gap-2 ">
            <h3 className={style.smallHeading}>{item.title} </h3>
            <p className={style.mainText} >{item.decription} </p>
            <div className="flex items-center gap-4 ">
              <span className=" flex items-center gap-1">
                <span> Site-Code </span>
                <i className=" text-secondary hover:text-secondaryDark cursor-pointer"><GitHubIcon /> </i>
              </span>
              <span className=" flex items-center gap-1">
                <span> Site-Link </span>
                <i className=" text-secondary hover:text-secondaryDark cursor-pointer"><OpenInNewIcon /> </i>
              </span>
              </div>
          </div>

          <div className={`bg-primary col-span-4 w-full h-full min-h-[220px] cursor-pointer
             border-secondary ${item.position === "left" ? 'border-r-2 order-first' : 'border-l-2  '}`} > 
              <img className="object-cover" src={item.img} alt="" />
             </div>

           </div>  ) }

      </div>
    </section>
  )
}

export default Protfolio
