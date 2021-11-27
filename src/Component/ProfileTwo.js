import React from "react";
import { useSelector } from 'react-redux'
import Login from '../Component/Login'
import ChangeColor from '../Component/ChangeColor'
import ProfileOne from '../Component/ProfileOne'

function ProfileTwo () {

    const user = useSelector( ( state ) => state.user.valueTwo )
    const themeColor = useSelector( ( state ) => state.theme.valueTwo );
    return (
        <div className="profiles" style={ { color: themeColor } }>
            <h1>Employee 3</h1>
            <p>Name: { user.name } </p>
            <p>Age: { user.age }</p>
            <p>Email: { user.email }</p>


        </div>
    );
}


export default ProfileTwo;
