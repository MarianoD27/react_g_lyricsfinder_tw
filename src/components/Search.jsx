import { useState, useEffect } from 'react'
import axios from 'axios'


function Search({ sendData }) {

  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    console.log([lyrics, errorMsg])

    sendData(artist, song, lyrics, errorMsg)
  }, [lyrics, errorMsg])



  function searchLyrics() {
    console.log(`SEARCHING:  Artist:${artist}, Song:${song}`)
    if (artist == '' || song == '') {
      setErrorMsg('There is an empty field').then
    } else {
      axios
        .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(res => {
          console.log(res)
          setErrorMsg('');
          setLyrics(res.data.lyrics)
        })
        .catch(res => {
          if (res.status == 404) {
            setErrorMsg("We couldn't find that song for some reason")
          }
        })

    }
  }

  function handleChange(type, val) {
    if (type == 'a') {
      setArtist(val)
    } else if (type == 's') {
      setSong(val)
    }
    console.log(`Artist:${artist}, Song:${song}`)
  }


  return (
    <>
      <div className='flex rounded-xl bg-pink-100 text-black'>
        <div className='flex flex-col'>
          <input type="text" placeholder='Artist...'
            value={artist} className='bg-transparent p-2 focus:outline-none' onChange={(e) => handleChange('a', e.target.value)} />
          <input type="text" placeholder='Song Name...' value={song} className='bg-transparent p-2 focus:outline-none' onChange={(e) => handleChange('s', e.target.value)} /></div>
        <button className='bg-teal-600 hover:bg-teal-500 active:bg-teal-400 p-2 rounded-xl text-white' onClick={() => searchLyrics()}>Search</button>
      </div>
    </>
  )
}

export default Search