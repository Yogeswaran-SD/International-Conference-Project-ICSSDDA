import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-[url('/image/papersubmit.jpg')] h-[200px] sm:h-[280px] lg:h-[400px] relative py-10 sm:py-20 lg:py-45">
        <div className="hanu-bold text-[22px] sm:text-[34px] lg:text-[48px] flex justify-center items-center h-fit text-white relative bg-[#B2C7F6]/[25%] w-fit mx-auto py-3 sm:py-5 px-6 sm:px-15 lg:px-40 leading-relaxed hanu-bold"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
          <h1>About Us</h1>
        </div>
      </div>
      <section className='max-w-full mx-4 sm:mx-8 md:mx-14 lg:mx-[150px] py-6 lg:py-10 space-y-5'>
        <div>
          <h2 className="hanu-bold text-[22px] lg:text-[30px] text-[#093FB4]">About Our Conference</h2>
        </div>
        <div className='space-y-5'>
          <p className="pop-medium text-[14px] sm:text-[16px] lg:text-[18px]">
            The <span className="text-[#093FB4]">International Conference on Software Systems Development and
            Data Analysis</span> is a premier event that brings together professionals,
            researchers, and practitioners from the fields of software
            development and data science. The conference serves as a platform
            for exchanging the latest advancements, emerging trends, and
            cutting-edge techniques in software systems development and data
            analysis.
          </p>
          <p className="pop-medium text-[14px] sm:text-[16px] lg:text-[18px]">
            Held annually, SSDDA provides an opportunity for thought leaders and
            experts to share their insights, foster collaboration, and discuss
            the most pressing challenges in the dynamic intersection of software
            engineering and data-driven technologies.
          </p>
        </div>
        <div className="py-5 lg:py-10 space-y-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h2 className="hanu-bold text-[22px] lg:text-[30px] text-[#093FB4]">Conference Objective</h2>
            <ul className="list-disc pop-medium text-[14px] sm:text-[16px] lg:text-[18px] list-inside space-y-5">
              <li>To highlight the latest innovations in the fields of software systems and data analysis.</li>
              <li>To create a collaborative environment for sharing knowledge, research, and ideas.</li>
              <li>To provide networking opportunities for professionals across various industries, academia, and research.</li>
              <li>To explore the challenges and future directions of software development and data science in the age of big data and AI.</li>
            </ul>
          </div>
          <div><img src="/image/about 1.png" alt="About conference" className='w-full max-h-[300px] lg:h-100 lg:w-200 text-center items-center object-cover rounded-2xl'/></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5 lg:py-10">
          <div>
            <img src="/image/about 2.png" alt="Who should attend" className='w-full max-h-[300px] lg:h-100 lg:w-200 text-center items-center object-cover rounded-2xl '/>
          </div>
          <div className="space-y-5">
            <h2 className="hanu-bold text-[22px] lg:text-[30px] text-[#093FB4]">Who Should Attend :</h2>
            <ul className="list-disc pop-medium text-[14px] sm:text-[16px] lg:text-[18px] list-inside space-y-5">
              <li>Software developers, engineers, and architects.</li>
              <li>Data scientists, analysts, and researchers.</li>
              <li>Academics and students interested in the latest trends in software engineering and data analytics.</li>
              <li>Industry professionals from sectors such as technology, finance, healthcare, and business analytics.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
