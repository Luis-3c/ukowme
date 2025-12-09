"use client";

import { userContext } from '@/context/userContext';
import cookies  from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export const NavbarOptions = () => {
    const { user } = useContext<any>(userContext);
    const router = useRouter();

    const handleLogOut = () => {
        //setUser(null);
        localStorage.removeItem('user');
        cookies.remove('token');
        router.push('/login');
      };

  return (
    <>
    {user ? (
        <div className="flex flex-col sm:flex-row sm:block">
          <a
            href="#"
            className=" text-md px-4 py-2  mt-5 text-center lg:mt-10 text-white border-gray-400 hover:bg-gray-700 transition-colors"
          >
            {user.name}
          </a>
          <a
            onClick={handleLogOut}
            href="#"
            className=" text-sm px-4 py-2 rounded-md border sm:ml-5 mt-5 text-center lg:mt-10 text-white border-gray-400 hover:bg-gray-700 transition-colors"
          >
            Log Out
          </a>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:block ">
            <a
              href="#"
              className=" text-sm px-4 py-2 rounded-md border mt-5 text-center lg:mt-10 text-white border-gray-400 hover:bg-gray-700  transition-colors"
            >
              Log In
            </a>
            <a
              href="#"
              className=" text-sm px-4 py-2 rounded-md border sm:ml-5 mt-5 text-center lg:mt-10 text-white border-gray-400 hover:bg-gray-700 transition-colors"
            >
              Sign Up
            </a>
        </div>
      )}
    </>
  )
}
