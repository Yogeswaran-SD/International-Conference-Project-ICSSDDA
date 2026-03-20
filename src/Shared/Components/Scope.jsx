import React from "react";

export default function Scope() {
  return (
    <>
      <div className="bg-[url('/image/papersubmit.jpg')] h-[400px] relative">
        <div className="hanu-bold text-[48px] flex justify-center items-center h-full text-white relative">
          <h1>Scope of Our Conference</h1>
        </div>
      </div>

      <section className="max-w-full mx-[150px] lg:py-10 space-y-5">
        <div>
          <p className="pop-medium text-[18px]">
            The
            <span className=" text-[#093FB4]">
              International Conference on Software Systems Development and Data
              Analysis (ICSSDDA)
            </span>
            provides a global platform for researchers, practitioners,
            academicians, and industry professionals to present and discuss the
            latest innovations, trends, and challenges in the fields of software
            systems development and data analysis.
          </p>
        </div>

        <div>
          <p className="pop-medium text-[18px]">
            The scope of the conference includes, but is not limited to, the
            following key areas:
          </p>
        </div>
        <div>
          <div className="grid-cols-2">
            <div className="bg-[url('\image\Group 158.png')] h-[400px] relative">
              <h2 className="hanu-bold text-[30px] text-[#093FB4]">
                Software Systems Development
              </h2>
              <ul className="text-[#093FB4] hanu-regular text-[18px] list-disc">
                <li>Software architecture, modeling, and design</li>
                <li>Agile, DevOps, and continuous delivery practices</li>
                <li>Cloud-native and distributed software systems</li>
                <li>Embedded and real-time software development</li>
                <li>Software testing, verification, and validation</li>
                <li>Secure software engineering and cybersecurity</li>
                <li>Human-centered and sustainable software design</li>
              </ul>
              
            </div>
            <div>
              <h2 className="hanu-bold text-[30px] text-[#093FB4] ">
                Data Analysis & Intelligence
              </h2>
              <ul className="text-[#093FB4] hanu-regular text-[18px] list-disc ">
                <li>Data mining, machine learning, and deep learning techniques</li>
                <li>Big data platforms and real-time analytics</li>
                <li>Data warehousing, ETL processes, and business intelligence</li>
                <li>Visual analytics and data-driven decision support</li>
                <li>Predictive and prescriptive analytics</li>
                <li>Statistical analysis and computational modeling</li>
                <li>AI applications in software engineering</li>
              </ul>
            </div>
            <div>
              <h2 className="hanu-bold text-[30px] text-[#093FB4]">
                Integration of Software Systems & Data
              </h2>
              <ul className="text-[#093FB4] hanu-regular text-[18px] list-disc">
                <li>Data-driven software development methodologies</li>
                <li>Intelligent software tools and analytics-enabled IDEs</li>
                <li>Use of data in requirements engineering and testing</li>
                <li>Logging, monitoring, and anomaly detection in software systems</li>
                <li>Feedback loops and continuous learning in adaptive systems</li>
              </ul>
            </div>
            <div>
              <h2 className="hanu-bold text-[30px] text-[#093FB4]">
                Cross-Cutting Concerns & Emerging Areas
              </h2>
              <ul className="text-[#093FB4] hanu-regular text-[18px] list-disc">
                <li>Ethical and legal aspects of software and data systems</li>
                <li>Edge computing, IoT, and software for cyber-physical systems</li>
                <li>Interdisciplinary applications in healthcare, finance, education, etc.</li>
                <li>Case studies, industrial experiences, and open-source contributions</li>
                <li>Education and curriculum development in software and data science</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pop-medium text-[18px]"><p>The conference aims to foster collaboration across disciplines, encourage the exchange of innovative ideas, and support the development of intelligent,
robust, and ethical software systems that harness the power of data.</p></div>
      </section>
    </>
  );
}
