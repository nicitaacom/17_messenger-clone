'use client'

import { useEffect } from "react"
import EmptyState from "./components/EmptyState"

interface ErrorSteateProps {
  error:Error
}

const ErrorState:React.FC<ErrorSteateProps> = ({error}) => {


  useEffect(() => {
    console.error(error)
  },[])

  return (
    <EmptyState title="Uh Oh"
    subTitle="Something went wrong!"/>
  )
}

export default ErrorState