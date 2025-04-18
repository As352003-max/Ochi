// import React from 'react'
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {
  return (
    
    <div data-scroll data-scroll-ssection data-scroll-speed="-.3" className="w-full min-h-screen pt-1">
      <div className="textstructure mt-52 px-20">
      {["We Create","Eye-Opening", " Presentations"].map((items,index)=>{
        return(
          <div key={index} className="masker flex items-center" >  

          <div  className="w-fit flex items-end overflow-hidden">
            {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1 }}   className=" mr-[1vw] w-[8vw] h-[4vw] relative rounded-md ">
             <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"></img>
            </motion.div>)}
            </div>     

           <h1  className=" flex items-center uppercase text-[5vw] h-full font-['Founders_Grotesk_X-condensed'] leading-[5vw]  font-bold">{items}</h1>
        </div>
        );
      })}
        </div>
      <div className="border-t-[1px] border-zinc-800  mt-20 flex justify-between items-center py-5 px-20">
        {["For public and private companies","From the first pitch to the last pitch IPO",].map((items,index)=>(<p key={index} className="text-md font-light tracking-tight leading-none">{items}</p>))}
        <div className="start flex items-center gap-5"> 
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase  rounded-full">start the project</div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400">
            <span className="rotate-[45deg]"></span>
            <FaArrowUp/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default LandingPage
