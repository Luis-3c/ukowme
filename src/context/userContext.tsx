"use client";

import { createContext, useEffect, useState } from "react";

export const userContext = createContext({});

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(() => { 
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null
     });

     useEffect(() => {
       localStorage.setItem('user', JSON.stringify(user));
     }, [user]);

     return (
        <userContext.Provider value={{ user, setUser}}>
            {children}
        </userContext.Provider>
     );
}