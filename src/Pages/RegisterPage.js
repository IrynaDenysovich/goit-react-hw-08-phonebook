import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorAuthError,
  selectorAuthLoading,
  selectorAuthToken,
} from '../Reducers/Selectors';
import PropTypes from 'prop-types';

import { authSignup } from '../Reducers/Api';
import { resetError } from '../Reducers/AuthSlice';
import { Template } from '../Components/Template';

export function RegisterPage({ redirect }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = useSelector(selectorAuthToken);

  let error = useSelector(selectorAuthError);
  const isLoading = useSelector(selectorAuthLoading);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  useEffect(() => {
    if (authToken.length > 0) {
      navigate(redirect);
    }
  }, [navigate, authToken, redirect]);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      authSignup({
        name: data.get('firstName') + ' ' + data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
      })
    );
  };

  const redirectHandle = _ => navigate('/login');

  return (
    <Template>
      <Box sx={{ display: 'flex' }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? <CircularProgress color="inherit" /> : 'Sign Up'}
              </Button>
              {error.length > 0 && (
                <Alert sx={{ mb: 3 }} severity="warning">
                  {error}
                </Alert>
              )}
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="#" variant="body2" onClick={redirectHandle}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Template>
  );
}

RegisterPage.propTypes = {
  redirect: PropTypes.string.isRequired,
};
