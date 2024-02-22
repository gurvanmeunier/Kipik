import React from "react";

const List = ({ todos, delTodo, toggleTodo}) => { 

  return (
        <ul>
    { todos.map( (todo, index) => (
          <li key={index} className={todo.done?"done":""}>
            <i className={"far fa-2x "+(todo.done?"fa-check-square":"fa-square")}
      onClick={ () => { toggleTodo(index) }}
      ></i>
            <span>{todo.description}</span>
            <button onClick={ () => { delTodo(index) }}><i className="fas fa-trash fa-2x"></i></button>
          </li>
    ) ) }

        </ul>
  )
}

export default List;
