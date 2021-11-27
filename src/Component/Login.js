import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../Features/user";
import { logout } from "../Features/user";
import { batch } from 'react-redux'

function Login () {


	const dispatch = useDispatch()
	return (
		<div className>
			<button
				onClick={ ( e ) => batch( () => {
					dispatch(
						login( {
							id: 1,
							name: "Ganesh Dimri",
							age: 27,
							email: "ganeshdimri71@gmail.com",
						} )
					);
					dispatch(
						login( {
							id: 2,
							name: "Bijay Sharma",
							age: 25,
							email: "bijaysharma@gmail.com",
						} )
					);
					dispatch(
						login( {
							id: 3,
							name: "Syed Hussain",
							age: 24,
							email: "syedhussain@gmail.com",
						} )
					);
					dispatch(
						login( {
							id: 4,
							name: "Swetha Sankar",
							age: 25,
							email: "shwetashankar@gmail.com",
						} )
					);
					dispatch(
						login( {
							id: 5,
							name: "Ashwin",
							age: 27,
							email: "ashwin@gmail.com",
						} )
					);
					dispatch(
						login( {
							id: 6,
							name: "Shashidhar Marigudi",
							age: 25,
							email: "shashidhar@gmail.com",
						} )
					);
				}
				)
				}

			>
				Login
			</button>
			<button
				onClick={ () => {
					dispatch( logout() );
				} }
			>
				Logout
			</button>
		</div >

	);
}

export default Login
