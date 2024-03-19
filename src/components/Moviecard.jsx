import React from 'react'

const Moviecard = ({allmovie ,loding}) => {
  return (
    <>
    <div className ="main flex flex-wrap px-4  lg:px-10">
   {allmovie.map((item,index)=>{
    const {Poster,Title, Year} =item
    return (
      <div className='p-2 lg:w-1/4  w-full'>
    <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
      <img className='rounded-lg  w-full mb-2' src= {Poster} alt="img" />
      <h2 className=' text-white text-xl font-bold'>{Title}</h2>
      <h2 className='text-white text-lg mb-2 ' >Year : {Year}</h2>
      </div>
    </div>
    )
   }
   )
   }
    
      
    </div>
    </>
  )
}

export default Moviecard
