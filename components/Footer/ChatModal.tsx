"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/chat.svg";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import SendIcon from "@mui/icons-material/Send";

const ChatModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="fixed bottom-5 right-6 z-50 cursor-pointer">
      <Image
        src={logo}
        alt="chat-with-us"
        width={60}
        height={60}
        className="bg-secondary p-1 rounded-full"
        onClick={onOpen}
      />

      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay
          backdropFilter="auto"
          backdropInvert="30%"
          backdropBlur="1px"
        />
        <ModalContent>
          <ModalHeader className="bg-secondary">
            <h1 className="text-white text-2xl mb-2">Chat with us</h1>
            <p className="text-white text-base">
              👋 Heyyo! Questions? We're happy to help!
            </p>
          </ModalHeader>
          <ModalCloseButton className="text-white" />
          <ModalBody>
            <div className="border border-secondary my-2 rounded-md">
              <textarea
                placeholder="Write message"
                rows={4}
                className="w-full py-2 px-3 outline-none rounded-md"
              />
              <button className="px-4 w-full text-right">
                <SendIcon />
              </button>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChatModal;
