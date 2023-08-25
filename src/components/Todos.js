import React from 'react'
import { useStore } from '../store'
import { useState } from 'react'

function Todos() {
    const [test, setTest] = useState('')
    const addTodo = useStore(store => store.addTodo)
    const todos = useStore(store => store.todos)
    const deleteTodo = useStore(store => store.deleteTodo)
    const doneTodo = useStore(store => store.doneTodo)

  return (
    <div>
        <input value={test} onChange={(e) => setTest(e.target.value)} />
        <button onClick={() => {
            addTodo(test);
            setTest('')
        }}>Add</button>
        {todos.map(todo => 
          <div key={todo.id}>
            <h3 style={{textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.test}</h3>
            <button onClick={() => doneTodo(todo.id)}>done</button>
            <button onClick={() => deleteTodo(todo.id)}>x</button>
          </div>
        )}
    </div>
  )
}

export default Todos