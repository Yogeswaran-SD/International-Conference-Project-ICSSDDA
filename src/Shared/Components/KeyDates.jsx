import React from "react";

const dates = [
  { label: "Abstract Submission Deadline:", date: "June 10, 2025" },
  { label: "Full Paper Submission Deadline:", date: "June 10, 2025" },
  { label: "Notification of Acceptance:", date: "June 10, 2025" },
  { label: "Final Paper Submission:", date: "June 10, 2025" },
  { label: "Registration Deadline:", date: "June 10, 2025" },
  { label: "Conference Dates:", date: "June 10, 2025" },
];

export default function KeyDates() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-[url('/image/papersubmit.jpg')] h-[200px] sm:h-[280px] lg:h-[400px] relative py-10 sm:py-20 lg:py-45">
        <div
          className="hanu-bold text-[22px] sm:text-[34px] lg:text-[48px] flex justify-center items-center h-fit text-white relative bg-[#B2C7F6]/[25%] w-fit mx-auto py-3 sm:py-5 px-6 sm:px-15 lg:px-40 leading-relaxed hanu-bold"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
        >
          <h1>Important Dates</h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-full mx-4 sm:mx-8 md:mx-14 lg:mx-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-6 lg:py-10 gap-8">
          <div className="space-y-5 lg:space-y-10">
            <h2 className="hanu-bold text-[22px] lg:text-[30px] text-[#093FB4]">
              Important Dates &amp; Bank Details
            </h2>
            <p className="pop-medium text-[13px] sm:text-[16px]">
              Stay informed and plan ahead with the important dates and
              registration information for the{" "}
              <span className="text-[#093FB4]">
                International Conference on Software Systems Development and
                Data Analysis.
              </span>{" "}
              Ensure you don't miss key deadlines for abstract submission, paper
              acceptance, and early registration to make the most of this
              premier opportunity to connect, present, and grow in the field of
              Software Systems Development and Data Analysis.
            </p>
          </div>
          <div>
            <img
              src="/image/keydates.png"
              alt="Loading"
              className="w-full max-h-[300px] lg:h-100 lg:w-200 text-center items-center object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-full mx-4 sm:mx-8 md:mx-14 lg:mx-[150px]">
        <div className="space-y-4 py-6 lg:py-10">
          <h2 className="hanu-bold text-[22px] lg:text-[30px] text-center text-[#093FB4]">
            Key Dates Timeline
          </h2>
          <p className="pop-medium text-[14px] sm:text-[18px] text-center mb-6">
            Mark your calendar for these important milestones
          </p>

          {/* Date Rows */}
          <div className="space-y-3 max-w-3xl mx-auto">
            {dates.map((item, index) => (
              <div key={index} className="flex w-full overflow-hidden rounded-sm" style={{ minHeight: "52px" }}>
                {/* Left — light blue label */}
                <div
                  className="bg-[#B2C7F6] flex items-center px-4 sm:px-6 py-3"
                  style={{
                    flex: "0 0 55%",
                    clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
                  }}
                >
                  <h3 className="hanu-bold text-[13px] sm:text-[16px] lg:text-[18px] text-[#1a1a2e]">
                    {item.label}
                  </h3>
                </div>

                {/* Right — dark blue date */}
                <div
                  className="bg-[#093FB4] flex items-center justify-center px-4 sm:px-6 py-3 flex-1"
                  style={{
                    clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 8% 50%)",
                  }}
                >
                  <h3 className="hanu-bold text-[13px] sm:text-[16px] lg:text-[18px] text-white text-center">
                    {item.date}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
