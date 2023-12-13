import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    id: number;
    text: string;
}

const initialState: Task[] = []

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTodo: (state, {payload}: PayloadAction<string>) => {
            state.push({id: Date.now(), text: payload})
        },
        deleteTodo: (state, {payload}: PayloadAction<number>) => {
            return state.filter((todo) => todo.id !== payload)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer