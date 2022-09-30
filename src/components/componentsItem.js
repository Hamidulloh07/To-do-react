import React from 'react';

function TodoListItem({id,label}) {
    return (
        <>
            <li className="list-group-item mt-2">
                
                <p className="d-flex h2 align-items-center mb-0">
                  {label}
                </p>
            </li>
        </>
    );
}

export default TodoListItem;