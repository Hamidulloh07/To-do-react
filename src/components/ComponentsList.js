import React from 'react';


function TodoList({todos}) {
    return (
        <ul className="list">
            {
                todos.map(el => (
                    <TodoListItem key = {el} {...el}/>
                ))
            }
        </ul>
    );
}
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
export default TodoList;