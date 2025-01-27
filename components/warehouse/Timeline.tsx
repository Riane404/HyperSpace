"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

export const Timeline = () => {

    const router = useRouter();

    const handlelogout = () => {
        localStorage.removeItem('token');
        router.push('/warehouse/login');
    }

  return (
    <>
    <nav className="bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white-800">Spacify</h1>
      <div className="space-x-4">
        {/* <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Offboard
        </button> */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handlelogout}>
          Logout
        </button>
      </div>
    </nav>


<ol className="items-center sm:flex mt-60 mx-32">
<button 
     // onClick={handlegetstarted}
    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
      Get Started
</button>

<button 
     // onClick={handlegetstarted}
    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
      Get Started
</button>

<button 
     // onClick={handlegetstarted}
    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
      Get Started
</button>

<button 
     // onClick={handlegetstarted}
    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
      Get Started
</button>

              
</ol>


    </>
  )
}
