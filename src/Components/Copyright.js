import { Link, Typography } from '@mui/material';

export const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        target="_blank"
        href="https://github.com/IrynaDenysovich"
      >
        Iryna Denysovich
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
