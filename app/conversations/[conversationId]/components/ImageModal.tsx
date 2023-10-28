'use client'

import Image from "next/image"

import Modal from "@/app/components/Modal"

interface ImageModalProps {
  isOpen?:boolean
  onClose:() => void
  src?:string | null
}

function ImageModal ({isOpen,onClose,src}:ImageModalProps) {

  if (!src) {
    return null
  }

return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image className='object-cover' src={src} fill alt='Iamge'/>/
      </div>
    </Modal>
  )
}

export default ImageModal