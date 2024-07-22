// CartContext.js
import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    items: [],
    totalQuantity: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                const updatedItems = state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                return { ...state, items: updatedItems, totalQuantity: state.totalQuantity + 1 };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    totalQuantity: state.totalQuantity + 1
                };
            }
        case 'REMOVE_FROM_CART':
            const filteredItems = state.items.filter(item => item.id !== action.payload);
            const reducedQuantity = state.items.find(item => item.id === action.payload).quantity;
            return { ...state, items: filteredItems, totalQuantity: state.totalQuantity - reducedQuantity };
        case 'UPDATE_QUANTITY':
            const { itemId, quantity } = action.payload;
            const updatedItemsQuantity = state.items.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            );
            const totalQuantity = updatedItemsQuantity.reduce((acc, item) => acc + item.quantity, 0);
            return { ...state, items: updatedItemsQuantity, totalQuantity };
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
