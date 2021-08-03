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
        <link rel="icon" href="/amazon-2.png" />
      </Head>

        <div className="">
            <Header />

            <div className="h-screen flex ">
                <div className="w-1/5 bg-gray-900 border-gray-700 border-t-2  p-6 overflow-hidden">
                    <Sidebar />
                </div>
                <div className="flex-1 p-6 bg-gray-100">
                    {/*<Section />*/}
                    <div className="h-44 w-full main-section-banner rounded-lg flex items-end">
                        <div className="button bg-white w-36 h-10 m-4 rounded-full flex justify-center items-center ml-4 cursor-pointer">
                            <h4 className="text-bold text-yellow-500">Browse Products</h4>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center mt-10">
                            <h1 className="font-bold mr-2 text-gray-700 text-2xl">Popular categories</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f59e0c" viewBox="0 0 24 24" stroke="#f59e0c">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>

                        <div className="categories">
                            <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#374151">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
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
