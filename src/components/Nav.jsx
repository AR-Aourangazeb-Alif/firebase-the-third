import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

const Nav = () => {

    const { login } = useContext(UserContext);

    

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
                <li>
                    <NavLink
                        to={'/login'}
                        className={({ isActive }) => isActive ? "text-primary group" : "group"}>
                        Login
                        <div className="h-[2px] w-0 bg-primary group-hover:w-full mx-auto transition-all"></div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/register'}
                        className={({ isActive }) => isActive ? "text-primary group" : "group"}>
                        Register
                        <div className="h-[2px] w-0 bg-primary group-hover:w-full mx-auto transition-all"></div>
                    </NavLink>
                </li>
            </ul>

            <div className="w-[25%] flex items-center justify-end gap-8">
                {
                    login ? <div className="flex items-center gap-3">
                        <h1 className="font-medium">{login.displayName + ""}</h1>
                        <div className={`w-[40px] h-[40px] rounded-full ${login.photoURL ? "" : "bg-primary"}`}>

                            {login.photoURL ? <img src={`${login.photoURL}`} className="h-full w-full rounded-full object-cover" /> : ""}
                        </div>
                    </div> : ""
                }

                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="sunset" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Nav;