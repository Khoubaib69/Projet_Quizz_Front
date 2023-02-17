import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div
    className="w-64 h-75 bg-transparent overflow-hidden shadow-md shadow-black group cursor-pointer transition duration-200 ease-in transform z-1 sm:hover:scale-105">
   <img
    className="w-full h-48 object-cover" src={product.image} alt={product.name} />
   <div
    className="px-6 py-4">
       <div className="font-bold text-xl mb-2 transition-all duration-100 ease-in-out group-hover:text-pink-700">{product.title}</div>
   </div>
   <div className="px-6 py-4 flex items-center justify-between">
   <p className="text-2xl">{product.price}$</p>
       <button
       className="bg-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 hover:text-gray-900 font-bold py-2 px-4">
           +
       </button>
   </div>
  </div>
  )
}

export default ProductCard