import React, {useState} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";

const Todo = ({text, deleteTodo}) => {

    const [checked, setChecked] = useState(false)
    return (
        <div class="todoDiv">
            <div style={{paddingLeft:"0.7rem"}} className="todoText"><p>{text}</p></div>
            <div className="delete" style={{paddingRight:"0.7rem"}} onClick={(e)=>deleteTodo({text})}><FontAwesomeIcon icon={faMinusSquare} size='2x'/></div>
            <div><input type="checkbox" checked={checked} onChange={()=>setChecked()} />Complete</div>
            <div></div>
        </div>
    )
}

export default Todo
