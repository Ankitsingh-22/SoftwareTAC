import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true); // State to track visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // If scrolling down and past 50px, hide navbar
            setVisible(false);
        } else {
            // If scrolling up, show navbar
            setVisible(true);
        }

        setLastScrollY(currentScrollY); // Update the last scroll position
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            } bg-gray-800 shadow-md`}
        >
            <div className="w-full px-6 md:px-20 py-4 flex justify-between items-center text-white">
                {/* Logo */}
                <div className="logo">
                    <svg
                        width="72"
                        height="30"
                        viewBox="0 0 72 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white z-40 transform ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 md:static md:translate-x-0 md:flex md:gap-10 md:bg-transparent md:w-auto md:h-auto`}
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-2xl md:hidden"
                    >
                        <FiX />
                    </button>

                    <div className="flex flex-col items-center w-full bg-black rounded-b-2xl p-5 md:p-1 bg-opacity-80 shadow-lg gap-8 mt-16 md:mt-0 md:flex-row md:items-center md:gap-6 md:bg-transparent md:backdrop-blur-none md:shadow-none">
                        {[
                            { label: "Services", to: "services" },
                            { label: "About Us", to: "about-us" },
                            { label: "Work", to: "featured" },
                            { label: "Contact Us", to: "contact" },
                        ].map(({ label, to }, index) => (
                            <Link
                                key={index}
                                to={to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-semibold relative group cursor-pointer"
                            >
                                {label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
