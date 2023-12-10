import React, { useState, FC, FormEvent, ChangeEvent } from 'react'

interface AddTodoProps {
  addTodo: (text: string) => void
}

const Form: FC<AddTodoProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState<string>('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={newTodo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            placeholder="new todo" />
        <button type="submit">add</button>
    </form>
  )
}

export default Form