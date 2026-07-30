import React from "react";
import { Button, Modal } from "@heroui/react";
import MakeAiVideoModal from "./Page2/TabNavigation/MakeAiVideoModal";


const ViewModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.CloseTrigger />
            <Modal.Body>
            <MakeAiVideoModal onClose={() => setIsOpen(false)} />
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" slot="close">
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ViewModal;
