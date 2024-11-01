import React from 'react'

function Notificationdrop() {
    return (
        <div className="absolute right-0 text-left mt-2 w-80 py-4 flex flex-col bg-white rounded-md shadow-lg z-10">

            <div className='w-full border-b px-4 py-2 flex justify-between items-center'>
                <div className='font-semibold'>Notification</div>
                <div className='flex items-center text-blue-800'>
                   
                    Make all as read</div>
            </div>

            <div className='w-full px-4 py-2 bg-gray-100'>
                Today
            </div>

            <div className='w-full flex border-b hover:bg-gray-100 px-4 py-2 items-center'>
                <div className='pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 shadow-md rounded-full p-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>
                <div>
                    <div className='font-semibold'>Maintance request</div>
                    <div className='text-sm'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt ratione distinctio, laudantium asperiores  </div>
                </div>
            </div>

            <div className='w-full flex border-b hover:bg-gray-100 px-4 py-2 items-center'>
                <div className='pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 shadow-md rounded-full p-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>
                <div>
                    <div className='font-semibold'>Maintance request</div>
                    <div className='text-sm'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt ratione distinctio, laudantium asperiores  </div>
                </div>
            </div>

            <div className='w-full flex border-b hover:bg-gray-100 px-4 py-2 items-center'>
                <div className='pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 shadow-md rounded-full p-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>
                <div>
                    <div className='font-semibold'>Maintance request</div>
                    <div className='text-sm'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt ratione distinctio, laudantium asperiores  </div>
                </div>
            </div>

            <div className='w-full flex hover:bg-gray-100 px-4 p-2 items-center'>
               View all notification
            </div>

        </div>
    )
}

export default Notificationdrop
