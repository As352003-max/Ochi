// import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl text-black'>
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[3.5vw] tracking-tight">
      Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-208 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className="text-7xl">
          Our approach:
        </h1>

        <button className="px-10 py-6 flex uppercase gap-10 items-center bg-zinc-900 mt-10 rounded-full text-white ">Read More
          <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
        </button>

        </div>
        <div className="w-1/2 h-[70vh] rounded-3x mt-4   ">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg " className="rounded-md"></img>
        </div>
      </div>

    </div>
  )
}

export default About
