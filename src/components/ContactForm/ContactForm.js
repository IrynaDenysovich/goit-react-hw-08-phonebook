import * as Styled from './ContactForm.styled';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import toast from 'react-hot-toast';
import { fetchAddContacts } from 'redux/api';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (contact, actions) => {
    actions.resetForm();

    for (let i = 0; i < contacts.length; i++) {
      let element = contacts[i];
      if (element.name === contact.name) {
        toast.error('There is already such a contact');
        return;
      }
    }

    dispatch(fetchAddContacts(contact));
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form>
        <Styled.ContainerForm>
          <Styled.LabelForm>
            Name
            <Styled.Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder=" "
            />
          </Styled.LabelForm>
          <Styled.LabelForm>
            Number
            <Styled.Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder=" "
            />
          </Styled.LabelForm>
          <Styled.ButtonForm type="submit">Add contact</Styled.ButtonForm>
        </Styled.ContainerForm>
      </Form>
    </Formik>
  );
}
