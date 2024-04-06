import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

const Nav = () => {

    const { login, logOut } = useContext(UserContext);


    return (
        <div className="flex items-center justify-between py-4 border-b border-primary-content">
            <div className="w-[25%]">
                <Link
                    to={'/'}
                    className="text-3xl font-semibold">
                    F <span className="text-primary">I</span> R <span className="text-primary">E</span>
                </Link>
            </div>

            <ul className="flex items-center gap-10 text-lg font-medium">
                <li>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => isActive ? "text-primary group" : "group"}>
                        Home
                        <div className="h-[2px] w-0 bg-primary group-hover:w-full mx-auto transition-all"></div>
                    </NavLink>
                </li>
                
            </ul>

            <div className="w-[30%] flex items-center justify-end gap-8">
                {
                    login ? <div className="flex items-center gap-3">
                        <h1 className="font-medium">{login.displayName + ""}</h1>
                        <div className={`w-[40px] h-[40px] rounded-full ${login.photoURL ? "" : "bg-primary"}`}>

                            {login.photoURL ? <img src={`${login.photoURL}`} className="h-full w-full rounded-full object-cover" /> : ""}
                        </div>

                        <button className="px-3 py-2 border-2 w-fit h-fit rounded-md border-primary hover:bg-primary hover:text-primary-content transition active:scale-95 text-lg font-semibold" onClick={logOut}>
                            Sign Out
                        </button>
                    </div> 

                    : 

                    <div className="flex items-center gap-3">

                        <Link 
                        to={'/login'}
                        className="px-5 py-3 border-2 rounded-md border-primary">LogIn</Link>

                    </div>
                }

               
            </div>
        </div>
    );
};

export default Nav;