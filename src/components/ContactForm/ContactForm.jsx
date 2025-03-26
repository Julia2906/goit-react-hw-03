import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ onAddContacts }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onAddContacts(values.name, values.number);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span"></ErrorMessage>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span"></ErrorMessage>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
