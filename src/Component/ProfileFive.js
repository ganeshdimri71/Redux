import React from "react";
import { useSelector } from 'react-redux'
import Login from '../Component/Login'
import LoginOne from '../Component/LoginOne'
import { Button } from 'react-bootstrap'

function ProfileFive ( props ) {

    const user = useSelector( ( state ) => state.user.value )
    const themeColor = useSelector( ( state ) => state.theme.value );
    return (
        <div className="profilesManagement">
            {/* <Button><Login /></Button> */ }
            <LoginOne display={ props.display } />

        </div>
    );
}


export default ProfileFive;
