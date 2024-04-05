import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const Home = () => {

    const {login} = useContext(UserContext);

    let firstName;

    if(login){
        firstName =  login.displayName.split(",");
    }

    return (
        <div>
            {login ? firstName[0] : "please Log In"}
        </div>
    );
};

export default Home;