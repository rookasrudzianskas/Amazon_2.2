import React, {useEffect, useState} from 'react';
import db from "../../firebase";
import Product from "./Product";


const Section = () => {
    // this is firebase stuff

    const [items, setItems] = useState([]);
    // console.log("🚀", items)
    console.log("Array of ", items)



    // const min = 1;
    // const max = 5;

    useEffect(() => {
        db.collection('items').get().then((snapshot) => {
            setItems(snapshot.docs.map(doc => ({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().title,
                make: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price,
            })));
        })
    }, []);




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

                <div className="flex flex-row">
                {items.map((item) => (
                    <Product key={item.id} id={item.id} title={item.title} price={item.price} name={item.name} make={item.make} rating={item.rating} image={item.image}/>
                    ))}
                </div>


            </div>

            <div className="">

            </div>
        </div>
    );
};

export default Section;

// firebase integrated