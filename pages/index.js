import Head from 'next/head'
import React from "react";
import Header from "../src/components/Header";
// import Header from "../src/components/Header";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Head>
        <title>Amazon 2.2 App</title>
        <link rel="icon" href="/amazon-2.png" />
      </Head>

        <div className="">

            <div className="h-16 bg-gray-900 flex flex-row items-center">
                <div className="w-1/5 h-16 ml-10 pt-1">
                    <img className="w-28 h-16 object-contain" src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" />
                </div>

                <input type="text" id="Search" placeholder="Search" className="placeholder-white h-9 w-30 bg-gray-800 border border-gray-500 border-opacity-75 rounded-l-xl outline-none px-3 text-white ml-6 md:w-96"/>

                <div className="h-9 w-30 border border-gray-500 border-opacity-75 px-3 bg-gray-800 justify-center items-center flex">
                        <div className="text-white mr-3">categories</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div className="bg-yellow-500 h-9 w-10 items-center flex rounded-r-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>



            </div>
            {/*<Header />*/}
        </div>
                {/*<Header />*/}

    </div>
  )
}
