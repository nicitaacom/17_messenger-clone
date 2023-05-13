'use client'

import Heading from "../Heading"
import HeartButton from "../HeartButton"
import useCountries from "../../hooks/useCountries"
import { SafeUser } from "../../types"
import Image from 'next/image'

interface ListingHeadProps {
  title:string
  locationValue:string
  imageSrc:string
  id:string
  currentUser:SafeUser | null
}

const ListingHead:React.FC<ListingHeadProps> = ({
  title,locationValue,imageSrc,id,currentUser
}) => {
  const {getByValue} = useCountries()

  const location = getByValue(locationValue)
  return ( 
    <>
      <Heading title={title} subTitle={`${location?.region},${location?.label}`}/>
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image className='object-cover w-full ' src={imageSrc} alt='Image' fill/>
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser}/>

        </div>
      </div>

    </>
   );
}
 
export default ListingHead;