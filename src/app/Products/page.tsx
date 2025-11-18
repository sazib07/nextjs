import React from 'react'

const page =async () => {
     const data = await fetch('https://fakestoreapi.com/products')
  const product = await data.json()
  console.log(product)
  return (
    <div>
    
        
    </div>
  )
}

export default page