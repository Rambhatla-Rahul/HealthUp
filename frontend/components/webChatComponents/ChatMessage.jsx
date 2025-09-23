
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@heroui/react";
import React from "react";
import ReactMarkdown from "react-markdown";

export function ChatMessage({ message, isUser, timestamp, isLoading }) {
  return (
    <div
      className={cn(
        "flex gap-4 chat-bubble-enter",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className="w-8 h-8">
        <div
          className={cn(
            "flex items-center justify-center w-full h-full text-xs rounded-full",
            isUser
              ? "bg-user-message text-user-foreground"
              : "text-ai-foreground"
          )}
        >
          {isUser ? <User size={16} /> : <Bot size={16} />}
        </div>
      </Avatar>
      
      <div
        className={cn(
          "max-w-[60%] rounded-2xl px-4 py-3 glass",
          isUser
            ? "bg-user-message text-user-foreground ml-12"
            : "bg-ai-message text-ai-foreground mr-12"
        )}
      >
        {isLoading ? (
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-600/30 backdrop-blur-md rounded-full animate-pulse-soft"></div>
            <div className="w-2 h-2 bg-gray-600/30 backdrop-blur-md rounded-full animate-pulse-soft" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-gray-600/30 backdrop-blur-md rounded-full animate-pulse-soft" style={{ animationDelay: "0.4s" }}></div>
          </div>
        ) : (
          <>
            {/* <p className="text-sm leading-relaxed whitespace-pre-wrap text-[#ffffff]">{message}</p> */}
            <ReactMarkdown>{message}</ReactMarkdown>
            <span className="text-xs opacity-70 mt-2 block">
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </>
        )}
      </div>
    </div>
  );
}