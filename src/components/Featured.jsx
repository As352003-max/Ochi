import { motion, useAnimate, useAnimation} from "framer-motion"
// import { useState } from "react"


const Featured = () => {
  // ease in used to add transition ease.in
 const cards = [useAnimation(),useAnimation()];
 useAnimate()
//  go in framer motion
    const handleHover=(index) =>{
      cards[index].start({y:"0"})
    }
   
    const handleHoverEnd = (index) =>{
      cards[index].start({y:"100%"});
    }
 
  return (
    

    <div className=" w-full py-10 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">Featured Projects</h1>
        </div>

        <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]  " >
          
          <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none  tracking-tighter text-[#CDEA68] text-8xl">
          {"CARDBOARD SPACESHIP".split('').map((items,index)=>(
          <motion.span initial={{y:"100%"}} animate={cards[0]}  transition={{ease: [0.22,1,0.36,1],delay:index*.05}} className="inline-block" key={index}>{items}</motion.span>
         ))}
          </h1>

         <div className="card w-full h-full rounded-xl  overflow-hidden ">
           <img className="w-full h-full bg-cover " src="	https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"></img>
         </div>
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(1)}  onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative card  w-1/2 h-[75vh] " >

<h1 className="absolute flex overflow-hidden  right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none  tracking-tighter text-[#CDEA68] text-8xl">
{"AH2&MATT HORN".split('').map((items,index)=>(
<motion.span initial={{y:"100%"}} animate={cards[1]}
transition={{ease: [0.22,1,0.36,1],delay:index*.05}} key={index} className="inline-block">{items}</motion.span>
))}
</h1>
<div className="card w-full h-full rounded-xl overflow-hidden">
 <img className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"></img>
</div>
           </motion.div>
           </div>
           <div className="cards w-full flex gap-10 mt-10">
           
           <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]  " >
          
           <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none  tracking-tighter text-[#CDEA68] text-8xl">
           {"FYDE".split('').map((items,index)=>(
           <motion.span initial={{y:"100%"}} animate={cards[0]}  transition={{ease: [0.22,1,0.36,1],delay:index*.05}} className="inline-block" key={index}>{items}</motion.span>
          ))}
           </h1>

          <div className="card w-full h-full rounded-xl  overflow-hidden ">
            <img className="w-full h-full bg-cover " src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></img>
          </div>
           </motion.div>
           <motion.div onHoverStart={()=>handleHover(1)}  onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative card  w-1/2 h-[75vh] " >

           <h1 className="absolute flex overflow-hidden  right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none  tracking-tighter text-[#CDEA68] text-8xl">
           {"VISE".split('').map((items,index)=>(
           <motion.span initial={{y:"100%"}} animate={cards[1]}
           transition={{ease: [0.22,1,0.36,1],delay:index*.05}} key={index} className="inline-block">{items}</motion.span>
          ))}
           </h1>
           <div className="card w-full h-full rounded-xl overflow-hidden">
            <img className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"></img>
           </div>
           </motion.div>
           </div>
           

           </div>
        </div>
    
  )
}

export default Featured
