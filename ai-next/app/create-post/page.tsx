import Post from '@/components/Post'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='max-w-7xl mx-auto'>
        <Post/>
    </section>
  )
}

export default page