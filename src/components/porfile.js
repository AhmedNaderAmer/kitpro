import React from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Box, Container,Button,Avatar,Link, Divider, Grid, Paper, Card, CardContent,TextField  } from '@material-ui/core';
import '../App2.css';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { Typography } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SmsIcon from '@material-ui/icons/Sms';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import '../App3.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';



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
        marginTop:10,
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
        width:1200,
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

        },
        media: {
            height:500,
            width: 925, 
          },
      }


  }));

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
function Porfile() {


const [value, setValue] = React.useState(0);
const handleChange = (event, newValue) => {
    setValue(newValue);
};
const classes = useStyles();


    return (
        <React.Fragment>
        <Container className={classes.colorb} fixed>
            <Box className="cover" >
                <Button
                variant="contained"
                className="btn"
                startIcon={<AddPhotoAlternateIcon />}
                >
                Change Cover
                </Button>
            </Box>
            <Box display="flex" alignItems="center" marginTop="40px" flexWrap="wrap">
            <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
            <Box marginLeft="16px">
                <Typography variant="body1">Product Designer</Typography>
                <Typography variant="h6">Anika Visser</Typography>
            </Box>
            <Box flexGrow="1"></Box>
            <Box display="flex" alignItems="center" className="none">
                <Button
                className="marg"
                variant="outlined"
                color="primary"
                startIcon={<PersonAddIcon />}
                >
                Connect
                </Button>
                <Typography>
                    <Button variant="contained" color="primary" startIcon={<SmsIcon />}>
                        <Link href="#" className="linkcolor">
                            Send Massage
                        </Link>
                    </Button>
                </Typography>
            </Box>                
            <Button className="marg" startIcon={<MoreHorizIcon />}></Button>
            </Box>


            
        </Container>
        <Box>
            <Container>
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
                            label="Timeline" {...a11yProps(0)} 
                        />
                        <Tab 
                            classes={{
                                wrapper: classes.wrapper,
                                root: classes.root,
                            }}
                            label="Connection" {...a11yProps(1)} 
                        />
                    </Tabs>
                    <Divider />
                    <Box marginTop="32px" marginBottom="32px">
                        <TabPanel value={value} index={0}>
                            <Grid container spacing={4}>
                                <Grid item sx={12} lg={4} className="flexbasis">
                                    <Paper>
                                        <CardContent>
                                            <Box >
                                               <Box>
                                                   <Typography variant="h6">Profile Progress</Typography>
                                               </Box>
                                               <Divider className={classes.hr} />
                                               <Box>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                    <Box marginTop='16px'>
                                                        <Typography variant="body2">
                                                            50% Set Up Complete
                                                        </Typography>
                                                    </Box>
                                               </Box>
                                            </Box>
                                        </CardContent>
                                    </Paper>

                                    <Box marginTop="24px">
                                        <Paper>
                                        <CardContent>
                                            <Box >
                                               <Box>
                                                   <Typography variant="h6">About</Typography>
                                               </Box>
                                               <Divider className={classes.hr} />
                                               <Box>
                                                    <CardContent className="colm">
                                                        <Typography variant="subtitle2">
                                                            "Everyone thinks of changing the world, but no one thinks of changing himself."
                                                        </Typography>
                                                        <List>
                                                            {/* 1 */}
                                                            <ListItem >
                                                             <ListItemIcon>
                                                                <BusinessCenterIcon />
                                                                </ListItemIcon>
                                                             <ListItemText
                                                                primary={
                                                                    <React.Fragment>
                                                                    <Typography >
                                                                        <Typography variant="body2">
                                                                           <Link href="#">
                                                                            Anika Visser
                                                                        </Link>  Updated her status
                                                                    </Typography>
                                                                    </Typography>
                                                                    <Typography variant="body2">
                                                                            Updated her status
                                                                            <Link href="#">
                                                                            Anika Visser
                                                                        </Link>
                                                                    </Typography>
                                                                    
                                                                    </React.Fragment>
                                                                }
                                                                />
                                                            </ListItem>
                                                            {/* 2 */}
                                                            <ListItem >
                                                             <ListItemIcon>
                                                                <BusinessCenterIcon />
                                                                </ListItemIcon>
                                                             <ListItemText
                                                                primary={
                                                                    <React.Fragment>
                                                                    <Typography variant="body2">
                                                                          Updated her status
                                                                    </Typography>
                                                                    </React.Fragment>
                                                                }
                                                                />
                                                            </ListItem>
                                                            {/* 3 */}
                                                            <ListItem >
                                                             <ListItemIcon>
                                                                <BusinessCenterIcon />
                                                                </ListItemIcon>
                                                             <ListItemText
                                                                primary={
                                                                    <React.Fragment>
                                                                    <Typography >
                                                                        <Typography variant="body2">
                                                                           <Link href="#">
                                                                            Anika Visser
                                                                        </Link>  Updated her status
                                                                    </Typography>
                                                                    </Typography>
                                                                    <Typography variant="body2">
                                                                            Updated her status
                                                                            <Link href="#">
                                                                            Anika Visser
                                                                        </Link>
                                                                    </Typography>
                                                                    
                                                                    </React.Fragment>
                                                                }
                                                                />
                                                            </ListItem>
                                                            {/* 4 */}
                                                            <ListItem >
                                                             <ListItemIcon>
                                                                <BusinessCenterIcon />
                                                                </ListItemIcon>
                                                             <ListItemText
                                                                primary={
                                                                    <React.Fragment>
                                                                        <Typography variant="body2">
                                                                            Updated her status
                                                                        </Typography>
                                                                    </React.Fragment>
                                                                }
                                                                />
                                                            </ListItem>
                                                        </List>
                                                    </CardContent>
                                               </Box>
                                            </Box>
                                        </CardContent>
                                        </Paper>

                                    </Box>
                                </Grid>
                                <Grid item sx={12} lg={8} className="flexbasis">
                                    <Paper>
                                        <CardContent className="flex">
                                            <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
                                             <Box flexGrow="1">
                                             <TextField
                                                size="medium"
                                                fullWidth
                                                id="outlined-required"
                                                placeholder="What's on your mind"
                                                variant="outlined"
                                                height="102px"
                                                />
                                                <Box className="flexb"> 
                                                    <Box dispaly="block">
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                    </Box>
                                                    <Button
                                                     color="primary"
                                                     variant="contained"
                                                    >
                                                    <SmsIcon fontSize="small" />
                                                    </Button>
                                                </Box>
                                             </Box>
                                        </CardContent>
                                    </Paper>
                                    <Box marginTop="24px">
                                        <Paper>
                                            <Box className="bheader">
                                                <Box display="flex" marginRight="16px">
                                                    <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
                                                </Box>
                                                <Box>
                                                    <Box>
                                                        <Typography >
                                                            <Link href="#">
                                                                Anika Visser
                                                            </Link>
                                                              Updated her status
                                                        </Typography>
                                                    </Box>
                                                    <Box display="flex" alignItems="center" marginTop="10px">
                                                        <AccessAlarmIcon fontSize="small" />
                                                        <Typography variant="body2">
                                                          4 hours ago
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="paddingbox">
                                                <Typography variant="p">
                                                Just made this overview screen for a project, what-cha thinkin?
                                                </Typography>
                                                <Box marginTop="24px" >
                                                    <ButtonBase className="width">
                                                        <CardMedia
                                                            className="media"
                                                            image="/post_1.png"
                                                            title="Paella dish"
                                                        />
                                                    </ButtonBase>
                                                    <Box display="flex" alignItems="center" marginTop="16px">
                                                        <Button className="love">
                                                            <FavoriteIcon fontSize="small" />
                                                        </Button>
                                                        <Typography variant="h6">24</Typography>
                                                        <Box flexGrow="1"></Box>
                                                        <Button color="primary">
                                                            <ShareIcon fontSize="small" />
                                                        </Button>
                                                    </Box>
                                                    <Divider className={classes.hr} />
                                                    <Box display="flex" marginTop="24px">
                                                       <Avatar className={classes.pos}  alt="Remy Sharp" src="/avatar-1.png" />
                                                       <Box className="chats">
                                                           <Box display="flex" alignItems="center" marginBottom="8px">
                                                               <Typography variant="subtitle2">
                                                                    <Link href="#">
                                                                    Jie Yan Song
                                                                    </Link>
                                                               </Typography>
                                                               <Box flexGrow="1"></Box>
                                                               <Typography variant="body2">
                                                                    3 hours ago
                                                               </Typography>
                                                           </Box>
                                                           <Typography variant="body2">
                                                           Could use some more statistics, but that’s me haha
                                                           </Typography>
                                                       </Box>
                                                    </Box>
                                                    <Box display="flex" marginTop="24px">
                                                       <Avatar className={classes.pos}  alt="Remy Sharp" src="/avatar-1.png" />
                                                       <Box className="chats">
                                                           <Box display="flex" alignItems="center" marginBottom="8px">
                                                               <Typography variant="subtitle2">
                                                                    <Link href="#">
                                                                    Jie Yan Song
                                                                    </Link>
                                                               </Typography>
                                                               <Box flexGrow="1"></Box>
                                                               <Typography variant="body2">
                                                                    2 hours ago
                                                               </Typography>
                                                           </Box>
                                                           <Typography variant="body2">
                                                           Could use some more statistics, but that’s me haha
                                                           </Typography>
                                                       </Box>
                                                    </Box>
                                                    <Divider className={classes.hr} />
                                                    <CardContent className="flex">
                                                        <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
                                                        <Box flexGrow="1">
                                                        <TextField
                                                            size="medium"
                                                            fullWidth
                                                            id="outlined-required"
                                                            placeholder="What's on your mind"
                                                            variant="outlined"
                                                            height="102px"
                                                            />
                                                            <Box className="flexb"> 
                                                                <Box dispaly="block">
                                                                    <Button className="btn2">
                                                                        <SmsIcon fontSize="small" />
                                                                    </Button>
                                                                    <Button className="btn2">
                                                                        <SmsIcon fontSize="small" />
                                                                    </Button>
                                                                    <Button className="btn2">
                                                                        <SmsIcon fontSize="small" />
                                                                    </Button>
                                                                    <Button className="btn2">
                                                                        <SmsIcon fontSize="small" />
                                                                    </Button>
                                                                </Box>
                                                                <Button
                                                                color="primary"
                                                                variant="contained"
                                                                >
                                                                <SmsIcon fontSize="small" />
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </CardContent>
                                                </Box>
                                            </Box>
                                        </Paper>
                                        <Box marginTop="24px">
                                            <Paper>
                                                <Box className="bheader">
                                                    <Box display="flex" marginRight="16px">
                                                        <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
                                                    </Box>
                                                    <Box>
                                                        <Box>
                                                            <Typography >
                                                                <Link href="#">
                                                                    Anika Visser
                                                                </Link>
                                                                Updated her status
                                                            </Typography>
                                                        </Box>
                                                        <Box display="flex" alignItems="center" marginTop="10px">
                                                            <AccessAlarmIcon fontSize="small" />
                                                            <Typography variant="body2">
                                                            4 hours ago
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box className="paddingbox1">
                                                    <Typography variant="body1">
                                                    As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.
                                                    </Typography>
                                                    <Box display="flex" alignItems="center" marginTop="16px">
                                                        <Button className="love">
                                                            <FavoriteIcon fontSize="small" />
                                                        </Button>
                                                        <Typography variant="h6">65</Typography>
                                                        <Box flexGrow="1"></Box>
                                                        <Button color="primary">
                                                            <ShareIcon fontSize="small" />
                                                        </Button>
                                                    </Box>
                                                    <Divider className={classes.hr} />
                                                    <Box display="flex" marginTop="24px">
                                                       <Avatar className={classes.pos}  alt="Remy Sharp" src="/avatar-1.png" />
                                                       <Box className="chats">
                                                           <Box display="flex" alignItems="center" marginBottom="8px">
                                                               <Typography variant="subtitle2">
                                                                    <Link href="#">
                                                                    Jie Yan Song
                                                                    </Link>
                                                               </Typography>
                                                               <Box flexGrow="1"></Box>
                                                               <Typography variant="body2">
                                                                    2 hours ago
                                                               </Typography>
                                                           </Box>
                                                           <Typography variant="body2">
                                                           Could use some more statistics, but that’s me haha
                                                           </Typography>
                                                       </Box>
                                                    </Box>
                                                    <Box display="flex" marginTop="24px">
                                                       <Avatar className={classes.pos}  alt="Remy Sharp" src="/avatar-1.png" />
                                                       <Box className="chats">
                                                           <Box display="flex" alignItems="center" marginBottom="8px">
                                                               <Typography variant="subtitle2">
                                                                    <Link href="#">
                                                                    Jie Yan Song
                                                                    </Link>
                                                               </Typography>
                                                               <Box flexGrow="1"></Box>
                                                               <Typography variant="body2">
                                                                    2 hours ago
                                                               </Typography>
                                                           </Box>
                                                           <Typography variant="body2">
                                                           Could use some more statistics, but that’s me haha
                                                           </Typography>
                                                       </Box>
                                                    </Box>
                                                    <Divider className={classes.hr} />
                                                    <CardContent className="flex">
                                            <Avatar className={classes.pos}  alt="Remy Sharp" src="/gh.png" />
                                             <Box flexGrow="1">
                                             <TextField
                                                size="medium"
                                                fullWidth
                                                id="outlined-required"
                                                placeholder="What's on your mind"
                                                variant="outlined"
                                                height="102px"
                                                />
                                                <Box className="flexb"> 
                                                    <Box dispaly="block">
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                        <Button className="btn2">
                                                            <SmsIcon fontSize="small" />
                                                        </Button>
                                                    </Box>
                                                    <Button
                                                     color="primary"
                                                     variant="contained"
                                                    >
                                                    <SmsIcon fontSize="small" />
                                                    </Button>
                                                </Box>
                                             </Box>
                                        </CardContent>
                                                </Box>
                                            </Paper>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Grid>
                        </TabPanel>

                    </Box>
            </Container>
        </Box>
        </React.Fragment>
    )
}

export default Porfile
