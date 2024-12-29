"use client"

import { Product } from "@/sanity.types"
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
    product: Product;
    disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {

    const { addItem, removeItem, getItemCount, clearBasket } = useBasketStore();
    const itemCount = getItemCount(product._id);
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=", itemCount);
    
    const [isClient, setIsCleint] = useState(false);

    useEffect(() => {
        setIsCleint(true);
    }, []);
    if (!isClient) {
        return null;
    }

    return (
        <div className="flex items-center justify-center space-x-2">
            <button
                onClick={() => removeItem(product._id)}
                disabled={itemCount === 0 || disabled}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
            >
                <span className={`text-3xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-600"}`}>
                    -
                </span>
            </button>
            <span className="w-8 text-center font-semibold"> {itemCount} </span>
            <button
                onClick={() => addItem(product)}
                disabled={disabled}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-400 cursor-default" : "bg-blue-500 hover:bg-blue-600"}`}>
                <span className="font-bold text-xl text-white">+</span>
            </button>
        </div>
    )
}

export default AddToBasketButton