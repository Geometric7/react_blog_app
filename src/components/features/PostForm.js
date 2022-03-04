import styles from './PostForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import FormText from '../views/FormText';
import FormTextArea from '../views/FormTextArea';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/categoriesRedux'


const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');

  const categories = useSelector(state => getAllCategories(state))


  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <FormText
        controlId="formTitle"
        label="Title"
        placeholder="Enter title"
        value={title}
        action={setTitle}
      />
      <FormText
        controlId="formAuthor"
        label="Author"
        placeholder="Enter author"
        value={author}
        action={setAuthor}
        className={styles.smallInput}
      />

      <Form.Group className={"mb-3", styles.smallInput} controlId="formDate">
        <Form.Label>Published</Form.Label>
        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} dateFormat="dd/MM/yyyy" />
        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
      </Form.Group>

      <FormTextArea
        controlId="formDescription"
        label="Short description"
        placeholder="Enter description"
        value={shortDescription}
        action={setShortDescription}
        rows={3}
      />
      <FormTextArea
        controlId="formContent"
        label="Main content"
        placeholder="Enter content"
        value={content}
        action={setContent}
        rows={10}
      />
      <Form.Group className={"mb-3", styles.smallInput} controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" onChange={e => setCategory(e.target.value)}>
          {categories.map(category =>
            (<option key={category.id}
                className="d-flex align-items-stretch" value={category.name}>
                {category.name}
            </option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
  )
    }

export default PostForm;
