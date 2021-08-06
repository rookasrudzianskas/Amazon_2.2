import React, {useState} from 'react';

const CartSection = ({image, title, price, brand}) => {

    const [count, setCount] = useState(0);

    return (
        <div>


            <div className="mt-5 ">
                <div className="flex flex-row items-center  border-b hover:bg-gray-200 rounded-lg shadow-md duration-200 cursor-pointer">
                    <div className="w-40 h-32 bg-white p-4 flex items-center justify-center rounded-lg ">
                        <img className="w-full h-full object-contain"  src={image} alt=""/>
                    </div>
                <div className="ml-5 flex-grow">
                    <div className="font-bold text-sm text-gray-600">
                        {title}
                    </div>

                    <div className="text-sm text-gray-400">
                        {brand}
                    </div>
                </div>

                <div className="w-48 flex items-center cursor-pointer">
                    <h4 className="font-bold text-white h-6 w-6 flex items-center justify-center mr-2 rounded-lg bg-gray-400 hover:bg-gray-300 duration-200" onClick={() => setCount(count - 1)}>◀️️</h4>
                    <h4 className="text-gray-400"> x{count < 0 ? "0" : count}</h4>
                    <h4 className="font-bold text-white h-6 w-6 flex items-center justify-center ml-2 rounded-lg bg-gray-400 hover:bg-gray-300 duration-200" onClick={() => setCount(count + 1)}>▶</h4>
                </div>

                <div className="w-48 font-bold text-gray-400">
                    ${price}
                </div>

                <div className="delete w-10 font-bold text-gray-200">
                    <h4 className="text-gray-200 cursor-pointer hover:bg-gray-300 w-6 h-6 flex items-center justify-center duration-200 rounded-lg">❌</h4>
                </div>

                </div>
            </div>
        </div>
    );
};

export default CartSection;
