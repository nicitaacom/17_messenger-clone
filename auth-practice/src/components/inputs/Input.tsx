'use client'
import clsx from 'clsx'
import {FieldErrors,FieldValues,UseFormRegister} from 'react-hook-form'

interface InputProps {
  label:string
  id:string
  type?:string
  required?:boolean
  register:UseFormRegister<FieldValues>
  errors:FieldErrors,
  disabled?:boolean
}

const Input:React.FC<InputProps> = ({label,id,type,required,register,errors,disabled}) => {
  return ( 
      <div>
        <label className='block text-sm font-medium leading-6 text-gray-500' htmlFor={id}>
          {label}
        </label>
        <div className='mt-2'>
          <input id={id} type={type} autoComplete={id} disabled={disabled} {...register(id,{required})}/>
        </div>
      </div>
    );
}
 
export default Input;