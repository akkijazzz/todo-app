import { Form, Button } from "react-bootstrap";
import Modal from "react-responsive-modal";

export default function TodoModal({
  open,
  setOpen,
  onHandleSubmit,
  setData,
  data,
  edit,
}) {
  return (
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
            onChange={(e) => setData({ ...data, description: e.target.value })}
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
  );
}
