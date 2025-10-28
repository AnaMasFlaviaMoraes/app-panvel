import React, { createContext, useContext, useMemo, useState } from "react";
import { Product } from "../data/products";

export type CartItem = {
  product: Product;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  total: number;
  count: number; // total de unidades
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (p: Product, qty: number = 1) => {
    setItems((curr) => {
      const idx = curr.findIndex((c) => c.product.id === p.id);
      if (idx >= 0) {
        const clone = [...curr];
        clone[idx] = { ...clone[idx], qty: clone[idx].qty + qty };
        return clone;
      }
      return [...curr, { product: p, qty }];
    });
  };

  const inc = (id: string) =>
    setItems((curr) =>
      curr.map((c) => (c.product.id === id ? { ...c, qty: c.qty + 1 } : c))
    );

  const dec = (id: string) =>
    setItems((curr) =>
      curr
        .map((c) => (c.product.id === id ? { ...c, qty: Math.max(1, c.qty - 1) } : c))
        .filter(Boolean) as CartItem[]
    );

  const remove = (id: string) =>
    setItems((curr) => curr.filter((c) => c.product.id !== id));

  const total = useMemo(
    () => items.reduce((sum, it) => sum + it.product.price * it.qty, 0),
    [items]
  );

  const count = useMemo(
    () => items.reduce((sum, it) => sum + it.qty, 0),
    [items]
  );

  const value: CartContextType = { items, add, inc, dec, remove, total, count };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
