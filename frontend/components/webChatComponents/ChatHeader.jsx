import { Button } from "@heroui/react";


import { Menu, Plus, MessageSquare } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-glass-border">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" size="icon" className="glass-hover rounded-full">
            <Menu size={20} />
          </Button> */}
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <MessageSquare size={18} className="text-primary" />
            </div>
            <h1 className="text-xl font-semibold gradient-text">Care Sage</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 backdrop-blur-md rounded-full">
          <Button variant="ghost" size="icon" className="glass-hover rounded-full">
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}