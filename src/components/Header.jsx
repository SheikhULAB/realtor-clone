import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route) {
        return route === location.pathname;
    }

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img
                        src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                        alt="realtor logo"
                        className='h-5 cursor-pointer'
                        onClick={() => navigate("/")}
                    />
                </div>

                <div>
                    <ul className='flex space-x-10'>
                        <li
                            onClick={() => navigate("/")}
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                                ${pathMatchRoute("/") ? "text-black border-b-2 border-red-500" : "border-b-2 border-transparent"}`}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => navigate("/offers")}
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                                ${pathMatchRoute("/offers") ? "text-black border-b-2 border-red-500" : "border-b-2 border-transparent"}`}
                        >
                            Offers
                        </li>
                        <li
                            onClick={() => navigate("/sign-in")}
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                                ${pathMatchRoute("/sign-in") ? "text-black border-b-2 border-red-500" : "border-b-2 border-transparent"}`}
                        >
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;
