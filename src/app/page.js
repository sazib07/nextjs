import Link from 'next/link'
import React from 'react'
import Navbar from './../../Components/Navbar';


const page = () => {
  return (
  <>
 <Navbar/>
<Link href="/blog">Blog</Link>
      
    </>
  )
}

export default page