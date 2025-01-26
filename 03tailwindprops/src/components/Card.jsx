import React from 'react'

function Card({userName = "Chai", randomText}) {
  // console.log(props);
  
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/30165563/pexels-photo-30165563/free-photo-of-majestic-mountain-silhouette-at-purple-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          
          <h2 className="text-xl font-semibold tracking-wide">{userName}</h2>
        </div>
        <p className="text-gray-300">
          {randomText}
        </p>
      </div>      
  )
}

export default Card