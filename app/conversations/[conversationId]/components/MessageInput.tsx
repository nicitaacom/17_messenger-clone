'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface MessageInputProps {
  placeholder?:string
  id:string
  type?:string
  required?:boolean
  register:UseFormRegister<FieldValues>
  errors:FieldErrors
}

function MessageInput ({placeholder,id,type,required,register,errors}:MessageInputProps) {
return (
    <div className="relative w-full">
      <input className="text-neutral-100 font-light px-4 py-2 bg-[#404040] w-full rounded-full focus:outline-none"
       id={id} type={type} autoComplete={id} {...register(id,{required})} placeholder={placeholder}/>
    </div>
)
}

export default MessageInput