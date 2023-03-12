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
