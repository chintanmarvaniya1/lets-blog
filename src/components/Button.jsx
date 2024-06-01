import React from 'react'

export default function Button({
  children,
    type= 'button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <button className={`mt-4 bg-custom-secondary-dark hover:bg-custom-primary-dark text-2xl text-white py-1 px-4 w-full rounded focus:outline-none focus:shadow-outline ${bgColor} ${textColor} ${className}`}
    {...props}>
        {children}
    </button>
  )
}
