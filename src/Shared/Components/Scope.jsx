import React from "react";

export default function Scope() {
  const cards = [
    {
      title: "Software Systems Development",
      items: [
        "Software architecture, modeling, and design",
        "Agile, DevOps, and continuous delivery practices",
        "Cloud-native and distributed software systems",
        "Embedded and real-time software development",
        "Software testing, verification, and validation",
        "Secure software engineering and cybersecurity",
        "Human-centered and sustainable software design",
      ],
    },
    {
      title: "Data Analysis & Intelligence",
      items: [
        "Data mining, machine learning, and deep learning techniques",
        "Big data platforms and real-time analytics",
        "Data warehousing, ETL processes, and business intelligence",
        "Visual analytics and data-driven decision support",
        "Predictive and prescriptive analytics",
        "Statistical analysis and computational modeling",
        "AI applications in software engineering",
      ],
    },
    {
      title: "Integration of Software Systems & Data",
      items: [
        "Data-driven software development methodologies",
        "Intelligent software tools and analytics-enabled IDEs",
        "Use of data in requirements engineering and testing",
        "Logging, monitoring, and anomaly detection in software systems",
        "Feedback loops and continuous learning in adaptive systems",
      ],
    },
    {
      title: "Cross-Cutting Concerns & Emerging Areas",
      items: [
        "Ethical and legal aspects of software and data systems",
        "Edge computing, IoT, and software for cyber-physical systems",
        "Interdisciplinary applications in healthcare, finance, education, etc.",
        "Case studies, industrial experiences, and open-source contributions",
        "Education and curriculum development in software and data science",
      ],
    },
  ];

  return (
    <>
      {/* Hero Banner */}
    
      <div className="bg-[url('/image/papersubmit.jpg')] bg-cover bg-center min-h-[250px] md:h-[350px] lg:h-[400px] relative py-10 md:py-20 lg:py-45 flex items-center">
        <div className="hanu-bold text-xl md:text-3xl lg:text-[48px] flex justify-center items-center h-fit text-white relative bg-[#B2C7F6]/[25%] w-fit mx-auto py-4 md:py-5 lg:py-6 px-6 md:px-20 lg:px-40 leading-relaxed backdrop-blur-sm"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
          <h1 className="text-base md:text-2xl lg:text-5xl">Scope of Our Conference</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-full mx-4 sm:mx-8 md:mx-14 lg:mx-[150px] lg:py-10 space-y-5">
        <div>
          <p className="pop-medium text-[14px] sm:text-[16px] lg:text-[18px]">
            The{" "}
            <span className="text-[#093FB4]">
              International Conference on Software Systems Development and Data
              Analysis (ICSSDDA)
            </span>{" "}
            provides a global platform for researchers, practitioners,
            academicians, and industry professionals to present and discuss the
            latest innovations, trends, and challenges in the fields of software
            systems development and data analysis.
          </p>
        </div>

        <div>
          <p className="pop-medium text-[14px] sm:text-[16px] lg:text-[18px]">
            The scope of the conference includes, but is not limited to, the
            following key areas:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="py-5 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border-2 border-[#093FB4] overflow-hidden"
                style={{ minHeight: "350px" }}
              >
                {/* Card Header — CSS chevron replicating Group 158.png design */}
                <div className="relative w-full" style={{ height: "140px" }}>
                  {/* Shadow / lighter chevron behind (light blue layer) */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundColor: "#B2C7F6",
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 68%, 50% 100%, 0 68%)",
                    }}
                  />
                  {/* Main dark blue chevron on top */}
                  <div
                    className="absolute inset-0 w-full"
                    style={{
                      backgroundColor: "#093FB4",
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 60%, 50% 92%, 0 60%)",
                      height: "100%",
                    }}
                  />
                  {/* Title centred inside the blue area */}
                  <div className="relative z-10 flex items-center justify-center h-[70%] px-4">
                    <h2 className="hanu-bold text-[16px] sm:text-[18px] lg:text-[22px] text-white text-center leading-snug">
                      {card.title}
                    </h2>
                  </div>
                </div>

                {/* Card Body */}
                <div className="bg-white px-4 sm:px-6 py-4 sm:py-5">
                  <ul className="text-[#093FB4] hanu-regular text-[13px] sm:text-[15px] lg:text-[16px] space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 text-[#093FB4] text-[10px]">
                          ●
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer paragraph */}
        <div className="pop-medium text-[14px] sm:text-[16px] lg:text-[18px] py-5 lg:py-10 space-y-5">
          <p>
            The conference aims to foster collaboration across disciplines,
            encourage the exchange of innovative ideas, and support the
            development of intelligent, robust, and ethical software systems
            that harness the power of data.
          </p>
        </div>
      </section>
    </>
  );
}
