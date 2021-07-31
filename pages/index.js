import Head from 'next/head'
import Header from "../src/components/Header";
import React from "react";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Head>
        <title>Amazon 2.2 App</title>
        <link rel="icon" href="/amazon-2.png" />
      </Head>

          <div className="">
                <Header />

          </div>
    </div>
  )
}
