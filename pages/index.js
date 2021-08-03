import Head from 'next/head'
import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import Section from "../src/components/Section";
// import Header from "../src/components/Header";
const jdenticon = require("jdenticon");

export default function Home() {

    const size = 200;
    const value = "Rokas";
    // const png = jdenticon.toPng(value, size);


    return (
    <div className="bg-white w-full">
      <Head>
        <title>Amazon 2.2 App</title>
        <link rel="icon" href="/amazon-2.png" />
      </Head>

        <div className="">
            <Header />

            <div className="h-screen flex">

                <div className="w-1/5 bg-gray-900 border-gray-700 border-t-2  p-6">
                        <div className="">
                            <div className="text-yellow-500 cursor-pointer flex items-center font-bold mb-4 p-2">
                        <span className="w-8 mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F59E0C">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </span>

                                <span className="">Categories</span>
                            </div>

                            <div className="text-white cursor-pointer flex font-bold">
                                <span className="w-11"/>
                                <span className="">Echo and Alexa</span>
                            </div>

                            <div className="text-white cursor-pointer flex font-bold">
                                <span className="w-11"/>
                                <span className="">Kindle</span>
                            </div>

                            <div className="text-white cursor-pointer flex font-bold">
                                <span className="w-11"/>
                                <span className="">Books</span>
                            </div>

                            <div className="text-white cursor-pointer flex font-bold">
                                <span className="w-11"/>
                                <span className="">Electronics</span>
                            </div>

                            <div className="text-white cursor-pointer flex font-bold">
                                <span className="w-11"/>
                                <span className="">Home and Garden</span>
                            </div>

                            <div className="text-white cursor-pointer flex font-bold">
                                <span className="w-11"/>
                                <span className="">Fashion</span>
                            </div>


                        </div>
                    </div>

                <div>
                    <Section />
                </div>
            </div>
        </div>

    </div>
  )
}
