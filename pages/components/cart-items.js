import React from 'react';
import CartSection from "./cart-section";
import FooterCart from "./FooterCart";
import {useSelector} from "react-redux";
import {selectItems} from "../../slices/basketSlice";
import Product from "./Product";

const CartItems = () => {

    const items = useSelector(selectItems);
    console.log(items);

    return (
        <div>
            <h1 className="text-gray-400 text-3xl mb-6 font-bold">Shopping Cart</h1>

            <div className="flex flex-row font-bold text-gray-400">
                <h2 className="flex flex-grow">Product</h2>
                <h2 className="w-48">Count</h2>
                <h2 className="w-48">Total Cost</h2>
                <span className="w-10"/>
            </div>

                <div>
                    {items.map((item) => (
                        <CartSection key={item.id} id={item.id} title={item.title} brand={item.make} price={item.price} name={item.name} make={item.make} rating={item.rating} image={item.image}/>
                    ))}

                </div>
            <div>
                <FooterCart />
            </div>
        </div>
    );
};

export default CartItems;
