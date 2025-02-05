// context/CartContext.tsx
'use client'

import React, { createContext, useContext, useEffect, useState , ReactNode} from 'react';

// Define types for Cart Item and Cart Context
interface CartItem {
    id: string;
    name: string;
    price: number;
    size: string;
    color: string;
    imageUrl: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem ) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    getCartCount : () => number;
    getSubtotal : () => number;
    clearCart : () => void;
}
interface CartProviderProps {
    children: ReactNode;  // Define the children prop type
  }
// Create Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cart');
        }
    }, [cartItems]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            // Find the item in the cart
            const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
            
            if (itemIndex > -1) {
                return prevItems.map((cartItem)=>
                cartItem.id === item.id
                ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            } else {
                return [...prevItems, {...item}]
            }
            
            // If it's a new item, add it with a quantity of 1
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };
    

    const removeFromCart = (id: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            );
        });
    };
    const getCartCount = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getSubtotal = () => { return cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity; // Assuming item.price is a number
    }, 0);
}

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems")
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartCount , getSubtotal, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
