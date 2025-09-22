"use client";
import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

import { ChevronDown } from "lucide-react";
import { Button } from "@heroui/react";

export function ChatContainer({ className }) {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      content: "Hello! I'm Health's Up, your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isAtBottom);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content) => {
    const userMessage = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your message! This is a demo response. In a real implementation, this would connect to an AI API to generate intelligent responses.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={"flex flex-col h-full relative pb-18 overflow-hidden"}>
      {/* Messages Container */}
      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-8 max-h-[100vh] no-scrollbar"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
              isLoading={false}
            />
          ))}
          
          {isLoading && (
            <ChatMessage
              message=""
              isUser={false}
              timestamp={new Date()}
              isLoading={true}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Scroll to Bottom Button */}
      {showScrollButton && (
        <Button
          onClick={scrollToBottom}
          className="absolute bottom-24 right-60 rounded-full w-12 h-12 p-0 glass glass-hover z-10 flex items-center justify-center hover:cursor-pointer"
          variant="secondary"
        >
          <ChevronDown size={20} />
        </Button>
      )}

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}