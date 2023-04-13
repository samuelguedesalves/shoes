import { createContext, useContext, useState } from 'react';

type CartContext = {
  cartItems: Array<ProductItem>,
  cartTotal: number,
  addToCart: (item: ProductItem) => void,
  updateCart: (payload: { id: string, quantity: number }) => void,
  removeFromCart: (id: string) => void,
  clearCart: () => void,
}

type ProviderProps = {
  children: React.ReactNode,
}

const CartContext = createContext<CartContext>({} as CartContext);

export function CartContextProvider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useState<Array<ProductItem>>([]);

  function addToCart(item: ProductItem) {
    setCartItems(items => ([...items, item]))
  }

  function updateCart({ id, quantity }: { id: string, quantity: number }) {
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity } : item))
  }

  function clearCart() {
    setCartItems([]);
  }

  function removeFromCart(id: string) {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  function calcCartTotal() {
    return cartItems.reduce<number>(
      (acc, curr) => (acc + curr.price),
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal: calcCartTotal(),
        addToCart,
        updateCart,
        clearCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext);
}
