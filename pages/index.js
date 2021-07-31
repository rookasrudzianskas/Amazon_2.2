import Head from 'next/head'
import React from "react";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Head>
        <title>Amazon 2.2 App</title>
        <link rel="icon" href="/amazon-2.png" />
      </Head>

        <div>
            <Header />
        </div>
                {/*<Header />*/}

    </div>
  )
}
