import { Form } from 'react-bootstrap';
import PostForm from '../features/PostForm';



const FormTextArea = ({controlId, label, placeholder, value, action, rows, errors, title, }) => {
  return (
    <Form.Group className={"mb-3"} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={e => action(e.target.value)}
      />
    </Form.Group>
  )
}

export default FormTextArea;
