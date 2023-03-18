import React, { useState, useEffect, createContext } from "react"
import { auth } from "../../firebase"
import { onAuthStateChanged } from "firebase/auth";

export const UserContext : any = createContext(null);

interface Props {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<Props> = ({children}) => {
    const [authUser, setAuthUser] : any = useState(null);

    useEffect(() => {
            const unsubscribe : any = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setAuthUser(user);
                } else {
                    setAuthUser(null);
                }
                return unsubscribe;
            });
        
    }, [])

    return (
        <UserContext.Provider value={authUser}>
            {children}
        </UserContext.Provider>
    )
}