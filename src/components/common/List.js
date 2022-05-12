/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useReducer } from "react";
import { Table, Button, Form } from "react-bootstrap";
import TopNavbar from "../common/Navbar";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Todoreducer, { initialState } from "../../reducers/todoreeducers";

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
        <Modal open={open} onClose={() => setOpen(!open)}>
          <h2>{edit ? "Edit" : "Add"} Todo</h2>
          <Form className="inner-content" onSubmit={(e) => onHandleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Id"
                onChange={(e) => setData({ ...data, id: e.target.value })}
                value={data.id}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter title"
                onChange={(e) => setData({ ...data, title: e.target.value })}
                value={data.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                value={data.description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <br />
              <select
                className="state-select"
                onChange={(e) => setData({ ...data, state: e.target.value })}
                defaultValue={data.state}
              >
                <option value="todo">TODO</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Todo
            </Button>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default List;
