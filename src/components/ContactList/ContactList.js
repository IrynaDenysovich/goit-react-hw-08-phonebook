import { ContainertList, ListContact, BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getFilter, getLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, fetchDeleteContacts } from 'redux/api';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  const onClickHandle = id => {
    dispatch(fetchDeleteContacts(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    (contact.name + contact.number).toLowerCase().includes(normalizedFilter)
  );
  return (
    <ContainertList>
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.map(({ number, name, id }) => {
        return (
          <ListContact key={id}>
            {name}: {number}
            <BtnDelete
              onClick={() => {
                onClickHandle(id);
              }}
            >
              Delete
            </BtnDelete>
          </ListContact>
        );
      })}
    </ContainertList>
  );
}
