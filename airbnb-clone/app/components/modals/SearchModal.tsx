'use client'

import qs from "query-string";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { formatISO } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import Heading from "../Heading";


enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2
}

const SearchModal = () => {
  const router = useRouter()
  const params = useSearchParams()
  const searchModal = useSearchModal()

  const [location,setLocation] = useState<CountrySelectValue>()
  const [step,setStep] = useState(STEPS.LOCATION)
  const [guestCount,setGuestCount] = useState(1)
  const [roomCount,setRoomCount] = useState(1)
  const [bathroomCount,setBathroomCount] = useState(1)
  const [dateRange,setDateRange] = useState<Range>({
    startDate:new Date(),
    endDate:new Date(),
    key:'selection'
  })

  const Map = useMemo(() => dynamic(() => import('../Map'), {
    ssr:false
  }),[location])

  
  const onBack = useCallback(() => {
    setStep((value) => value - 1)
  },[])

  
  const onNext = useCallback(() => {
    setStep((value) => value + 1)
  },[])


  const onSubmit = useCallback(async() => {
    if (step!=STEPS.INFO) {
      return onNext()
    }

    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery:any = {
      ...currentQuery,
      locationValue:location?.value,
      guestCount,
      roomCount,
      bathroomCount
    }

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate)
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate)
    }

    const url = qs.stringifyUrl({
      url:'/',
      query:updatedQuery
    },{skipNull:true})

    setStep(STEPS.LOCATION)
    searchModal.onClose()

    router.push(url)
  },[
    step,
    guestCount,
    roomCount,
    bathroomCount,
    searchModal,
    router,
    dateRange,
    onNext,
    params
  ])


  const actionLabel = useMemo(() => {
    if (step == STEPS.INFO) {
      return 'Search'
    }

    return 'Next'
  },[step])


  const secondaryActionLabel = useMemo(() => {
    if (step == STEPS.LOCATION) {
      return undefined
    }

    return 'Back'
  },[step])



  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Where do you wanna go?"
      subTitle="Find the perfect location!"/>
      <CountrySelect value={location} onChange={(value) => setLocation(value as CountrySelectValue)}/> 
      <hr />
      <Map center={location?.latlng}/>
    </div>
  )

  if (step == STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="When do you plan to go?"
        subTitle="Make sure everyone is free!"/>
        <Calendar value={dateRange}
        onChange={(value) => setDateRange(value.selection)}/>
      </div>
    )
  }

  if (step == STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More information"
        subTitle="Find your perfect place!"/>
        <Counter title="Guests"
        subTitle="How many guests are coming?"
        value={guestCount}
        onChange={(value) => setGuestCount(value)}/>
        <Counter title="Rooms"
        subTitle="How many rooms do you want?"
        value={roomCount}
        onChange={(value) => setRoomCount(value)}/>
        <Counter title="Bathrooms"
        subTitle="How many bathrooms do you want?"
        value={bathroomCount}
        onChange={(value) => setBathroomCount(value)}/>
      </div>
    )
  }

  return (
    <Modal isOpen={searchModal.isOpen} onClose={searchModal.onClose} onSubmit={onSubmit}
    title="Filters" body={bodyContent}
    actionLabel={actionLabel}
    secondaryActionLabel={secondaryActionLabel} secondaryAction={step == STEPS.LOCATION ? undefined : onBack } />
  )
}
 
export default SearchModal;