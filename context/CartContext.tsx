'use client'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import { createContext, useEffect, useState } from 'react'


export const CartContext = createContext<CartContextType | null>(null)

const CartProvider = ( { children }: { children: React.ReactNode}) => {
    const [cart, setCart] = useState<Product[]>([])
    const [itemCount, setItemCount] = useState<number>(0)
    const [subtotal, setSubtotal] = useState<number>(0)

    useEffect(() => {
        setItemCount(cart.reduce((prev , curr) => {
            return prev + curr.quantity
        }, 0))
    }, [cart])

    useEffect(() => {
        setSubtotal(parseFloat(cart.reduce((prev, curr) => {
            return prev + (curr.quantity * curr.price)
        }, 0).toFixed(2)))
    }, [cart])

    function addItemToCart(item: Product) {
        const itemInCart = cart.find((i: Product) => {
            return i.id === item.id;
        });

        let newCartItems;

        if (itemInCart) {
            newCartItems = cart.map((i: Product) => {
                if (i.id === item.id) {
                    i.quantity++;
                    return i;
                }
                return i;
            });
        } else {
            item.quantity = 1;
            newCartItems = [...cart, item];
        }
        setCart(newCartItems);
    }

    function removeItemFromCart(item: Product) {
        let newCartItems;

        newCartItems = cart.map((i: Product) => {
            if (i.id === item.id) {
                i.quantity--;
                return i;
            }
            return i;
        });
        setCart(newCartItems)
    }

    function deleteProductFromCart(item: Product) {
        let newCartItems = cart.filter((i: Product) => i.id !== item.id)
        setCart(newCartItems)
    }

    function itemInCart(item: Product) {
        return cart.find(i => i.id === item.id) !== undefined
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                itemCount,
                itemInCart,
                subtotal,
                addItemToCart,
                removeItemFromCart,
                deleteProductFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider