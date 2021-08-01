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
    // const png = jdenticon.toPng(value, size);
    // const png = jdenticon.toPng(value, size);
    // const png = jdenticon.toPng(value, size);
    // const png = jdenticon.toPng(value, size);
    // const png = jdenticon.toPng(value, size);
    // const png = jdenticon.toPng(value, size);
    // const png = jdenticon.toPng(value, size);
    // const png = jdenticon.toPng(value, size);
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

                <div className="w-1/5 bg-gray-900 border-gray-700 border-t-2">
                    <Sidebar />
                </div>

                <div>
                    <Section />
                </div>
            </div>
        </div>

    </div>
  )
}
