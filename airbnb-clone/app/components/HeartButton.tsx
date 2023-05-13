'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
  listingId:string
  currentUser?:SafeUser | null
}

const HeartButton:React.FC<HeartButtonProps> = ({listingId,currentUser}) => {
  const {hasFavorited,toggleFavorite} = useFavorite({listingId,currentUser})
  return ( 
    <div className="relative hover:opacity-80 transition cursor-pointer" onClick={toggleFavorite}>
      <AiOutlineHeart className="fill-white absolute -top-[2px] -right-[2px]" size={28}/>
      <AiFillHeart className={`${hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}`} size={24}/>
    </div>
   );
}
 
export default HeartButton;