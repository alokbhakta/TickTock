import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


function TableView() {
  const navigate = useNavigate();
  const handleClick = (e)=>{
    const text = e.target.innerText;
    if(text === 'View'){
      navigate("/listView");
    }
    if(text === 'Update'){
      toast.info("This Feature Is Coming Soon",{autoClose: 1500});
    }
    if(text === 'Create'){
      navigate("/addNewEntery");
    }

  }
  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] flex flex-col">
      <Header />
      <div className="w-full md:w-[90%] lg:w-[70%] mx-auto flex flex-col gap-4 mt-4 md:mt-8">
        <div className="bg-white w-full rounded-xl p-4 sm:p-6 md:p-6 flex flex-col gap-4 md:gap-6">
          <h1 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#111928] font-[700] ">
            Your Timesheets
          </h1>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4">
            <div className="flex-1 h-[42px] border border-[#D1D5DB] p-2 sm:p-3 rounded-[8px] flex items-center justify-between text-[14px] sm:text-[14px] md:text-[14px] text-[#6B7280] font-[500] gap-2">
              Date Range <i className="ri-arrow-down-s-line"></i>
            </div>
            <div className="flex-1 h-[42px] border border-[#D1D5DB] p-2 sm:p-3 rounded-[8px] flex items-center justify-between text-[14px] sm:text-[14px] md:text-[14px] text-[#6B7280] font-[500] gap-2">
              status <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>

          <div className="w-full bg-white border rounded-t-xl rounded-l-xl border-gray-200 shadow-md  overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-[#F9FAFB]">
                  <th className="p-3 sm:p-4 text-[12px] sm:text-[12px] text-[#6B7280] font-[600] w-[10%]">
                    WEEK# <i className="ri-arrow-down-long-line"></i>
                  </th>
                  <th className="p-3 sm:p-4 text-[12px] sm:text-[12px] text-[#6B7280] font-[600] w-[40%]">
                    DATE <i className="ri-arrow-down-long-line"></i>
                  </th>
                  <th className="p-3 sm:p-4 text-[12px] sm:text-[12px] text-[#6B7280] font-[600] w-[40%]">
                    STATUS <i className="ri-arrow-down-long-line"></i>
                  </th>
                  <th className="p-3 sm:p-4 text-[12px] sm:text-[12px] text-[#6B7280] font-[600] w-[10%]">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 bg-[#F9FAFB] text-[14px] font-[400] text-[#111928]">
                    1
                  </td>
                  <td className="p-2 sm:p-4 text-[14px] font-[400] text-[#6B7280]">
                    1-5 January, 2024
                  </td>
                  <td className="p-2 sm:p-4">
                    <span
                      className="
                          inline-flex items-center justify-center w-[95px] h-[22px] bg-green-100 text-green-700 text-xs font-medium rounded-md px-2.5 py-0.5
                        "
                    >
                      COMPLETED
                    </span>
                  </td>
                  <td onClick={handleClick} className="p-2 sm:p-4 text-[16px] font-[400] text-[#1C64F2] cursor-pointer">View</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 bg-[#F9FAFB] text-[14px] font-[400] text-[#111928]">
                    2
                  </td>
                  <td className="p-2 sm:p-4 text-[14px] font-[400] text-[#6B7280]">
                    8-12 January, 2024
                  </td>
                  <td className="p-2 sm:p-4">
                    <span
                      className="
                          inline-flex items-center justify-center w-[95px] h-[22px] bg-green-100 text-green-700 text-xs font-medium rounded-md px-2.5 py-0.5
                        "
                    >
                      COMPLETED
                    </span>
                  </td>
                  <td onClick={handleClick} className="p-2 sm:p-4 text-[16px] font-[400] text-[#1C64F2] cursor-pointer">View</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 bg-[#F9FAFB] text-[14px] font-[400] text-[#111928]">
                    3
                  </td>
                  <td className="p-2 sm:p-4 text-[14px] font-[400] text-[#6B7280]">
                    15-19 January, 2024
                  </td>
                  <td className="p-2 sm:p-4">
                    <span
                      className="
                          inline-flex items-center justify-center w-[95px] h-[22px] bg-[#FDF6B2] text-[#723B13] text-xs font-medium rounded-md px-2.5 py-0.5
                        "
                    >
                      INCOMPLETE
                    </span>
                  </td>
                  <td onClick={handleClick} className="p-2 sm:p-4 text-[16px] font-[400] text-[#1C64F2] cursor-pointer">Update</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 bg-[#F9FAFB] text-[14px] font-[400] text-[#111928]">
                    4
                  </td>
                  <td className="p-2 sm:p-4 text-[14px] font-[400] text-[#6B7280]">
                    22-26 January, 2024
                  </td>
                  <td className="p-2 sm:p-4">
                    <span
                      className="
                          inline-flex items-center justify-center w-[95px] h-[22px] bg-green-100 text-green-700 text-xs font-medium rounded-md px-2.5 py-0.5
                        "
                    >
                      COMPLETED
                    </span>
                  </td>
                  <td onClick={handleClick} className="p-2 sm:p-4 text-[16px] font-[400] text-[#1C64F2] cursor-pointer">View</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 bg-[#F9FAFB] text-[14px] font-[400] text-[#111928]">
                    5
                  </td>
                  <td className="p-2 sm:p-4 text-[14px] font-[400] text-[#6B7280]">
                    28 January-1 February, 2024
                  </td>
                  <td className="p-2 sm:p-4">
                    <span
                      className="
                          inline-flex items-center justify-center w-[95px] h-[22px] bg-[#FCE8F3] text-[#99154B] text-xs font-medium rounded-md px-2.5 py-0.5
                        "
                    >
                      MISSING
                    </span>
                  </td>
                  <td onClick={handleClick} className="p-2 sm:p-4 text-[16px] font-[400] text-[#1C64F2] cursor-pointer">Create</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mt-2">
            <div>
              <button className="px-3 py-2 rounded-md border flex gap-2 text-[#4A5565] text-sm border-[#E5E7EB] bg-[#F9FAFB]">5 per page <i className="ri-arrow-down-s-line"></i></button>
            </div>

            <div className="flex flex-wrap gap-1 ">
              <div className="h-[36px] border flex items-center text-[16px] text-[#4A5565] font-[500] border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3 rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md">Previous</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">1</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">2</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">3</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">4</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">5</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">6</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">7</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">8</div>
              <div className="w-[36px] h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3">...</div>
              <div className="h-[36px] flex items-center text-[16px] text-[#4A5565] font-[500] border border-[#E5E7EB] bg-white py-2 px-3">99</div>
              <div className=" h-[36px] border flex items-center text-[16px] text-[#4A5565] font-[500] border-[#E5E7EB] bg-white pt-2 pr-3 pb-2 pl-3 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none">Next</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default TableView;
