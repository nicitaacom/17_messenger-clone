'use client'

import axios from "axios"
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { CldUploadButton } from "next-cloudinary"

import useConversation from "@/app/hooks/useConversation"
import MessageInput from "./MessageInput"

	

export default function Form () {

const {conversationId} = useConversation()

const {register,handleSubmit,setValue,formState:{errors}} = useForm<FieldValues>({
  defaultValues:{
    message:''
  }
})

const onSubmit:SubmitHandler<FieldValues> = (data) => {
  setValue('message','',{shouldValidate:true})

  axios.post('/api/messages',{...data,conversationId})
} 

const handleUpload = (result:any) => {
   axios.post('/api/messages',{image:result?.info?.secure_url,conversationId})
}

return (
    <div className="p-4 bg-[#303030] border-t flex items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton options={{maxFiles:1}} onUpload={handleUpload} uploadPreset="e4qm3hxa">
        <HiPhoto className="text-sky-500" size={30}/>
      </CldUploadButton>
      <form className="flex items-center gap-2 lg:gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <MessageInput id='message' register={register} errors={errors} placeholder='Write a message' required/>
        <button className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"
        type="submit">
          <HiPaperAirplane className="text-white" size={18} />
       </button>
      </form>
    </div>
)
}