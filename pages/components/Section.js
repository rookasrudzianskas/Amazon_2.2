import React from 'react';

const Section = () => {





    // this is firebase stuff

    return (
        <div>
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

                        <div className="h-9 w-32 text-md  bg-yellow-500 flex items-center justify-center text-white rounded-lg hover:bg-yellow-600 cursor-pointer duration-200">
                            Add to the cart
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

                        <div className="h-8 w-32 text-md  bg-yellow-500 flex items-center justify-center text-white rounded-lg hover:bg-yellow-600 cursor-pointer duration-200">
                            Add to the cart
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

                        <div className="h-8 w-32 text-md  bg-yellow-500 flex items-center justify-center text-white rounded-lg hover:bg-yellow-600 cursor-pointer duration-200">
                            Add to the cart
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

                        <div className="h-8 w-32 text-md  bg-yellow-500 flex items-center justify-center text-white rounded-lg hover:bg-yellow-600 cursor-pointer duration-200">
                            Add to the cart
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
                            $4577.000
                        </div>

                        <div className="h-8 w-32 text-md  bg-yellow-500 flex items-center justify-center text-white rounded-lg hover:bg-yellow-600 cursor-pointer duration-200">
                            Add to the cart
                        </div>
                    </div>

                </div>
            </div>

            <div className="">

            </div>
        </div>
    );
};

export default Section;
