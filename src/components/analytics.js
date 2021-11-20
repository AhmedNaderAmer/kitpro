import React,{useState} from 'react'
// import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Divider  from '@material-ui/core/Divider';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        // marginTop:10
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      root:{
          marginRight:15,
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
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
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
          maxWidth:320
      },
      colorb:{
        background: '#f9f9f9',
        maxWidth: 1040
      },
      root2: {
        minWidth: 275,
      },
      mwidth:{
        maxWidth:"60%"
      },
      mwidth2:{
        maxWidth:"39%"
      },
      table: {
        minWidth: 330,
      },

  }));
 function Analytics() {
const [state1, setStaet1] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
})



    const [state, setStaet] = useState({
        series: [{
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
          },
          title: {
            text: 'Page Statistics',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
              '10 Jan', '11 Jan', '12 Jan'
            ],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
        },
    })

    function createData(name, calories, fat) {
        return { name, calories, fat};
      }
      
      const rows = [
        createData('United States', 31,200, 40),
        createData('United Kingdom', 12,700, 47),
        createData('Russia', 10,360, 65),
        createData('Canada', 5,749, 23),
        createData('Germany', 2,932, 45),
        createData('Spain', 200, 56),

      ];
      function createData2(name, calories, fat) {
        return { name, calories, fat};
      }
      
      const rows2 = [
        createData2('United States', 31,200 , 40, 33),
        createData2('United Kingdom', 12,700 , 47, 33),
        createData2('Russia', 10,360 , 65, 33),
        createData2('Canada', 5,749 , 23, 33),
        createData2('Germany', 2,932 , 45, 33),
        createData2('Spain', 200, 56, 33),

      ];
    const classes = useStyles();
    return (
        <Container className={classes.colorb} fixed>
         
         <box display="flex" flexDirection="row"m={1} p={1} >
                
                <Box 
                p={1} display="flex" 
                flexDirection="row" 
                justifyContent="space-between" 
                alignItems="center" s
                tyle={{ backgroundColor: '#cfe8fc' }}>
                    <Box  >
                    <Typography   variant="h3">Analytics</Typography>
                    </Box>
                    <Box display="flex" m={2} >
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.root}
                        startIcon={<NoteAddIcon />}
                    >
                      Reports
                    </Button>
                    <FormControl className={classes.formControl}>
                    <InputLabel variant="outlined" shrink htmlFor="age-label-placeholder">
                      Period
                    </InputLabel>
                    <Select
                    variant="outlined"
                    value="1"
                    >
                    <option value={1}>Last Week</option>
                    <option value={10}>Last month</option>
                    <option value={20}>Last Year</option>
                    </Select>
                     </FormControl>
                     </Box>
                </Box>
        </box>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                        <div className="classes.content" >
                        
                                <Typography variant="p" className={classes.title} color="textSecondary" gutterBottom>
                                impressions
                                </Typography>
                                <Typography variant="h5" component="h2">
                                1.9M
                                </Typography>
                        </div>
                        
                        <Typography className="classes.content" >img</Typography>
                        </Box>
                        <Divider />
                    <Box display="flex" justifyContent="center" alignItems="center" className="classes.cover" m={2}>                    
                            <Button
                            color="primary"
                            
                            endIcon={<NoteAddIcon />}
                        >
                        Reports
                        </Button> </Box>
                        </Paper>
            </Grid>       
            <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                        <div className="classes.content" >
                        
                                <Typography variant="p" className={classes.title} color="textSecondary" gutterBottom>
                                impressions
                                </Typography>
                                <Typography variant="h5" component="h2">
                                1.9M
                                </Typography>
                        </div>
                        
                        <Typography className="classes.content" >img</Typography>
                        </Box>
                        <Divider />
                    <Box display="flex" justifyContent="center" alignItems="center" className="classes.cover" m={2}>                    
                            <Button
                            color="primary"
                            
                            endIcon={<NoteAddIcon />}
                        >
                        Reports
                        </Button> </Box>
                        </Paper>
            </Grid>    
            <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                        <div className="classes.content" >
                        
                                <Typography variant="p" className={classes.title} color="textSecondary" gutterBottom>
                                impressions
                                </Typography>
                                <Typography variant="h5" component="h2">
                                1.9M
                                </Typography>
                        </div>
                        
                        <Typography className="classes.content" >img</Typography>
                        </Box>
                        <Divider />
                    <Box display="flex" justifyContent="center" alignItems="center" className="classes.cover" m={2}>                    
                            <Button
                            color="primary"
                            
                            endIcon={<NoteAddIcon />}
                        >
                        Reports
                        </Button> </Box>
                        </Paper>
            </Grid>    
            <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                        <div className="classes.content" >
                        
                                <Typography variant="p" className={classes.title} color="textSecondary" gutterBottom>
                                impressions
                                </Typography>
                                <Typography variant="h5" component="h2">
                                1.9M
                                </Typography>
                        </div>
                        
                        <Typography className="classes.content" >img</Typography>
                        </Box>
                        <Divider />
                    <Box display="flex" justifyContent="center" alignItems="center" className="classes.cover" m={2}>                    
                            <Button
                            color="primary"
                            
                            endIcon={<NoteAddIcon />}
                        >
                        Reports
                        </Button> </Box>
                        </Paper>
            </Grid>    
        </Grid>
        <Box display="flex" justifyContent="space-between" marginTop='10px' marginBottom='20px'>
                <Grid container spacing={3} className={classes.mwidth}>
                <Grid item xs={12} >
                    <Card className={classes.root2}>
                        <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                        <Typography variant="h5" component="h2">
                        Traffic Sources
                        </Typography>
                        <ErrorOutlineIcon />
                        </Box>
                        <Divider></Divider>
                        <Box display="flex"justifyContent="start" alignItems="center" m={2} p={2}>
                            <Box display="flex" alignItems="center" >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Typography className={classes.content} variant="body1" component="h6">
                            Organic
                            </Typography>
                            <ErrorOutlineIcon className={classes.content} />
                            </Box>
                            <Box display="flex" alignItems="center" >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Typography className={classes.content} variant="body1" component="h2">
                            Referral
                            </Typography>
                            <ErrorOutlineIcon className={classes.content} />
                            </Box><Box display="flex" alignItems="center" >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Typography className={classes.content} variant="body1" component="h2">
                            Social Media
                            </Typography>
                            <ErrorOutlineIcon className={classes.content} />
                            </Box>
                        </Box>
                        <Box>
                            <React.Fragment>
                            <CssBaseline />
                            <Container ms>
                                    <ReactApexChart 
                                    options={state.options}
                                    series={state.series}
                                    type="line"
                                    height={400}
                                    width={634}
                                    />
                            </Container>
                            </React.Fragment></Box>
                    </Card>
                </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.mwidth2}>
                        <Grid item xs={12} >
                        <Card className={classes.root2}>
                            <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                            <Typography variant="h5" component="h2">
                            Traffic Sources
                            </Typography>
                            <ErrorOutlineIcon />
                            </Box>
                            <Divider></Divider>
                            <Box display="flex"justifyContent="start" alignItems="center" m={2} p={2}>
                            {/* <TableContainer component={Paper}> */}
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow className={classes.colorb}>
                                    <TableCell>COUNTRY</TableCell>
                                    <TableCell align="right"><Button endIcon={<ArrowDownwardIcon />}> VALUE </Button></TableCell>
                                    <TableCell align="right">SEO</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            {/* </TableContainer> */}
                                
                            </Box>
                            <Box marginLeft="25px" className="classes.cover" m={2}>                    
                                <Button
                                    color="primary"
                                    endIcon={<NoteAddIcon />}
                                >
                                Reports
                                </Button> 
                            </Box>
                        </Card>

                        </Grid>
                    </Grid>

        </Box>
        {/**/}
             <Box  display="flex"  justifyContent="space-between" marginTop='10px' marginBottom='20px' >
                <Grid container spacing={3} className={classes.mwidth}>
                            <Grid item xs={12} >
                            <Card className={classes.root2}>
                                <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                                <Typography variant="h5" component="h2">
                                Traffic Sources
                                </Typography>
                                <ErrorOutlineIcon />
                                </Box>
                                <Divider></Divider>
                                <Box display="flex"justifyContent="start" alignItems="center" m={2} p={2}>
                                {/* <TableContainer component={Paper}> */}
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                    <TableRow className={classes.colorb}>
                                        <TableCell>COUNTRY</TableCell>
                                        <TableCell align="right"><Button endIcon={<ArrowDownwardIcon />}> VALUE </Button></TableCell>
                                        <TableCell align="right">SEO</TableCell>
                                        <TableCell align="right">SEO</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows2.map((row) => (
                                        <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>

                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                {/* </TableContainer> */}
                                    
                                </Box>
                                
                            </Card>

                            </Grid>
                            
                </Grid>
                <Grid container spacing={3} className={classes.mwidth2}>
                    <Grid item xs={12}>
                    <Card className={classes.root2}>
                    <Box display="flex"justifyContent="space-between" alignItems="center" m={2} p={2}>
                        <Typography variant="h5" component="h2">
                        Traffic Sources
                        </Typography>
                        <ErrorOutlineIcon />
                        </Box>
                        <Divider />
                        <Box marginTop='40px' marginBottom="150px">
                            <ReactApexChart 
                            options={state1.options} 
                            series={state1.series} 
                            type="donut" />
                       </Box>
                    <Divider />
                    <Box marginLeft="25px" className="classes.cover" m={2}>                    
                                <Button
                                    color="primary"
                                    endIcon={<NoteAddIcon />}
                                >
                                Reports
                                </Button> 
                            </Box>
                    </Card>
                    </Grid>
                </Grid>
             </Box>

       </Container>
    );
}
export default Analytics;

