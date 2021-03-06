import React from 'react';
import Head from "next/head";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import CartSection from "./components/cart-section";
import CartItems from "./components/cart-items";

const Cart = () => {
    return (
        <div className="bg-white w-full h-screen overflow-hidden">
            <Head>
                <title>Amazon Cart</title>
                <link rel="icon" href="/amazon-2.png"/>
            </Head>

            <div>
                <Header />
            </div>

            <div className="h-screen flex ">
                <div className="w-1/5 bg-gray-900 border-gray-700 border-t-2  p-6 overflow-hidden">
                    <Sidebar />
                </div>
                <div className="flex-1 p-6 bg-gray-100">
                    <CartItems />


                </div>
            </div>




        </div>
    );
};

export default Cart;

// the cart
