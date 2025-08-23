import { NavLink, Outlet } from "react-router-dom";
import { FaUser , FaBreadSlice ,FaHorseHead} from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";

export const AdminLayout = () => {
    return (
     <>
     <header>
        <div className="container">
            <nav>
                <ul>
                    <li> <NavLink to="/admin/users"> <FaUser /> users </NavLink></li>
                    <li>  <NavLink to="/admin/contacts"><FaBreadSlice /> contacts </NavLink></li>
                    <li>  <NavLink to="/admin/services"> <FaHorseHead />services </NavLink></li>
                    <li>  <NavLink to="/admin/home"> <FaArrowUpRightDots /> home </NavLink></li>
                </ul>
            </nav>
        </div>
     </header>
     <Outlet/>
    </>
    );
}