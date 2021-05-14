import React, { useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Employee } from "../shared/types/Employee";
import EmployeeDetails from "./EmployeeDetails";

type Props = {
  shouldUpdateList: boolean
}

type ModifyOptions = {
  isEdit: boolean;
  isAdd: boolean;
}

const EmployeeList: React.FC<Props> = ({shouldUpdateList}) => {
  const [empList, setEmpList] = React.useState<Employee[]>([]);
  const [currEmployee,setCurrEmployee] = React.useState<Employee>();
  const [refreshState, updateState] = React.useState< any |undefined>();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [modifyOptions,setModifyOptions] = React.useState<ModifyOptions>({ isEdit: false,isAdd:false})
  const NO_EMPLOYEES_MESSAGE = 'No Employees Found. Please Add an Employee';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteHandler = (emp: any) => {
    const URL = `http://localhost:8080/api/employees/${emp.id}`
    fetch(URL,{
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Accept':'*/*'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }).then(data=>data)
    .then(data=>{
      forceUpdate();
    })
  };
  React.useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then((res) => res.json())
      .then((data: Employee[]) => setEmpList(data));
  }, [refreshState,shouldUpdateList]);

  const afterUpdate = () => {
    forceUpdate();
  }
  return (
    <>
      {empList.length>0 ? <SimpleGrid minChildWidth="300px" spacingX="40px" spacingY="20px">
        {empList.map((emp: Employee, index) => {
          return (
            <Box key={index}>
              <Center>
                <Image
                  boxSize="200px"
                  marginBlock="10px"
                  borderRadius="full"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  onClick={()=>{ setCurrEmployee(emp);setModifyOptions({...modifyOptions,isEdit:false,isAdd:false}); onOpen()}}
                />
              </Center>
              <Center>
                <Text w="100" h="10" fontSize="2xl" align="center">
                  {emp.firstName} <strong>{emp.lastName}</strong>
                </Text>
              </Center>
              <Center>
                <Text fontSize="xl">{emp.email}</Text>
              </Center>
              <Center>
                <ButtonGroup marginTop="30px">
                  <Button color="black" onClick={()=>{ setCurrEmployee(emp);setModifyOptions({...modifyOptions,isEdit:true,isAdd:false}); onOpen()}}>
                    Edit
                  </Button>
                  <Button color="black" onClick={() => deleteHandler(emp)}>
                    Delete
                  </Button>
                </ButtonGroup>
              </Center>
              
            </Box>
          );
        })}
       <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <EmployeeDetails isEdit={modifyOptions.isEdit} isAdd={modifyOptions.isAdd} currEmployee={currEmployee} callBackFn={afterUpdate}/>
            <ModalFooter>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </SimpleGrid>
      : <Center marginTop="100px"><strong>{NO_EMPLOYEES_MESSAGE} </strong></Center>}
    </>
  );
};
export default EmployeeList;
