'use clinet'

import Image from 'next/image'

const Avatar = () => {
  return ( 
    <Image className='rounded-full' height='30' width='30' src='/images/placeholder.jpg' alt='Avatar'/>
   );
}
 
export default Avatar;