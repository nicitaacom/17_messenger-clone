'use client'

import Input from "../../components/inputs/Input"
import { useCallback, useState } from "react"
import { FieldValues,useForm,SubmitHandler } from "react-hook-form"
import Button from "../../components/Button"
import AuthSocialButton from "./AuthSocialButton"
import {BsGithub, BsGoogle} from 'react-icons/bs'
import axios from "axios"
import {toast} from 'react-hot-toast'
import {signIn} from 'next-auth/react'

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
      axios.post('/api/register/',data)
      .catch(() => toast.error('Something went wrong'))
      .finally(() => setIsLoading(false))
    }

    if (variant === 'LOGIN') {
      signIn('credentials', {
        ...data, redirect:false
      })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials')
        }
        if (callback?.ok && !callback.error) {
          toast.success("Logged in")
        }
      })
      .finally(() => setIsLoading(false))
    }
  }
  
  const socialAction = (action:string) => {
    setIsLoading(true)

    signIn(action, {redirect:false})
    .then((callback) => {
      if (callback?.error) {
        toast.error('Invalid credentials')
      }
      if (callback?.ok && !callback?.error) {
        toast.success('logged in')
      }
    })
    .finally(() => setIsLoading(false))
  }

  return (
    <div className="mt-8 mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
          <Input id='name' label="Name" register={register} errors={errors} disabled={isLoading}
          />
          )}
          <Input id='email' type="email" label='Email adress' register={register} errors={errors}
          disabled={isLoading}/>
          <Input id='password' type="password" label='Password' register={register} errors={errors}
          disabled={isLoading}/>
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

                <div className="mt-6 flex gap-2">
                  <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')}/>
                  <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')}/>
                </div>
              </div>

              <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-5">
                  <div>
                    {variant === 'LOGIN' ? 'New to messenger?' : 'Already have an account?'}
                  </div>
                  <div className="underline cursor-pointer" onClick={toggleVariant}>
                    {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                  </div>
              </div>

          </div>
      </div>
  )
}

export default AuthForm