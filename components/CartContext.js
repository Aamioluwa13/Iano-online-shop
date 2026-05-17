'use client'

import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  function addItem(product) {
    setItems((prev) => {
      const found = prev.find((p) => p.id === product.id)
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setOpen(true)
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  function updateQty(id, qty) {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)))
  }

  function clear() {
    setItems([])
  }

  const total = items.reduce((s, it) => s + it.price * it.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total, open, setOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
