import React from "react";
import Header from "../common/Header";
const Home = () => {
    return (
        <>
            <Header />
            <div className="bg-white w-full py-16 pb-20 lg:pb-[50px] pt-20 lg:pt-[80px] overflow-x-hidden">
                <div className="container mx-auto px-4 ">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-7/12 px-4 lg:pr-6">
                            <div className="hero-content ml-20 mt-5">
                                <h1 className="mb-5 text-4xl font-bold leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    Explore the Open Road with WheelzWay Car Rentals
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                    At WheelzWay, we're here to make your journey seamless. Whether it's a spontaneous road trip or a planned excursion, we ensure you have the right wheels at the right time. Our flexible booking options and reliable service ensure that your travel plans adapt effortlessly to your needs, leaving you free to focus on the road ahead.
                                </p>
                                <a className="mb-2 inline-block rounded bg-teal-950 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                                    data-te-ripple-init data-te-ripple-color="light" href="/search_car" role="button">Get Rolling</a>
                                <a className="inline-block rounded px-12 pt-4 pb-3.5 bg-teal-800 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                                    data-te-ripple-init data-te-ripple-color="light" href="/request" role="button">Browse Further</a>
                                <div className="clients pt-16">
                                    <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                                        Some Of Our Clients
                                        <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                                    </h6>

                                    <div className="flex items-center space-x-4">
                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                                        />

                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                                        />

                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12 px-4">
                            <div className="relative inline-block ml-10 max-w-full lg:max-w-none">
                                <img
                                    src="../../../public/car_rental_bg.png"
                                    alt="hero"
                                    className="w-500"
                                    width="500"
                                    style={{ height: "400px" }}
                                />
                                <span className="absolute -bottom-8 -left-8 z-10">
                                    <svg
                                        width="93"
                                        height="93"
                                        viewBox="0 0 93 93"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="blue" />
                                        <circle cx="2.5" cy="24.5" r="2.5" fill="blue" />
                                        <circle cx="2.5" cy="46.5" r="2.5" fill="blue" />
                                        <circle cx="2.5" cy="68.5" r="2.5" fill="blue" />
                                        <circle cx="2.5" cy="90.5" r="2.5" fill="blue" />
                                        <circle cx="24.5" cy="2.5" r="2.5" fill="blue" />
                                        <circle cx="24.5" cy="24.5" r="2.5" fill="blue" />
                                        <circle cx="24.5" cy="46.5" r="2.5" fill="blue" />
                                        <circle cx="24.5" cy="68.5" r="2.5" fill="blue" />
                                        <circle cx="24.5" cy="90.5" r="2.5" fill="blue" />
                                        <circle cx="46.5" cy="2.5" r="2.5" fill="blue" />
                                        <circle cx="46.5" cy="24.5" r="2.5" fill="blue" />
                                        <circle cx="46.5" cy="46.5" r="2.5" fill="blue" />
                                        <circle cx="46.5" cy="68.5" r="2.5" fill="blue" />
                                        <circle cx="46.5" cy="90.5" r="2.5" fill="blue" />
                                        <circle cx="68.5" cy="2.5" r="2.5" fill="blue" />
                                        <circle cx="68.5" cy="24.5" r="2.5" fill="blue" />
                                        <circle cx="68.5" cy="46.5" r="2.5" fill="blue" />
                                        <circle cx="68.5" cy="68.5" r="2.5" fill="blue" />
                                        <circle cx="68.5" cy="90.5" r="2.5" fill="blue" />
                                        <circle cx="90.5" cy="2.5" r="2.5" fill="blue" />
                                        <circle cx="90.5" cy="24.5" r="2.5" fill="blue" />
                                        <circle cx="90.5" cy="46.5" r="2.5" fill="blue" />
                                        <circle cx="90.5" cy="68.5" r="2.5" fill="blue" />
                                        <circle cx="90.5" cy="90.5" r="2.5" fill="blue" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};
export default Home;
