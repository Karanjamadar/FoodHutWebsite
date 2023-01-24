import React, { createContext, useState, useEffect } from "react";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const initialAuth = {
        'isLoggedIn': false,
        'token': null,
        'user': null
    };
    // Get current auth state from AsyncStorage
    const getAuthState = () => {
        try {
            const authDataString = localStorage.getItem("user");
            const authData = JSON.parse(authDataString || initialAuth);
            setAuth(authData);
        } catch (err) {
            setAuth(initialAuth);
        }
    };

    useEffect(() => {
        getAuthState();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;