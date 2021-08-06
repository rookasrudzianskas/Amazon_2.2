import React from 'react';
import Image from "next/image";
import StarIcon from "@material-ui/icons/Star";
import {addToBasket, selectItems} from "../../slices/basketSlice";
import {useDispatch, useSelector} from "react-redux";

const Product = ({id, name, price, image, rating, make }) => {

    const items = useSelector(selectItems);


    const addItemToBasket = () => {

        const product = {
            id,
            image,
            name,
            make,
            rating,
            price,
        };

        dispatch(addToBasket((product)));

    }

    function getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    const dispatch = useDispatch();


    return (
        <div>
            <div className="flex ">
                <div className="main-product mr-5">
                    <div className="product-image w-48 h-52 bg-white rounded-lg flex items-center justify-center">
                        <Image src={image} width="180" height="155" className="p-4 object-contain" alt=""/>
                    </div>

                    <div className="product-name text-gray-700 font-bold mt-2 text-sm">
                        {name}
                    </div>
                    <div className="product-make text-green-700 font-bold">
                        {make}
                    </div>

                    <div className="product-rating text-yellow-300 my-1">
                        {Array(getRandomNumberBetween(1,6)).fill().map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                    </div>

                    <div className="product-price font-bold text-gray-700 text-lg">
                        ${price}
                    </div>

                    <div onClick={addItemToBasket} className="h-9 w-32 text-md  bg-yellow-500 flex items-center justify-center text-white rounded-lg hover:bg-yellow-600 cursor-pointer duration-200">
                        Add to the cart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;