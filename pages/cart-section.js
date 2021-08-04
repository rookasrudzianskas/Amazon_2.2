import React, {useState} from 'react';

const CartSection = () => {

    const [count, setCount] = useState(null);

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
                <div className="ml-5">
                    <div className="font-bold text-sm text-gray-600">
                        Apple Macbook 15.5 inch
                    </div>

                    <div className="text-sm text-gray-400">
                        Apple
                    </div>
                </div>

                <div className="w-48 flex items-center cursor-pointer">
                    <h4 className="font-bold text-white h-6 w-6 flex items-center justify-center mr-2 rounded-lg bg-gray-400 hover:bg-gray-200 duration-200" onClick={() => setCount(count - 1)}>◀️️</h4>
                    <h4 className="text-gray-400"> x{count < 0 ? "0" : count}</h4>
                    <h4 className="font-bold text-white h-6 w-6 flex items-center justify-center ml-2 rounded-lg bg-gray-400 hover:bg-gray-200 duration-200" onClick={() => setCount(count + 1)}>▶</h4>
                </div>

                <div className="w-48 font-bold text-gray-400">
                    $1,399.99
                </div>

                <div className="delete w-10 font-bold text-gray-200">
                    <h4 className="text-gray-200 cursor-pointer">❌</h4>
                </div>

                </div>
            </div>
        </div>
    );
};

export default CartSection;
