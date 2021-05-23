import React from 'react'
import Image from 'next/image';
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {addToBasket, removeFromBasket} from "../slices/basketSlice";
import { useDispatch } from "react-redux";


function CheckOutProduct({id, title, price, rating, description, category, image, hasPrime }) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {id, title, price, rating, description, category, image, hasPrime };
        dispatch(addToBasket(product));

   };

   const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

};
    return (
        <div className="grid grid-cols-5">
        <Image 
            src={image}
            width={200}
            height={200}
            objectFit='contain'
            className="rounded-lg"
        />
        <div className="col-span-3 mx-5">
            <p className="text-lg mb-1 text-gray-800 font-medium">{title}</p>
            <div className="flex">
                {Array(rating).fill().map((_, index) => (
                    <StarIcon key={index} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <div className="text-gray-400">
                <Currency
                    quantity={price}
                />
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">Free Next-day delivery</p>
                </div>
            )}
        </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end" >
            <button className="button " onClick={addItemToBasket}>Add to Basket</button>

            <button className="button " onClick={removeItemFromBasket}>Remove</button>


            </div>

            
        </div>
    )
}

export default CheckOutProduct
