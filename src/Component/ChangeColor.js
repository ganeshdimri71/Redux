// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { changeColor } from '../Features/theme'
// import { batch } from 'react-redux'



// export default function ChangeColor () {
   
//     const dispatch = useDispatch();
//     return (
//         <div>
//             <select name="ddl" onChange={ (e) => setColor( e.target.value ) }>
//                 <option value='blue'>Blue</option>
//                 <option value='green'>Green</option>
//                 <option value='red'>Red</option>
//                 <option value='yellow'>Yelllow</option>
//                 <option value='' selected>Select a Color </option>
//                 <option value='white'>White</option>
//             </select>
//             <select name="ddl" onChange={ ( e ) => setColorOne( e.target.value ) }>
//                 <option value='blue'>Blue</option>
//                 <option value='green'>Green</option>
//                 <option value='red'>Red</option>
//                 <option value='yellow'>Yelllow</option>
//                 <option value='' selected>Select a Color </option>
//                 <option value='white'>White</option>
//             </select>
//             <select name="ddl" onChange={ ( e ) => setColorThree( e.target.value ) }>
//                 <option value='blue'>Blue</option>
//                 <option value='green'>Green</option>
//                 <option value='red'>Red</option>
//                 <option value='yellow'>Yelllow</option>
//                 <option value='' selected>Select a Color </option>
//                 <option value='white'>White</option>
//             </select>
//             <select name="ddl" onChange={ ( e ) => setColorFour( e.target.value ) }>
//                 <option value='blue'>Blue</option>
//                 <option value='green'>Green</option>
//                 <option value='red'>Red</option>
//                 <option value='yellow'>Yelllow</option>
//                 <option value='' selected>Select a Color </option>
//                 <option value='white'>White</option>
//             </select>
//             <select name="ddl" onChange={ ( e ) => setColor( e.target.value ) }>
//                 <option value='blue'>Blue</option>
//                 <option value='green'>Green</option>
//                 <option value='red'>Red</option>
//                 <option value='yellow'>Yelllow</option>
//                 <option value='' selected>Select a Color </option>
//                 <option value='white'>White</option>
//             </select>
//             <button onClick={ ( e ) => batch( () => {
//                 dispatch( changeColor( { color: color, value: 1 } ) )
//                 dispatch( changeColor( { color: colorOne, value: 2 } ) )
//                 dispatch( changeColor( { color: colorTwo, value: 3 } ) )
//                 dispatch( changeColor( { color: colorThree, value: 4 } ) )
//                 dispatch( changeColor( { color: colorFour, value: 5 } ) )
//             } ) }> Click Me</button >
//         </div>

//     )
// }
