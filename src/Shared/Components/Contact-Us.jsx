import React from 'react'

export default function Contact() {
  return (
    
      <>
      <div className="bg-[url('/image/papersubmit.jpg')] h-[400px] relative py-45">
        <div className="hanu-bold text-[48px] flex justify-center items-center h-fit text-white relative  bg-[#B2C7F6]/[25%] w-fit mx-auto py-5 lg:px-40 px-15 leading-relaxed hanu-bold"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
          <h1>Contact Us</h1>
        </div>
      </div>
      
      <section  className='max-w-full mx-[150px]'>
        <div className=' pop-regular text-[18px]  lg:py-10 space-y-5'>
          <p>For any queries related to the <span className='text-[#093FB4]'>International Conference on Software System Development and Data Analytics</span> , please feel free to contact us. Whether you need assistance with paper submission, registration,
accommodation, or general information, our organizing team is here to help. We welcome communication from authors, participants, sponsors, and academic collaborators. You can reach us via email, 
phone, or through the official conference website. Prompt support and guidance will be provided to ensure a smooth and successful experience for all attendees.</p>
        </div>

        <div className='flex justify-around text-center items-center lg:py-10 space-y-5'>
          <div className='border-[3px] border-[#093FB4] rounded-4xl py-5 px-15 w-fit bg-[#093FB4] text-white'>
            <h3 className='k2d-regular text-[20px]'>Location</h3>
            <h2 className='k2d-semi text-[32px]'>Kampong Glam, Singapore</h2>
          </div>
          <div className='border-[3px] border-[#093FB4] rounded-4xl py-5 px-15 w-fit bg-[#093FB4] text-white'>
            <h3 className='k2d-regular text-[20px]'>Email</h3>
            <h2 className='k2d-semi text-[32px]'>yogeswaran.cse@gmail.com</h2>
          </div>
        </div>

        <section className='max-w-5xl mx-auto'>
          <form action=""  className='bg-[#B2C7F6] rounded-[20%] '>
          <div> <h2 className='hanu-bold text-[38px] text-[#093FB4] text-center lg:py-10'>If you have any questions, please contact us!</h2></div>
          <div className='max-w-full mx-20 '>
             <div className='grid grid-cols-3 gap-2'>
              <div className='flex flex-col gap-9'>
                <label htmlFor="title" className=' pop-regular text-[16px]'>First Name</label>
                <label htmlFor="institute" className=' pop-regular text-[16px] '>Last Name</label>
                <label htmlFor="author" className=' pop-regular text-[16px]'>Phone number</label>
                <label htmlFor="email" className=' pop-regular text-[16px] '>Email Address</label>

              </div>
              <div className='space-y-[18px] col-span-2'>
                <input type="text" id='title' className='bg-white text-[16px] pop-regular rounded-full w-full px-5 py-2 ' placeholder='Enter Your First Name' required />
                <input type="text" id='institute' className='bg-white text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Last Name' required />
                <input type="text" id='author' className='bg-white text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Your Phone Number" required />
                <input type="email" id='email' className='bg-white text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Your Email" required />
              </div>
            </div>
             <div className='space-y-10 lg:pt-5'>
              <label htmlFor="text" className='pop-regular text-[16px] '>Enter Your Message</label><br />
              <input type="textarea" id='text' className='bg-white px-75  pop-regular rounded-lg w-full  h-40  hanu-bold' placeholder='Enter your message' required />
            </div>
          </div>
          <div className='py-5 text-center'>
            <button type='submit' className='bg-[#093FB4] px-5 py-1 rounded-3xl text-white k2d-bold text-[30px] '>
              Submit
            </button>
          </div>
          </form>
        </section>

        <div></div>
      </section>
      </>
  )
}
