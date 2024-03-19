import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Moviecard from './components/Moviecard'

const App = () => {
  const [allmovie, setAllmovie] =useState([])
  const [searchMovie, setSearchMovie] = useState('')
  const [loading,setLoding] = useState(false)
  const fetchmoviedata = async  () => {
    try{
      setLoding(true)
const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`)
  const data = await res.json()
  setAllmovie(data.Search)
  console.log(data)
  setLoding(false)
    }
    catch (error){
    console.log(error)
    setLoding(false)
    }
  }
  return (
    <div>  
   <Navbar/>
   <div className='bg'>
   <Searchbar searchMovie ={searchMovie} setSearchMovie={setSearchMovie} fetchmoviedata={fetchmoviedata} />
   <Moviecard  allmovie={allmovie} loading  = {loading} />
   </div>
      
    </div>
  )
}

export default App
