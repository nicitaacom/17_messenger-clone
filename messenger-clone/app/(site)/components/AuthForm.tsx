'use client'

import Input from "../../components/inputs/Input"
import { useCallback, useState } from "react"
import { FieldValues,useForm,SubmitHandler } from "react-hook-form"
import Button from "../../components/Button"

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant,setVariant] = useState<Variant>('LOGIN')
  const [isLoading,setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    }
    else {
      setVariant('LOGIN')
    }
  },[variant])

  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name:'',
      email:'',
      password:''
    }
  })

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      //axios Register
    }

    if (variant === 'LOGIN') {
      //NextAuth signIn
    }
  }
  
  const socialAction = (action:string) => {
    setIsLoading(true)

    //NextAuth social signIn
  }

  return (
    <div className="mt-8 mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
          <Input id='name' label="Name" register={register} errors={errors}
          />
          )}
          <Input id='email' type="email" label='Email adress' register={register} errors={errors}/>
          <Input id='password' type="password" label='Password' register={register} errors={errors}/>
          <Button disabled={isLoading} fullWidth type='submit'>
            {variant === 'LOGIN' ? 'Sign In' : "Register"}
          </Button>
        </form>

          <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"/>
                </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                        Or continue with
                    </span>
                  </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default AuthForm