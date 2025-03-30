import React from 'react'

const RestaurantLogin = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4">
      <h3 className='text-4xl'>Login</h3>
      <form className='flex flex-col gap-2 max-w-1/2'>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className='bg-blue-500 p-2 rounded-md w-full' type="submit">Login</button>
      </form>
    </div>
  )
}

export default RestaurantLogin