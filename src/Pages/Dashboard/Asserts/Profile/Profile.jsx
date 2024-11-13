import React from 'react';
import Profilee from './img/profile.avif';

function Profile() {
    return (
        <div>
            <div className='w-full h-36 rounded-3xl bg-gradient-to-r from-[#ffccf3] to-[#ffb7ba]'>  </div>
            <div className='w-full flex flex-col items-center -translate-y-20'>
                <img src={Profilee} alt="Profile" className='w-36 gap-2 rounded-full' />
                <div className='text-3xl text-center'> Lourem User  <br />
                    <div className='text-sm'>
                        username123
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>louremuser@gmail.com |</div>
                    <div> India |</div>
                    <div> 987654321</div>
                </div>
            </div>
        </div>
    )
}

export default Profile
