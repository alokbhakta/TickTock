import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useForm = create(persist(
    (set)=>({
        formData:{
            email: '',
            password: '',
            remember: false
        },
        setFormData: (payload)=>set((state)=>({
            formData: {...state.formData, ...payload}
        }))
    }),
    {name: "LoginData"}
))