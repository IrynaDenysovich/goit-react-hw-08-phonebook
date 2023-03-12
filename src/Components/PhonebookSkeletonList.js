import { Box, CssBaseline, List } from '@mui/material';
import { PhonebookSkeleton } from './PhonebookSkeleton';
import PropTypes from 'prop-types';

export function PhonebookSkeletonList({ number, width = '50%' }) {
  const items = Array.from({ length: number });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { width },
      }}
    >
      <CssBaseline />
      <List>
        {items.map((e, i) => (
          <PhonebookSkeleton key={i.toString()} />
        ))}
      </List>
    </Box>
  );
}

PhonebookSkeletonList.propTypes = {
  number: PropTypes.number.isRequired,
  width: PropTypes.string,
};
