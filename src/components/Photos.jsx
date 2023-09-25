import React from 'react'
import { useState } from 'react'

function Photos({ info }) {
    const [likes, setLikes] = useState(info.likes)
    const [isLiked, setIsLiked] = useState(false)
    function handleLikes() {
        setIsLiked(prev => !prev)
        if (isLiked == true) {
            setLikes(prev => prev - 1)
        } else if (isLiked == false) {
            setLikes(prev => prev + 1)
        }
    }

    return (
        <div className='rounded-2xl border-[2px] border-[${info.color}]'>
            <div className='flex justify-center items-center'>
                <div className='p-3 w-[350px] '>
                    <img src={info.urls.full} />
                </div>
            </div>
            <div className='text-left p-[10px]'>
                <p>
                    <span className=' text-[14px]'>Description</span> : {info.alt_description}
                </p>
                <p><span className=' text-[14px]'>Creating time </span> : {info.created_at}</p>
                <div className='w-[30px] flex'>
                    <img onClick={handleLikes} src={isLiked ? `/redHeart.png` : `/whiteHeart.png`} />
                    <p className='ml-[5px]'>{likes}</p>
                </div>
                <p className='text-[11px] font-bold opacity-40'><a href={info.links.download}>Download Picture</a></p>
            </div>
        </div>
    )
}

export default Photos