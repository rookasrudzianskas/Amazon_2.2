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

            <div className="mt-5">
                <div className="flex flex-row items-center">
                    <div className="w-40 h-32 bg-white p-4 flex items-center justify-center rounded-lg">
                        <img className="w-full h-full object-contain"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwimt_bQG_EXqDOLO8hnBCrj_Ma5_Bju_cHg&usqp=CAU" alt=""/>
                    </div>
                <div className="">
                    <div className="">
                        Apple Macbook 15.5 inch
                    </div>

                    <div>
                        Apple
                    </div>
                </div>

                <div className="">

                </div>

                <div className="delete">

                </div>

                </div>
            </div>
        </div>
    );
};

export default CartSection;
