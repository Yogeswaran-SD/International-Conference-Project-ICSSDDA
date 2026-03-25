import React, { useState } from 'react'
import { sendContactEmail } from '../../services/emailService'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [msgStatus, setMsgStatus] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const fieldMapping = {
      'firstName': 'firstName',
      'lastName': 'lastName',
      'phone': 'phone',
      'email': 'email',
      'message': 'message'
    };
    
    setFormData(prev => ({
      ...prev,
      [fieldMapping[id] || id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsgStatus({ type: '', text: '' });

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
      setMsgStatus({ type: 'error', text: 'Please fill in all fields' });
      setLoading(false);
      return;
    }

    const result = await sendContactEmail(formData);
    setMsgStatus({ type: result.success ? 'success' : 'error', text: result.message });
    
    if (result.success) {
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
    }
    setLoading(false);
  };

  return (
    <>
    <div className="bg-[url('/image/papersubmit.jpg')] bg-cover bg-center min-h-[250px] md:h-[350px] lg:h-[400px] relative py-10 md:py-20 lg:py-45 flex items-center">
        <div className="hanu-bold text-xl md:text-3xl lg:text-[48px] flex justify-center items-center h-fit text-white relative bg-[#B2C7F6]/[25%] w-fit mx-auto py-4 md:py-5 lg:py-6 px-6 md:px-20 lg:px-40 leading-relaxed backdrop-blur-sm"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
          <h1 className="text-base md:text-2xl lg:text-5xl">Contact Us</h1>
        </div>
      </div>
      
      <section className='max-w-full px-4 md:px-8 lg:px-[150px] py-8 md:py-12 lg:py-16'>
        <div className='pop-regular text-xs md:text-sm lg:text-base py-6 md:py-8 lg:py-10 space-y-4 md:space-y-5 leading-relaxed'>
          <p>For any queries related to the <span className='text-[#093FB4] font-semibold'>International Conference on Software System Development and Data Analytics</span>, please feel free to contact us. Whether you need assistance with paper submission, registration, accommodation, or general information, our organizing team is here to help. We welcome communication from authors, participants, sponsors, and academic collaborators. You can reach us via email, phone, or through the official conference website. Prompt support and guidance will be provided to ensure a smooth and successful experience for all attendees.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-5 text-center py-8 md:py-10 lg:py-12'>
          <div className='border-[3px] border-[#093FB4] rounded-4xl py-5 md:py-6 lg:py-8 px-6 md:px-8 lg:px-15 bg-[#093FB4] text-white flex flex-col justify-center'>
            <h3 className='k2d-regular text-base md:text-lg lg:text-xl mb-2'>Location</h3>
            <h2 className='k2d-semi text-xl md:text-2xl lg:text-3xl'>Kampong Glam, Singapore</h2>
          </div>
          <div className='border-[3px] border-[#093FB4] rounded-4xl py-5 md:py-6 lg:py-8 px-6 md:px-8 lg:px-15 bg-[#093FB4] text-white flex flex-col justify-center'>
            <h3 className='k2d-regular text-base md:text-lg lg:text-xl mb-2'>Email</h3>
            <h2 className='k2d-semi text-lg md:text-xl lg:text-2xl break-all'>yogeswaran.cse@gmail.com</h2>
          </div>
        </div>

        <section className='max-w-5xl mx-auto px-4 md:px-8 lg:px-0 py-8 md:py-12'>
          <form onSubmit={handleSubmit} className='bg-[#B2C7F6] rounded-2xl md:rounded-3xl lg:rounded-[15%] overflow-hidden'>
          <div className='hanu-bold text-2xl md:text-3xl lg:text-4xl text-[#093FB4] text-center py-6 md:py-8 lg:py-10 px-4'>If you have any questions, please contact us!</div>
          
          {msgStatus.text && (
            <div className={`mx-4 md:mx-6 lg:mx-10 mt-5 p-4 rounded-lg text-center font-semibold ${
              msgStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {msgStatus.text}
            </div>
          )}

          <div className='max-w-full px-4 md:px-8 lg:px-20 py-6'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-2'>
              <div className='flex flex-col gap-4 md:gap-5 lg:gap-9'>
                <label htmlFor="firstName" className='pop-regular text-xs md:text-sm lg:text-base text-[#093FB4] font-semibold'>First Name</label>
                <label htmlFor="lastName" className='pop-regular text-xs md:text-sm lg:text-base text-[#093FB4] font-semibold'>Last Name</label>
                <label htmlFor="phone" className='pop-regular text-xs md:text-sm lg:text-base text-[#093FB4] font-semibold'>Phone number</label>
                <label htmlFor="email" className='pop-regular text-xs md:text-sm lg:text-base text-[#093FB4] font-semibold'>Email Address</label>
              </div>
              <div className='space-y-4 md:space-y-5 lg:space-y-[18px] md:col-span-1 lg:col-span-2'>
                <input type="text" id='firstName' value={formData.firstName} onChange={handleInputChange} className='bg-white text-xs md:text-sm lg:text-base pop-regular rounded-full w-full px-4 md:px-5 py-2' placeholder='Enter Your First Name' required />
                <input type="text" id='lastName' value={formData.lastName} onChange={handleInputChange} className='bg-white text-xs md:text-sm lg:text-base pop-regular rounded-full w-full px-4 md:px-5 py-2' placeholder='Enter Your Last Name' required />
                <input type="text" id='phone' value={formData.phone} onChange={handleInputChange} className='bg-white text-xs md:text-sm lg:text-base pop-regular rounded-full w-full px-4 md:px-5 py-2' placeholder="Enter Your Phone Number" required />
                <input type="email" id='email' value={formData.email} onChange={handleInputChange} className='bg-white text-xs md:text-sm lg:text-base pop-regular rounded-full w-full px-4 md:px-5 py-2' placeholder="Enter Your Email" required />
              </div>
            </div>
             <div className='space-y-4 md:space-y-5 lg:space-y-10 pt-5 md:pt-6 lg:pt-8'>
              <label htmlFor="message" className='pop-regular text-xs md:text-sm lg:text-base text-[#093FB4] font-semibold block'>Enter Your Message</label>
              <textarea id='message' value={formData.message} onChange={handleInputChange} className='bg-white px-4 md:px-6 lg:px-10 pop-regular rounded-lg w-full h-32 md:h-36 lg:h-40' placeholder='Enter your message' required />
            </div>
          </div>
          <div className='py-5 md:py-6 lg:py-8 text-center px-4'>
            <button type='submit' disabled={loading} className={`w-full md:w-auto px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-3 rounded-3xl k2d-bold text-lg md:text-xl lg:text-2xl transition-colors ${
              loading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-[#093FB4] text-white hover:bg-[#072a7a]'
            }`}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
          </form>
        </section>

        <div></div>
      </section>
      </>
  )
}
