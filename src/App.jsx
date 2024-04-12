import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
} from "@chakra-ui/react";
import MyInformation from "./MyInformation";

function App() {
  return (
    <Box maxW="1200px" mx="auto">
      <Tabs variant="enclosed">
        <TabList>
          <Tab bgColor="gray.200">
            <Button as="div" colorScheme="green">
              My Information
            </Button>
          </Tab>
          <Tab>
            <Button
              as="div"
              variant="ghost"
              border="3px solid"
              borderColor="green"
            >
              Audit Tickets
            </Button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel bgColor="gray.200">
            <MyInformation />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
