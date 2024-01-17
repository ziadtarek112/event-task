import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-5'>
      <h1 className='text-5xl font-semibold text-text-primary'>Welcome to the home of Adventures</h1>
      <Link href='/events'>      
      <button className='bg-bg-secondary text-text-primary text-2xl px-4 py-1 cursor-pointer'>Login</button>
      </Link>
    </div>
  )
}

export default Home