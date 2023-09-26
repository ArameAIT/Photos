import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPicture } from '../store/slices/pictureSlice'
import Creator from './Creator';

function Picture() {
  const picture = useSelector(selectPicture)
  console.log(picture);

  const [likes, setLikes] = useState(picture.likes)
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
    <div className='flex flex-col'>

      <div className='w-full flex mt-[50px] text-[20px]'>
        <div className='w-[750px]'>
          <img src={picture.urls.full} />
        </div>
        <div className='w-[500px] flex justify-center items-center flex-col'>
          <p>{picture.alt_description}</p>
          <p>Created at : {picture.created_at}</p>
          <p>Description : {picture.description}</p>
          <div className='w-[30px] flex'>
            <img onClick={handleLikes} src={isLiked ? `/redHeart.png` : `/whiteHeart.png`} />
            <p className='ml-[5px]'>{likes}</p>
          </div>
        </div>
      </div>
        <div className='mt-[50px]'>
          
          <Creator info={picture.user} likes={likes} isLiked={isLiked}/>
        </div>

    </div>
  )
}

export default Picture