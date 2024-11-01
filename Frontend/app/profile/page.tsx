import React from 'react';
import PersonalDetails from '@/components/personalDetails';
import CodingDetails from '@/components/CodingDetails';
function pages() {
  return (
  <>
  <div className='bg-[#EFEFEF] flex items-center justify-center p-10 h-full'>
    <div className='bg-[white] w-[100vw] p-10 flex flex-col items-center justify-center rounded-3xl gap-8'>   
      <PersonalDetails /> 
      <CodingDetails />
      <div></div>
      <div></div>
    </div>
  </div>
  </>
  )
}

export default pages;