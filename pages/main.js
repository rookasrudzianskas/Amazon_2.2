import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import {useRouter} from "next/router";

const Main = () => {


    const router = useRouter();
    return (
        <div className="">
           <Header />

            <div className="h-screen flex ">
                <div className="w-1/5 bg-gray-900 border-gray-700 border-t-2  p-6 overflow-hidden">
                    <Sidebar />
                </div>
                <div className="flex-1 p-6 bg-gray-100">
                    <Section />


                </div>
            </div>
        </div>

    );
};

export default Main;
