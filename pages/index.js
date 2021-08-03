import Head from 'next/head'
import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import Section from "../src/components/Section";
// import Header from "../src/components/Header";
const jdenticon = require("jdenticon");
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    const size = 200;
    const value = "Rokas";
    // const png = jdenticon.toPng(value, size);

    return (
    <div className="bg-white w-full h-screen overflow-hidden">
        <Head>
            <title>Amazon 2.2 App</title>
            <link rel="icon" href="/amazon-2.png"/>
        </Head>

        <div className="">
            {/*<Header/>*/}
            {/*    =====================    */}
            <div className="h-16 bg-gray-900 flex flex-row items-center">
                <div className="w-1/5 h-16 ml-10 pt-1">
                    <img className="w-28 h-16 object-contain" src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" />
                </div>

                <input type="text" id="Search" placeholder="Search" className="placeholder-white h-9 w-30 bg-gray-800 border border-gray-500 border-opacity-75 rounded-l-xl outline-none px-3 text-white ml-6 md:w-96"/>

                <div className="h-9 w-30 border border-gray-500 border-opacity-75 px-3 bg-gray-800 justify-center items-center flex">
                    <div className="text-white mr-2">categories</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div className="bg-yellow-500 h-9 w-10 items-center flex rounded-r-xl">
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

                    <div className="text-gray-600 h-10 w-10 bg-yellow-500 flex items-center justify-center rounded-xl">
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
            {/*    =====================    */}

            <div className="h-screen flex ">
                <div className="w-1/5 bg-gray-900 border-gray-700 border-t-2  p-6 overflow-hidden">
                    {/*<Sidebar/>*/}
                {/*    =====================    */}
                    <div className="">
                        <div className=" bg-gray-700 rounded-lg text-yellow-500 cursor-pointer flex items-center font-bold mb-4 p-2">
                        <span className="w-8 mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F59E0C">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </span>

                            <span className="">Categories</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-3">
                            <span className="w-11"/>
                            <span className="">Echo and Alexa</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-3">
                            <span className="w-11"/>
                            <span className="">Kindle</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-3">
                            <span className="w-11"/>
                            <span className="">Books</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-3">
                            <span className="w-11"/>
                            <span className="">Electronics</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-3">
                            <span className="w-11"/>
                            <span className="">Home and Garden</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-5">
                            <span className="w-11"/>
                            <span className="">Fashion</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-3 font-bold hover:bg-gray-700 rounded-lg duration-200	p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="w-4"/>
                            <span className="">Sell on Amazon</span>
                        </div>

                        <div className="text-white cursor-pointer flex mb-3 font-bold hover:bg-gray-700 rounded-lg duration-200	p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="w-4"/>
                            <span className="">Help</span>

                        </div>


                    </div>
                {/*    =====================    */}
                </div>
                <div className="flex-1 p-6 bg-gray-100">
                    {/*<Section />*/}
                    <div className="h-44 w-full main-section-banner rounded-lg flex items-end">
                        <div
                            className="button bg-white w-36 h-10 m-4 rounded-full flex justify-center items-center ml-4 cursor-pointer">
                            <h4 className="text-bold text-yellow-500">Browse Products</h4>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center mt-10  mb-5">
                            <h1 className="font-bold mr-2 text-gray-700 text-2xl">Popular categories</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f59e0c"
                                 viewBox="0 0 24 24" stroke="#f59e0c">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                            </svg>
                        </div>

                        <div className="categories flex">
                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>

                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                                </svg>
                            </div>

                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                </svg>
                            </div>

                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>


                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>


                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                                </svg>
                            </div>

                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            </div>

                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </div>

                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>

                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center   mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                     viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="main-section-deals">
                        <h1 className="text-2xl font-bold text-gray-700 mb-5 mt-10">Hot Deals 🚀</h1>

                        <div className="flex ">
                            <div className="main-product mr-5">
                                <div className="product-image w-48 h-52 bg-white rounded-lg flex items-center justify-center">
                                    <img src="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" className="p-4" alt=""/>
                                </div>

                                <div className="product-name text-gray-700 font-bold mt-2 text-sm">
                                    Nintendo Switch(2020)
                                </div>
                                <div className="product-make text-green-700 font-bold">
                                    nintendo Inc.
                                </div>

                                <div className="product-rating text-yellow-300 my-1">
                                    ⭐⭐⭐⭐⭐⭐ 6.5
                                </div>

                                <div className="product-price font-bold text-gray-700 text-lg">
                                    $4567.000
                                </div>
                            </div>

                            <div className="main-product ">
                                <div className="product-image w-48 h-52 bg-white rounded-lg flex items-center justify-center mr-5">
                                    <img src="data:image/jpeg;base64,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" className="p-4" alt=""/>
                                </div>

                                <div className="product-name text-gray-700 font-bold mt-2 text-sm">
                                    Iphone Switch(2020)
                                </div>
                                <div className="product-make text-green-700 font-bold">
                                    apple Inc.
                                </div>

                                <div className="product-rating text-yellow-300 my-1">
                                    ⭐⭐⭐⭐⭐⭐ 7.5
                                </div>

                                <div className="product-price font-bold text-gray-700 text-lg">
                                    $467.000
                                </div>
                            </div>

                            <div className="main-product mr-5">
                                <div className="product-image w-48 h-52 bg-white rounded-lg flex items-center justify-center">
                                    <img src="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" className="p-4" alt=""/>
                                </div>

                                <div className="product-name text-gray-700 font-bold mt-2 text-sm">
                                    Nintendo Switch(2020)
                                </div>
                                <div className="product-make text-green-700 font-bold">
                                    nintendo Inc.
                                </div>

                                <div className="product-rating text-yellow-300 my-1">
                                    ⭐⭐⭐⭐⭐⭐ 6.5
                                </div>

                                <div className="product-price font-bold text-gray-700 text-lg">
                                    $4567.000
                                </div>
                            </div>

                            <div className="main-product ">
                                <div className="product-image w-48 h-52 bg-white rounded-lg flex items-center justify-center mr-5">
                                    <img src="data:image/jpeg;base64,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" className="p-4" alt=""/>
                                </div>

                                <div className="product-name text-gray-700 font-bold mt-2 text-sm">
                                    Iphone Switch(2020)
                                </div>
                                <div className="product-make text-green-700 font-bold">
                                    apple Inc.
                                </div>

                                <div className="product-rating text-yellow-300 my-1">
                                    ⭐⭐⭐⭐⭐⭐ 7.5
                                </div>

                                <div className="product-price font-bold text-gray-700 text-lg">
                                    $467.000
                                </div>
                            </div>

                            <div className="main-product mr-5">
                                <div className="product-image w-48 h-52 bg-white rounded-lg flex items-center justify-center">
                                    <img src="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" className="p-4" alt=""/>
                                </div>

                                <div className="product-name text-gray-700 font-bold mt-2 text-sm">
                                    Nintendo Switch(2020)
                                </div>
                                <div className="product-make text-green-700 font-bold">
                                    nintendo Inc.
                                </div>

                                <div className="product-rating text-yellow-300 my-1">
                                    ⭐⭐⭐⭐⭐⭐ 6.5
                                </div>

                                <div className="product-price font-bold text-gray-700 text-lg">
                                    $4567.000
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="">

                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}
