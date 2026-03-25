
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[url(/image/image2.jpg)] bg-cover bg-center min-h-screen md:h-screen flex items-center">
        <div className="pt-0 lg:mt-20 md:pt-10 pb-0 space-y-6 md:space-y-8 lg:space-y-10 w-full px-4 md:px-8">
          {/* pt-20 sm:pt-32 lg:pt-50 space-y-5 sm:space-y-10 */}
          <div className="text-xl md:text-3xl lg:text-[48px] text-[#FFFFFF] bg-[#B2C7F6]/[25%] w-full  mx-auto py-4 md:py-5 lg:py-6 px-4 md:px-20 lg:px-40 leading-relaxed hanu-bold backdrop-blur-sm"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}>
            <h1 className="text-base md:text-2xl lg:text-5xl">International Conference on <br className="hidden lg:block" />Software Systems Development and Data Analysis</h1>
          </div>
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto justify-center md:justify-around text-center items-center gap-4 md:gap-6 text-[#FFFFFF] text-sm md:text-lg lg:text-2xl k2d-medium">
            <h2 className="bg-[#093FB4] py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 rounded-2xl whitespace-nowrap">15th, November 2025</h2>
            <h2 className="bg-[#093FB4] py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 rounded-2xl whitespace-nowrap">Kampong Glam, Singapore</h2>
          </div>
          <div className="text-[#FFFFFF] mx-auto space-y-4 md:space-y-5 pop-medium px-4 md:px-6 lg:px-0 text-xs md:text-sm lg:text-base text-center md:text-center max-w-2xl lg:max-w-3xl">
            <p className="leading-relaxed">The International Conference on Software Systems Development and Data Analysis <br className="hidden md:block" />
              brings together researchers, practitioners, educators, and industry professionals from <br className="hidden md:block" />
              around the globe.</p>
            <p className="leading-relaxed">The International Conference on Software Systems Development and Data Analysis is <br className="hidden md:block" />
              dedicated to fostering innovation and collaboration at the intersection of software engineering <br className="hidden md:block" />
              and data science.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 max-w-sm md:max-w-2xl mx-auto text-sm md:text-base lg:text-lg k2d-medium">
            <button onClick={() => navigate('/Scope')} className="cursor-pointer w-full md:w-auto text-[#093FB4] bg-[#B2C7F6] px-8 md:px-10 lg:px-12 py-3 md:py-3 lg:py-4 rounded-full hover:bg-white transition-colors font-semibold">Learn More</button>
            <button onClick={() => navigate('/PaperSubmission')} className="cursor-pointer w-full md:w-auto bg-[#093FB4] text-white px-8 md:px-10 lg:px-12 py-3 md:py-3 lg:py-4 rounded-full hover:bg-[#072a7a] transition-colors font-semibold">Register</button>
          </div>
        </div>
      </div>

      <div className="bg-[#093FB4]">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-8 md:py-16 lg:py-20 gap-8 lg:gap-0 px-4 md:px-8 lg:px-0">
            <div className="flex justify-center items-center max-w-full lg:max-w-[650px] mx-auto lg:ml-auto mt-4 md:mt-0">
              <img src="/image/Group 152.png" className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-contain" alt="Conference illustration" />
            </div>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 px-0 lg:pr-10 flex flex-col justify-center">
              <div className="text-lg md:text-2xl lg:text-4xl text-[#093FB4] bg-[#B2C7F6] px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 hanu-bold rounded-l-full w-fit">About the Conference</div>
              <div className="space-y-6 md:space-y-8 lg:space-y-10 lg:pl-6">
                <div className="text-xs md:text-sm lg:text-base text-[#FFFFFF] pop-medium leading-relaxed">The International Conference on Software Systems Development and Data Analysis (ICSSDDA) is a premier global forum dedicated to advancing the fields of software engineering, data science, and their powerful convergence in real-world systems.</div>
                <div className="text-[#FFFFFF] space-y-3 md:space-y-4">
                  <h1 className="text-base md:text-xl lg:text-2xl k2d-semi">Multidisciplinary Tracks</h1>
                  <p className="pop-medium text-xs md:text-sm lg:text-base leading-relaxed">- Covering Software Engineering, Artificial Intelligence, Machine Learning, and Big Data</p>
                </div>
                <div className="text-[#FFFFFF] space-y-3 md:space-y-4">
                  <h1 className="text-base md:text-xl lg:text-2xl k2d-semi">Hands-on Workshops</h1>
                  <p className="pop-medium text-xs md:text-sm lg:text-base leading-relaxed">- Focusing on emerging tools and frameworks (e.g. MLOps, DevOps, AutoML)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#B2C7F6] min-h-auto py-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8 lg:px-0">
          <div className="lg:pl-8 flex justify-center items-center order-2 lg:order-1">
            <img src="/image/image 21.png" alt="Mission illustration" className="w-full h-auto max-w-xs md:max-w-md lg:max-w-3xl object-contain" />
          </div>
          <div className="max-w-full lg:pr-12 space-y-6 md:space-y-8 lg:space-y-10 order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-2xl md:text-3xl lg:text-4xl hanu-bold text-[#093FB4]">
              <h1>Our Mission</h1>
            </div>
            <div className="space-y-4 md:space-y-6 lg:space-y-6">
              <div className="text-xs md:text-sm lg:text-base pop-regular leading-relaxed text-[#093FB4]">
                <p>The mission of the International Conference on Software Systems Development and Data Analysis is to foster innovation, collaboration, and knowledge-sharing at the intersection of software engineering and data science.</p>
              </div>
              <div className="bg-[#093FB4] py-4 md:py-5 lg:py-6 px-6 md:px-8 lg:px-10 space-y-2 md:space-y-3 rounded-l-full">
                <h2 className="text-base md:text-lg lg:text-xl k2d-bold text-white">Knowledge Sharing</h2>
                <p className="text-xs md:text-sm lg:text-base pop-regular text-[#B2C7F6] leading-relaxed">Create a global platform for researchers, scholars, and professionals to exchange ideas and findings in computer science.</p>
              </div>
              <div className="bg-[#093FB4] py-4 md:py-5 lg:py-6 px-6 md:px-8 lg:px-10 space-y-2 md:space-y-3 rounded-l-full">
                <h2 className="text-base md:text-lg lg:text-xl k2d-bold text-white">Global Collaboration</h2>
                <p className="text-xs md:text-sm lg:text-base pop-regular text-[#B2C7F6] leading-relaxed">Bring together participants from diverse backgrounds to build partnerships that drive progress and discovery.</p>
              </div>
              <div className="bg-[#093FB4] py-4 md:py-5 lg:py-6 px-6 md:px-8 lg:px-10 space-y-2 md:space-y-3 rounded-l-full">
                <h2 className="text-base md:text-lg lg:text-xl k2d-bold text-white">Research Excellence</h2>
                <p className="text-xs md:text-sm lg:text-base pop-regular text-[#B2C7F6] leading-relaxed">Support the development of groundbreaking research that pushes the boundaries of current technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
