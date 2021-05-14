import "./App.css";
import React, { useEffect } from "react";

import {
  Box,
  Center,
  ChakraProvider,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
const App: React.FC = () => {
  
  const [shouldUpdateList,updateState] = React.useState< any |undefined>(false);
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const afterUpdate = () => {
    forceUpdate();
  }
  return (
    <ChakraProvider>
      <Container maxW="container.xl" marginTop={10} marginBottom={20}>
        <Center>
        <Box><Text fontSize="3xl" marginBottom="10">Welcome to Employee Management</Text></Box>
        </Center>
        <Tabs variant="soft-rounded" colorScheme="green" >
        <Center>
          <TabList>
            <Tab>Employee Directory</Tab>
            <Tab>Add Employee</Tab>
          </TabList>
        </Center>
          <TabPanels>
            <TabPanel>
              <EmployeeList shouldUpdateList={shouldUpdateList}/>
            </TabPanel>
            <TabPanel>
              <EmployeeDetails isEdit={false} isAdd={true} callBackFn={afterUpdate}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </ChakraProvider>
  );
};

export default App;
