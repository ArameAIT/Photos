import React from 'react'

function Footer() {
    return (
        <div className='flex justify-center items-center w-full flex-col'>
            <p className='text-[19px]'>Instagram</p>
            <div className='flex'>
                <div className=' p-[50px]  flex-col'>
                    <p> <span className='text-[14px]'>Creator :</span> Arame Hovhannisyan</p>
                    <p> <span className='text-[14px]'>DataBase :</span> <a target='blank' href="https://unsplash.com/">Unsplash.com</a></p>
                </div>
                <div className=' p-[50px] flex-col'>
                    <p><a target='blank' href="https://www.instagram.com/arame_hovhannisyan__/">Arame Hovhannisyan</a></p>
                    <p><a target='blank' href="https://www.instagram.com/unsplash/">Unsplash</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer