import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const EditModal = ({ onClose, isOpen, profile }) => {
  return (
    <div>
      <Modal size={"3xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader
            className="w-full flex items-center justify-center 
          bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-green-500 "
          >
            <span className="text-3xl pb-10">Edit My Profile</span>
          </ModalHeader>

          <ModalBody>
            <Label titleInput={profile}>Username: </Label>
            <Label titleInput={"NickName"}>NickName: </Label>
            <Label titleInput={"Country"}>Country: </Label>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditModal;

function Label({ children, titleInput }) {
  return (
    <div className="flex gap-3 justify-center items-center pb-5">
      <label htmlFor="" className="font-semibold w-28">
        {children}
      </label>
      <input
        type="text"
        placeholder={titleInput}
        className="w-full  border-b-slate-500 border pl-2 h-10 outline-none"
      />
    </div>
  );
}
