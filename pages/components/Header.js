import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {useRouter} from "next/router";
import db from "../../firebase";
import {useSelector} from "react-redux";
import {selectItems} from "../../slices/basketSlice";


const Header = () => {
    const items = useSelector(selectItems);


    const router = useRouter();

    // useEffect(() => {
    //     db.collection('items').get().then((snapshot) => {
    //         setItems(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //         })));
    //     })
    // }, []);

    // firebase is working on

    return (
       <div>
           <div className="h-16 bg-gray-900 flex flex-row items-center">
               <div className="w-1/5 h-16 ml-10 pt-1 cursor-pointer" onClick={() => router.push('/')}>
                   <img className="w-28 h-16 object-contain" src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" />
               </div>

               <input type="text" id="Search" placeholder="Search" className="placeholder-white h-9 w-30 bg-gray-800 border border-gray-500 border-opacity-75 rounded-l-xl outline-none px-3 text-white ml-6 md:w-96"/>

               <div className="h-9 w-30 border border-gray-500 border-opacity-75 px-3 bg-gray-800 justify-center items-center flex">
                   <div className="text-white mr-2">categories</div>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
               </div>

               <div className="bg-yellow-500 h-9 w-10 items-center flex rounded-r-xl hover:bg-yellow-600 duration-200 cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="white">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
               </div>


               <div className="text-white flex items-center ml-auto mr-8 w-48 h-16 justify-around">
                   <div>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                       </svg>
                   </div>

                   {/*orange box*/}

                   {/* this is card icon*/}
                   <div className="relative text-gray-600 h-10 w-10 bg-yellow-500 flex items-center justify-center rounded-xl cursor-pointer hover:bg-yellow-600 duration-200" onClick={() =>  router.push('/cart')}>
                       <div className="absolute -top-1 -right-1 bg-white w-4 h-4 rounded-full flex items-center justify-center border-1 border-black solid text-sm">{items.length}</div>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                       </svg>
                   </div>

                   <div className="">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                       </svg>
                   </div>

                   <div className="h-12 w-12 rounded-full-xl">
                       <img src="data:image/png;base64,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" alt=""/>
                   </div>
               </div>


           </div>
           {/*<Header />*/}
       </div>
    );
};

export default Header;


// done
