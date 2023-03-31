'use client'
import React from 'react'

type Props = {
  lableName:string
  placeholder:string;
  name: string;
  type: string;
  value: string;
  handleChange: (e:any)=>void;
  isSurprise?: boolean;
  handleSurprise?: (e:React.SyntheticEvent)=>void;
}

function FormField({lableName,placeholder,name,type,value,handleChange,isSurprise,handleSurprise}: Partial<Props>) {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'>
          {lableName}
        </label>

        {isSurprise && 
          <button
            type='button'
            onClick={handleSurprise}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise me
          </button>
        }
        </div>


        <input
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
            type='text'
            value={value}
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
            focus:border-[#4649ff] outline-none block p-3 w-full'
        />
    </div>
  )
}

export default FormField