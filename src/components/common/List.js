/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useReducer } from "react";
import { Table, Button, Form } from "react-bootstrap";
import TopNavbar from "../common/Navbar";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Todoreducer, { initialState } from "../../reducers/todoreeducers";
import TodoModal from "./TodoModal";
function List() {
  const [state, dispatch] = useReducer(Todoreducer, initialState);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [edit, SetEdit] = useState(false);
  const [data, setData] = useState({
    id: selectedTodo ? selectedTodo?.id : "",
    title: selectedTodo ? selectedTodo?.title : "",
    description: selectedTodo ? selectedTodo?.description : "",
    state: selectedTodo ? selectedTodo?.state : "",
  });
  const [open, setOpen] = useState(false);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: data });
    setOpen(!open);
  };
  const OpenEdit = (id) => {
    const todo = state.todos.find((todo) => todo.id === id);
    setOpen(!open);
    SetEdit(!edit);
    setSelectedTodo(todo);
  };

  return (
    <>
      <TopNavbar />
      <div className="list-div">
        <div className="d-flex justify-content-between w-100 pb-1 p-5">
          <h3 className="todo-head">Todo List</h3>
          <Button onClick={() => setOpen(!open)}>Add Todo</Button>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>State</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {state.todos.length > 0 ? (
              state?.todos.map((todo) => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{localStorage.getItem("userid")}</td>
                  <td>{todo?.title}</td>
                  <td>{todo?.description}</td>
                  <td>
                    <select defaultValue={todo?.state}>
                      <option value="todo">TODO</option>
                      <option value="inprogress">In Progress</option>
                      <option value="done">Done</option>
                    </select>
                  </td>
                  <td>
                    <img
                      src="/edit.png"
                      height={20}
                      onClick={() => OpenEdit(todo.id)}
                    />
                  </td>
                  <td>
                    <img
                      src="/delete.png"
                      height={20}
                      onClick={() =>
                        dispatch({ type: "DELETE_TODO", payload: todo.id })
                      }
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>No Todos In List</tr>
            )}
          </tbody>
        </Table>
        <TodoModal
          open={open}
          setOpen={setOpen}
          onHandleSubmit={onHandleSubmit}
          data={data}
          setData={setData}
          edit={edit}
        />
      </div>
    </>
  );
}

export default List;
