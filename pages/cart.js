import React from 'react';
import Head from "next/head";
import Header from "../src/Header";

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

        </div>
    );
};

export default Cart;
