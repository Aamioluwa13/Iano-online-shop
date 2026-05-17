import React from 'react'

export default function ProductCard({ product, onOpen }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow">
      <div className="h-40 bg-gray-100 rounded-md mb-2 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
        <div className="text-sm text-gray-600 mt-1">${product.price.toFixed(2)}</div>
        <button onClick={onOpen} className="mt-2 w-full bg-black text-white text-xs py-2 rounded">Quick View</button>
      </div>
    </div>
  )
}
