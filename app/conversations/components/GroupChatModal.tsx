'use client'
import Button from "@/app/components/Button"
import Input from "@/app/components/Inputs/Input"
import Select from "@/app/components/Inputs/Select"
import Modal from "@/app/components/Modal"
import { User } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

	

interface GroupChatModalProps {
  isOpen?:boolean
  onClose:() => void
  users:User[]
}

function GroupChatModal ({isOpen,onClose,users}:GroupChatModalProps) {

  const router = useRouter()

  const [isLoading,setIsLoading] = useState(false)

  const {register,handleSubmit,setValue,watch,formState:{errors}} = useForm<FieldValues>({
    defaultValues:{
      name:'',
      members:[]
    }
  })

  const members = watch('members')

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/conversations',{...data,isGroup:true})
    .then(() => {
      router.refresh()
      onClose()
    })
    .catch(() => toast.error('Something went wrong'))
    .finally(() => setIsLoading(false))
  }


return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-neutral-100">
              Create a group chat
            </h2>
            <p className="mt-1 text-sm leading-6 text-neutral-300">
              Create a chat with more than 2 people
            </p>
            <div className="mt-10 flex flex-col gap-y-8">
              <Input label="Name" id='name' disabled={isLoading} register={register} errors={errors} required/>
              <Select disabled={isLoading} label="Members" options={users.map(user =>({ 
                value:user.id,
                label:user.name}))}
                onChange={value => setValue('members',value,{
                  shouldValidate:true
                })}
                value={members}
                />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end items-center gap-x-6">
          <Button disabled={isLoading} onClick={onClose} type="button" secondary>
            Cancel
          </Button>
          <Button disabled={isLoading}
          type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
)
}

export default GroupChatModal