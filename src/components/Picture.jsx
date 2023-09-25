import React from 'react'
import { useSelector } from 'react-redux'
import { selectPicture } from '../store/slices/pictureSlice'

function Picture() {
    const picture = useSelector(selectPicture)
    console.log(picture);
  return (
    <div>Picture</div>
  )
}

export default Picture