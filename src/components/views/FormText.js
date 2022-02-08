import { Form } from 'react-bootstrap';
import clsx from 'clsx';
import { useForm } from "react-hook-form";
import PostForm from '../features/PostForm';




const FormText = ({controlId, label, placeholder, value, action, className, errors, register}) => {
  return (
    <Form.Group className={clsx("mb-3", className)} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => action(e.target.value)}
      />
    </Form.Group>
  )
}

export default FormText;
