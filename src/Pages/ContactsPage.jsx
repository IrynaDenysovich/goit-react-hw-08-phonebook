import { Box } from '@mui/material';
import { PhonebookFilter } from 'Components/PhonebookFilter';
import { PhonebookForm } from 'Components/PhonebookForm';
import { PhonebookList } from 'Components/PhonebookList';
import { PhonebookSkeletonList } from 'Components/PhonebookSkeletonList';
import { Template } from 'Components/Template';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { contactsGet } from 'Reducers/Api';
import {
  selectorAuthToken,
  selectorContactLoading,
  selectorContacts,
} from 'Reducers/Selectors';

export function ContactsPage() {
  const dispatch = useDispatch();
  const authToken = useSelector(selectorAuthToken);
  const contacts = useSelector(selectorContacts);
  const contactsIsLoading = useSelector(selectorContactLoading);

  useEffect(() => {
    if (authToken.length > 0) {
      if (contacts == null) {
        dispatch(contactsGet(authToken));
      }
    }
  }, [dispatch, authToken, contacts]);

  if (authToken.length === 0) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Template>
      <Box sx={{ width: '100%', display: 'flex' }}>
        {contactsIsLoading && <PhonebookSkeletonList number={4} />}
        {contacts && !contactsIsLoading && (
          <Box sx={{ display: 'flex', width: '50%', flexDirection: 'column' }}>
            <PhonebookFilter />
            <PhonebookList contacts={contacts} />
          </Box>
        )}
        <PhonebookForm />
      </Box>
    </Template>
  );
}
