import React, { useState } from 'react'
import { sendPaperSubmissionEmail } from '../../services/emailService'

export default function PaperSubmission() {
  const [formData, setFormData] = useState({
    title: '',
    institute: '',
    author: '',
    email: '',
    category: '',
    file: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (!formData.title || !formData.institute || !formData.author || !formData.email || !formData.category || !formData.file) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      setLoading(false);
      return;
    }

    const result = await sendPaperSubmissionEmail(formData);
    setMessage({ type: result.success ? 'success' : 'error', text: result.message });
    
    if (result.success) {
      setFormData({
        title: '',
        institute: '',
        author: '',
        email: '',
        category: '',
        file: null
      });
    }
    setLoading(false);
  };

  return (
    <>
   
      <div className="bg-[url('/image/papersubmit.jpg')] bg-cover bg-center min-h-[250px] md:h-[350px] lg:h-[400px] relative py-10 md:py-20 lg:py-45 flex items-center">
        <div className="hanu-bold text-xl md:text-3xl lg:text-[48px] flex justify-center items-center h-fit text-white relative bg-[#B2C7F6]/[25%] w-fit mx-auto py-4 md:py-5 lg:py-6 px-6 md:px-20 lg:px-40 leading-relaxed backdrop-blur-sm"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
          <h1 className="text-base md:text-2xl lg:text-5xl">Paper Submission</h1>
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
        <form onSubmit={handleSubmit} className='bg-[#093FB4] rounded-[8%] sm:rounded-[8%]'>
          <div className='text-[24px] sm:text-[32px] lg:text-[38px] hanu-bold text-white text-center py-5 mt-10'><h1>Submit Your Paper</h1></div>
          
          {message.text && (
            <div className={`mx-4 sm:mx-10 mt-5 p-4 rounded-lg text-center font-semibold ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

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
                <input type="text" id='title' value={formData.title} onChange={handleInputChange} className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Paper Title' required />
                <input type="text" id='institute' value={formData.institute} onChange={handleInputChange} className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Institution Name' required />
                <input type="text" id='author' value={formData.author} onChange={handleInputChange} className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Author's Full Name " required />
                <input type="email" id='email' value={formData.email} onChange={handleInputChange} className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Author's Email" required />
                <input type="text" id='category' value={formData.category} onChange={handleInputChange} className='bg-[#B2C7F6] text-[14px] sm:text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Paper Category' required />
              </div>
            </div>
            <div className='space-y-5 sm:space-y-10 pt-4 sm:pt-5'>
              <label htmlFor="file" className='text-white pop-regular text-[14px] sm:text-[16px]'>Upload Paper</label><br />
              <input type="file" id='file' onChange={handleFileChange} className='bg-[#B2C7F6] px-5 sm:px-75 pop-regular rounded-lg w-full text-white h-32 sm:h-40 hanu-bold' placeholder=' ' required />
            </div>
          </div>
          <div className='py-5 text-center'>
            <button type='submit' disabled={loading} className={`px-5 py-1 rounded-3xl k2d-bold text-[22px] sm:text-[30px] ${
              loading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-white text-[#093FB4] hover:bg-gray-100'
            }`}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
