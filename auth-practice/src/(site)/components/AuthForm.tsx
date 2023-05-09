'use client'

import { useCallback, useState } from "react";
import { FieldValues, useForm,SubmitHandler } from "react-hook-form";
import Input from "../../components/inputs/Input";

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant,setVariant] = useState<Variant>('LOGIN')
  const [isLoading,setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if(variant === 'LOGIN') {
      setVariant('REGISTER')
    }
    else {
      setVariant('LOGIN')
    }
  },[])

 const {register,handleSubmit,formState:{errors}} = useForm<FieldValues>({
  defaultValues:{
    name:'',
    email:'',
    password:''
  }
 })

 const onSubmit:SubmitHandler<FieldValues> = (data) => {
  setIsLoading(true)

  if (variant==='REGISTER') {
    //Axios register
  }

  if (variant === "LOGIN") {
    //NextAuth SignIn
  }
 }

 const socialAction = (action:string) => {
  setIsLoading(true)

  //NextAuth Social SignIn
 }

  return ( 
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
         <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input id='email' label="Email" register={register}/>
         </form>
      </div>
    </div>
   );
}
 
export default AuthForm;