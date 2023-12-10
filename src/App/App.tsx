import { useState } from 'react'
import Form from '../Form'
import TodoItem from '../TodoItem'

export interface Task {
  id: number;
  text: string;
}

const App = () => {
  const [todos, setTodos] = useState<Task[]>([])

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text}
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <>
      <h1>Todo</h1>
      <Form addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </>
  )
}

export default App