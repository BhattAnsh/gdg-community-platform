import React from 'react'
import { Mail, Linkedin, Github, BriefcaseBusiness } from 'lucide-react'
import Link from 'next/link'

function PersonalDetails() {
  return (
    <>
            <div className='border-b-2 pb-10 px-5 personal-details flex justify-between w-full'>
        <div className='flex flex-row gap-5 text-[#3E3E3E]'>
          <div className='profile-picture w-[200px] h-[200px] rounded-xl bg-[#EFEFEF]'></div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <div>
              <h3>John Doe</h3>
              <span>@johndoe</span>
              <span></span>
              <span>AIML 2nd Year</span>
            </div>
            <div className='w-[40vw]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid est nisi hic nostrum possimus. Quos vel cupiditate ad ipsa pariatur officia autem explicabo quis id itaque, consequuntur, natus ea soluta dolores! Ipsum corrupti reiciendis laudantium distinctio quam provident, minima non?
            </div>
          </div>
        </div>
        <div className='socials flex flex-col gap-2'>
          <div className="flex gap-2 text-[#7F7F7F] hover:text-[#3E3E3E] transition ease-in-out">
            <Mail />
            <Link href={"#"}><span>johndoe@gmail.com</span></Link>
          </div>
          <div className="flex gap-2 text-[#7F7F7F] hover:text-[#3E3E3E] transition ease-in-out">
            <Github/>
            <Link href={"#"}><span>JohnDoe</span></Link>
          </div>
          <div className="flex gap-2 text-[#7F7F7F] hover:text-[#3E3E3E] transition ease-in-out">
            <Linkedin></Linkedin>
          <Link href={"#"}><span>Linkedin</span></Link>
            <span></span>
          </div>
          <div className="flex gap-2 text-[#7F7F7F] hover:text-[#3E3E3E] transition ease-in-out">
            <BriefcaseBusiness/>
            <Link href={"#"}><span>Portfolio</span></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalDetails