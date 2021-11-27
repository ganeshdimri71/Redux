import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../Features/user";
import { logout } from "../Features/user";
import { batch } from 'react-redux'
import { changeColor, changeBackgroundColor } from '../Features/theme'
import { profileDisplayerFunction } from '../Features/user'

function LoginOne ( props ) {
    const [ employee, setemployee ] = useState( '' )
    const [ age, setAge ] = useState( '' )
    const [ gmail, setGmail ] = useState( '' )

    const [ employeeTwo, setemployeeOne ] = useState( '' )
    const [ ageTwo, setAgeTwo ] = useState( '' )
    const [ gmailTwo, setGmailTwo ] = useState( '' )

    const [ employeeThree, setemployeeTwo ] = useState( '' )
    const [ ageThree, setAgeThree ] = useState( '' )
    const [ gmailThree, setGmailThree ] = useState( '' )

    const [ employeeFour, setemployeeThree ] = useState( '' )
    const [ ageFour, setAgeFour ] = useState( '' )
    const [ gmailFour, setGmailFour ] = useState( '' )

    const [ employeeFive, setemployeeFour ] = useState( '' )
    const [ ageFive, setAgeFive ] = useState( '' )
    const [ gmailFive, setGmailFive ] = useState( '' )

    const [ displayOne, setDisplayOne ] = useState( true )
    const [ displayTwo, setDisplayTwo ] = useState( false )
    const [ displayThree, setDisplayThree ] = useState( false )
    const [ displayFour, setDisplayFour ] = useState( false )
    const [ displayFive, setDisplayFive ] = useState( false )

    const [ color, setColor ] = useState( '' );
    const [ colorOne, setColorOne ] = useState( '' );
    const [ colorTwo, setColorTwo ] = useState( '' );
    const [ colorThree, setColorThree ] = useState( '' );
    const [ colorFour, setColorFour ] = useState( '' );

    const [ background, setbackground ] = useState( '' );
    const [ backgroundOne, setbackgroundOne ] = useState( '' );
    const [ backgroundTwo, setbackgroundTwo ] = useState( '' );
    const [ backgroundThree, setbackgroundThree ] = useState( '' );
    const [ backgroundFour, setbackgroundFour ] = useState( '' );

    const [ profile, setprofile ] = useState( false )

    const nextProfile = () => {
        setDisplayOne( false )
        setDisplayTwo( true )
        setDisplayThree( false )
        setDisplayFour( false )
        setDisplayFive( false )
    }

    const nextProfileOne = () => {
        setDisplayOne( false )
        setDisplayTwo( false )
        setDisplayThree( true )
        setDisplayFour( false )
        setDisplayFive( false )
    }

    const nextProfileTwo = () => {
        setDisplayOne( false )
        setDisplayTwo( false )
        setDisplayThree( false )
        setDisplayFour( true )
        setDisplayFive( false )
    }

    const nextProfileThree = () => {
        setDisplayOne( false )
        setDisplayTwo( false )
        setDisplayThree( false )
        setDisplayFour( false )
        setDisplayFive( true )
    }

    const nextProfileFour = () => {
        setDisplayOne( true )
        setDisplayTwo( false )
        setDisplayThree( false )
        setDisplayFour( false )
        setDisplayFive( false )
    }




    const dispatch = useDispatch()
    return (
        <div style={ { background: 'rgb(205 102 102)', padding: '1rem' } }>

            <div className="login" style={ { display: displayOne ? 'block' : 'none', } }>
                <h1>Employee No : 1</h1>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '12rem' } }>Name:</b>
                    <select name="ddl" onChange={ ( e ) => setemployee( e.target.value ) }>
                        <option value='ganesh'>Ganesh</option>
                        <option value='bijay'>Bijay</option>
                        <option value='swetha'>Swetha</option>
                        <option value='Syed'>Syed</option>
                        <option value='' selected>Select Name </option>
                        <option value='aswin'>Ashwin</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '13.8rem' } }>Age:</b>
                    <select name="ddl" onChange={ ( e ) => setAge( e.target.value ) }>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                        <option value='30'>30</option>
                        <option value='35'>35</option>
                        <option value='' selected>Select Age </option>
                        <option value='40'>40</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '3rem' } }>Email:</b>
                    <select name="ddl" onChange={ ( e ) => setGmail( e.target.value ) }>
                        <option>ganeshdimri@gmail.com</option>
                        <option>bijay@gmail.com</option>
                        <option>swetha@gmail.com</option>
                        <option>syed@gmail.com</option>
                        <option value='' selected>Select Email </option>
                        <option>ashwin@gmail.com</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '17rem' } }>Color:</b>
                    <select name="ddl" onChange={ ( e ) => setColor( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '14rem' } }>Background:</b>
                    <select name="ddl" onChange={ ( e ) => setbackground( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <button onClick={ ( e ) => nextProfile() }>Next</button>

            </div>
            <div className="login" style={ { display: displayTwo ? 'block' : 'none' } }>
                <h1>Employee No : 2</h1>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '12rem' } }>Name:</b>
                    <select name="ddl" onChange={ ( e ) => setemployeeOne( e.target.value ) }>
                        <option value='ganesh'>Ganesh</option>
                        <option value='bijay'>Bijay</option>
                        <option value='swetha'>Swetha</option>
                        <option value='Syed'>Syed</option>
                        <option value='' selected>Select Name </option>
                        <option value='aswin'>Ashwin</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '13.8rem' } }>Age:</b>
                    <select name="ddl" onChange={ ( e ) => setAgeTwo( e.target.value ) }>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                        <option value='30'>30</option>
                        <option value='35'>35</option>
                        <option value='' selected>Select Age </option>
                        <option value='40'>40</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '3rem' } }>Email:</b>
                    <select name="ddl" onChange={ ( e ) => setGmailTwo( e.target.value ) }>
                        <option>ganeshdimri@gmail.com</option>
                        <option>bijay@gmail.com</option>
                        <option>swetha@gmail.com</option>
                        <option>syed@gmail.com</option>
                        <option value='' selected>Select Email </option>
                        <option>ashwin@gmail.com</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '17rem' } }>Color:</b>
                    <select name="ddl" onChange={ ( e ) => setColorOne( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '14rem' } }>Background:</b>
                    <select name="ddl" onChange={ ( e ) => setbackgroundOne( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <button onClick={ ( e ) => nextProfileOne() }>Next</button>

            </div>
            <div className="login" style={ { display: displayThree ? 'block' : 'none' } }>
                <h1>Employee No : 3</h1>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '12rem' } }>Name:</b>
                    <select name="ddl" onChange={ ( e ) => setemployeeTwo( e.target.value ) }>
                        <option value='ganesh'>Ganesh</option>
                        <option value='bijay'>Bijay</option>
                        <option value='swetha'>Swetha</option>
                        <option value='Syed'>Syed</option>
                        <option value='' selected>Select Name </option>
                        <option value='aswin'>Ashwin</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '13.8rem' } }>Age:</b>
                    <select name="ddl" onChange={ ( e ) => setAgeThree( e.target.value ) }>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                        <option value='30'>30</option>
                        <option value='35'>35</option>
                        <option value='' selected>Select Age </option>
                        <option value='40'>40</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '3rem' } }>Email:</b>
                    <select name="ddl" onChange={ ( e ) => setGmailThree( e.target.value ) }>
                        <option>ganeshdimri@gmail.com</option>
                        <option>bijay@gmail.com</option>
                        <option>swetha@gmail.com</option>
                        <option>syed@gmail.com</option>
                        <option value='' selected>Select Email </option>
                        <option>ashwin@gmail.com</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '17rem' } }>Color:</b>
                    <select name="ddl" onChange={ ( e ) => setColorTwo( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '14rem' } }>Background:</b>
                    <select name="ddl" onChange={ ( e ) => setbackgroundTwo( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <button onClick={ () => nextProfileTwo() }>Next</button>

            </div>
            <div className="login" style={ { display: displayFour ? 'block' : 'none' } }>
                <h1>Employee No : 4</h1>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '12rem' } }>Name:</b>
                    <select name="ddl" onChange={ ( e ) => setemployeeThree( e.target.value ) }>
                        <option value='ganesh'>Ganesh</option>
                        <option value='bijay'>Bijay</option>
                        <option value='swetha'>Swetha</option>
                        <option value='Syed'>Syed</option>
                        <option value='' selected>Select Name </option>
                        <option value='aswin'>Ashwin</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '13.8rem' } }>Age:</b>
                    <select name="ddl" onChange={ ( e ) => setAgeFour( e.target.value ) }>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                        <option value='30'>30</option>
                        <option value='35'>35</option>
                        <option value='' selected>Select Age </option>
                        <option value='40'>40</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '3rem' } }>Email:</b>
                    <select name="ddl" onChange={ ( e ) => setGmailFour( e.target.value ) }>
                        <option>ganeshdimri@gmail.com</option>
                        <option>bijay@gmail.com</option>
                        <option>swetha@gmail.com</option>
                        <option>syed@gmail.com</option>
                        <option value='' selected>Select Email </option>
                        <option>ashwin@gmail.com</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '17rem' } }>Color:</b>
                    <select name="ddl" onChange={ ( e ) => setColorThree( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '14rem' } }>Background:</b>
                    <select name="ddl" onChange={ ( e ) => setbackgroundThree( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <button onClick={ () => nextProfileThree() }>Next</button>

            </div>
            <div className="login" style={ { display: displayFive ? 'block' : 'none' } }>
                <h1>Employee No : 5</h1>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '12rem' } }>Name:</b>
                    <select name="ddl" onChange={ ( e ) => setemployeeFour( e.target.value ) }>
                        <option value='ganesh'>Ganesh</option>
                        <option value='bijay'>Bijay</option>
                        <option value='swetha'>Swetha</option>
                        <option value='Syed'>Syed</option>
                        <option value='' selected>Select Name </option>
                        <option value='aswin'>Ashwin</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '13.8rem' } }>Age:</b>
                    <select name="ddl" onChange={ ( e ) => setAgeFive( e.target.value ) }>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                        <option value='30'>30</option>
                        <option value='35'>35</option>
                        <option value='' selected>Select Age </option>
                        <option value='40'>40</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '3rem' } }>Email:</b>
                    <select name="ddl" onChange={ ( e ) => setGmailFive( e.target.value ) }>
                        <option>ganeshdimri@gmail.com</option>
                        <option>bijay@gmail.com</option>
                        <option>swetha@gmail.com</option>
                        <option>syed@gmail.com</option>
                        <option value='' selected>Select Email </option>
                        <option>ashwin@gmail.com</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '17rem' } }>Color:</b>
                    <select name="ddl" onChange={ ( e ) => setColorFour( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <div className="loginOne">
                    <b style={ { alignSelf: 'flex-end', minWidth: '14rem' } }>Background:</b>
                    <select name="ddl" onChange={ ( e ) => setbackgroundFour( e.target.value ) }>
                        <option value='black'>Black</option>
                        <option value='white'>White</option>
                    </select>
                </div>
                <button onClick={ () => nextProfileFour() }>Next</button>

            </div>

            <button
                onClick={ ( e ) => batch( () => {
                    dispatch(
                        login( {
                            id: 1,
                            name: employee,
                            age: age,
                            email: gmail,
                        } )
                    );
                    dispatch(
                        login( {
                            id: 2,
                            name: employeeTwo,
                            age: ageTwo,
                            email: gmailTwo,
                        } )
                    );
                    dispatch(
                        login( {
                            id: 3,
                            name: employeeThree,
                            age: ageThree,
                            email: gmailThree,
                        } )
                    );
                    dispatch(
                        login( {
                            id: 4,
                            name: employeeFour,
                            age: ageFour,
                            email: gmailFour,
                        } )
                    );
                    dispatch(
                        login( {
                            id: 5,
                            name: employeeFive,
                            age: ageFive,
                            email: gmailFive,
                        } )
                    );
                    dispatch( changeColor( { color: color, value: 1 } ) )
                    dispatch( changeColor( { color: colorOne, value: 2 } ) )
                    dispatch( changeColor( { color: colorTwo, value: 3 } ) )
                    dispatch( changeColor( { color: colorThree, value: 4 } ) )
                    dispatch( changeColor( { color: colorFour, value: 5 } ) )
                    dispatch( changeColor( { bgcolor: background, value: 1 } ) )
                    dispatch( changeColor( { bgcolor: backgroundOne, value: 2 } ) )
                    dispatch( changeColor( { bgcolor: backgroundTwo, value: 3 } ) )
                    dispatch( changeColor( { bgcolor: backgroundThree, value: 4 } ) )
                    dispatch( changeColor( { bgcolor: backgroundFour, value: 5 } ) )
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


export default LoginOne
