import { useDispatch, useSelector } from 'react-redux'
import Form from '../Form'
import TodoItem from '../TodoItem'
import { RootState } from '../../store/store'
import { addTodo, deleteTodo } from '../../store/todoSlice'

const App = () => {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Todo</h1>
      <Form addTodo={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={(id) => dispatch(deleteTodo(id))} />
        ))}
      </ul>
    </>
  )
}

export default App