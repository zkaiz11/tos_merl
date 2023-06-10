import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import DataContext from "../contexts/DataContext";
const Protected = ({ children }) => {
    const {isLoggedIn} = useContext(DataContext)
    console.log(isLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to='/account/login' replace />;
    }
        return children ? children : <Outlet/>
};
export default Protected;