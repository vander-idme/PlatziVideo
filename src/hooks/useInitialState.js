import { useState, useEffect } from 'react'

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState([{mylist:[], originals:[], trends:[]}])

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  return videos
}

export default useInitialState