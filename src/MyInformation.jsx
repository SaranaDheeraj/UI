import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import Overview from "./Overview";

const MyInformation = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>My Information Overview</Tab>
        <Tab>My Security Information</Tab>
        <Tab>My Performance Information</Tab>
      </TabList>
      <TabIndicator
        width="30px !important"
        mt="-1.5px"
        height="4px"
        bg="black"
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel>
          <Overview />
        </TabPanel>
        <TabPanel>
          <p>Security Information</p>
        </TabPanel>
        <TabPanel>
          <p>Performance Information</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MyInformation;
