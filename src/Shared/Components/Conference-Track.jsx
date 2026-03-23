import React from 'react'


export default function Conference() {
  return (
    <>
       <div className="bg-[url('/image/papersubmit.jpg')] h-[400px] relative py-45">
        <div className="hanu-bold text-[48px] flex justify-center items-center h-fit text-white relative  bg-[#B2C7F6]/[25%] w-fit mx-auto py-5 lg:px-40 px-15 leading-relaxed hanu-bold"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
          <h1>Conference Tracks</h1>
        </div>
      </div>

      <section className='max-w-full mx-[150px] lg:py-10 space-y-5'>
        <div className='lg:py-10 space-y-5'>
          <p className=" pop-medium text-[18px]">The <span className='text-[#093FB4]'>International Conference on Software Systems Development and Data Analysis</span> features a diverse range of technical tracks designed to explore the latest research, trends, and
applications in the fields of artificial intelligence and smart technologies. These tracks aim to foster interdisciplinary collaboration and spark new ideas that can shape
the future of innovation.</p>
        </div>
        <div className='space-x-5'>
        <div className=' border-[3px]  border-[#093FB4] border-space-x-5'>
          <div className='max-w-[85rem]  mx-auto lg:py-10 space-y-5 text-center align-center  '>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'> Software Systems Architecture and Engineering</h2>
            <p className='pop-medium text-[22px]'>Focuses on modern approaches to software system design, including architectural styles, modeling practices, 
and engineering of scalable and reliable software systems.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Software Development Methodologies and Tools</h2>
            <p className='pop-medium text-[22px]'>Explores contemporary software development practices, frameworks, and methodologies that enhance 
productivity and product quality.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Data Analysis, Visualization, and Decision Support</h2>
            <p className='pop-medium text-[22px]'>Highlights data analysis techniques for extracting actionable insights and building decision-support systems.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Machine Learning and Artificial Intelligence Applications</h2>
            <p className='pop-medium text-[22px]'>Showcases intelligent systems powered by AI and ML, including their integration into software products and workflows.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Cloud Computing and Distributed Software Systems</h2>
            <p className='pop-medium text-[22px]'>Focuses on building, deploying, and scaling applications across cloud and distributed infrastructures.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'> Software Security and Data Privacy</h2>
            <p className='pop-medium text-[22px]'>Addresses challenges and solutions in securing software systems and safeguarding user data.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Data Mining and Knowledge Discovery</h2>
            <p className='pop-medium text-[22px]'>Focuses on uncovering patterns, anomalies, and insights from complex data using advanced analytical techniques.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Web, Mobile, and Embedded Systems</h2>
            <p className='pop-medium text-[22px]'>Discusses modern development techniques for web, mobile, and embedded software solutions.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Empirical and Experimental Software Engineering</h2>
            <p className='pop-medium text-[22px]'>Dedicated to rigorous research and evaluation of software practices and technologies through empirical studies.</p>
          </div>
          <div>
            <h2 className='hanu-bold text-[30px] text-[#093FB4]'>Smart Systems, IoT, and Industry 4.0</h2>
            <p className='pop-medium text-[22px]'>Explores software solutions in the context of smart environments, automation, and interconnected systems.</p>
          </div>
          </div>
        </div>
        </div>
      </section>
      </>
  )
}
