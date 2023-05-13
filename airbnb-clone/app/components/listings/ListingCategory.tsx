'use client'

import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon:IconType
  label:string
  description:string
}

const ListingCategory:React.FC<ListingCategoryProps> = ({icon:Icon,label,description}) => {
  return ( 
    <div className="flex flex-col gap-6">
      <div className="flex flex-ro items-center gap-4">
        <Icon className="text-neutral-600" size={40}/>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">
            {label}
          </div>
          <div className="text-neutral-500 font-light">
            {description}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ListingCategory;