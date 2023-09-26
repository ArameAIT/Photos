import React from 'react'

function Photos({ info }) {
    

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
               
                <p className='text-[11px] font-bold opacity-40'><a href={info.links.download}>Download Picture</a></p>
            </div>
        </div>
    )
}

export default Photos