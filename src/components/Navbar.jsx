import React from 'react'

const Navbar = () => {
    return (
        <div className='main lg :flex md:flex  sm: flex-wrap justify-between items-center px-4 bg-sky-900 py-3 shadow-md sticky top-0'>
            <div className='left flex items-center space-x-3 justify-center'>
                <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
                <h2 className='font-bold text-xl text-white'> MovieMasala </h2>
            </div>
            <div className='right'>
                <ul className='flex space-x-4 text-white justify-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li> Contact</li>
                    <li>Servies</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
