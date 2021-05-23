import React from 'react'
import Header from '../components/Header'
import CheckOutProduct from '../components/CheckOutProduct'
import Image from "next/image";
import {useSelector}  from  "react-redux";
import {selectItems, selectTotal} from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from 'next-auth/client';



function Checkout() {
    const items =  useSelector(selectItems);
    const total =  useSelector(selectTotal);
    const session = useSession();

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image className="mx-auto" src="https://links.papareact.com/ikj" width={1020} height={250}  alt="" objectFit="contain"/>
                
                
                    <div className="flex flex-col border-b py-5 px-5 mt-3 bg-white">
                        <h1 className="text-3xl pb-4 font-semibold">
                        {items.length=== 0 ? 'Your Shopping Basket is empty' : 'Shopping Basket'}
                    </h1>
                    {items.map((item, i) => (
                        <CheckOutProduct  key={i}
                        id={item.id} 
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}
                        />

                    ))}

                </div>
                </div>


                {/* right */}
                <div className="flex flex-col bg-white p-7 shadow-md">
                    {!!items.length && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} items):{" "}
                                <span className="font-bold text-gray-500">
                                    <Currency
                                        quantity={total}
                                    />
                                </span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${!session && `cursor-not-allowed from-gray-300 to-gray-500 text-gray-300`}`}>
                                {!session ? 'Sign in to checkout': 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout;
