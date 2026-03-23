import React from 'react'

export default function PaperSubmission() {
  return (
    <>
      <div className="bg-[url('/image/papersubmit.jpg')] h-[200px] sm:h-[280px] lg:h-[400px] relative py-10 sm:py-20 lg:py-45">
        <div className="hanu-bold text-[22px] sm:text-[34px] lg:text-[48px] flex justify-center items-center h-fit text-white relative bg-[#B2C7F6]/[25%] w-fit mx-auto py-3 sm:py-5 px-6 sm:px-15 lg:px-40 leading-relaxed hanu-bold"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
          <h1>Paper Submission</h1>
        </div>
      </div>

      <section className='max-w-full mx-4 sm:mx-8 md:mx-14 lg:mx-[150px] py-6 lg:py-10 space-y-5'>
        <div className='hanu-bold text-[22px] lg:text-[30px] text-[#093FB4]'>
          <h2>Paper Submission Guidelines</h2>
        </div>
        <div className='pop-medium text-[13px] sm:text-[16px]'>
          <p>Authors are invited to submit original research papers related to software systems development, data analysis, and related fields. <br className="hidden sm:block" />
            Please follow the instructions below to ensure a smooth submission process:</p>
        </div>
      </section>

      <section className='max-w-full mx-4 sm:mx-8 md:mx-14 lg:mx-[150px] py-4 lg:py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-5'>
            <div className='hanu-bold text-[22px] lg:text-[30px] text-[#093FB4]'>
              <h2>Important Information for Authors:</h2>
            </div>
            <div className='pop-medium text-[13px] sm:text-[16px] lg:pl-10'>
              <ul className='list-disc space-y-4'>
                <li>All submissions will go through a double-blind peer review to ensure fairness and academic integrity.</li>
                <li>One author must register and attend the conference to present the accepted paper.</li>
                <li>Papers will be checked for plagiarism—originality is strictly required.</li>
                <li>Do not submit the same paper to multiple tracks or conferences.</li>
                <li>Presentation at the conference is mandatory for accepted papers to be included in the proceedings.</li>
                <li>Accepted papers will be published in the official conference proceedings.</li>
              </ul>
            </div>
          </div>
          <div className='items-center text-center'>
            <img src="/image/image 20.png" alt="Paper Submission" className='w-full max-h-[300px] lg:h-100 lg:w-200 text-center items-center object-cover rounded-2xl' />
          </div>
        </div>
      </section>

      <section className='max-w-4xl mx-auto px-4 sm:px-0'>
        <form action="" className='bg-[#093FB4] rounded-[8%] sm:rounded-[8%]'>
          <div className='text-[24px] sm:text-[32px] lg:text-[38px] hanu-bold text-white text-center py-5 mt-10'><h1>Submit Your Paper</h1></div>
          <div className='max-w-full mx-4 sm:mx-10 mt-5'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
              <div className='flex flex-col gap-4 sm:gap-9'>
                <label htmlFor="title" className='text-white pop-regular text-[14px] sm:text-[16px]'>Paper Title</label>
                <label htmlFor="institute" className='text-white pop-regular text-[14px] sm:text-[16px]'>Institution Name</label>
                <label htmlFor="author" className='text-white pop-regular text-[14px] sm:text-[16px]'>Author's Full Name</label>
                <label htmlFor="email" className='text-white pop-regular text-[14px] sm:text-[16px]'>Email Address</label>
                <label htmlFor="category" className='text-white pop-regular text-[14px] sm:text-[16px]'>Paper Category</label>
              </div>
              <div className='space-y-[14px] sm:space-y-[18px] col-span-2'>
                <input type="text" id='title' className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Paper Title' required />
                <input type="text" id='institute' className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Institution Name' required />
                <input type="text" id='author' className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Author's Full Name " required />
                <input type="email" id='email' className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Author's Email" required />
                <input type="text" id='category' className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Paper Category' required />
              </div>
            </div>
            <div className='space-y-5 sm:space-y-10 pt-4 sm:pt-5'>
              <label htmlFor="file" className='text-white pop-regular text-[14px] sm:text-[16px]'>Upload Paper</label><br />
              <input type="file" id='file' className='bg-[#B2C7F6] px-5 sm:px-75 pop-regular rounded-lg w-full text-white h-32 sm:h-40 hanu-bold' placeholder=' ' required />
            </div>
          </div>
          <div className='py-5 text-center'>
            <button type='submit' className='bg-white px-5 py-1 rounded-3xl text-[#093FB4] k2d-bold text-[22px] sm:text-[30px]'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
