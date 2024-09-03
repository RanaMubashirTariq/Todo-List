import React, { useState } from 'react'
import inputText from './inputText.css'
export default function Input(props) {
    const [text,setText] = useState('');
   const handleChange = (e) =>{
       setText(e.target.value)
   }
 const addTask = () =>{
    props.addList(text);
    setText('');
 }
  return (
    <div className='row'>
      <input type="input" value={text} placeholder='Enter your Text' onChange={handleChange}/>
      <button onClick={addTask}><b>+</b></button>
    </div>
  )
}
