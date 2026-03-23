
export default function Home() {
  return (
    <>
      <div className="bg-[url(/image/image2.jpg)] h-screen">
        <div className="pt-20 sm:pt-32 lg:pt-50 space-y-5 sm:space-y-10">
          <div className="lg:text-[48px] sm:text-[30px] text-[20px] text-[#FFFFFF] bg-[#B2C7F6]/[25%] w-fit mx-auto py-5 lg:px-40 px-6 sm:px-15 leading-relaxed hanu-bold"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
            <h1>International Conference on <br className="hidden lg:block" />Software Systems Development and Data Analysis</h1>
          </div>
          <div className="flex flex-col sm:flex-row max-w-4xl mx-auto justify-around text-center items-center gap-4 sm:gap-0 text-[#FFFFFF] text-[16px] sm:text-[22px] lg:text-[28px] k2d-medium">
            <h2 className="bg-[#093FB4] py-3 sm:py-5 px-5 rounded-2xl">15th, November 2025</h2>
            <h2 className="bg-[#093FB4] py-3 sm:py-5 px-5 rounded-2xl">Kampong Glam, Singapore</h2>
          </div>
          <div className="text-[#FFFFFF] w-fit mx-auto space-y-5 pop-medium px-4 sm:px-0 text-[13px] sm:text-[15px] lg:text-base text-center sm:text-left">
            <p>The International Conference on Software Systems Development and Data Analysis <br className="hidden sm:block" />
              brings together researchers, practitioners, educators, and industry professionals from <br className="hidden sm:block" />
              around the globe.</p>
            <p>The International Conference on Software Systems Development and Data Analysis is <br className="hidden sm:block" />
              dedicated to fostering innovation and collaboration at the intersection of software engineering <br className="hidden sm:block" />
              and data science.</p>
          </div>
          <div className="flex justify-around max-w-xs sm:max-w-xl mx-auto text-[16px] sm:text-[22px] k2d-medium">
            <div><button className="cursor-pointer text-[#093FB4] bg-[#B2C7F6] px-6 sm:px-10 py-2 sm:py-3 rounded-full">Learn More</button></div>
            <div><button className="cursor-pointer bg-[#093FB4] text-[#B2C7F6] px-8 sm:px-12 py-2 sm:py-3 rounded-full">Register</button></div>
          </div>
        </div>
      </div>

      <div className="bg-[#093FB4]">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-10 sm:py-20 gap-8 lg:gap-0">
            <div className="flex justify-center max-w-[650px] mx-auto px-4 sm:px-0">
              <img src="/image/Group 152.png" className="w-full max-w-[500px]" alt="" />
            </div>
            <div className="space-y-6 sm:space-y-10 px-4 sm:px-0">
              <div className="text-[#093FB4] bg-[#B2C7F6] text-[24px] sm:text-[32px] lg:text-[40px] font-bold px-6 sm:px-10 py-5 hanu-bold rounded-l-full">About the Conference</div>
              <div className="space-y-6 sm:space-y-10 lg:pl-20 px-4 sm:px-0">
                <div className="text-[#FFFFFF] text-[13px] sm:text-[15px] lg:text-[16px] pop-medium">The International Conference on Software Systems Development and <br className="hidden lg:block" /> Data Analysis (ICSSDDA) is a premier global forum dedicated to <br className="hidden lg:block" /> advancing the fields of software engineering, data science, and their <br className="hidden lg:block" /> powerful convergence in real-world systems.</div>
                <div className="text-[#FFFFFF] space-y-2 sm:space-y-5">
                  <h1 className="text-[20px] sm:text-[25px] k2d-semi">Multidisciplinary Tracks</h1>
                  <p className="pop-medium text-[13px] sm:text-[16px]"> It's covering Software Engineering, Artificial Intelligence,<br className="hidden lg:block" /> Machine Learning, and Big Data</p>
                </div>
                <div className="text-[#FFFFFF] space-y-2 sm:space-y-5">
                  <h1 className="text-[20px] sm:text-[25px] k2d-semi">Hands-on Workshops</h1>
                  <p className="pop-medium text-[13px] sm:text-[16px]">It's on emerging tools and frameworks (e.g. MLOps, DevOps, AutoML)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#B2C7F6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 sm:py-20 gap-8 lg:gap-0">
          <div className="lg:mt-10 flex justify-center px-4 sm:px-0">
            <img src="/image/image 21.png" alt="Loading" className="w-full max-w-[500px]" />
          </div>
          <div className="max-w-full mx-4 sm:mx-10 lg:mx-20 space-y-6 sm:space-y-10">
            <div className="text-[28px] sm:text-[36px] lg:text-[40px] hanu-bold text-[#093FB4]">
              <h1>Our Mission</h1>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="text-[13px] sm:text-[16px] pop-regular">
                <p>The mission of the International Conference on Software Systems Development and Data Analysis is to foster innovation, collaboration, and knowledge-sharing at the intersection of software engineering and data science.</p>
              </div>
              <div className="bg-[#093FB4] py-5 px-6 sm:px-25 space-y-3 rounded-l-full">
                <h2 className="text-[20px] sm:text-[25px] k2d-bold text-white">Knowledge Sharing</h2>
                <p className="text-[13px] sm:text-[16px] pop-regular text-[#B2C7F6]">Create a global platform for researchers, scholars, and professionals to <br className="hidden lg:block" /> exchange ideas and findings in computer science.</p>
              </div>
              <div className="bg-[#093FB4] py-5 px-6 sm:px-25 space-y-3 rounded-l-full">
                <h2 className="text-[20px] sm:text-[25px] k2d-bold text-white">Global Collaboration</h2>
                <p className="text-[13px] sm:text-[16px] pop-regular text-[#B2C7F6]">Bring together participants from diverse backgrounds to build partnerships that drive progress and discovery.</p>
              </div>
              <div className="bg-[#093FB4] py-5 px-6 sm:px-25 space-y-3 rounded-l-full">
                <h2 className="text-[20px] sm:text-[25px] k2d-bold text-white">Research Excellence</h2>
                <p className="text-[13px] sm:text-[16px] pop-regular text-[#B2C7F6]">Support the development of groundbreaking research that pushes <br className="hidden lg:block" /> the boundaries of current technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
