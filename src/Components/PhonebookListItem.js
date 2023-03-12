import PropTypes from 'prop-types';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

export function PhonebookListItem({ contact, deleteAction }) {
  const { name, number, id } = contact;
  return (
    <ListItem
      secondaryAction={
        <IconButton
          onClick={() => deleteAction(id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: '#1976d2' }}>
          <ImportContactsIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
    </ListItem>
  );
}

PhonebookListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteAction: PropTypes.func.isRequired,
};
