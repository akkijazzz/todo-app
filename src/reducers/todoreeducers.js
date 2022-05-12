export const initialState = { todos: [] };

function Todoreducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "EDIT_TODO":
      return { count: state.count - 1 };
    case "DELETE_TODO":
      const updateTodo = state.todos.filter(
        (todo) => todo.id === action.payload
      );
      return { ...state, todos: updateTodo };
    default:
      throw new Error();
  }
}

export default Todoreducer;
