import React, {useState} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ConstructOwnQuestion from "./Question/ConstructOwnQuestion";

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



function App() {
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
    });


    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const question = <Question/>
    const construvctor = <ConstructOwnQuestion/>
    return (
        <div style={{
            height: "100vh"
        }}>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="TEST" />
                    <Tab label="CREATE QUESTION"  />


                </Tabs>
                <TabPanel value={value} index={0}>
                    {question}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {construvctor}
                </TabPanel>

            </Paper>
        </div>
    );
}

export default App;
