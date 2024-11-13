import React from 'react'

function Password() {
  return (
    <div>
      <div className='w-full flex justify-between flex-wrap'>
            <div className='text-2xl'>
                To reset your password use this link 
            </div>
            <a href="#">
            <div className='px-3 py-2 bg-green-300 rounded-md'>
                Reset Password
            </div>
            </a>
      </div>
    </div>
  )
}

export default Password
