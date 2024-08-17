import { Outlet } from "react-router-dom";
import Navar from "./Sheard/Navar";

const MainLayout = () => {
    return (
        <div>
            <Navar></Navar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;