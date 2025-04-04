import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase'; // Ensure firebase is correctly configured
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Monitor authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            if (user) {
                localStorage.setItem('user', JSON.stringify(user)); // Store user in local storage
            } else {
                localStorage.removeItem('user'); // Remove user from local storage
            }
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    // Google Sign-In function
    const googleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User signed in: ", user);
        } catch (error) {
            console.error("Error during Google sign-in: ", error.message);
        }
    };

    // Logout function
    const logout = () => {
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ currentUser, isLoggedIn: !!currentUser, logout, googleSignIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
