import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const [login, setLogin] = useState();

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setLogin(currentUser);

        })

        return(()=>{
            unSubscribe();
        })
    }, [])

    return (
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;

UserContextProvider.propTypes = {
    children: PropTypes.node,
}