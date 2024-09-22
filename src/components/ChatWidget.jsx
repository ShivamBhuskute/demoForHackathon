import React, { useState } from "react";
import { BsFillChatFill } from "react-icons/bs";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-24 right-5 z-50">
            <button
                className="bg-[#724ae8] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer transition-all duration-200"
                onClick={toggleChat}
            >
                <BsFillChatFill size={24} color="white" />
            </button>
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-md p-4 flex flex-col">
                    <h2 className="text-lg font-bold mb-2">Chatbot</h2>
                    {/* Add your chatbot content here */}
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
