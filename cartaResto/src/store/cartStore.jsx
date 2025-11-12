import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product, qty = 1) => {
    set((state) => {
      const items = [...state.items]
      const idx = items.findIndex((i) => i.id === product.id)
      if (idx !== -1) {
        items[idx] = { ...items[idx], quantity: (items[idx].quantity || 0) + qty }
      } else {
        items.push({ ...product, quantity: qty })
      }
      return { items }
    })
  },
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  setQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i
      ),
    })),
  clearCart: () => set({ items: [] }),
}))

export default useCartStore
