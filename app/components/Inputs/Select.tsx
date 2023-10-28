'use client'

import ReactSelect from "react-select"
	

interface SelectProps {
  label:string
  value?:Record<string,any>
  onChange:(value:Record<string,any>) => void
  options?:Record<string,any>[]
  disabled?:boolean
}

function Select ({label,value,onChange,options,disabled}:SelectProps) {
return (
    <div className="z-100">
      <label className="block text-sm font-medium leading-6 text-neutral-300">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect classNames={{control:() => 'text-sm !bg-[#303030]'}} isDisabled={disabled} value={value} onChange={onChange} isMulti options={options}
        menuPortalTarget={document.body} styles={{menuPortal:(base) => ({
          ...base,
          zIndex:9999
        })}}/>
      </div>
    </div>
  )
}

export default Select