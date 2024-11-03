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
                <div>
                    <div className='font-semibold'>Maintance request</div>
                    <div className='text-sm'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt ratione distinctio, laudantium asperiores  </div>
                    <div className='flex font-semibold'>
                        <div>From : </div> <pre> </pre>
                        <div>Nexcap customer form</div>
                    </div>
                </div>
            </div>

            
            <div className='w-full flex border-b hover:bg-gray-100 px-4 py-2 items-center'>
                <div>
                    <div className='font-semibold'>Maintance request</div>
                    <div className='text-sm'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt ratione distinctio, laudantium asperiores  </div>
                    <div className='flex font-semibold'>
                        <div>From : </div> <pre> </pre>
                        <div>Nexcap customer form</div>
                    </div>
                </div>
            </div>

            
            <div className='w-full flex border-b hover:bg-gray-100 px-4 py-2 items-center'>
                <div>
                    <div className='font-semibold'>Maintance request</div>
                    <div className='text-sm'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt ratione distinctio, laudantium asperiores  </div>
                    <div className='flex font-semibold'>
                        <div>From : </div> <pre> </pre>
                        <div>Nexcap customer form</div>
                    </div>
                </div>
            </div>

            <div className='w-full flex hover:bg-gray-100 px-4 p-2 items-center'>
               View all notification
            </div>

        </div>
    )
}

export default Notificationdrop
