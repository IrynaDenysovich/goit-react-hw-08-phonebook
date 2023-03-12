import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavigateButton = ({ name, to }) => {
  const location = useLocation();
  const navigate = useNavigate();

  let style = { color: '#fff' };
  if (location.pathname === to) {
    style.borderBottom = '1px solid white';
    style.borderRadius = 0;
  }

  return (
    <Button sx={style} onClick={() => navigate(to)}>
      {name}
    </Button>
  );
};
