import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from '@mui/material';

export function PhonebookSkeleton() {
  return (
    <ListItem sx={{ mt: 1 }}>
      <ListItemAvatar>
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Skeleton animation="wave" sx={{ mb: 1 }} height={10} width="40%" />
        }
        secondary={<Skeleton animation="wave" height={10} width="60%" />}
      />
    </ListItem>
  );
}
