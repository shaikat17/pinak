import { createContext, useContext, useEffect, useState } from "react";



const AppAuthContext = createContext()

const AppAuthContextProvider = ({ children }) => {
    

    return (
        <AppAuthContext.Provider value={{
            
        }}>
            {children}
        </AppAuthContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppAuthContext)
}

export { AppAuthContext, AppAuthContextProvider }