"use client"
import { ReactElement, ReactNode, createContext, useContext, useEffect, useState } from "react";


const userContext = createContext({});

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

export const useUserContext = ():any => { 
    const context = useContext(userContext);
    if(!context){
        throw new Error('useUserContext musr be used inside a provider');
    }
    return context;
 }