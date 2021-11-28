import React,{useState} from 'react';
import { Container, Divider, Grid, Typography,Avater } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box,Button,Paper,Avatar,List,ListItem,ListItemText } from '@material-ui/core';
import SimCardIcon from '@material-ui/icons/SimCard';
import "../App2.css";
import GetAppIcon from '@material-ui/icons/GetApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ReactApexChart from 'react-apexcharts'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';


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
        maxWidth:"100%",
        width:259,
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
        padding:24
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
        width:452
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
      hr2:{
        
      },
      cbox:{
        // border:"1px solid rgb(230,232,240)",
        // borderRadius:8,
        // marginTop:24

      },
      cli:{
        display:'flex',
        borderBottom:"1px solid rgb(230,232,240)",
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
        bc1:{
            color:'rgb(209, 67, 67)' ,
            backgroundColor:'rgba(209, 67, 67, 0.1)',
        }
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
  
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rows2 = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
  ];

function Logistics() {

    const [state, setStaet] = useState({
        series: [38, 50, 12],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                
                
              }
            }
          },
          labels: ['On route', 'Available', 'Out of service'],
        },
      })
      const [state1, setStaet1] = useState({
        series: [85],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '60%',
              }
            },
          },
          colors: [
              "#4caf50",
          ],
          labels: ['Health'],
        },
      }) 
      const [state2, setStaet2] = useState({
        series: [10],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '60%',
              }
            },
          },
          colors: [
            "#ff9800",
        ],
          labels: ['Health'],
        },
      })          
      const [state3, setStaet3] = useState({
        series: [5],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '60%',
              }
            },
          },
          colors: [
            "#f44336",
        ],
          labels: ['Health'],
        },
      })     
const classes = useStyles();

    return (
        <Container className={classes.colorb} fixed>
            <Box>
                <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h4" color="primary" >Logistics</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            startIcon={<SimCardIcon />}
                        >
                            Reports
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            startIcon={<SettingsIcon />}
                        >
                        Settings
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<GetAppIcon />}
                            >
                            Export
                        </Button>
                    </Grid>
                </Grid>
            </Box>
             <Grid container spacing={4} >
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <Box display="flex" alignItems="center" marginBottom="8px">
                                <Avatar variant="circle">
                                    <Box>
                                        <Box></Box>
                                    </Box>
                                </Avatar>
                                <Typography variant="h5">38</Typography>
                            </Box>
                            <Typography variant="p">On route vehicles</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <Box display="flex" alignItems="center" marginBottom="8px">
                                    <Box ><SimCardIcon  /></Box>
                                <Typography variant="h5">2</Typography>
                            </Box>
                            <Typography variant="p">Vehicles with errors</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <Box display="flex" alignItems="center" marginBottom="8px">
                                <Box ><SimCardIcon  /></Box>
                                <Typography variant="h5">1</Typography>
                            </Box>
                            <Typography variant="p">Vehicles deviated from route</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <Box display="flex" alignItems="center" marginBottom="8px">
                                <Box ><SimCardIcon  /></Box>
                                <Typography variant="h5">2</Typography>
                            </Box>
                            <Typography variant="p">Late vehicles</Typography>
                        </Paper>
                    </Grid>
             </Grid>
             <Box marginTop="32px">
                 <Grid container spacing={4}>
                     <Grid item xs={12}>
                         <Paper className={classes.paper}>
                            <Typography variant="h6">Total Vehicles</Typography>
                            <Divider className={classes.hr} />
                            <Grid container spacing={3} >
                                <Grid item xs={12} md={6}>
                                    <ReactApexChart 
                                    options={state.options} 
                                    series={state.series} 
                                    type="radialBar" 
                                    height={350} 
                                    className={classes.mwidth}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <Typography variant="p">Total</Typography>
                                    <Typography variant="h5">100</Typography>
                                    <Divider className={classes.hr2} />
                                    <Box className={classes.cbox}>
                                        <List>
                                            {/* 1 */}
                                            <ListItem>
                                            <ListItemText
                                            primary={
                                                <React.Fragment>
                                                    <Box display="flex" alignItems="center">
                                                        <Typography
                                                        variant="h6"
                                                        >
                                                        John Doe
                                                        </Typography>
                                                    </Box>
                                            </React.Fragment>
                                             }
                                            className={classes.cli}
                                            secondary={
                                                <React.Fragment>
                                                <Box display="flex" alignItems="center" justifyContent="end">
                                                        <Typography
                                                         variant="h6"
                                                        >
                                                        38
                                                        </Typography>
                                                    </Box>
                                            </React.Fragment>
                                            }
                                            />
                                            
                                            </ListItem>
                                            {/* 2 */}
                                            <ListItem>
                                            <ListItemText
                                            primary={
                                                <React.Fragment>
                                                    <Box display="flex" alignItems="center">
                                                        <Typography
                                                        variant="h6"
                                                        >
                                                        John Doe
                                                        </Typography>
                                                    </Box>
                                            </React.Fragment>
                                             }
                                            className={classes.cli}
                                            secondary={
                                                <React.Fragment>
                                                <Box display="flex" alignItems="center" justifyContent="end">
                                                        <Typography
                                                         variant="h6"
                                                        >
                                                        50
                                                        </Typography>
                                                    </Box>
                                            </React.Fragment>
                                            }
                                            />
                                            
                                            </ListItem>
                                            {/* 3 */}
                                            <ListItem>
                                            <ListItemText
                                            primary={
                                                <React.Fragment>
                                                    <Box display="flex" alignItems="center">
                                                        <Typography
                                                         variant="h6"
                                                        >
                                                        John Doe
                                                        </Typography>
                                                    </Box>
                                            </React.Fragment>
                                             }
                                            className={classes.cli}
                                            secondary={
                                            <React.Fragment>
                                                <Box display="flex" alignItems="center" justifyContent="end">                                                        <Typography
                                                         variant="h6"
                                                        >
                                                        12
                                                        </Typography>
                                                    </Box>
                                            </React.Fragment>
                                            }
                                            />
                                            </ListItem>
                                        </List>

                                    </Box>

                                </Grid>
                            </Grid>
                             
                         </Paper>
                     </Grid>
                     <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6">Vehicles Condition</Typography>
                            <Divider className={classes.hr} />
                            <Grid container spacing={3}>
                                <Grid item sx={12} md={4}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h6" color="textPrimary" className="h6-1">Very good</Typography>
                                        <ReactApexChart 
                                        options={state1.options} 
                                        series={state1.series} 
                                        type="radialBar" 
                                        height={178} 
                                        className={classes.rwidth} />
                                        <Typography variant="h6" color="textPrimary" className="h6-4">85</Typography>
                                        <Typography variant="h6" color="textPrimary" className="h6-4">Excellent</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item sx={12} md={4}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h6" color="textPrimary" className="h6-2">Good</Typography>
                                        <ReactApexChart 
                                        options={state2.options} 
                                        series={state2.series} 
                                        type="radialBar" 
                                        height={178} 
                                        className={classes.rwidth} />
                                        <Typography variant="h6" color="textPrimary" className="h6-4">10</Typography>
                                        <Typography variant="h6" color="textPrimary" className="h6-4">Good condition</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item sx={12} md={4}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h6" color="textPrimary" className="h6-3">Needs attention</Typography>
                                        <ReactApexChart 
                                        options={state3.options} 
                                        series={state3.series} 
                                        type="radialBar" 
                                        height={178} 
                                        className={classes.rwidth}/>
                                        <Typography variant="h6" color="textPrimary" className="h6-4">5</Typography>
                                        <Typography variant="h6" color="textPrimary" className="h6-4">Needs attention</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                     </Grid>
                     <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6">On Route Vehicles</Typography>
                            <Typography variant="body1">Condition and temperature</Typography>
                            <Box>
                                <Box>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Location</TableCell>
                                                <TableCell align="left">Ending Route</TableCell>
                                                <TableCell align="left">Starting Route</TableCell>
                                                <TableCell align="left">Warnings</TableCell>
                                                <TableCell align="right">Refrigerator Temperature</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                                <TableRow hover role="checkbox" tabIndex={-1}>
                                                    <TableCell align="left">
                                                        <Box display="flex" alignItmes="center">
                                                            <Avatar  variant="circular" className="avcolor">
                                                                <LocalShippingIcon />
                                                            </Avatar>
                                                            <Typography variant="h6">VOL-653CD1</Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">
                                                    <Chip color="primary" size="small" label="No warnings" />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                    </TableCell>

                                                </TableRow>
                                                <TableRow hover role="checkbox" tabIndex={-1}>
                                                    <TableCell align="left">
                                                        <Box display="flex" alignItmes="center">
                                                            <Avatar  variant="circular" className="avcolor">
                                                                <LocalShippingIcon />
                                                            </Avatar>
                                                            <Typography variant="h6">VOL-653CD2</Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">
                                                    <Chip color="primary" size="small" label="Temperature not optimal" />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                    </TableCell>

                                                </TableRow>
                                                <TableRow hover role="checkbox" tabIndex={-1}>
                                                    <TableCell align="left">
                                                        <Box display="flex" alignItmes="center">
                                                            <Avatar  variant="circular" className="avcolor">
                                                                <LocalShippingIcon />
                                                            </Avatar>
                                                            <Typography variant="h6">VOL-653CD3</Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">
                                                    <Chip color="secondary" size="small" label="ECU not responding" />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                    </TableCell>

                                                </TableRow>
                                                <TableRow hover role="checkbox" tabIndex={-1}>
                                                    <TableCell align="left">
                                                        <Box display="flex" alignItmes="center">
                                                            <Avatar  variant="circular" className="avcolor">
                                                                <LocalShippingIcon />
                                                            </Avatar>
                                                            <Typography variant="h6">VOL-653CD4</Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">Cleveland, Ohio, USA</TableCell>
                                                    <TableCell align="left">
                                                    <Chip color="secondary" size="small" label="NO warnings" />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                    </TableCell>

                                                </TableRow>

                                        </TableBody>
                                    </Table>
                                </Box>
                            </Box>
                            
                            

                        </Paper>
                     </Grid>
                 </Grid>
             </Box>
        </Container>
    )
}

export default Logistics;
