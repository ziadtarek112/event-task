import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-5'>
      <h1 className='text-5xl font-semibold'>Welcome to the home of Adventures</h1>
      <Link href='/login'>      
        <Button text='Login' size='large' color='secondary'/>
      </Link>
    </div>
  )
}

export default Home