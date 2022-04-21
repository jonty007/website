import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CodeSection from "./CodeSection";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        paddingTop: "30.2%", width: "98%",
        margin: "0 1%"
      }}
      className="ExamplesBoxContent"
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"

        >
          <Tab label="Non-Fungible tokens" {...a11yProps(0)} className="examples-tab" />
          <Tab label="Fungible Token" {...a11yProps(1)} className="examples-tab" />
          <Tab label="Chat" {...a11yProps(2)} className="examples-tab" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container sx={{ zIndex: 3 }} className="example-grid-wrapper">
          <Grid item xs={4} className="infoGridExample">
            <Box className="example-1-text-tab">
              How to create Non-Fungible tokens NFTs) on Bitcoin Computer
            </Box>
            <Box className="example-1-subtext-tab">
              A non-fungible token is an object that has some state. In the
              example below the entire state is stored in a single property
              state. The token has a function setState to update the state and a
              function send to assign a new owner.
            </Box>
          </Grid>
          <Grid item xs={4} className="infoGridExample">
            {/* <Box className="example-rectangle" /> */}
            <CodeSection />
          </Grid>
          <Grid item xs={4} className="infoGridExample"></Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container sx={{ zIndex: 3 }} className="example-grid-wrapper">
          <Grid item xs={4} className="infoGridExample">
            <Box className="example-1-text-tab">
              How to create Non-Fungible tokens NFTs) on Bitcoin Computer
            </Box>
            <Box className="example-1-subtext-tab">
              A non-fungible token is an object that has some state. In the
              example below the entire state is stored in a single property
              state. The token has a function setState to update the state and a
              function send to assign a new owner.
            </Box>
          </Grid>
          <Grid item xs={4} className="infoGridExample">
            {/* <Box className="example-rectangle" /> */}
            <CodeSection />
          </Grid>
          <Grid item xs={4} className="infoGridExample"></Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container sx={{ zIndex: 3 }} className="example-grid-wrapper">
          <Grid item xs={4} className="infoGridExample">
            <Box className="example-1-text-tab">
              How to create Non-Fungible tokens NFTs) on Bitcoin Computer
            </Box>
            <Box className="example-1-subtext-tab">
              A non-fungible token is an object that has some state. In the
              example below the entire state is stored in a single property
              state. The token has a function setState to update the state and a
              function send to assign a new owner.
            </Box>
          </Grid>
          <Grid item xs={4} className="infoGridExample">
            {/* <Box className="example-rectangle" /> */}
            <CodeSection />
          </Grid>
          <Grid item xs={4} className="infoGridExample"></Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}
