import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/form-control";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Center, Container } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Employee } from "../shared/types/Employee";


type Props = {
  isEdit: boolean;
  isAdd: boolean;
  currEmployee?: Employee;
  callBackFn: Function
}
const EmployeeDetails: React.FC<Props> = ({isEdit,isAdd,currEmployee,callBackFn}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [triggerMessage, setTriggerMessage] = useState<boolean>(false);
  const {register, handleSubmit, watch, formState: { errors } } = useForm<Employee>({defaultValues:currEmployee});
  const SAVED_MESSAGE = 'Saved Successfully';
  const onSubmit = (data:any) => {
    setIsLoading(true);
    const ID = currEmployee?.id;
    const URL = isEdit? `http://localhost:8080/api/employees/${ID}` : 'http://localhost:8080/api/employees';
    fetch(URL,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Accept':'*/*'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data)// body data type must match "Content-Type" header
    }).then(data=>data.json())
    .then(data=>{
      callBackFn();
      setTriggerMessage(true);
      setTimeout(()=>{
        setTriggerMessage(false);
      },2000);
      setIsLoading(false);
    })
  }
  return (
    
    <Container marginTop={10} marginBottom={20}>
      {isEdit || isAdd ? <form>
        <FormControl id="fName">
          <FormLabel>First Name</FormLabel>
          <Input type="text" {...register("firstName", { required: true })} />
        </FormControl>
        <FormControl id="lName">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" {...register("lastName", { required: true })} />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email", { required: true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} />
        </FormControl>

        <FormControl id="submit" marginTop="30" >
          <Button
          onClick={handleSubmit(onSubmit)}
            isLoading={isLoading}
            loadingText="Submitting"
            colorScheme="teal"
            variant="solid" role="button" w="100%">
            Submit
          </Button>
        </FormControl>
        <Center marginTop="20px">
        {triggerMessage && SAVED_MESSAGE}
        </Center>
      </form>
      : 
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Center>
         <Image  objectFit="cover" w="100%"src="https://bit.ly/dan-abramov" />
        </Center>
      </Box> }
    </Container>
  );
};
export default EmployeeDetails;
