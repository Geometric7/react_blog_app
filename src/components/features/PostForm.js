import styles from './PostForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
//import clsx from 'clsx';
import FormText from '../views/FormText';
import FormTextArea from '../views/FormTextArea';


const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  }


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
      <FormText
        controlId="formDate"
        label="Published"
        placeholder="Enter date"
        value={publishedDate}
        action={setPublishedDate}
        className={styles.smallInput}
      />
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
      <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
  )
}

export default PostForm;
