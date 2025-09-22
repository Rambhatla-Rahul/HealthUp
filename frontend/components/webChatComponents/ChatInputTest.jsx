import { useEffect, useState } from "react";
import { Send, Mic, Paperclip } from "lucide-react";
import { Button, Textarea } from "@heroui/react";
import { cn } from "@/lib/utils";

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
    <div className="flex justify-center p-4 max-h-[20%] fixed w-full overflow-hidden bottom-4 items-center gap-4">
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex w-full max-w-3xl items-center transition-all duration-300 ease-in-out p-4 shadow-sm bg-gray-800/30 backdrop-blur-md no-scrollbar overflow-hidden",
          
          heightSize > 1 ? "rounded-4xl overflow-hidden" : "rounded-l-full rounded-r-full",
          "max-h-[64rem]"
        )}
      >
        <textarea
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full resize-none px-4 py-2 focus:outline-none focus:ring-0 active:outline-none active:ring-0 border-none no-scrollbar",
            heightSize > 1 ? "rounded-2xl" : "rounded-l-full rounded-r-full",
            "transition-all duration-300 overflow-hidden",
          )}
          rows={heightSize}
          placeholder="Enter your Question here?"
          disabled={isLoading}
          value={message}
        />

        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="ml-2 p-2 text-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed transition-colors duration-200 hover:text-green-500"
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
        </button>
      </form>
    </div>
  );
}
