import React from 'react'
import lists from './lists.css'
export default function Lists(props) {
  return (
    <div>
      <ul>
        <li className='list-item'>
          {props.item}
        <span className='icons'><i className="fa-solid fa-eraser" onClick={props.delete}/></span>
        </li>
        </ul>
    </div>
  )
}
