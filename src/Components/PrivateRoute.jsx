import React from "react";
import { useContext } from "react";
import {AppContext} from "../Context/AppContext";
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
    const {authState} =useContext(AppContext);

    if(!authState.isAuth){
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRoute;
