import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Appbar from './Appbar'
import Rutas from '../router'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.Google.com">
        Tomalish
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#880e4f',
    },
    secondary: {
        main: '#651fff',
    },
    type: 'light'
  }
});

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <main>
        <Appbar/>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h2" align="center" color="Primary">
              InteWii
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                  <Button variant="contained" color="primary" href="/views/Login">
                    Hacer Una cuenta
                  </Button>
                  <Button variant="contained" color="primary" href="#">
                    Ya tengo una cuenta
                  </Button>
                  <Rutas/>
              </Grid>
            </div>
          </Container>
      </main>
    </React.Fragment>
    </ThemeProvider>
  );
}