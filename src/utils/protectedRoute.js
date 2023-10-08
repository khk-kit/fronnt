import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    // const user = useSelector((state) => state);
    // console.log('Check User Role---->',user)
    const userDetails = JSON.parse(localStorage.getItem('User'));
    console.log('Check User Role 02---->',userDetails);
    let location = useLocation();

    if(userDetails?.user?.role !== 'admin') {
        return <Navigate to="/" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;