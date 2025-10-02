import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function ListView() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/addNewEntery");
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#F8F8F8]">
      <Header />
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] flex flex-col gap-4 mt-4 sm:mt-[2%] mx-auto">
        <div className="bg-white w-full rounded-xl mx-auto p-4 sm:p-6 flex flex-col gap-6">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div className="w-full sm:w-[90%] flex flex-col gap-1 sm:gap-2">
              <h1 className="text-[#111928] text-xl sm:text-2xl font-[700]">
                This week's timesheet
              </h1>
              <p className="text-[#6B7280] text-xs sm:text-sm font-[400]">
                21-26 January, 2024
              </p>
            </div>

            <div className="w-full sm:w-[10%] flex sm:flex-col sm:items-end">
              <p className="text-center sm:text-right text-[#111928] text-sm sm:text-base font-[500]">
                20/40 hrs
              </p>
              <div className="flex flex-col mt-1">
                <p className="text-[#6B7280] text-end text-[10px] sm:text-xs font-[500]">
                  100%
                </p>
                <div className="h-1.5 rounded-sm bg-[#E5E7EB] w-full sm:w-20">
                  <div className="h-1.5 w-1/2 rounded-sm bg-[#FF8A4C]"></div>
                </div>
              </div>
            </div>
          </div>

          {["Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25"].map(
            (day, index) => (
              <div
                className="w-full flex flex-col sm:flex-row gap-2"
                key={index}
              >
                <div className="w-full sm:w-[10%]">
                  <h1 className="text-[#111928] text-base sm:text-lg font-[600]">
                    {day}
                  </h1>
                </div>
                <div className="w-full sm:w-[90%] flex flex-col gap-2.5">
                  {[1, 2].map((task) => (
                    <div
                      key={task}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-[#E5E7EB] py-2 px-3 rounded-lg gap-2"
                    >
                      <h1 className="text-[#111928] text-sm sm:text-base font-[500]">
                        Homepage Development
                      </h1>
                      <div className="flex gap-2.5 items-center">
                        <p className="text-[#9CA3AF] text-xs sm:text-sm font-[400]">
                          4 hrs
                        </p>
                        <p className="bg-[#E1EFFE] py-0.5 px-2.5 rounded-md text-[#1E429F] text-[10px] sm:text-xs font-500">
                          Project Name
                        </p>
                        <i className="ri-more-fill"></i>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleClick}
                    className="border border-[#D1D5DB] border-dashed p-3 sm:p-4 rounded-lg text-[#6B7280] text-sm sm:text-base font-[500] hover:border-[#1A56DB] hover:bg-[#E1EFFE] hover:text-[#1A56DB] cursor-pointer"
                  >
                    + Add new task
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ListView;
