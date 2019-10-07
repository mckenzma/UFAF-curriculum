import React, { useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import StackedBarChartTotal from "./StackedBarChartTotal";
import StackedBarChartNew from "./StackedBarChartNew";
import SimpleSelect from "./SimpleSelect";
import InteractiveLists from "./List";
import DenseTable from "./Table";
import PrintButton from "./PrintButton";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabHeaderRef = useRef(null);
  const style = { top: props.headerHeight };
  const style2 = {
    marginTop:
      props.headerHeight +
      (tabHeaderRef.current ? tabHeaderRef.current.offsetHeight : 0)
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={style} ref={tabHeaderRef}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
          variant="fullWidth"
        >
          <Tab label="Curriculum" {...a11yProps(0)} />
          <Tab label="Testing" {...a11yProps(1)} />
          <Tab label="Admin" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={style2}>
        <SimpleSelect />
        <PrintButton />
        <InteractiveLists />
        <DenseTable />
      </TabPanel>
      <TabPanel value={value} index={1} style={style2}>
        <PrintButton />
      </TabPanel>
      <TabPanel value={value} index={2} style={style2}>
        <Paper>
          <StackedBarChartTotal />
        </Paper>
        <Paper>
          <StackedBarChartNew />
        </Paper>
      </TabPanel>
    </div>
  );
}
