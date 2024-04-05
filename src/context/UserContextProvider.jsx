import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const [login, setLogin] = useState();

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