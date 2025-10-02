import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function AddNewEntry() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    project: "",
    type: "",
    description: "",
    hours: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, form]);

    setForm({
      project: "",
      type: "",
      description: "",
      hours: 0,
    });
    toast.success("✅ Data Added Successfully");
  };

  const handleClose = () => {
    navigate(-1);
  };

  

  return (
    <div className="bg-[#4B5563] w-full h-screen flex justify-center items-center">
      <div className="bg-white border border-[#E5E7EB] p-4 rounded-[8px] w-[646px] ">
        <div className="flex p-5 justify-between items-center">
          <h1 className="text-[#111928] text-[18px] font-[600]">
            Add New Entry
          </h1>
          <i onClick={handleClose} className="ri-close-line"></i>
        </div>
        <form id="addForm" onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 border-t border-gray-200 border-b">
          <label className="text-[#111928] text-[14px] font-[500] h-[71px] flex flex-col w-[40%] gap-2">
            Select Project *
            <input
              name="project"
              onChange={handleChange}
              value={form.project}
              className="h-[42px] border border-[#D1D5DB] p-3 rounded-[8px] text-[#6B7280] text-[14px] font-[400]"
              placeholder="Project Name"
              type="text"
            />
          </label>
          <label className="text-[#111928] text-[14px] font-[500] h-[71px] flex flex-col w-[40%] gap-2">
            Type of Work *
            <input
              name="type"
              onChange={handleChange}
              value={form.type}
              className="h-[42px] border border-[#D1D5DB] p-3 rounded-[8px] text-[#6B7280] text-[14px] font-[400]"
              placeholder="Bug fixes"
              type="text"
            />
          </label>
          <label className=" text-[#111928] text-[14px] h-[175px] font-[500] flex flex-col w-[60%] gap-2">
            Task description *
            <textarea
              name="description"
              onChange={handleChange}
              value={form.description}
              className="h-[168px] border border-[#D1D5DB] p-3 rounded-[8px] text-[#6B7280] text-[14px] font-[400]"
              placeholder="write text here..."
              type="text"
            ></textarea>
            <p className="text-[#6B7280] text-[12px] font-[400]">
              A note for extra info
            </p>
          </label>
          <label className="text-[#111928] text-[14px] font-[500] flex flex-col gap-2">
            Hours *
            <div className="w-[100px] flex items-center ">
              <button
                type="button"
                onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                className="w-[30px] h-[30px] border border-[#D1D5DB] cursor-pointer rounded-l-md bg-[#F3F4F6]"
              >
                <i className="ri-subtract-line"></i>
              </button>

              <input
                value={count}
                name="hours"
                onChange={handleChange}
                className="w-[30px] h-[30px] border-t border-b border-[#D1D5DB]  text-center text-[#6B7280] text-[14px] font-[400] outline-none [appearance:textfield] 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                placeholder="0"
              />

              <button
                type="button"
                onClick={() => setCount((prev) => Math.min(prev + 1, 12))}
                className="w-[30px] h-[30px] border border-[#D1D5DB] cursor-pointer rounded-r-md bg-[#F3F4F6]"
              >
                <i className="ri-add-line"></i>
              </button>
            </div>
          </label>
        </form>
        <div className="w-[100%] p-5 gap-[15px] flex items-center justify-between">
          <button
          type="submit" form="addForm"
            className="bg-[#1C64F2] py-2 px-3 rounded-lg w-[48%] text-white text-[14px] font-[500]"
          >
            Add entry
          </button>
          <button
            onClick={handleClose}
            className="bg-white border border-[#E5E7EB] py-2 px-3 rounded-lg w-[48%] text-[14px] font-[500]"
          >
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddNewEntry;
