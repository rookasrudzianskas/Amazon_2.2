import React from 'react';

const CartSection = () => {
    return (
        <div>
            <h1 className="text-gray-400 text-3xl mb-6 font-bold">Shopping Cart</h1>

            <div className="flex flex-row font-bold text-gray-400">
                <h2 className="flex flex-grow">Product</h2>
                <h2 className="w-48">Count</h2>
                <h2 className="w-48">Total Cost</h2>
            </div>
        </div>
    );
};

export default CartSection;
