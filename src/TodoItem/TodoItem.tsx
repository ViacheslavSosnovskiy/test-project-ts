import React, {FC} from 'react'
import { Task } from '../App/App'

interface TodoItemProps {
  // todo: {id: number, text: string},
  todo: Task
  onDelete: (id: number) => void,
}

const TodoItem: FC<TodoItemProps> = ({todo, onDelete}) => {
  return (
    <li>
        <p>{todo.text}</p>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem