import React from "react";
import { useSelector } from 'react-redux'
import Login from '../Component/Login'
import ChangeColor from '../Component/ChangeColor'
import ProfileOne from '../Component/ProfileOne'

function ProfileThree () {

    const user = useSelector( ( state ) => state.user.valueThree )
    const themeColor = useSelector( ( state ) => state.theme.valueThree );
    const backgroundColor = useSelector( ( state ) => state.theme.valueEight );
    return (
        <div className="profiles" style={ { color: themeColor, backgroundColor: backgroundColor } }>
            <h1>Employee 4</h1>
            <p>Name: { user.name } </p>
            <p>Age: { user.age }</p>
            <p>Email: { user.email }</p>


        </div>
    );
}


export default ProfileThree;
