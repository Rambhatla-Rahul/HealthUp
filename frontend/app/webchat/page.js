import { ChatContainer } from '@/components/webChatComponents/ChatContainer'
import { ChatHeader } from '@/components/webChatComponents/ChatHeader'
import Image from 'next/image'
import React from 'react'

const WebChat = () => {
  return (
      <div className="flex flex-col h-[100vh] no-scrollbar relative">
      <Image
      src={`/chat-bg.webp`}
      alt='chat-background'
      fill
      className='object-cover -z-10 absolute top-0 left-0'
      priority
      />
      
        <ChatHeader />
        <ChatContainer className="flex-1" />
      
    </div>
  )
}

export default WebChat
