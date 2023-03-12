import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import PropTypes from 'prop-types';

export const ConfirmWindow = ({ agree, disagree, open }) => {
  return (
    <Dialog
      open={open}
      onClose={disagree}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Confirmation'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure to delete this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={disagree}>Disagree</Button>
        <Button onClick={agree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmWindow.propTypes = {
  agree: PropTypes.func.isRequired,
  disagree: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
