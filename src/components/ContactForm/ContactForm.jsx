import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ name, number }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.number()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <div>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={() => {}}>
        <Form>
          <Label htmlFor={id}>Name</Label>
          <Field type="text" name="name" id={id} />
          <Label htmlFor={id}>Number</Label>
          <Field type="text" name="number" id={id} />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
      ;
    </div>
  );
};

export default ContactForm;
