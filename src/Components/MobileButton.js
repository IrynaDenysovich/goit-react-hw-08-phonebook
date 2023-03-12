import PropTypes from 'prop-types';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

export const MobileButton = ({ name, click, children }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={click} sx={{ textAlign: 'right' }}>
        {children}
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

MobileButton.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
