import React from "react";
import { useSelector } from 'react-redux'
import Login from '../Component/Login'
import ChangeColor from '../Component/ChangeColor'

function ProfileOne () {

    const user = useSelector( ( state ) => state.user.valueOne )
    const themeColor = useSelector( ( state ) => state.theme.valueOne );
    return (
        <div className="profiles" style={ { color: themeColor } }>
            <h1>Employee 2</h1>
            <p>Name: { user.name } </p>
            <p>Age: { user.age }</p>
            <p>Email: { user.email }</p>


        </div>
    );
}


export default ProfileOne;
