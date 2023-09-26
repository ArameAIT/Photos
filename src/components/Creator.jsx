import React, { useState } from 'react'

function Creator({ info, likes, isLiked }) {
     
    return (
        <div>
            <div>
                <p className='text-[30px]'>Creator</p>
            </div>
            <div className='flex justify-between items-center'>

                <div className='text-left'>
                    <p><span className='text-[14px]'>Name :</span>  {info.name}</p>
                    <p><span className='text-[14px]'>Bio :</span>  {info.bio}</p>
                    
                    <p><span className='text-[14px]'>All photos :</span>  {info.total_photos}</p>
                    <p><span className='text-[14px]'>Twitter username :</span>  {info.twitter_username}</p>
                    <p><span className='text-[14px]'>Instagram username :</span>  {info.instagram_username}</p>
                    <p><span className='text-[14px]'>Location :</span>  {info.location}</p>


                    <div className='w-[30px] flex'>
                        <img src={isLiked ? `/redHeart.png` : `/whiteHeart.png`} />
                        <p>{likes}</p>
                    </div>
                </div>
                <div>
                    <p>Profile Image</p>
                    <img className='rounded-full' src={info.profile_image.large} />
                </div>
            </div>
        </div>
    )
}

export default Creator