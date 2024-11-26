import React from 'react';

function Footer() {
    return (
        <>
            <div className="flex gap-5 w-full h-auto bg-zinc-900 p-20">
                {/* Left Section */}
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="heading">
                        <h1 className="text-[7vw] font-semibold uppercase leading-none -mb-5">EYE-</h1>
                        <h1 className="text-[7vw] font-semibold uppercase leading-none -mb-8">OPENING</h1>
                    </div>
                    <div className="svg -mb-10">
                        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Add your SVG paths here */}
                        </svg>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/2">
                    <div className="heading">
                        <h1 className="text-[5vw] px-14 pt-5 font-medium uppercase leading-none -mb-5">Quick Links</h1>
                        <div className="mt-10 px-5 flex flex-col items-start">
                            <h1 className='mb-6 pt-4 text-xl'>Social Media:</h1>
                            <div className='flex gap-14'>
                                <a className='block text-lg font-light hover:font-medium' href='#'>Facebook</a>
                                <a className='block text-lg font-light hover:font-medium' href='#'>Twitter</a>
                                <a className='block text-lg font-light hover:font-medium' href='#'>Instagram</a>
                                <a className='block text-lg font-light hover:font-medium' href='#'>LinkedIn</a>
                            </div>
                            <h1 className='mb-6 pt-8 text-xl'>Contact:</h1>
                            <div className="br border-[1px] rounded-3xl hover:text-black hover:bg-slate-100">
                                <h2 className='block text-lg font-light p-1 hover:font-medium'>hello@ochi.design</h2>
                            </div>
                            <h1 className='mb-7 pt-5 text-xl'>Address:</h1>
                            <div className="br flex gap-10 px-16">
                                <h2 className='block text-lg font-light underline'>202-1965 W 4th Ave, Vancouver, Canada</h2>
                                <h2 className='block text-lg font-light underline'>30 Chukarina St, Lviv, Ukraine</h2>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="bottom border-t-[1px] mt-3 border-zinc-400 h-[9%] flex justify-between items-center">
                        <p className='sm:text-[1vw] text-[2.8vw] sm:mr-0 mr-[8vw]'>@2024 Ankit-Singh. All Rights Reserved</p>
                        <div className="flex gap-4 text-lg">
                            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                            <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
