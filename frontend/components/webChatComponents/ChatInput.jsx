import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";

export function ChatInput({ onSendMessage, isLoading }) {
  const [message, setMessage] = useState("");
  const [heightSize, setHeightSize] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
      setHeightSize(1); // reset rows
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const newlineCount = (message.match(/\n|\r\n/g) || []).length;
    setHeightSize(newlineCount === 0 ? 1 : newlineCount + 1);
  }, [message]);

  return (
    <div className={
        cn(
            "flex justify-center p-4 fixed items-center gap-4 w-full bg-transparent",
            heightSize < 6 ? "max-h-[20%] bottom-4" : "max-h-[30%] bottom-4",
            "transition-all duration-300 ease-in-out"
        )
    }>
        
      
      
      {/* Form Containing the TextArea*/}
      <form className={
        cn(
            "flex w-full max-w-3xl items-center transition-all duration-300 ease-in-out px-4 shadow-sm bg-gray-600/30 backdrop-blur-md no-scrollbar overflow-hidden",
            heightSize < 6 ? "":"py-4",
            heightSize > 1 ? "rounded-4xl overflow-hidden" : "rounded-l-full rounded-r-full",
            "[box-shadow:0_12px_40px_0_hsl(0_0%_0%_/_0.4)]",
        )
      }>
        <textarea
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full rounded-2xl p-4",
            "resize-none focus:outline-none focus:ring-0 active:outline-none active:ring-0 border-none no-scrollbar",
            "max-h-[64rem]",
          )}
          rows={heightSize >6? 6:heightSize}
          placeholder="Enter your Question here?"
          disabled={isLoading}
          value={message}
        />
      </form>


      {/* Send Button */}
      <Button
        type="submit"
        disabled={!message.trim() || isLoading}
        onClickCapture={handleSubmit}
        className={
            cn(
                "ml-2 p-2 text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200 rounded-full focus:outline-none",
                "hover:-rotate-[45deg]",
                "transition-transform duration-300 ease-in-out",
            )
        }
        >
        {/* Send icon SVG */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        className="w-4 h-4"
        strokeWidth="2"
        >
        <path
            d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.837V8.694c0-.192.124-.3.35-.308l9.504-.036a.3.3 0 0 0 .147-.156.3.3 0 0 0 0-.298.3.3 0 0 0-.147-.156l-9.504-.036c-.226-.008-.35-.116-.35-.308V1.163z"
            fill="currentColor"
        ></path>
        </svg>
    </Button>
    </div>
  );
}
