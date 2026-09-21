import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {AuthorizationContext} from "./Authorization";

function ProtectedRoute() {
    const { isAuth } = useContext(AuthorizationContext);

    if (!isAuth) {
        return <Navigate to="/login"/>;
    }

    return <Outlet />;
}

export default ProtectedRoute;