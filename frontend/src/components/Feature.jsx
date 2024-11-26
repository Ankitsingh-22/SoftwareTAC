import { easeIn, motion, useAnimation } from "framer-motion";
import React from "react";
import tc from "../../assets/tc.png";

function Featured() {
    const cards = [
        useAnimation(),
        useAnimation(),
    ];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div id="work"  className="w-full py-20">
            {/* Featured Projects Header */}
            <div  className="w-full px-[4.5vw] border-b-[1px] border-zinc-700 pb-10">
                <h1 className="text-[4vw] tracking-tighter">Featured Projects</h1>
            </div>

            {/* Featured Projects - Talent Connect and Industries Served */}
            <div  className="cards w-full flex gap-[4vw] pt-[6vw] px-[4.5vw]">
                {/* Talent Connect Project Card */}
                <motion.div
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="card relative w-1/2 h-[70vh]"
                >
                    <h1
                        className="absolute flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none
                        tracking-tighter text-[6vw] font-bold"
                    >
                        {"Talent Connect".split("").map((item, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[0]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                className="inline-block"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <img
                        className="rounded-lg overflow-hidden"
                        src={tc}
                        alt="Talent Connect Project"
                    />
                </motion.div>

                {/* Industries Served Card */}
                <motion.div
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className="card relative w-1/2 h-[70vh]"
                >
                    <h1
                        className="absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none
                        tracking-tighter text-[7vw] font-bold"
                    >
                        
                    </h1>
                    <div className="text-lg text-gray-300 p-6">
                       <h3 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-400">
                        Talent Connect - Empowering the Future of Hiring
                        </h3>

                        <p className="mt-4">
                            <strong>Challenge:</strong> We were tasked with building a comprehensive platform to connect job seekers, employers, and educational institutions seamlessly.
                        </p>
                        <p className="mt-4">
                            <strong>Solution:</strong> Our solution involved developing an intuitive interface and backend to allow easy job search, profile building, and resume management.
                        </p>
                        <p className="mt-4">
                            <strong>Result:</strong> The platform has enabled thousands of candidates to find job opportunities and companies to connect with top talent quickly and effectively.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* View All Button */}
            <div className="grid place-items-center pt-[10vw]">
                <button className="group flex gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-800 rounded-full text-white hover:bg-black">
                    VIEW ALL CASE STUDIES
                    <div className="group-hover:scale-150 w-[0.8vw] h-[0.8vw] rounded-full bg-white"></div>
                </button>
            </div>

            {/* Divider */}
            <div className="w-full border-t-[1px] mt-20 border-[#747768] flex gap-5"></div>
        </div>
    );
}

export default Featured;
