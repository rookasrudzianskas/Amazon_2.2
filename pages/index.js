import Head from 'next/head'
import React from "react";
// import Header from "../src/components/Header";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Head>
        <title>Amazon 2.2 App</title>
        <link rel="icon" href="/amazon-2.png" />
      </Head>

        <div className="">
            <div className="h-16 bg-gray-900	">
                <div className="w-1/5 h-16 ml-10 pt-2">
                    <img className="w-28 h-16 object-contain" src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" />
                </div>

                <input type="text" id="Search" placeholder="Search" className="h-9 w-30 bg-gray-800"/>
            </div>
            {/*<Header />*/}
        </div>
                {/*<Header />*/}

    </div>
  )
}
