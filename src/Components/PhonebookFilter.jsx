import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from '../Reducers/Selectors';
import { setFilter } from '../Reducers/FilterSlice';

export function PhonebookFilter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectorFilter);
  const changeHandle = event => dispatch(setFilter(event.target.value));
  return (
    <Box
      component="div"
      sx={{
        p: '2px 0px 0px 10px',
        m: '5px 10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <TextField
        margin="normal"
        variant="standard"
        fullWidth
        autoFocus
        name="filter"
        label="Filter Contacts"
        type="text"
        autoComplete="contact"
        onChange={changeHandle}
        value={filterValue}
      />
      <SearchIcon sx={{ color: '#1976d2' }} />
    </Box>
  );
}
