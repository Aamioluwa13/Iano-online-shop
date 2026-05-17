import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import CartDrawer from '../components/CartDrawer'

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen brand-bg p-4">
      <header className="max-w-3xl mx-auto flex items-center justify-between py-4">
        <div className="text-2xl font-bold">Brand Name</div>
        <div className="text-sm uppercase text-gray-700">Free shipping over $50</div>
      </header>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-4">Shop</h1>
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} />
          ))}
        </section>
      </main>

      <ProductModal product={selected} onClose={() => setSelected(null)} />

      <CartDrawer />
    </div>
  )
}

function ProductModal({ product, onClose }) {
  if (!product) return null
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:w-3/4 bg-white p-4 rounded-t-lg sm:rounded-lg">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
          <AddToCartButton product={product} onAdded={onClose} />
        </div>
      </div>
    </div>
  )
}

import { useCart } from '../components/CartContext'
function AddToCartButton({ product, onAdded }) {
  const { addItem } = useCart()
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded"
      onClick={() => {
        addItem(product)
        onAdded?.()
      }}
    >
      Add to Cart
    </button>
  )
}
