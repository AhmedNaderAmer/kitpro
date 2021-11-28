import {React,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 32
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  main:{
    maxWidth:600
  },
  links:{
      marginTop:20
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailError(false)
    setPasswordError(false)

    if (email === '') {
      setEmailError(true)
    }
    if (password === '') {
      setPasswordError(true)
    }
    if (email === "demo@devias.io" && password ==="Password123!") {
        console.log(email, password)
        
    } 
  }

  return (
      
    <Container component="main" maxWidth="xs" >
        {/* <Paper> */}
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
          onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={emailError}
            helperText={emailError && "email eroor"}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={passwordError}
            helperText={passwordError && "password eroor"}
          />
          <Typography component="h1" variant="h6">
          You can use demo@devias.io and password Password123!
        </Typography>
          <Button
          id="formss"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Divider />
          <Grid container className={classes.links}>
            <Grid item xs>
                <Link href="/register" variant="body2" >
                {"Create new account"}
              </Link>
              <Link href="#" variant="body2">
                Forgot password
              </Link>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </form>
      </Paper>
      
   
    </Container>
  );
}