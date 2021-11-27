import React from "react";
import { useSelector } from 'react-redux'
import Login from '../Component/Login'
import ChangeColor from '../Component/ChangeColor'
import ProfileOne from '../Component/ProfileOne'

function ProfileFour () {

    const user = useSelector( ( state ) => state.user.valueFour )
    const themeColor = useSelector( ( state ) => state.theme.valueFour );
    const backgroundColor = useSelector( ( state ) => state.theme.valueNine );
    return (
        <div className="profiles" style={ { color: themeColor, backgroundColor: backgroundColor } }>
            <h1>Employee 5</h1>
            <p>Name: { user.name } </p>
            <p>Age: { user.age }</p>
            <p>Email: { user.email }</p>

        </div>
    );
}


export default ProfileFour;
