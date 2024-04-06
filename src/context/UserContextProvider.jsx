import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const [login, setLogin] = useState();

    const logOut = () => {
        signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setLogin(currentUser);

        })

        return(()=>{
            unSubscribe();
        })
    }, [])

    return (
        <UserContext.Provider value={{login, setLogin, logOut}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;

UserContextProvider.propTypes = {
    children: PropTypes.node,
}