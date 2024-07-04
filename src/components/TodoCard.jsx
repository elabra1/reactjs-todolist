import React from 'react'

export default function TodoCard(props) { 
    const {children,  handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className = 'todoItem' >
        {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                handleEditTodo(index)
            }}>
                <i className="fa-solid fa-pen-to-square"></i>{/* Adds icon of edit */}
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i class="fa-solid fa-trash-can"></i>{/* Adds icon of trash */}
            </button>
        </div>
    </li>
  )
}
