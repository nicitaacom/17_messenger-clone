'use client'

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";


enum STEPS {
  CATEGORY=0,
  LOCATION=1,
  INFO=2,
  IMAGES=3,
  DESCRIPTION=4,
  PRICE=5
}

const RentModal = () => {
  const rentModal = useRentModal()
  
  const [step,setStep] = useState(STEPS.CATEGORY)

  const {register,handleSubmit,setValue,watch,formState:{errors},reset} = useForm<FieldValues>({
    defaultValues:{
      category:'',
      location:null,
      guestCount:1,
      roomCount:1,
      bathroomCount:1,
      imageSrc:'',
      price:1,
      title:'',
      description:''
    }
  })

  const category = watch('category')
  const location = watch('location')

  const Map = useMemo(() => dynamic(() => import('../Map'), {
    ssr:false
  }),[location])

  const setCustomValue = (id:string,value:any) => {
    setValue(id,value,{
      shouldValidate:true,
      shouldDirty:true,
      shouldTouch:true
    })
  }

  const onBack = () => {
    setStep((value) => value-1)
  }
  
  const onNext = () => {
    setStep((value) => value+1)
  }

  const actionLabel = useMemo(() => {
    if (step == STEPS.PRICE) {
      return 'Create'
    }
    
    return 'Next'
  },[step])


  const secondaryActionLabel = useMemo(() => {
    if (step==STEPS.CATEGORY) {
      return undefined
    }
    return 'Back'
  },[step])

  let bodyContent = (
    <div className="flex flex-col gap-8">
        <Heading title="Which of these best describes your place?"
        subTitle="Pick a category"/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
          {categories.map((item) => (
            <div className="col-span-1" key={item.label}>
              <CategoryInput onClick={(category) => setCustomValue('category',category)}
              selected={category == item.label} label={item.label} icon={item.icon}
              />
            </div>
          ))}
        </div>
    </div>
  )

  if (step == STEPS.LOCATION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading title='Where is your place located?' subTitle='Help guests find you'/>
        <CountrySelect onChange={(value) => setCustomValue('location',value)} value={location}/>
        <Map center={location?.latlng}/>
      </div>
    )
  }

  return ( 
    <Modal isOpen={rentModal.isOpen} title="Airbnb your home!" body={bodyContent} onClose={rentModal.onClose}
    onSubmit={onNext} actionLabel={actionLabel} secondaryActionLabel={secondaryActionLabel}
    secondaryAction={step == STEPS.CATEGORY ? undefined : onBack}/>
   );
}
 
export default RentModal;