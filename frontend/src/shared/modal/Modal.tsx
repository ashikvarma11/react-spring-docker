import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/modal";
import EmployeeDetails from "../../components/EmployeeDetails";


type ModalProps = {
    isOpen: boolean;
    onClose: ()=>void;
}
const CustomModal: React.FC<ModalProps> = (props,modalProps: ModalProps) => {
    return (
      <>
  
        <Modal isOpen={modalProps.isOpen} onClose={modalProps.onClose}>
          <ModalOverlay />
          <ModalContent>
           <EmployeeDetails isEdit={true} isAdd={false} callBackFn={()=>{}}/>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modalProps.onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CustomModal;