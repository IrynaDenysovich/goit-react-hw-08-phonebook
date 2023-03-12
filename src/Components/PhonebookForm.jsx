import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { contactsAdd } from 'Redux/Api';
import { contactsError } from 'Redux/ContactsSlice';
import {
  selectorAuthToken,
  selectorContactError,
  selectorContactExists,
} from 'Redux/Selectors';

export function PhonebookForm() {
  const dispatch = useDispatch();
  const authToken = useSelector(selectorAuthToken);
  const error = useSelector(selectorContactError);
  const contactExists = useSelector(selectorContactExists);

  const handleSubmit = event => {
    event.preventDefault();
    const contactForm = event.currentTarget;
    const data = new FormData(contactForm);
    const contact = {
      name: data.get('name'),
      number: data.get('number'),
    };

    if (!contactExists(contact.name)) {
      dispatch(
        contactsAdd({
          contact: contact,
          token: authToken,
        })
      );
      contactForm.reset();
    } else {
      dispatch(contactsError('There is already such a contact'));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              label="Contact Name"
              name="name"
              autoComplete="name"
              helperText=" "
            />
            <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              name="number"
              label="Contact Number"
              type="tel"
              autoComplete="number"
            />
            {error.length > 0 && <Alert severity="warning">{error}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
