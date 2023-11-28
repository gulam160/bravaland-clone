import Image from "next/image";
import React from "react";
import logo from "@/public/assets/chat.svg";

const ChatModal = () => {
  return (
    <div className="fixed bottom-5 right-6 z-50 cursor-pointer">
      <Image
        src={logo}
        alt="chat-with-us"
        width={60}
        height={60}
        className="bg-secondary p-1 rounded-full"
      />
    </div>
  );
};

export default ChatModal;
