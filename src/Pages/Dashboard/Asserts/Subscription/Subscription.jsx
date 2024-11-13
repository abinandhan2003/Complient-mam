import React from 'react'
import Profile from './img/profile.avif';

function Subscription() {
    return (
        <div>
            <div className='text-3xl'> Subscription </div>
            <div className='mt-2'> Manage and monitor your subscription</div>
            <div className='w-full flex justify-center'>
                <div className='w-[600px] shadow-md bg-white mt-7 p-4 rounded-xl'>
                    <div className='flex justify-between'>
                        <div>
                            <img src={Profile} alt="Profile" className='w-10 ml-5 rounded-full' />
                            <div className='flex gap-2 items-center'>
                                <div> Lourm User</div>
                                <span class="inline-flex -translate-y-1 items-center w-min mt-3 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 gap-1"> <div className='rounded-full h-1 w-1 bg-green-700'></div> Active</span>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-3xl'> ₹ 199</div>
                            <div>Monthly Plan</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        Renews on 25th march, 2025
                    </div>

                    <div class="w-full mt-2 rounded-full h-2.5 bg-gray-300">
                        <div class="bg-blue-600 h-2.5 rounded-full w-[70%]"></div>
                    </div>

                    <div className='border border-b border-gray-200 mt-4'>

                    </div>

                    <div className='w-full flex justify-around py-5'>
                        <div className='px-3 py-2 bg-red-200 rounded-md'>
                            Cancel Plan
                        </div>
                        <div className='px-3 py-2 bg-green-200 rounded-md'>
                            Upgrade Plan
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Subscription
