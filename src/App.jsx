import React, { useState } from 'react'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      
<div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
   <header className='flex justify-between items-center text-black py-1 px-8 md:px-32 bg-white drop-shadow-md'>
      <a href="#">
        <img src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" className='w-52 hover:scale-105 transition-all' alt="logo" />

      </a>
      
      <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer '>Home</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer '>Products</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer '>Explore</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer '>Connect</li>
      </ul>

      
      <div className='relative hidden md:flex justify-center gap-3 '>
         <i className='bx bx-search absolute left-3 text-2xl text-gray-500 pt-1'></i>
         <input type="text" placeholder='Search...' className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500  '/>
      </div>


      <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

      <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"} `} style={{transition: "transform .3s ease, opacity .3s ease"}}>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Products</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Explore</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Connect</li>
      </div>
   </header>
</div>

    </>
  )
}

export default App
