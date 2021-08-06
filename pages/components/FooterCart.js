import React from 'react';

const FooterCart = () => {
    return (
        <div className="flex justify-end mt-10">
            <div className="">
                <h2 className="mr-7 text-gray-400">Total Cost</h2>
                <div className="text-3xl font-bold text-gray-600">$1,789.00</div>
            </div>

            <div className="w-56 flex items-center bg-yellow-500 justify-center rounded-lg ml-5 text-white font-bold hover:bg-yellow-600 cursor-pointer duration-200">
                Complete Order
            </div>
        </div>
    );
};

export default FooterCart;
