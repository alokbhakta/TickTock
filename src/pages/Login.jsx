import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "../components/LoginData";

function Login() {
  
  const {formData, setFormData} = useForm();
  const [form, setForm] = useState(formData);

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = name === "remember" ? e.target.checked : e.target.value;
    setForm({
      ...form,
      [name]: value
    })
  }

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(form.email === "johndoe@gmail.com" && form.password === '1234'){
      if(form.remember){
        setFormData(form);
      }
      else{
        setFormData({
          email: '',
          password: '',
          remember: false
        });
      }
      navigate("/tableView");
    }
    else{
      toast.error("❌Please Enter a valid email or password !❌");
    }

  }

  useEffect(()=>{
    alert("Email:- johndoe@gmail.com and Password:- 1234");
  },[])


  return (
    <div className="font-inter w-full h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] h-full flex items-center">
        <div className="w-full max-w-[576px] p-3 md:p-6 overflow-hidden mx-auto flex flex-col gap-5">
          <h1 className="h-[25px] text-[20px] md:text-[24px] text-[#111928] font-bold">
            Welcome back
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label
              className="text-[14px] md:text-[16px] text-[#111928] font-[500] flex flex-col gap-2.5"
              htmlFor="email"
            >
              Email
              <input
              onChange={handleChange}
                className="h-[42px] border border-[#D1D5DB] px-4 rounded-[8px] text-[14px] md:text-[16px]"
                type="email"
                name="email"
                value={form.email}
                required
                placeholder="name@example.com"
              />
            </label>

            <label
              className="text-[14px] md:text-[16px] text-[#111928] font-[500] flex flex-col gap-2"
              htmlFor="password"
            >
              Password
              <input
              onChange={handleChange}
                className="h-[42px] border border-[#D1D5DB] px-4 rounded-[8px] text-[14px] md:text-[16px]"
                type="password"
                name="password"
                value={form.password}
                required
                placeholder="********"
              />
            </label>

            <label className="flex gap-2 text-[#6B7280] text-[14px] md:text-[15px] font-medium">
              <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange}/>
              Remember me
            </label>
            <button className="bg-[#1A56DB] py-2.5 px-5 rounded-lg text-white text-[14px] md:text-[15px]">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-[50%] bg-[#1C64F2] items-center">
        <div className="w-full max-w-[576px] p-6 flex flex-col gap-3 mx-auto">
          <h1 className="text-white h-auto text-[28px] sm:text-[32px] md:text-[40px] font-[600]">ticktock</h1>
          <p className="text-[#E5E7EB] text-[14px] sm:text-[15px] md:text-[16px] font-[400] leading-relaxed">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours. With
            ticktock, you can effortlessly track and monitor employee attendance
            and productivity from anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
