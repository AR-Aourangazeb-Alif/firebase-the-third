import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-6">
            <Nav></Nav>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;