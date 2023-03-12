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
import { authLogin } from 'Reducers/Api';
import {
  selectorAuthError,
  selectorAuthLoading,
  selectorAuthToken,
} from 'Reducers/Selectors';
import { resetError } from 'Reducers/AuthSlice';
import { Template } from 'Components/Template';

export function LoginPage({ redirect }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectorAuthError);
  const isLoading = useSelector(selectorAuthLoading);
  const authToken = useSelector(selectorAuthToken);

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
      authLogin({
        email: data.get('email'),
        password: data.get('password'),
      })
    );
  };

  const redirectHandle = _ => navigate('/register');

  return (
    <Template>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {error.length > 0 && <Alert severity="warning">{error}</Alert>}
              {/* <FormControlLabel
                control={
                  <Checkbox value="remember" name="remember" color="primary" />
                }
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? <CircularProgress color="inherit" /> : 'Sign In'}
              </Button>
              <Grid
                container
                sx={{ justifyContent: 'center', cursor: 'pointer' }}
              >
                <Grid item>
                  <Link variant="body2" onClick={redirectHandle}>
                    {"Don't have an account? Sign Up"}
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
