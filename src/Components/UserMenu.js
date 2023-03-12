import { Button, List, Typography } from '@mui/material';

import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../Reducers/AuthSlice';
import { contactsReset } from '../Reducers/ContactsSlice';
import { selectorAuthToken, selectorAuthUser } from '../Reducers/Selectors';
import { MobileButton } from './MobileButton';
import { MobileNavigateButton } from './MobileNavigateButton';
import { NavigateButton } from './NavigateButton';
import PropTypes from 'prop-types';

export function UserMenu({ type }) {
  const dispatch = useDispatch();

  const authToken = useSelector(selectorAuthToken);
  const authUser = useSelector(selectorAuthUser);

  const menuType = type + '_' + (authToken.length === 0 ? 'guest' : 'user');
  const logoutHandle = () => {
    dispatch(contactsReset());
    dispatch(authLogout());
  };

  switch (menuType) {
    case 'mobile_guest':
      return (
        <List>
          <MobileNavigateButton name="Home" to="/" />
          <MobileNavigateButton name="Login" to="/login" />
          <MobileNavigateButton name="Register" to="/register" />
        </List>
      );

    case 'mobile_user':
      return (
        <List>
          <MobileNavigateButton name="Home" to="/" />
          <MobileNavigateButton name="Contacts" to="/contacts" />
          <MobileButton name="Logout" click={logoutHandle} />
        </List>
      );

    case 'desktop_guest':
      return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NavigateButton name="Home" to="/" />
          <NavigateButton name="Login" to="/login" />
          <NavigateButton name="Register" to="/register" />
        </Box>
      );

    case 'desktop_user':
      return (
        <Box sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
          <Typography sx={{ mr: 2 }}>{authUser.email}</Typography>
          <NavigateButton name="Home" to="/" />
          <NavigateButton name="Contacts" to="/contacts" />
          <Button sx={{ color: '#fff' }} onClick={logoutHandle}>
            Logout
          </Button>
        </Box>
      );

    default:
      return <Typography>default</Typography>;
  }
}

UserMenu.propTypes = {
  type: PropTypes.string.isRequired,
};
