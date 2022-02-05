import { Form } from 'react-bootstrap';
import clsx from 'clsx';


const FormText = ({controlId, label, placeholder, value, action, className}) => {
  return (
    <Form.Group className={clsx("mb-3", className)} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => action(e.target.value)}
        required
      />
    </Form.Group>
  )
}

export default FormText;
