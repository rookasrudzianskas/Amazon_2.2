import Head from 'next/head'
import React from "react";
import Main from "./main";
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

        <div>
            <Main />
        </div>


        <div>

        </div>
    </div>
  )
}

// now goes the cart page
