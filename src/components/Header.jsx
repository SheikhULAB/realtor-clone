import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pageState, setPageState] = useState("Sign In");
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setPageState("Profile");
          } else {
            setPageState("Sign in");
          }
        });
      }, [auth]);
      
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
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                                "text-black border-b-red-500"
                              }`}
                              onClick={() => navigate("/profile")}
                            >
                              {pageState}
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;
