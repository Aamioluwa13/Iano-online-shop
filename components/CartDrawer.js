import React from 'react'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, total, clear } = useCart()

  function openWhatsApp() {
    // build message
    const lines = ['🛍️ New Order from Website️', '-------------------------']
    items.forEach((it) => {
      lines.push(`• ${it.qty} ${it.name} - $${(it.price * it.qty).toFixed(2)}`)
    })
    lines.push('-------------------------')
    lines.push(`💰 Total: $${total.toFixed(2)}`)
    const msg = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/message/EUDNORFDAKVJE1?text=${msg}`
    window.open(url, '_blank')
  }

  return (
    <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="text-lg font-bold">Cart</h3>
        <div className="space-x-2">
          <button onClick={() => setOpen(false)} className="text-gray-600">Close</button>
        </div>
      </div>
      <div className="p-4 overflow-y-auto h-[80%]">
        {items.length === 0 && <div className="text-gray-600">Your cart is empty.</div>}
        {items.map((it) => (
          <div key={it.id} className="flex items-center justify-between py-2 border-b">
            <div>
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-gray-600">${it.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min="1" value={it.qty} onChange={(e) => updateQty(it.id, Number(e.target.value))} className="w-16 border rounded px-2 py-1" />
              <button onClick={() => removeItem(it.id)} className="text-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-4">
          <div className="font-semibold">Total</div>
          <div className="font-bold">${total.toFixed(2)}</div>
        </div>
        <div className="space-y-2">
          <button onClick={openWhatsApp} className="w-full bg-green-600 text-white py-3 rounded text-center text-lg">Order via WhatsApp</button>
          <button onClick={clear} className="w-full border border-gray-300 py-2 rounded">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { items, open, setOpen, updateQty, removeItem, total, clear } = useCart()

  const whatsappBase = 'https://wa.me/message/EUDNORFDAKVJE1'

  function orderViaWhatsApp() {
    const lines = []
    lines.push('🛍️ New Order from Website️')
    lines.push('-------------------------')
    items.forEach((it) => {
      const line = `• ${it.qty} ${it.name} - $${(it.price * it.qty).toFixed(2)}`
      lines.push(line)
    })
    lines.push('-------------------------')
    lines.push(`💰 Total: $${total.toFixed(2)}`)

    const msg = lines.join('\n')
    const encoded = encodeURIComponent(msg)
    const url = `${whatsappBase}?text=${encoded}`
    window.open(url, '_blank')
  }

  return (
    <div className={`fixed top-0 right-0 h-full w-full sm:w-96 z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <aside className="relative h-full bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <button onClick={() => setOpen(false)} className="text-gray-600">Close</button>
        </div>

        <div className="mt-4 space-y-3 overflow-y-auto max-h-[60vh]">
          {items.length === 0 && <div className="text-gray-600">Cart is empty</div>}
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
              <div>
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-gray-600">${it.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <input className="w-12 p-1 border rounded" type="number" min={1} value={it.qty} onChange={(e) => updateQty(it.id, Number(e.target.value) || 1)} />
                <div className="font-medium">${(it.price * it.qty).toFixed(2)}</div>
                <button className="text-red-500" onClick={() => removeItem(it.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between font-semibold">
            <div>Total</div>
            <div>${total.toFixed(2)}</div>
          </div>

          <div className="mt-4 space-y-2">
            <button onClick={orderViaWhatsApp} className="w-full bg-green-600 text-white py-3 rounded text-center text-lg">Order via WhatsApp</button>
            <button onClick={clear} className="w-full border py-2 rounded">Clear Cart</button>
          </div>
        </div>
      </aside>
    </div>
  )
}
