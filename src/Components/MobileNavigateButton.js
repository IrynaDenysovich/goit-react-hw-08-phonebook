import PropTypes from 'prop-types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useLocation, useNavigate } from 'react-router-dom';
import { MobileButton } from './MobileButton';

export const MobileNavigateButton = ({ name, to }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <MobileButton name={name} click={() => navigate(to)}>
      {location.pathname === to && <KeyboardArrowRightIcon />}
    </MobileButton>
  );
};

MobileNavigateButton.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
