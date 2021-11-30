import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Divider  from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import CreateIcon from '@material-ui/icons/Create';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "../App.css";

const preventDefault = (event) => event.preventDefault();
const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        // marginTop:10
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      marginTop:{
        marginTop: 48,
      },wrapper:{
        alignItems:"start",
      },
      rwidth:{
        marginTop:40,
        marginBottom:150,
    },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        paddingLeft:24,
        paddingTop:24,
      },
      pos: {
        marginRight: 16,
      },
      cover: {
        width: 120,
        marginLeft:30,
        margin:20
      },
      details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"space-between"
      },
      content: {
        marginLeft: 10,
      },
      paper:{
        //   maxWidth:'100%',
        //   width:1100,
        //   margin:-24,
        //   paddingRight:52,
        marginTop:34,
      },
      colorb:{
        background: '#f9f9f9',
        maxWidth: '100%',
        width:'100%',
        paddingTop:64,
        marginRight:'auto',
        marginLeft:'auto',
        paddingBottom:64,

      },
      root33: {
        // marginTop:20,
      },
      mwidth:{
        maxWidth:"100%",
        width:800
      },
      mleft:{
        marginLeft:24,
      },
      table: {
        maxWidth: '100%',
        // width:730,
        marginTop:30,
      },
      root:{
          padding:'0',
          maxWidth:'100%',
          minWidth:0,
          marginLeft:24
      },
      padding:{
          padding:10,
          marginTop:20
      },
      body2:{
        marginTop:15,
        marginLeft:5,
      },
      hr:{
        marginTop:24,
        marginBottom:24,
      },
      cbox:{
        border:"1px solid rgb(230,232,240)",
        borderRadius:8,
        marginTop:24

      },
      cli:{
        display:'flex',
        // borderBottom:"1px solid rgb(230,232,240)",
        marginTop:10,
        marginBottom:10,

      },
      point:{
        '&::before': {
          content: '""',
          borderRadius:'50%',
          display:'block',
          height:'8px' ,
          left:'4px',
          position:'absolute',
          top:'7px',
          width:'8px',
          zIndex:'1',
          backgroundColor:'rgb(209, 67, 67)',
          marginLeft:'-20px'

        }
      }


  }));

  function createData(name, calories, fat) {
    return { name, calories, fat};
  }

  const rows = [
    createData('2 Jun 2021', '$4.99', '40'),
    createData('2 May 2021', '$4.99', 47),
    createData('2 April 2021', '$4.99', 65),
    

  ];
  const rows2 = [
    createData('2 Jun 2021', 'owner', '40'),
    createData('2 May 2021', 'Editor', 47),
    

  ];
  const rows3 = [
    createData('2 Jun 2021', 'owner', '40'),
    createData('2 May 2021', 'Editor', 47),
    

  ];
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Account() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();

    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
    });
  
    const handleChange2 = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Container className={classes.colorb} fixed>
            <Typography className={classes.mleft}variant="h4" fontSize='2rem'>Account</Typography>
            <div className={classes.marginTop}>
                <Tabs  
                 value={value} 
                 onChange={handleChange} 
                 aria-label="simple tabs example"
                 indicatorColor="primary"
                 textColor="primary"
                 className="hove"
                 >
                    <Tab  
                        classes={{
                            wrapper: classes.wrapper,
                            root: classes.root,
                        }}
                        label="General" {...a11yProps(0)} 
                    />
                    <Tab 
                        classes={{
                            wrapper: classes.wrapper,
                            root: classes.root,
                        }}
                        label="Billing" {...a11yProps(1)} 
                    />
                    <Tab 
                        classes={{
                            wrapper: classes.wrapper,
                            root: classes.root,
                        }} 
                        label="Team" {...a11yProps(2)}
                    />
                    <Tab
                      classes={{
                        wrapper: classes.wrapper,
                        root: classes.root,
                      }}
                      label="Notifications" {...a11yProps(3)}
                    />
                    <Tab 
                        classes={{
                            wrapper: classes.wrapper,
                            root: classes.root,
                        }}
                        label="Security" {...a11yProps(4)} 
                    />

                </Tabs>
                <Divider />
                <Box marginTop="32px" marginBottom="32px">
                    {/* 1 tap */}
                    <TabPanel value={value} index={0} >
                        <Paper className={classes.paper}>
                        <CardContent>
                            <Grid container spacing={6} className={classes.root33}>
                                <Grid item xs={12}  md={4} className={classes.title}>
                                    <Typography 
                                        variant="h6" 
                                        component="h6"  
                                    >
                                        Basic details
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  md={8} className={classes.title}>
                                  <Box display="flex" alignItems="center" marginRight="24px">
                                        <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
                                        <Button
                                            color="primary"
                                        >
                                         Change
                                        </Button>
                                  </Box>
                                  <Box display="flex" alignItems="center" marginTop="24px">
                                    <TextField
                                      size="small"
                                      fullWidth
                                      id="outlined-required"
                                      label="Full Name"
                                      defaultValue="Anika Visser"
                                      variant="outlined"
                                      />
                                          <Button
                                              color="primary"
                                          >
                                          Save
                                          </Button>
                                  </Box>
                                  <Box display="flex" alignItems="center" marginTop="24px">
                                    <TextField
                                      size="small"
                                      fullWidth
                                      id="outlined-required"
                                      label="Email Address "
                                      defaultValue="dummy.account@gmail.com"
                                      variant="outlined"
                                      disabled 
                                      />
                                          <Button
                                              color="primary"
                                          >
                                          Save
                                          </Button>
                                  </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                        </Paper>


                        {/* 3 */}


                        <Paper className={classes.paper}>
                          <CardContent>
                            <Grid container spacing={6} className={classes.root33}>
                              <Grid item xs={12}  md={4} className={classes.title} >
                                  <Typography 
                                      variant="h6" 
                                      component="h6"  
                                  >
                                    Public profile
                                  </Typography>
                              </Grid>
                                  <Grid item xs={12}  md={8} className={classes.title}>
                                    <Box display="flex" alignItems="center" marginRight="24px" marginBottom="20px"justifyContent="space-between">
                                      <div>
                                        <Typography 
                                              variant="h6" 
                                              component="h6"  
                                          >
                                            Make Contact Info Public
                                          </Typography>
                                          <Typography 
                                              variant="p" 
                                              component="p"  
                                          >
                                            Means that anyone viewing your profile will be able to see your contacts details.
                                          </Typography>
                                      </div>
                                      <Switch
                                        checked={state.checkedA}
                                        onChange={handleChange2}
                                        color="primary"
                                        name="checkedA"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                      />
                                    </Box>
                                    <Divider />
                                    <Box display="flex" alignItems="center" marginRight="24px" marginTop="20px"marginBottom="20px" justifyContent="space-between">
                                      <div>
                                        <Typography 
                                              variant="h6" 
                                              component="h6"  
                                          >
                                            Make Contact Info Public
                                          </Typography>
                                          <Typography 
                                              variant="p" 
                                              component="p"  
                                          >
                                            Means that anyone viewing your profile will be able to see your contacts details.
                                          </Typography>
                                      </div>
                                      <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange2}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                      />
                                    </Box>
                                  </Grid>
                            </Grid>
                          </CardContent>
                        </Paper>
                        {/* 4 */}
                        <Paper className={classes.paper}>
                          <CardContent>
                            <Grid container spacing={6} className={classes.root33}>
                              <Grid item xs={12}  md={4} className={classes.title} >
                                  <Typography 
                                      variant="h6" 
                                      component="h6"  
                                  >
                                    Public profile
                                  </Typography>
                              </Grid>
                                  <Grid item xs={12}  md={8} className={classes.title}>
                                    <Box display="flex" alignItems="center" marginRight="24px" marginBottom="20px"justifyContent="space-between">
                                      <div >
                                        <Typography 
                                              variant="h6" 
                                              component="h6"  
                                          >
                                            Delete your account and all of your source data. This is irreversible.
                                          </Typography>
                                          <Button
                                            variant="outlined"
                                            color="secondary"
                                            className={classes.padding}
                                          >
                                          Delete account
                                        </Button>
                                      </div>
                                    </Box>
                                  </Grid>
                            </Grid>
                          </CardContent>
                        </Paper>
                    </TabPanel>
                    {/* 2 tap */}
                    <TabPanel value={value} index={1}>
                    <Paper className={classes.paper}>
                      <CardContent paddingLeft="24px">
                        <div>
                          <Typography variant="h6" component="h6">Change plan</Typography>
                          <Typography variant="p" component="p">You can upgrade and downgrade whenever you want</Typography>
                        </div>
                        <Box marginTop="20px">
                          <Grid container  spacing={3} >
                            {/* 1 */}
                            <Grid item xs={12}  md={4}>
                              <Card>
                                <CardContent>
                                  <Avatar className={classes.pos}  alt="Remy Sharp" src="/ch1.png" />
                                  <Box display="flex" marginBottom="8px" marginTop="8px">
                                    <Typography variant="h5">
                                     $0
                                    </Typography>
                                    <Typography variant="body2" className={classes.body2}>
                                     /mo
                                    </Typography>
                                  </Box>
                                  <Box display="flex" justifyContent="space-between" alignItems="center" >
                                    <Typography variant="overline">
                                     Startup
                                    </Typography>
                                    <Typography variant="caption">
                                     Using now
                                    </Typography>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                            {/* 2 */}
                            <Grid item xs={12}  md={4}>
                              <Card>
                                <CardContent>
                                  <Avatar className={classes.pos}  alt="Remy Sharp" src="/ch1.png" />
                                  <Box display="flex" marginBottom="8px" marginTop="8px">
                                    <Typography variant="h5">
                                     $4.99
                                    </Typography>
                                    <Typography variant="body2" className={classes.body2}>
                                     /mo
                                    </Typography>
                                  </Box>
                                  <Box display="flex" justifyContent="space-between" alignItems="center" >
                                    <Typography variant="overline">
                                     Standard
                                    </Typography>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                            {/* 3 */}
                            <Grid item xs={12}  md={4}>
                              <Card>
                                <CardContent>
                                  <Avatar className={classes.pos}  alt="Remy Sharp" src="/ch1.png" />
                                  <Box display="flex" marginBottom="8px" marginTop="8px">
                                    <Typography variant="h5">
                                     $29.99
                                    </Typography>
                                    <Typography variant="body2" className={classes.body2}>
                                     /mo
                                    </Typography>
                                  </Box>
                                  <Box display="flex" justifyContent="space-between" alignItems="center" >
                                    <Typography variant="overline">
                                    Business
                                    </Typography>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                        </Box>
                        
                        <Divider className={classes.hr} />
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="6">Billing details</Typography>
                            <Button
                              color="primary"
                              startIcon={<CreateIcon />}
                            >
                             Edit
                            </Button>
                        </Box>
                        <Box className={classes.cbox}>
                          <List className="plist">
                            {/* 1 */}
                            <ListItem>
                            <ListItemText
                              primary="Billing name"
                              className={classes.cli}
                              secondary={
                              <React.Fragment>
                                <Typography
                                  variant="p"
                                >
                                  John Doe
                                </Typography>
                              </React.Fragment>
                            }
                            />
                            
                            </ListItem>
                            {/* 2 */}
                            <ListItem>
                            <ListItemText
                              primary="Card number"
                              className={classes.cli}
                              secondary={
                              <React.Fragment>
                                <Typography
                                  variant="p"
                                >
                                  **** 1111
                                </Typography>
                              </React.Fragment>
                            }
                            />
                            
                            </ListItem>
                            {/* 3 */}
                            <ListItem>
                            <ListItemText
                              primary="Country"
                              className={classes.cli}
                              secondary={
                              <React.Fragment>
                                <Typography
                                  variant="p"
                                >
                                  Germany
                                </Typography>
                              </React.Fragment>
                            }
                            />
                            </ListItem>
                            {/* 4 */}
                            <ListItem>
                            <ListItemText
                              primary="Zip / Postal code"
                              className={classes.cli}
                              secondary={
                              <React.Fragment>
                                <Typography
                                  variant="p"
                                >
                                  667123
                                </Typography>
                              </React.Fragment>
                            }
                            />
                            
                            </ListItem>
                          </List>

                        </Box>
                        <Box display="flex" alignItems='center' marginTop="24px"marginBottom="32px">
                          <Typography variant="p">
                            We cannot refund once you purchased a subscription, but you can always
                          </Typography>
                          <Box marginLeft="5px">
                          <Typography>
                          <Link href="#" onClick={preventDefault} underline='none'>
                            cancel
                          </Link>
                          </Typography></Box>
                        </Box>
                        <Box display="flex" justifyContent="flex-end">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Upgrade Plan
                        </Button>
                        </Box>
                      </CardContent>
                    </Paper>
                    <Paper className={classes.paper}>
                      <CardContent >
                        <div>
                          <Typography variant="h6">Invoice history</Typography>
                          <Typography variant="body2">
                            You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below.
                          </Typography>
                        </div>
                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                          <TableRow className={classes.colorb}>
                              <TableCell>Date</TableCell>
                              <TableCell align="left">Total (incl. tax) </TableCell>
                              <TableCell align="right"></TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {rows.map((row) => (
                              <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                  {row.name}
                              </TableCell>
                              <TableCell align="left">{row.calories}</TableCell>
                              <TableCell align="right">
                                <Typography>
                                  <Link href="#" onClick={preventDefault}underline='always' >
                                  View Invoice
                                  </Link>
                                </Typography>
                              </TableCell>
                              
                              </TableRow>
                          ))}
                        </TableBody>
                  </Table>
                      </CardContent>
                    </Paper>
                    </TabPanel>
                    {/* 3 tap */}
                    <TabPanel value={value} index={2}>
                    <Paper className={classes.paper}>
                      <CardContent >
                        <div>
                          <Typography variant="h6">Invite members</Typography>
                          <Typography variant="p">You currently pay for 2 Editor Seats.</Typography>
                        </div>
                        <Divider className={classes.hr} />
                        <Box display="flex">
                        <FormControl fullWidth  variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-amount">Email address</InputLabel>
                          <OutlinedInput
                            placeholder="Add multiple addresses separated by commas"
                            startAdornment={<InputAdornment position="start"><MailIcon fontSize="small" /></InputAdornment>}
                            labelWidth={100}
                          />
                        </FormControl>
                        <Button
                          variant="contained"
                          color="primary"
                        >
                          Send Invite
                        </Button>
                        </Box>

                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                          <TableRow className={classes.colorb}>
                              <TableCell>Member</TableCell>
                              <TableCell align="left">Role</TableCell>
                              <TableCell align="right"></TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {rows2.map((row) => (
                              <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                  <Box dispaly="flex" alignItems="center">
                                    <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
                                    <div>
                                      <Typography variant="h6">Cao Yu</Typography>
                                      <Typography variant="p">cao.yu@devias.io</Typography>
                                    </div>
                                  </Box>
                              </TableCell>
                              <TableCell align="left">{row.calories}</TableCell>
                              
                              <TableCell align="right">
                                <MoreHorizIcon />
                              </TableCell>
                              
                              </TableRow>
                          ))}
                        </TableBody>
                  </Table>
                      </CardContent>
                    </Paper>
                     
                    </TabPanel>
                    {/* 4 tap */}
                    <TabPanel value={value} index={3}>
                    <Paper className={classes.paper}>
                      <CardContent paddingLeft="24px">
                      <Grid container spacing={6} className={classes.root33}>
                        <Grid item xs={12}  md={4} className={classes.title} >
                          <Typography 
                            variant="h6" 
                            component="h6"  
                          >
                            Email
                          </Typography>

                        </Grid>
                        <Grid item xs={12}  md={8} className={classes.title} >
                          <Box display="flex" alignItems="center" marginRight="24px" marginBottom="20px"justifyContent="space-between">
                            <div>
                              <Typography 
                                variant="h6" 
                                component="h6"  
                                >
                                  Product updates
                              </Typography>
                              <Typography 
                                variant="p" 
                                component="p"  
                                >
                                  News, announcements, and product updates.
                              </Typography>
                            </div>
                            <Switch
                              checked={state.checkedA}
                              onChange={handleChange2}
                              color="primary"
                              name="checkedA"
                              inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                          </Box>
                          <Divider />
                          <Box display="flex" alignItems="center" marginRight="24px" marginTop="20px"marginBottom="20px" justifyContent="space-between">
                            <div>
                              <Typography 
                                variant="h6" 
                                component="h6"  
                                >
                                  Security updates
                              </Typography>
                              <Typography 
                                  variant="p" 
                                  component="p"  
                                >
                                  Important notifications about your account security.
                              </Typography>
                            </div>
                            <Switch
                              checked={state.checkedB}
                              onChange={handleChange2}
                              color="primary"
                              name="checkedB"
                              inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      <Divider />
                      <Grid container spacing={6} className={classes.root33}>
                          <Grid item xs={12}  md={4} className={classes.title} >
                            <Typography 
                              variant="h6" 
                              component="h6"  
                            >
                              Phone notifications
                            </Typography>

                          </Grid>
                          <Grid item xs={12}  md={8} className={classes.title} >
                          <Box display="flex" alignItems="center" marginRight="24px" marginBottom="20px"justifyContent="space-between">
                            <div>
                              <Typography 
                                variant="h6" 
                                component="h6"  
                                >
                                  Product updates
                              </Typography>
                              <Typography 
                                variant="p" 
                                component="p"  
                                >
                                  News, announcements, and product updates.
                              </Typography>
                            </div>
                            <Switch
                              checked={state.checkedA}
                              onChange={handleChange2}
                              color="primary"
                              name="checkedA"
                              inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      </CardContent>
                    </Paper>
                    </TabPanel>
                    {/* 5 tap */}
                    <TabPanel value={value} index={4}>
                    <Paper className={classes.paper}>
                      <CardContent >
                        <Grid container spacing={3} className="dic" >
                          <Box display="flex" alignItems="center">
                          <Grid item xs={12} md={4}>
                            <Typography variant="h6">
                              Change password
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={8}>
                            <Box display="flex" alignItems="center">
                              
                              <FormControl fullWidth  variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Email address</InputLabel>
                                <OutlinedInput
                                  type="password"
                                  placeholder="*******************"
                                  startAdornment={<InputAdornment position="start"><VpnKeyIcon fontSize="small" /></InputAdornment>}
                                  labelWidth={100}
                                />
                          </FormControl>
                          <Button color="primary">Edit</Button>
                            </Box>
                          </Grid>
                          </Box>
                        </Grid>
                      </CardContent>
                    </Paper>
                    <Paper className={classes.paper}>
                      <CardContent >
                       <Typography variant="h6">Multi Factor Authentication</Typography>
                       <Box display="flex">
                         <Grid container spacing={3}>
                           <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                              <CardContent >
                               <Box display="block" position="relative" marginLeft="20px">
                                 <Box className={classes.point}>
                                  <Typography variant="p" color="error">
                                    Off
                                  </Typography>
                                 </Box>
                               </Box>
                                <Typography variant="h6">
                                 Authenticator App
                                </Typography> 
                                <Typography variant="p">
                                Use an authenticator app to generate one time security codes.
                                </Typography>
                                <Box>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.padding}
                                  endIcon={<ArrowForwardIcon fontSize="small" />}
                                >
                                  Set Up
                                </Button>
                                </Box> 
                              </CardContent>
                            </Paper>
                           </Grid>
                           <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <CardContent >
                                <Box display="block" position="relative" marginLeft="20px">
                                  <Box className={classes.point}>
                                    <Typography variant="p" color="error">
                                      Off
                                    </Typography>
                                  </Box>
                                </Box>
                                  <Typography variant="h6">
                                  Authenticator App
                                  </Typography> 
                                  <Typography variant="p">
                                  Use an authenticator app to generate one time security codes.
                                  </Typography>
                                  <Box>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.padding}
                                    endIcon={<ArrowForwardIcon fontSize="small" />}
                                  >
                                    Set Up
                                  </Button>
                                  </Box> 
                                </CardContent>
                              </Paper>
                           </Grid>

                         </Grid>
                       </Box>
                      
                      </CardContent>
                    </Paper>
                    <Paper className={classes.paper}>
                      <CardContent >
                        <div>
                          <Typography variant="h6">Invoice history</Typography>
                          <Typography variant="body2">
                            You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below.
                          </Typography>
                        </div>
                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                          <TableRow className={classes.colorb}>
                              <TableCell>Login type</TableCell>
                              <TableCell align="left">IP Address</TableCell>
                              <TableCell align="left">Client</TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {rows3.map((row) => (
                              <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                <Typography variant="h6">Credentials login</Typography>
                                <Typography variant="p">on 10:40 AM 2021/09/01</Typography>
                              </TableCell>
                              <TableCell align="left">95.130.17.84</TableCell>
                              <TableCell align="left">
                               Chrome, Mac OS 10.15.7
                              </TableCell>
                              
                              </TableRow>
                          ))}
                        </TableBody>
                  </Table>
                      </CardContent>
                    </Paper>
                    </TabPanel>
                </Box>
            
            
            </div>
        </Container>
    )
}
