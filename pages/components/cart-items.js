import React from 'react';
import CartSection from "./cart-section";
import FooterCart from "./FooterCart";

const CartItems = () => {
    return (
        <div>
            <h1 className="text-gray-400 text-3xl mb-6 font-bold">Shopping Cart</h1>

            <div className="flex flex-row font-bold text-gray-400">
                <h2 className="flex flex-grow">Product</h2>
                <h2 className="w-48">Count</h2>
                <h2 className="w-48">Total Cost</h2>
                <span className="w-10"/>
            </div>

            <CartSection image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwimt_bQG_EXqDOLO8hnBCrj_Ma5_Bju_cHg&usqp=CAU" title="Apple Macbook 15.5 inch" brand="Apple" price="1,499.99" />
            <CartSection image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" title="Nintendo Switch 2020 15 inch" brand="Nintendo" price="1,499.99" />

            <div>
                <FooterCart />
            </div>
        </div>
    );
};

export default CartItems;
