import React from "react";

const Todo = ({item, removeItem}) => {
    return (
        <li>
        	<div>
        		{item.text}
        	</div>
            <button onClick={ () => removeItem(item.id) }>X</button>
        </li>
    );
}

export default Todo;