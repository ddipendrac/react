import { createSlice, nanoid } from "@reduxjs/toolkit";

// 2. Create reducer
// nanoid: creates unique id

// 2.1 Create initialState
const initialState = {
  todos: [{id: 1, text: "Hello world!"}]
}

// 2.2 Create slice where all reducers or methods exist
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: { // method: have properties & func
    addTodo: (state, action) => { // has always state n action;
      const todo = {
        id: nanoid(),
        text: action.payload // user input or val
      }
      state.todos.push(todo)
    },   
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action ? action.payload : todo )
    }
  } 
})

// 2.3 export all methods
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// 2.4 export for store
export default todoSlice.reducer

// state: current state of initialState
// action: data obtained form user
// action.payload: an object having data