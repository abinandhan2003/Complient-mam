import React from 'react'
import { Link } from 'react-router-dom'

function ProcessingComp() {
  return (
    <div>
       <div className='text-3xl'>
        <div> Processing Complients </div>

        {/* New request table  */}
        <table className='min-w-full table-auto bg-white mt-5'>
          <thead>
            <tr className='text-black border-b uppercase text-sm leading-normal'>
              <th className='py-3 px-6 text-left'>Title</th>
              <th className='py-3 px-6 text-left'>Description</th>
              <th className='py-3 px-6 text-left'>Email</th>
              <th className='py-3 px-6 text-left'>Name</th>
              <th className='py-3 px-6 text-left'>View</th>
            </tr>
          </thead>
          <tbody className='text-gray-800 text-sm font-light'>
            {/* {users.map((user, index) => ( */}
          

            <tr className='border-b border-gray-200'>
              <td className='py-3 px-6 text-left'> Sample Tittle</td>
              <td className='py-3 px-6 text-left'> Lorem ipsum dolor sit  </td>
              <td className='py-3 px-6 text-left'> lourm@gmail.com</td>
              <td className='py-3 px-6 text-left'> Mr. Lourm</td>
              <Link to="/process/processingcomp/update">
              <td
                className='py-3 px-6 text-left text-blue-500 hover:underline cursor-pointer'
              >
                View
              </td>
              </Link>
            </tr>

            <tr className='border-b border-gray-200'>
              <td className='py-3 px-6 text-left'> Sample Tittle</td>
              <td className='py-3 px-6 text-left'> Lorem ipsum dolor sit  </td>
              <td className='py-3 px-6 text-left'> lourm@gmail.com</td>
              <td className='py-3 px-6 text-left'> Mr. Lourm</td>
              <td
                className='py-3 px-6 text-left text-blue-500 hover:underline cursor-pointer'
              >
                View
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ProcessingComp
 