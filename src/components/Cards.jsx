// import React from 'react'

const Cards = () => {
  return (
    < div data-scroll data-scroll-speed="0.7" className='w-full h-screen bg-zinc-900 flex  px-32 gap-5 items-center '>
      <div className='cardcontainer h-[50vh] w-1/2'>
          <div className='card relative rounded-xl w-full h-full bg-[#004D43] text-[#CDEA68]  flex items-center justify-center '>
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" ></img>
          <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10"><span className="btn__text">©2019–2022</span></button>
          </div>
    </div>

      <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
      <div className='card relative w-full rounded-xl h-full bg-[#192826] flex items-center justify-center  '>
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" ></img>
        <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10" type="button">
							<span className="btn__text">Rating 5.0 on Clutch</span>
						</button>
      </div>
      <div className='card w-full relative rounded-xl h-full bg-[#192826]  flex items-center justify-center'>
        <img className="w-32 mb-8" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10 " type="button">
							<span className="btn__text">Business Bootcamp Alumni</span>
						</button>
      </div>
      </div>
    </div>
  )
}

export default Cards
