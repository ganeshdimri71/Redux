import React from 'react'
import Profile from '../Component/Profile'
import ProfileOne from '../Component/ProfileOne'
import ProfileTwo from '../Component/ProfileTwo'
import ProfileThree from '../Component/ProfileThree'
import ProfileFour from '../Component/ProfileFour'
import ProfileFive from '../Component/ProfileFive'

function ProfileRenerer () {
    return (
        <div className='ProfileRenerer'>
            <Profile />
            <ProfileOne />
            <ProfileTwo />
            <ProfileThree />
            <ProfileFour />
            <ProfileFive />
        </div>
    )
}

export default ProfileRenerer
