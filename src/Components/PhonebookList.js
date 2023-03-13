import { useDispatch, useSelector } from 'react-redux';
import {
  selectorAddContactLoading,
  selectorAuthToken,
  selectorContacts,
  selectorFilter,
  selectorRemoveContanctIndex,
} from '../Reducers/Selectors';
import {
  Alert,
  Box,
  CssBaseline,
  Divider,
  List,
  Typography,
} from '@mui/material';
import { predictRemove } from '../Reducers/ContactsSlice';
import { contactsDelete } from '../Reducers/Api';
import { PhonebookSkeletonList } from './PhonebookSkeletonList';
import { PhonebookSkeleton } from './PhonebookSkeleton';
import { PhonebookListItem } from './PhonebookListItem';
import { ConfirmWindow } from './ConfirmWindow';
import { useState } from 'react';

export function PhonebookList() {
  const [confirmStatus, setConfirmStatus] = useState({ open: false });

  const dispatch = useDispatch();
  const addIsLoading = useSelector(selectorAddContactLoading);
  const removeIndex = useSelector(selectorRemoveContanctIndex);
  const authToken = useSelector(selectorAuthToken);
  const filterValue = useSelector(selectorFilter);
  const contacts = useSelector(selectorContacts);

  const deleteClickHandle = id => setConfirmStatus({ open: true, id: id });

  const confirmAgree = () => {
    dispatch(predictRemove(confirmStatus.id));
    dispatch(
      contactsDelete({
        id: confirmStatus.id,
        token: authToken,
      })
    );
    confirmDisagree();
  };

  const confirmDisagree = () => setConfirmStatus({ open: false });

  const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    (contact.name + contact.number).toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CssBaseline />
      {visibleContacts.length === 0 && (
        <Typography variant="h6" component="div" sx={{ ml: 2 }}>
          <Alert severity="warning">Contact list is empty</Alert>
        </Typography>
      )}
      <List>
        {visibleContacts.map(contact => {
          return [
            removeIndex === contact.id ? (
              <PhonebookSkeleton key={contact.id} />
            ) : (
              <PhonebookListItem
                key={contact.id}
                contact={contact}
                deleteAction={deleteClickHandle}
              />
            ),
            <Divider key={'d' + contact.id} variant="inset" component="li" />,
          ];
        })}
      </List>
      <ConfirmWindow
        agree={confirmAgree}
        open={confirmStatus.open}
        disagree={confirmDisagree}
      />
      {addIsLoading && <PhonebookSkeletonList number={1} width="100%" />}
    </Box>
  );
}
