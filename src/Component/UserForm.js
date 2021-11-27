import React, { useState } from "react";
import useInput from "../Hooks/useInput";

function UserForm() {
	const [firstName, bindFirstName, resetFirstName] = useInput("");
	const [lastName, bindLastName, resetLastName] = useInput("");

	const submitHandler = (e) => {
		e.preventDefault();
        alert( `Hello ${ firstName } ${ lastName }` );
        resetFirstName();
        resetLastName();
	};
	return (
		<div>
			<form action="" onSubmit={submitHandler}>
				<label htmlFor="">First Name</label>
				<input type="text" {...bindFirstName} /> <br />
				<label htmlFor="">Last Name</label>
				<input type="text" {...bindLastName} />
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default UserForm;
