import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { handlePhotos, selectPhotos } from './store/slices/photoSlice'
import Photos from './components/Photos'
import { handlePicture } from './store/slices/pictureSlice'
import Picture from './components/Picture'

function App() {
  const [search, setSearch] = useState("general")
  const [inputValue, setInputValue] = useState("")
  const [isSelected, setIsSelected] = useState(false)
  const API_KEY = "V1FjiUIZctrBNldqe4SgMpVDO2qJmSSYc8H32gQoLbQ"
  const API_URL = "https://api.unsplash.com"
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${API_URL}/search/photos?page=1&query=${search}&client_id=${API_KEY}`).then((resp) => {
      return resp.json()
    }).then((response) => {
      dispatch(handlePhotos({
        photos: response.results
      }))
    })
  }, [search])

  const photos = useSelector(selectPhotos)

  function handleInputValue() {

    setSearch(inputValue)
    setInputValue("")
  }

  function handlePictures(info) {
    dispatch(handlePicture({
      picture: info
    }))
    setIsSelected(prev => !prev)
  }

  return (
    <div >

      {
        isSelected == false ? (
          <div className='flex justify-center items-center flex-col m-[20px]'>

            <div className=' border-[2px] border-neutral-300 rounded-3xl w-[500px] gap-5 flex justify-center items-center'>
              <input className='m-[20px] bg-neutral-300 rounded-2xl' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <button className='m-[10px] bg-neutral-300 p-[15px] rounded-full font-medium transition hover:bg-neutral-400 hover:text-white' onClick={handleInputValue}>Change Pictures</button>
            </div>
            <div className='mt-[50px] flex justify-center items-center flex-wrap flex-5 gap-[40px] p-[10px] m-[20px]'>
              {
                photos.map((el) => {
                  return (
                    <div onClick={() => handlePictures(el)} key={Math.random()} >
                      <Photos info={el} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        ) : (
          <div>
            <Picture />
          </div>
        )
      }

    </div>
  )
}

export default App
