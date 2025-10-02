import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Header() {
  return (
    <div className='w-screen h-[68px] bg-white p-4 flex justify-between items-center'>
      <div className='flex items-center gap-8'>
        <h1 className='text-[24px] text-[#111928] font-[600]'>ticktock</h1>
        <p className='text-[14px] text-[#111928] font-[500]'>Timesheets</p>
      </div>
      <div>
        <p className='text-[16px] text-[#6B7280] font-[500]'>John Doe <i className="ri-arrow-down-wide-line"></i></p>
      </div>
    </div>
  )
}

export default Header
