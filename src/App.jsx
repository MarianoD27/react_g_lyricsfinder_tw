import { useEffect, useState } from "react";
import Search from "./components/Search";


function App() {

  const [lyricsP, setLyricsP] = useState('')
  const [errorP, setErrorP] = useState('')
  const [artistP, setArtistP] = useState('')
  const [songP, setSongP] = useState('')
  function setData(a, s, l, e) {
    if (e) { setErrorP(e) } else {
      setArtistP(a)
      setSongP(s)
      setLyricsP(l)
      setErrorP(e)
    }
    console.log('app: received Data')
  }

  const [hasSong, setHasSong] = useState(false)
  useEffect(() => {
    if (songP.length > 0) {
      setHasSong(true)
    }
  }, [songP])


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-700">

      {/* navbar */}
      <div className="p-2 backdrop-blur flex items-center justify-between text-white text-xl">
        <h1 className="text-3xl">Lyrics Finder</h1>
        <Search sendData={setData} />
        <h1 className="hidden md:block text-3xl">Created by MarianoD27</h1>
      </div>

      {/* body */}
      <div className="w-[80%] mx-auto flex flex-col p-2 mt-8 text-center gap-8 pb-80">
        <div className="text-red-500 text-2xl">{errorP}</div>
        {hasSong && <div className="text-white text-3xl capitalize">{artistP} - {songP}</div>}
        <pre>
          {lyricsP}</pre>
      </div>




    </div>
  );
}

export default App;
