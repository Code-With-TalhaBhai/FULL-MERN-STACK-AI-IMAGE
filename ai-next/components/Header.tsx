'use client'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/assets/logo.svg'


type Props = {}

function Header({}: Props) {
  return (
    <div className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]'>
        <Link href="/">
            <Image className='w-28 object-contain' src={logo} alt='not imported'/>
        </Link>
        <Link className='font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md' href='/create-post'>
              Create
        </Link>
    </div>
  )
}

export default Header