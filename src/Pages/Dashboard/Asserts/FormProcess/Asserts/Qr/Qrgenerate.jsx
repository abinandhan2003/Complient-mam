import React from 'react'
import { Link } from 'react-router-dom'

function Qrgenerate() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='text-3xl'>
        Scan this Qr to Share Form
      </div>

      <img src='https://i.postimg.cc/G3T968NS/Screenshot-2024-11-09-191057.png' alt="Qr" className='mt-10' />

        <Link to="/process">
        <div className='px-3 py-2 bg-sky-200 mt-5 rounded-md' > Back</div>
        </Link>
    </div>

  )
}

export default Qrgenerate
